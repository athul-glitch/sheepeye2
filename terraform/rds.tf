resource "aws_security_group" "sheepeye2_rds_sg" {
  name        = "sheepeye2-rds-sg"
  description = "Allow PostgreSQL access only from Sheepeye EC2"
  vpc_id      = aws_vpc.sheepeye2_vpc.id

  ingress {
    description     = "PostgreSQL from Sheepeye EC2"
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [aws_security_group.sheepeye2_ec2_sg.id]
  }

  tags = {
    Name = "sheepeye2-rds-sg"
  }
}

# DB Subnet Group for Sheepeye RDS
resource "aws_db_subnet_group" "sheepeye2_db_subnet_group" {
  name        = "sheepeye2-db-subnet-group"
  description = "Private subnets for Sheepeye RDS"

  subnet_ids = [
    aws_subnet.sheepeye2_private_subnet_1.id,
    aws_subnet.sheepeye2_private_subnet_2.id
  ]

  tags = {
    Name = "sheepeye2-db-subnet-group"
  }
}
# Security Group for Sheepeye RDS PostgreSQL
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

# RDS PostgreSQL Database
resource "aws_db_instance" "sheepeye2_postgres" {
  identifier = "sheepeye2-postgres"

  engine         = "postgres"
  engine_version = "16"

  instance_class        = "db.t3.micro"
  allocated_storage     = 20
  max_allocated_storage = 20
  storage_type          = "gp3"
  storage_encrypted     = true

  db_name  = "sheepeye"
  username = "sheepeyeadmin"
  password = var.db_password

  db_subnet_group_name   = aws_db_subnet_group.sheepeye2_db_subnet_group.name
  vpc_security_group_ids = [aws_security_group.sheepeye2_rds_sg.id]

  publicly_accessible = false
  multi_az            = false

  backup_retention_period = 0
  deletion_protection     = false
  skip_final_snapshot     = true

  auto_minor_version_upgrade = true

  tags = {
    Name = "sheepeye2-postgres"
  }
}

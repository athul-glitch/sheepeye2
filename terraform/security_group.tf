resource "aws_security_group" "sheepeye2_ec2_sg" {
  name        = "sheepeye2-ec2-sg"
  description = "Security group for Sheepeye2 EC2 instance"
  vpc_id      = aws_vpc.sheepeye2_vpc.id

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    description = "Allow all outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "sheepeye2-ec2-sg"
  }
}
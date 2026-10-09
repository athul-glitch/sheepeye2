resource "aws_instance" "sheepeye2_ec2" {
  ami           = "ami-0f58b397bc5c1f2e8"
  instance_type = "t3.micro"

  key_name = "sheep2"

  subnet_id                   = aws_subnet.sheepeye2_public_subnet_1.id
  vpc_security_group_ids      = [aws_security_group.sheepeye2_ec2_sg.id]
  associate_public_ip_address = true

  iam_instance_profile = aws_iam_instance_profile.sheepeye2_ec2_profile.name

  tags = {
    Name = "sheepeye2"
  }
}
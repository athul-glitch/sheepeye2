resource "aws_internet_gateway" "sheepeye2_igw" {
  vpc_id = aws_vpc.sheepeye2_vpc.id

  tags = {
    Name = "sheepeye2-internet-gateway"
  }
}
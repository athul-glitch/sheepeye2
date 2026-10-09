resource "aws_subnet" "sheepeye2_public_subnet_1" {
  vpc_id                  = aws_vpc.sheepeye2_vpc.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "ap-south-1a"
  map_public_ip_on_launch = true

  tags = {
    Name = "sheepeye2-public-subnet-1"
  }
}

resource "aws_subnet" "sheepeye2_public_subnet_2" {
  vpc_id                  = aws_vpc.sheepeye2_vpc.id
  cidr_block              = "10.0.2.0/24"
  availability_zone       = "ap-south-1b"
  map_public_ip_on_launch = true

  tags = {
    Name = "sheepeye2-public-subnet-2"
  }
}

resource "aws_subnet" "sheepeye2_private_subnet_1" {
  vpc_id                  = aws_vpc.sheepeye2_vpc.id
  cidr_block              = "10.0.11.0/24"
  availability_zone       = "ap-south-1a"
  map_public_ip_on_launch = false

  tags = {
    Name = "sheepeye2-private-subnet-1"
  }
}

resource "aws_subnet" "sheepeye2_private_subnet_2" {
  vpc_id                  = aws_vpc.sheepeye2_vpc.id
  cidr_block              = "10.0.12.0/24"
  availability_zone       = "ap-south-1b"
  map_public_ip_on_launch = false

  tags = {
    Name = "sheepeye2-private-subnet-2"
  }
}

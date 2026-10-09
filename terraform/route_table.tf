resource "aws_route_table" "sheepeye2_public_route_table" {
  vpc_id = aws_vpc.sheepeye2_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.sheepeye2_igw.id
  }

  tags = {
    Name = "sheepeye2-public-route-table"
  }
}

resource "aws_route_table_association" "sheepeye2_public_subnet_1_association" {
  subnet_id      = aws_subnet.sheepeye2_public_subnet_1.id
  route_table_id = aws_route_table.sheepeye2_public_route_table.id
}

resource "aws_route_table_association" "sheepeye2_public_subnet_2_association" {
  subnet_id      = aws_subnet.sheepeye2_public_subnet_2.id
  route_table_id = aws_route_table.sheepeye2_public_route_table.id
}
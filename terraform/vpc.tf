resource "aws_vpc" "sheepeye2_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name = "sheepeye2-vpc"
  }
}
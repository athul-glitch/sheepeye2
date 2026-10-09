resource "aws_iam_role" "sheepeye2_ec2_role" {
  name = "sheepeye2-ec2-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Principal = {
          Service = "ec2.amazonaws.com"
        }

        Action = "sts:AssumeRole"
      }
    ]
  })

  tags = {
    Name = "sheepeye2-ec2-role"
  }
}

resource "aws_iam_role_policy_attachment" "sheepeye2_cloudwatch" {
  role       = aws_iam_role.sheepeye2_ec2_role.name
  policy_arn = "arn:aws:iam::aws:policy/CloudWatchAgentServerPolicy"
}

resource "aws_iam_role_policy_attachment" "sheepeye2_ssm" {
  role       = aws_iam_role.sheepeye2_ec2_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}
resource "aws_iam_instance_profile" "sheepeye2_ec2_profile" {
  name = "sheepeye2-ec2-profile"
  role = aws_iam_role.sheepeye2_ec2_role.name
}
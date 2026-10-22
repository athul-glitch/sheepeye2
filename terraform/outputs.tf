output "vpc_id" {
  description = "ID of the Sheepeye VPC"
  value       = aws_vpc.sheepeye2_vpc.id
}

output "ec2_instance_id" {
  description = "ID of the Sheepeye EC2 instance"
  value       = aws_instance.sheepeye2_ec2.id
}

output "ec2_public_ip" {
  description = "Public IP address of the Sheepeye EC2 instance"
  value       = aws_instance.sheepeye2_ec2.public_ip
}

output "rds_endpoint" {
  description = "Endpoint of the Sheepeye PostgreSQL database"
  value       = aws_db_instance.sheepeye2_postgres.endpoint
}

output "rds_identifier" {
  description = "Identifier of the Sheepeye PostgreSQL database"
  value       = aws_db_instance.sheepeye2_postgres.identifier
}
output "sns_topic_arn" {
  description = "ARN of the Sheepeye2 SNS notification topic"
  value       = aws_sns_topic.sheepeye_notifications.arn
}

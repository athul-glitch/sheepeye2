resource "aws_sns_topic" "sheepeye_notifications" {
  name = "sheepeye-booking"

  tags = {
    Project   = "Sheepeye2"
    ManagedBy = "Terraform"
  }
}

resource "aws_sns_topic_subscription" "email_notifications" {
  topic_arn = aws_sns_topic.sheepeye_notifications.arn
  protocol  = "email"
  endpoint  = var.notification_email
}

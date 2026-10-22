resource "aws_cloudwatch_metric_alarm" "sheepeye2_cpu_high" {
  alarm_name          = "sheepeye2-high-cpu"
  alarm_description   = "Alert when Sheepeye2 EC2 CPU utilization stays above 70%."
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EC2"
  period              = 300
  statistic           = "Average"
  threshold           = 70
  treat_missing_data  = "notBreaching"

  dimensions = {
    InstanceId = aws_instance.sheepeye2_ec2.id
  }

  alarm_actions = [
    aws_sns_topic.sheepeye_notifications.arn
  ]

  ok_actions = [
    aws_sns_topic.sheepeye_notifications.arn
  ]

  tags = {
    Project   = "Sheepeye2"
    ManagedBy = "Terraform"
  }
}

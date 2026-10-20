variable "db_password" {
  description = "Master password for the Sheepeye RDS PostgreSQL database"
  type        = string
  sensitive   = true

  validation {
    condition = (
      length(var.db_password) >= 8 &&
      length(var.db_password) <= 40 &&
      can(regex("^[A-Za-z0-9]+$", var.db_password))
    )
    error_message = "The database password must be 8-40 alphanumeric characters."
  }
}

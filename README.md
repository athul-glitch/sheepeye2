# Sheepeye — Car Wash Booking Platform

A modern car wash booking website built with **Next.js, React, and Tailwind CSS**, with AWS infrastructure and cloud services used for deployment and application operations.

## Project Overview

**Sheepeye** is a car wash booking platform created for a real-world car wash business.

The project is also used as a practical **AWS Cloud and Infrastructure portfolio project**, demonstrating application deployment, cloud networking, infrastructure as code, and AWS service integration.

## Tech Stack

### Application

* Next.js
* React
* TypeScript
* Tailwind CSS
* Node.js

### Database

* PostgreSQL
* Neon

### AWS

* Amazon EC2
* Amazon VPC
* Amazon S3
* Amazon SNS
* Amazon Route 53
* Amazon CloudWatch

### Infrastructure as Code

* Terraform

### Tools

* Git
* GitHub
* Linux
* PM2

## Architecture

```text
                    Internet
                       |
                       v
                Route 53 / DNS
                       |
                       v
                  Amazon EC2
                       |
                 Next.js App
                       |
              +--------+--------+
              |                 |
              v                 v
        Neon PostgreSQL    Amazon SNS
          Database         Notifications
```

The application runs on an Amazon EC2 instance, while DNS, notifications, monitoring, and infrastructure are managed using AWS services.

## AWS Infrastructure

The project includes AWS infrastructure such as:

* Custom VPC
* Public subnet
* Internet Gateway
* Route tables
* EC2 instance
* Security Groups
* IAM
* SNS notifications
* Route 53 DNS
* CloudWatch monitoring

Terraform is used to define and manage infrastructure as code.

## Terraform

The Terraform configuration is being developed separately from the application code.

Example structure:

```text
Terraform/
├── provider.tf
├── vpc.tf
├── subnet.tf
├── variables.tf
├── outputs.tf
└── README.md
```

The infrastructure is designed to be reproducible instead of relying entirely on manual AWS console configuration.

## Application Deployment

The application is deployed on Amazon EC2 running Amazon Linux.

PM2 is used to keep the Node.js application running:

```bash
pm2 start
pm2 status
pm2 restart
pm2 logs
```

The application runs on:

```text
http://localhost:3000
```

when accessed locally on the EC2 server.

## Notifications

Amazon SNS is used for booking-related notifications.

Example flow:

```text
Customer
   |
   v
Booking Form
   |
   v
Next.js Application
   |
   v
PostgreSQL Database
   |
   v
Amazon SNS
   |
   v
Notification
```

## Database

The application uses PostgreSQL for storing booking information.

The current project uses **Neon PostgreSQL** as the database service.

## Repository Structure

```text
sheepeye2/
├── src/
├── public/
├── Terraform/
├── package.json
├── next.config.*
├── tailwind.config.*
└── README.md
```

## Future Infrastructure Improvements

Planned improvements include:

* Application Load Balancer
* Auto Scaling Group
* CloudFront
* HTTPS with ACM
* Private subnets
* NAT Gateway
* RDS evaluation
* CloudWatch dashboards and alarms
* Improved IAM least-privilege policies
* CI/CD with GitHub Actions

These components will be added gradually while keeping AWS costs under control.

## Learning Objectives

This project is helping me gain practical experience with:

* AWS infrastructure
* VPC networking
* EC2 deployment
* Linux server administration
* IAM
* DNS
* Monitoring
* SNS
* PostgreSQL
* Terraform
* Git and GitHub
* Cloud architecture

## Status

🚧 **Active project**

The application and AWS infrastructure are being developed incrementally as part of my cloud engineering portfolio.

## Author

**Athul**

BSc Computer Science
Cloud & AWS Infrastructure Learner

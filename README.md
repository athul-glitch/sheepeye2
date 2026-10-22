# Sheepeye2 — AWS Cloud Infrastructure Project

A hands-on cloud engineering portfolio project demonstrating how to deploy and manage a web application using Amazon Web Services (AWS) and Terraform.

Sheepeye2 is a car wash booking application backed by AWS infrastructure. The project demonstrates Infrastructure as Code (IaC), Linux-based application hosting, managed database services, IAM, monitoring, and email notifications.

## Project Overview

The project combines a Next.js application with Terraform-managed AWS infrastructure.

The application allows users to submit car wash bookings, stores booking information in PostgreSQL, and sends email notifications when bookings are submitted.

The infrastructure is deployed in the AWS Mumbai region (`ap-south-1`).

### Project Objectives

* Provision AWS infrastructure using Terraform.
* Host a Next.js application on Amazon EC2.
* Configure a PostgreSQL database using Amazon RDS.
* Implement network isolation and security-group restrictions.
* Configure Amazon SNS email notifications.
* Monitor EC2 CPU utilization using Amazon CloudWatch.
* Apply cost-conscious infrastructure decisions.

## Technology Stack

| Category               | Technologies                                        |
| ---------------------- | --------------------------------------------------- |
| Application            | Next.js, React, TypeScript, Node.js                 |
| Styling                | Tailwind CSS                                        |
| Database               | PostgreSQL                                          |
| Cloud Platform         | Amazon Web Services                                 |
| Infrastructure as Code | Terraform                                           |
| Compute                | Amazon EC2                                          |
| Networking             | Amazon VPC, Subnets, Internet Gateway, Route Tables |
| Security               | IAM, Security Groups                                |
| Managed Database       | Amazon RDS for PostgreSQL                           |
| Monitoring             | Amazon CloudWatch                                   |
| Notifications          | Amazon SNS                                          |
| Process Management     | Linux, PM2                                          |
| Version Control        | Git, GitHub                                         |

## AWS Architecture

The application runs on Amazon EC2, while PostgreSQL is hosted on Amazon RDS. CloudWatch monitors EC2 CPU utilization, and SNS delivers configured alarm notifications by email.

```text
                         Users
                           |
                           v
                        Internet
                           |
                           v
                    Internet Gateway
                           |
                           v
                    +---------------+
                    |   Amazon VPC  |
                    |               |
                    | Public Subnet |
                    |               |
                    |   Amazon EC2  |
                    |   Next.js App |
                    |       |       |
                    |       |       |
                    | Private Network
                    |       |
                    |   Amazon RDS  |
                    |   PostgreSQL  |
                    +---------------+

EC2 CPU Metrics
      |
      v
Amazon CloudWatch
      |
      v
CloudWatch CPU Alarm
      |
      v
Amazon SNS
      |
      v
Email Notification
```

**Architecture notes:**

* The infrastructure configuration defines public and private subnets across two Availability Zones.
* The EC2 instance hosts the web application.
* The RDS database is configured as non-publicly accessible.
* Database access is restricted through security-group rules.
* CloudWatch evaluates EC2 CPU utilization against a configured threshold.
* SNS delivers email notifications for configured CloudWatch alarm state changes.

The diagram is a logical overview. Consult the Terraform configuration for the precise resource definitions and network relationships.

## Terraform Infrastructure

Terraform provisions and manages the AWS infrastructure.

The configuration includes:

```text
terraform/
├── provider.tf
├── variables.tf
├── terraform.tfvars
├── vpc.tf
├── subnet.tf
├── internet_gateway.tf
├── route_table.tf
├── security_group.tf
├── iam.tf
├── instance_profile.tf
├── ec2.tf
├── rds.tf
├── sns.tf
├── cloudwatch.tf
└── outputs.tf
```

Terraform state and local configuration files may also exist in the directory. **Do not commit Terraform state, database passwords, or secret variable files to a public repository.**

### Infrastructure Components

**Amazon VPC and Subnets**

Provide the network environment for the application and database. The Terraform configuration defines public and private subnets across two Availability Zones in `ap-south-1`.

**Internet Gateway and Route Tables**

Provide internet routing for appropriately configured public subnets.

**Amazon EC2**

Hosts the Next.js application on a Linux server.

**IAM**

Provides AWS identities and permissions for infrastructure operations and application access to required AWS services.

**Security Groups**

Control network traffic between the application server, database, and other configured resources.

**Amazon RDS for PostgreSQL**

Provides managed PostgreSQL database infrastructure. The database is configured for private access and encryption.

**Amazon SNS**

Provides email notifications for booking events and CloudWatch alarm state changes.

**Amazon CloudWatch**

Monitors the EC2 `CPUUtilization` metric through a standard metric alarm.

## Application Deployment

The web application uses Next.js and Node.js.

The application runs on an Amazon EC2 Linux instance and is managed using PM2.

Useful operational commands include:

```bash
pm2 status
pm2 restart sheepeye2
pm2 logs sheepeye2
```

The Next.js application is configured to run on port `3000`. Nginx can be used as a reverse proxy when configured.

Application deployment and troubleshooting are performed on the EC2 instance.

## Database

The application uses PostgreSQL to store booking information.

The AWS deployment uses Amazon RDS for PostgreSQL. Database connectivity is configured so that the database is not publicly accessible and access is restricted through the appropriate security-group rules.

Database credentials must be managed securely and must not be embedded in source code or committed to GitHub.

## Monitoring and Notifications

### CloudWatch CPU Alarm

A CloudWatch alarm named `sheepeye2-high-cpu` monitors the EC2 instance's average CPU utilization.

| Setting              | Value                                        |
| -------------------- | -------------------------------------------- |
| Metric               | `CPUUtilization`                             |
| Namespace            | `AWS/EC2`                                    |
| Threshold            | Greater than 70%                             |
| Evaluation periods   | 2                                            |
| Period               | 300 seconds                                  |
| Notification service | Amazon SNS                                   |
| Alarm actions        | SNS notification on configured state changes |

The alarm requires CPU utilization to exceed 70% for two consecutive evaluation periods before entering the `ALARM` state.

The alarm was created using Terraform and verified through the AWS CLI. An email notification confirmed that it transitioned from `INSUFFICIENT_DATA` to `OK`.

### SNS Booking Notifications

Amazon SNS is integrated with the booking application to send email notifications when bookings are submitted.

The SNS topic is also configured as the notification target for the CloudWatch alarm.

Booking notifications and CloudWatch alarm notifications serve different purposes:

* **Booking notification:** Reports a booking event from the application.
* **CloudWatch notification:** Reports a configured monitoring alarm state change.

## Security Considerations

Security is an important part of the infrastructure design.

* RDS is configured as non-publicly accessible.
* PostgreSQL access is restricted through security groups.
* EC2 application permissions should follow the principle of least privilege.
* Database credentials must not be hardcoded or committed to Git.
* Terraform state and secret variable files must be excluded from the public repository.
* Terraform plans should be reviewed before applying changes.

Never publish credentials, access keys, passwords, database connection strings, or sensitive Terraform state.

## Cost Management

This project is designed to keep development costs under control.

* Use small development instance types where appropriate.
* Review AWS billing and budgets regularly.
* Avoid adding continuously billed services unless they are needed.
* Avoid unnecessary NAT Gateways and load balancers.
* Stop development resources when they are not needed, where practical.
* Review Terraform plans before applying changes.

**Important:** Stopping EC2 does not automatically stop every associated AWS charge. RDS storage, provisioned resources, and other infrastructure may continue to incur costs. Check the current AWS billing breakdown before leaving resources running.

Do not destroy infrastructure without first checking whether it contains data that needs to be preserved.

## Getting Started

### Prerequisites

* Git
* Terraform
* AWS CLI
* An AWS account with appropriate permissions
* Node.js and npm for application development

### Clone the Repository

```bash
git clone https://github.com/athul-glitch/sheepeye2.git
cd sheepeye2
```

### Initialize Terraform

```bash
cd terraform
terraform init
```

### Format and Validate

```bash
terraform fmt -recursive
terraform validate
```

### Review the Terraform Plan

Provide the required database password through a secure local mechanism, then run:

```bash
terraform plan
```

Review the proposed changes carefully before applying them.

Do not run `terraform destroy` without confirming the consequences for the application, database, and stored data.

## Project Status

**Status: Core infrastructure and monitoring implemented; documentation and additional testing remain.**

Implemented capabilities include:

* Terraform-managed AWS networking and infrastructure.
* EC2-based application hosting.
* RDS PostgreSQL.
* SNS booking email notifications.
* CloudWatch CPU monitoring and SNS alarm notifications.

Controlled load testing has been deferred. The CPU alarm configuration and its initial state-change notification have been verified, but a high-CPU alert has not yet been demonstrated through a controlled load test.

## Future Improvements

* Perform controlled load testing and analyze CloudWatch metrics.
* Improve application health monitoring and troubleshooting documentation.
* Document deployment and recovery procedures.
* Evaluate load balancing and Auto Scaling if justified by the project requirements.
* Introduce CI/CD automation after the Terraform workflow is well understood.

## Learning Outcomes

This project provides practical experience with:

* AWS cloud infrastructure.
* VPC design, subnets, and routing.
* EC2 and Linux administration.
* IAM and security groups.
* Terraform and Infrastructure as Code.
* Amazon RDS and PostgreSQL.
* Amazon CloudWatch monitoring.
* Amazon SNS notifications.
* Application deployment and troubleshooting.
* AWS cost awareness.

## Author

**Athul**
BSc Computer Science
Cloud Infrastructure and AWS

GitHub: [athul-glitch](https://github.com/athul-glitch)

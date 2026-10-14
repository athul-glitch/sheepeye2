# Sheepeye2 — AWS Cloud Infrastructure Portfolio

A hands-on cloud infrastructure project demonstrating how to design, provision, and manage AWS infrastructure using Terraform.

Sheepeye2 is a separate cloud portfolio project inspired by the Sheepeye car wash booking application. Its primary focus is **AWS infrastructure, Infrastructure as Code (IaC), cloud networking, Linux administration, monitoring, and automation**.

The goal is to build a reproducible AWS environment while understanding the purpose of each resource, its security implications, and its operational costs.

## Project Goals

* Provision AWS infrastructure using Terraform.
* Design a VPC with public and private subnets.
* Understand routing, Internet Gateways, and security groups.
* Deploy a web application on Amazon EC2.
* Configure Amazon RDS for PostgreSQL.
* Implement monitoring and email notifications.
* Apply IAM security best practices.
* Document infrastructure decisions, deployment procedures, and troubleshooting.

## Technology Stack

### Cloud Platform

* Amazon Web Services (AWS)
* Amazon VPC
* Amazon EC2
* Amazon RDS for PostgreSQL
* AWS IAM
* Amazon SNS
* Amazon CloudWatch
* Amazon Route 53

### Infrastructure as Code

* Terraform
* HashiCorp Configuration Language (HCL)

### Operating System and Tools

* Linux
* Ubuntu on WSL
* AWS CLI
* Git
* GitHub
* Visual Studio Code

### Application

* Next.js
* React
* TypeScript
* Node.js

## Architecture

The target architecture is being developed incrementally.

```text
                         Internet
                            |
                            v
                    Internet Gateway
                            |
                            v
                       Public Subnet
                            |
                            v
                        Amazon EC2
                            |
                            v
                     Web Application
                            |
                            v
                   Private Database Access
                            |
                            v
                  Amazon RDS PostgreSQL


       Amazon CloudWatch ----> Amazon SNS
                                      |
                                      v
                              Email Notifications

           Terraform manages AWS infrastructure
```

The final architecture will depend on the infrastructure configuration and security requirements.

Private database access will be restricted to authorized application resources rather than exposing PostgreSQL directly to the internet.

## Terraform Infrastructure

Terraform is used to define AWS resources as code.

Current Terraform configuration files include:

```text
terraform/
├── provider.tf
├── vpc.tf
├── subnet.tf
├── internet_gateway.tf
├── route_table.tf
├── security_group.tf
├── ec2.tf
├── iam.tf
├── instance_profile.tf
├── rds.tf
└── .terraform.lock.hcl
```

The configuration is being developed and validated incrementally.

### Infrastructure Components

| Component        | Purpose                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------- |
| VPC              | Provides an isolated virtual network                                                    |
| Public subnets   | Host resources that require appropriate internet connectivity                           |
| Private subnets  | Provide network placement for resources that should not be directly internet-accessible |
| Internet Gateway | Enables internet connectivity for appropriately routed public resources                 |
| Route tables     | Control network traffic paths                                                           |
| Security groups  | Control inbound and outbound resource traffic                                           |
| EC2              | Provides compute capacity for the web application                                       |
| IAM              | Defines permissions for AWS resource access                                             |
| RDS PostgreSQL   | Provides managed relational database storage                                            |
| SNS              | Delivers notifications to subscribed endpoints                                          |
| CloudWatch       | Collects metrics and supports monitoring and alarms                                     |

**Note:** A Terraform configuration file does not prove that its resources have been deployed successfully. Actual deployment status and implemented features will be documented as they are verified.

## Security Considerations

Security is an important part of this project.

* Restrict SSH access instead of allowing unrestricted access from the internet.
* Use IAM roles instead of hardcoding AWS credentials.
* Keep database resources private wherever possible.
* Avoid committing secrets, credentials, and Terraform state files to GitHub.
* Apply least-privilege permissions.
* Review Terraform plans before making infrastructure changes.

## Monitoring and Notifications

Planned monitoring improvements include:

* Amazon CloudWatch metrics and alarms.
* Monitoring EC2 instance health and resource utilization.
* Amazon SNS email notifications.
* Investigation of application and infrastructure issues.
* Controlled load testing after monitoring is configured.

Load testing will only be performed after the infrastructure, monitoring, and cost controls are ready.

## Cost Management

AWS resources can incur charges even when a project is used only for learning.

Cost management will include:

* Reviewing Terraform plans before deployment.
* Avoiding unnecessary always-on resources.
* Evaluating the cost of networking and database services.
* Cleaning up resources when they are no longer required.
* Avoiding unnecessary NAT Gateways, load balancers, and other paid components during early development.

Resources will be deployed only when required for the current learning objective.

## Development Roadmap

* [x] Create the GitHub repository.
* [x] Organize the initial Terraform configuration.
* [x] Define the initial VPC and subnet configuration.
* [x] Initialize and validate the Terraform configuration.
* [ ] Complete and review VPC networking.
* [ ] Review and improve security group rules.
* [ ] Review IAM permissions.
* [ ] Deploy and configure EC2 when cost and access requirements permit.
* [ ] Deploy the web application.
* [ ] Configure Amazon RDS PostgreSQL.
* [ ] Configure Amazon SNS notifications.
* [ ] Configure CloudWatch monitoring and alarms.
* [ ] Perform controlled load testing.
* [ ] Document the architecture and operational procedures.

Checklist items will be updated as each stage is completed and verified.

## Future Improvements

Potential improvements include:

* Application Load Balancer (ALB).
* Auto Scaling Groups.
* Amazon CloudFront.
* HTTPS using AWS Certificate Manager.
* Additional automation with GitHub Actions.
* Improved deployment and operational documentation.

These improvements will be evaluated based on learning objectives, security, and AWS costs.

## Learning Outcomes

This project is intended to develop practical skills in:

* AWS infrastructure provisioning.
* Terraform and Infrastructure as Code.
* VPC networking and subnet design.
* Linux server administration.
* EC2 and IAM.
* Managed PostgreSQL databases.
* DNS and cloud networking.
* Monitoring and alerting.
* Infrastructure troubleshooting.
* Git and GitHub-based project management.
* Cloud security and cost awareness.

## Project Status

**Status:** Active — infrastructure development and validation in progress.

The infrastructure is being developed incrementally. Components will be marked as implemented after they have been configured and verified.

## Author

**Athul**

BSc Computer Science | Aspiring Cloud and Infrastructure Engineer

GitHub: [athul-glitch](https://github.com/athul-glitch)

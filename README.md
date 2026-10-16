# Sheepeye2 — AWS Cloud Infrastructure Project

A practical cloud infrastructure portfolio project focused on deploying and managing a web application using Amazon Web Services (AWS) and Terraform.

The project combines a Next.js application with Infrastructure as Code, AWS networking, compute resources, database infrastructure, and cloud operations.

## Project Overview

Sheepeye2 is a cloud engineering portfolio project based on a car wash booking platform.

The goal is to develop practical skills in designing AWS infrastructure, managing resources using Terraform, configuring Linux-based application servers, and implementing secure and cost-conscious cloud architectures.

The infrastructure is being developed incrementally, with Terraform as the primary tool for provisioning AWS resources.

## Technology Stack

| Category                | Technologies                                        |
| ----------------------- | --------------------------------------------------- |
| Application             | Next.js, React, TypeScript, Node.js                 |
| Styling                 | Tailwind CSS                                        |
| Database                | PostgreSQL                                          |
| Cloud Platform          | Amazon Web Services                                 |
| Infrastructure as Code  | Terraform                                           |
| Compute                 | Amazon EC2                                          |
| Networking              | Amazon VPC, Subnets, Internet Gateway, Route Tables |
| Security                | IAM, Security Groups                                |
| Database Infrastructure | Amazon RDS for PostgreSQL                           |
| Operations              | Linux, Git, GitHub, PM2                             |

**Note:** The existing application uses Neon PostgreSQL. Amazon RDS PostgreSQL is being configured separately as part of the AWS infrastructure portfolio.

## AWS Architecture

The target architecture separates public-facing application infrastructure from private database resources.

```text
                         Internet
                            |
                            v
                      Internet Gateway
                            |
                            v
                    +------------------+
                    |    Amazon VPC    |
                    |                  |
                    |  Public Subnets  |
                    |                  |
                    |  Amazon EC2      |
                    |  Next.js App     |
                    |        |         |
                    |        |         |
                    |  Private Subnets |
                    |        |         |
                    |  Amazon RDS      |
                    |  PostgreSQL      |
                    +------------------+
```

This diagram represents the intended architecture. Resources and connections will be verified as implementation progresses.

## Terraform Infrastructure

Terraform is used to define AWS resources as reusable configuration files.

Current Terraform configuration includes:

```text
terraform/
├── provider.tf
├── variables.tf
├── vpc.tf
├── subnet.tf
├── internet_gateway.tf
├── route_table.tf
├── security_group.tf
├── iam.tf
├── instance_profile.tf
├── ec2.tf
└── rds.tf
```

### Infrastructure Components

**Amazon VPC**

Provides an isolated network for the application infrastructure.

**Public and Private Subnets**

The VPC configuration defines two public subnets and two private subnets across two Availability Zones in the Mumbai region (`ap-south-1`).

**Internet Gateway and Route Tables**

Provide the routing configuration required for internet connectivity from appropriately configured public subnets.

**Amazon EC2**

Provides compute capacity for hosting the web application on a Linux server.

**IAM**

Defines identity and permission resources for AWS infrastructure operations.

**Security Groups**

Control network traffic between infrastructure components.

**Amazon RDS for PostgreSQL**

The Terraform configuration defines a PostgreSQL database in private subnets, with encryption enabled and database access restricted through a security group.

## Security Design

Security is an important part of the infrastructure design.

* The RDS database is configured as non-publicly accessible.
* PostgreSQL traffic is restricted to the designated EC2 security group.
* Database credentials are supplied through a Terraform variable rather than hardcoded into the database resource.
* Terraform state files and variable files are excluded from Git.
* IAM permissions should follow the principle of least privilege.

Sensitive credentials and Terraform state must never be committed to the public repository.

## Application Deployment

The web application is built with Next.js and Node.js.

PM2 can be used to manage the Node.js application process on a Linux server.

Common PM2 commands include:

```bash
pm2 status
pm2 restart <application-name>
pm2 logs
```

The application listens on port `3000` when configured to run locally on the server.

## Database Architecture

The project distinguishes between two database environments.

**Existing application**

The Next.js application uses Neon PostgreSQL.

**AWS infrastructure portfolio**

Terraform defines Amazon RDS for PostgreSQL to demonstrate managed database provisioning, private networking, encryption, and security-group configuration.

The RDS configuration is maintained separately from the existing Neon-backed application.

## Monitoring and Notifications

Planned operational improvements include:

* Amazon CloudWatch metrics and alarms.
* Amazon SNS notifications for infrastructure alerts.
* Monitoring CPU utilization and application health.
* Investigating application failures through Linux logs.
* Testing application performance under controlled load.

These capabilities will be documented as implemented after they have been configured and tested.

## Cost Management

The project is designed to minimize unnecessary AWS expenditure.

* Avoid leaving development resources running when they are not needed.
* Review estimated costs before provisioning resources.
* Use small development resources where appropriate.
* Avoid deploying a NAT Gateway, load balancer, or other continuously billed resources until required.
* Destroy temporary infrastructure when it is no longer needed.
* Review Terraform plans before applying infrastructure changes.

Destroying infrastructure can permanently remove resources and data. Database backups and any required application data must be considered before cleanup.

## Getting Started

### Prerequisites

* Git
* Terraform
* An AWS account
* AWS CLI configured with appropriate credentials
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

### Review the Execution Plan

Provide the required database password through a secure local mechanism, then run:

```bash
terraform plan
```

Review the plan carefully before provisioning or modifying AWS resources.

Do not commit database passwords, credential files, Terraform state, or secret variable files to GitHub.

## Roadmap

* [x] Establish the GitHub repository.
* [x] Create the initial Terraform provider and VPC configuration.
* [x] Define public and private subnets.
* [x] Define Internet Gateway and route-table configuration.
* [x] Define EC2 and IAM configuration.
* [x] Add Terraform configuration for RDS PostgreSQL.
* [ ] Validate the complete Terraform configuration.
* [ ] Verify the deployed networking and security configuration.
* [ ] Configure CloudWatch monitoring.
* [ ] Configure SNS notifications.
* [ ] Document application deployment and troubleshooting.
* [ ] Evaluate an Application Load Balancer and Auto Scaling.
* [ ] Add GitHub Actions after the Terraform workflow is understood.

The checklist tracks configuration work; it does not imply that every resource has already been deployed and tested.

## Learning Objectives

This project supports hands-on learning in:

* AWS cloud infrastructure.
* VPC design and subnetting.
* Routing and network security.
* EC2 and Linux administration.
* IAM and access management.
* Terraform and Infrastructure as Code.
* Amazon RDS and PostgreSQL.
* Cloud monitoring and alerting.
* Cost management.
* Git and GitHub workflows.

## Project Status

**Status: In progress**

The infrastructure is being developed incrementally, with an emphasis on understanding each AWS resource before introducing more complex architecture and automation.

## Author

**Athul**

BSc Computer Science
Cloud Infrastructure and AWS

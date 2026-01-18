import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  nodejs,
  mongodb,
  git,
  docker,
  otp_auth,
  aws_vpc,
  multi_cloud,
  static_hosting,
  aws,
  c,
  cpp,
  fastapi,
  githubActions,
  gcp,
  terraform,
  java,
  jenkins,
  linux,
  mysql,
  postman,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Architecture",
    icon: mobile,
    description: "Designing scalable, fault-tolerant systems on AWS & GCP.",
  },
  {
    title: "DevOps Automation",
    icon: web,
    description: "CI/CD pipelines that deploy faster than you can grab coffee.",
  },
  {
    title: "Backend Engineering",
    icon: backend,
    description: "APIs built for speed, security, and high concurrency.",
  },
  {
    title: "AI Integration",
    icon: creator,
    description: "Building intelligent agents that actually solve problems.",
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "GCP",
    icon: gcp,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "GitHub Actions",
    icon: githubActions,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "Freelance Backend Engineer",
    company_name: "Khaleezi",
    icon: backend,
    iconBg: "#383E56",
    date: "Jan 2025 – Present",
    points: [
      "Built and owned backend APIs for an early-stage product (users, orders, auth).",
      "Designed systems with clean separation, env-based config, and versioned releases.",
      "Containerized services with Docker and automated CI/CD, cutting manual deploy work ~60%.",
      "Focused on reliability, scalability, and not shipping surprises to production.",
    ],
  },
];



const projects = [
  {
    name: "OTP Authentication Backend",
    description:
      "Implemented OTP-based signup/login with 10-minute expiry and one-time validation. Issued JWT tokens post-verification and persisted users in MongoDB. Managed 100% secrets via environment-based configuration.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    image: otp_auth,
    source_code_link: "https://github.com/Ani011104/OTP-Authentication",
  },
  {
    name: "AWS Multi-Region VPC Peering",
    description:
      "Provisioned private connectivity across 2 AWS regions using VPC peering. Deployed routing between 2 VPCs with validated EC2 connectivity. Automated creation of 10+ AWS resources with remote state locking.",
    tags: [
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "terraform",
        color: "green-text-gradient",
      },
      {
        name: "infrastructure",
        color: "pink-text-gradient",
      },
    ],
    image: aws_vpc,
    source_code_link: "https://github.com/Ani011104/terraform-aws-vpc-peering",
  },
  {
    name: "Multi-Cloud Container Pipeline",
    description:
      "CI/CD automation using GitHub Actions. Dockerized 2-tier application. Images pushed to AWS ECR and GCP Artifact Registry, deployed to ECS and Cloud Run.",
    tags: [
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "github-actions",
        color: "green-text-gradient",
      },
      {
        name: "multi-cloud",
        color: "pink-text-gradient",
      },
    ],
    image: multi_cloud,
    source_code_link: "https://github.com/Ani011104/DevOps-Assignment",
  },
  {
    name: "Secure Static Hosting on AWS",
    description:
      "Hosted a secure static website using S3 + CloudFront with HTTPS. Enforced private S3 access via Origin Access Control and bucket policies for enhanced security.",
    tags: [
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "cloudfront",
        color: "green-text-gradient",
      },
      {
        name: "s3",
        color: "pink-text-gradient",
      },
    ],
    image: static_hosting,
    source_code_link: "https://github.com/Ani011104/terraform-aws-static-portfolio",
  },
];

export { services, technologies, experiences, projects };

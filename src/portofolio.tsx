
const header = {
  homepage: 'https://dinasportfolioapp.vercel.app/',
}

const about = {
  name: 'Dina Adel',
  role: 'Cloud & DevOps Engineer | Software Engineer',
  description:
    'Software Engineer and Cloud & DevOps Engineer at Deloitte, specializing in cloud-native architecture, backend development, infrastructure automation, and scalable distributed systems. Experienced in designing and deploying solutions across AWS, Microsoft Azure, Oracle Cloud Infrastructure (OCI), and Google Cloud. Skilled in Terraform, Docker, CI/CD pipelines, microservices, and RESTful API development. Google Cloud Associate Cloud Engineer, AWS Certified Cloud Practitioner, and Oracle Cloud Infrastructure Architect Associate. Passionate about building secure, reliable, and high-performance cloud solutions.',
  social: {
    linkedin: 'https://www.linkedin.com/in/dina-adel-a11251286/',
    github: 'https://github.com/dinaa3',
  },
}

const projects = [
  {
    name: 'Efficient Event-Driven Orchestration | Bachelor Thesis',
    description:
      'Designed and developed an intelligent serverless event-driven orchestration system on AWS, integrating machine learning for efficient event classification and orchestration. Leveraged AWS Lambda, Step Functions, EventBridge, SQS, DynamoDB, and SageMaker to coordinate distributed services with high fault tolerance and minimal latency. Implemented centralized monitoring using CloudWatch and fine-grained IAM access controls. Achieved 95.6% accuracy and 95.63% F1-score. Research published in Springer Nature, ICAISE 2025 Proceedings (2026). Bachelor project awarded Excellent.',
    stack: [
      'AWS Lambda',
      'Step Functions',
      'EventBridge',
      'Amazon SQS',
      'DynamoDB',
      'Amazon S3',
      'AWS SageMaker',
      'CloudWatch',
      'IAM',
      'Python',
      'Machine Learning',
      'Serverless',
    ],
    sourceCode:
      'https://github.com/dinaa3/event_orchestration_system-Bachelor-Thesis-Project-',
    livePreview:
      'https://doi.org/10.1007/978-3-032-28100-5_28',
  },
  {
    name: 'Help Desk Full-Stack Website',
    description:
      'Developed a full-stack help desk management platform using the MERN stack, providing streamlined support request handling and administrative operations. Built RESTful APIs for client-server communication, implemented ticket creation and status tracking workflows, and integrated role-based access control. Designed responsive frontend interfaces for issue management, ticket monitoring, and staff support.',
    stack: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'JavaScript',
      'REST APIs',
      'RBAC',
    ],
    sourceCode: 'https://github.com/dinaa3/ECS_helpDesk1',
    livePreview: 'https://ecs-help-desk-one.vercel.app/',
  },
  {
    name: 'E-Commerce Microservices Platform | Eco Pallets',
    description:
      'Architected and developed a distributed e-commerce application for plastic pallet products using NestJS microservices and Next.js. Implemented domain-specific backend services for product, order, and payment management, using Apache Kafka for asynchronous event-driven communication. Designed responsive frontend interfaces and UI/UX prototypes in Figma, focusing on scalability, modularity, and maintainability.',
    stack: [
      'NestJS',
      'Next.js',
      'TypeScript',
      'Apache Kafka',
      'MongoDB',
      'Microservices',
      'Event-Driven Architecture',
      'Figma',
    ],
    sourceCode: 'https://github.com/dinaa3/Eco-Pallets-project',
    livePreview: 'https://eco-pallets.vercel.app/',
  },
]

const skills = [
  'TypeScript',
  'JavaScript',
  'Java',
  'Python',
  'SQL',
  'HTML',
  'CSS',
  'Angular',
  'React',
  'Next.js',
  'Vue.js',
  'Flutter',
  'Node.js',
  'NestJS',
  'ASP.NET Core',
  'Spring Boot',
  'Laravel',
  'FastAPI',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'DynamoDB',
  'Firebase',
  'AWS',
  'Microsoft Azure',
  'Oracle Cloud Infrastructure',
  'Google Cloud',
  'Docker',
  'Terraform',
  'GitHub Actions',
  'Azure DevOps',
  'GitLab CI/CD',
  'Amazon EC2',
  'Amazon S3',
  'AWS Lambda',
  'Amazon ECS',
  'Amazon ECR',
  'API Gateway',
  'Amazon SQS',
  'Amazon SNS',
  'AWS IAM',
  'Amazon CloudWatch',
  'AWS Step Functions',
  'Amazon EventBridge',
  'AWS SageMaker',
  'Matplotlib',
  'MLflow',
  'Clean Architecture',
  'Domain-Driven Design',
  'Hexagonal Architecture',
  'Microservices',
  'Event-Driven Architecture',
  'Serverless Architecture',
  'CQRS',
  'Event Sourcing',
  'REST APIs',
  'GraphQL',
  'CI/CD',
  'Infrastructure as Code',
]

const experience = [
  {
    role: 'Cloud & DevOps Engineer',
    company: 'Deloitte',
    period: 'Jan 2026 - Present',
    description:
      'Working on the AI Studio platform, supporting cloud infrastructure provisioning, DevOps automation, cloud migrations, and application deployments across AWS and Azure.',
    highlights: [
      'Contributed to migrating cloud solutions from Azure to AWS using Terraform.',
      'Provisioned and managed AWS infrastructure, including ECR, ALB, NLB, S3, and Aurora.',
      'Managed cloud security and access control through AWS IAM and Azure resource groups.',
      'Automated Azure infrastructure provisioning using Azure DevOps pipelines.',
      'Designed and maintained CI/CD pipelines across development, UAT, staging, and production.',
      'Developed and deployed a full-stack Spring Boot and Angular application using Firebase Firestore and Google Cloud Run.',
    ],
    stack: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Terraform',
      'Azure DevOps',
      'CI/CD',
      'Spring Boot',
      'Angular',
      'Firebase',
    ],
  },
  {
    role: 'Cloud Engineer Intern',
    company: 'Ejada Systems',
    period: 'Feb 2025 - Aug 2025',
    description:
      'Contributed to the migration of a core banking application from on-premises infrastructure to Oracle Cloud Infrastructure, focusing on secure cloud architecture, automation, high availability, and disaster recovery.',
    highlights: [
      'Supported core banking application migration to OCI.',
      'Worked with OCI Compute, Object Storage, VCN, Load Balancer, and Identity Domains.',
      'Implemented Terraform-based infrastructure provisioning.',
      'Designed GitLab CI/CD pipelines.',
      'Supported disaster recovery, high availability, and performance monitoring.',
    ],
    stack: [
      'Oracle Cloud Infrastructure',
      'Terraform',
      'GitLab CI/CD',
      'OCI Compute',
      'OCI VCN',
      'OCI Load Balancer',
    ],
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Fiverr',
    period: 'May 2024 - Oct 2024',
    description:
      'Delivered full-stack web applications to international clients, developing maintainable backend APIs, integrating third-party services, and automating deployments using cloud technologies.',
    highlights: [
      'Developed full-stack web applications for global clients.',
      'Built RESTful APIs and integrated third-party services.',
      'Applied Clean Architecture principles.',
      'Automated CI/CD using GitHub Actions and Terraform.',
      'Deployed applications on AWS and OCI.',
    ],
    stack: [
      'Full-Stack Development',
      'REST APIs',
      'GitHub Actions',
      'Terraform',
      'AWS',
      'OCI',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'e-finance',
    period: 'Aug 2023 - Sep 2023',
    description:
      'Co-developed an internal web platform for employee attendance and salary tracking using Angular and Java.',
    highlights: [
      'Developed frontend functionality using Angular.',
      'Contributed to Java-based backend development.',
      'Supported employee attendance and salary management workflows.',
    ],
    stack: ['Angular', 'Java'],
  },
]

const education = [
  {
    institution: 'German International University (GIU)',
    degree: 'B.Sc. in Computer Science - Software Engineering',
    period: '2021 - 2025',
    location: 'Cairo, Egypt',
    gpa: '2.5 (German - Very Good)',
    bachelorGrade: 'Excellent',
  },
]

const certifications = [
  {
    name: 'Google Cloud Associate Cloud Engineer',
    issuer: 'Google Cloud',
    issued: 'May 2026',
    expires: 'May 2029',
    credential:
      'https://www.credly.com/badges/7962a897-042a-4e8d-b7d0-4e5601e4c122/public_url',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issued: 'Sep 2024',
    expires: 'Sep 2027',
    credential:
      'https://www.credly.com/badges/923f71c0-3960-4dff-a199-62bceb7d16bd/public_url',
  },
  {
    name: 'Oracle Cloud Infrastructure Architect Associate',
    issuer: 'Oracle',
    issued: 'Jul 2025',
    expires: 'Jul 2027',
    credential:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=87BFEADB28307A3A1C806FD653FEB36EB5336E5A5B82BFCB6C6B2BF2573EB197',
  },
]

const contact = {
  email: 'dinadel31@gmail.com',
}

export {
  header,
  about,
  projects,
  skills,
  experience,
  education,
  certifications,
  contact,
}
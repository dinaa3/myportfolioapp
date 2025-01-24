const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://rjshkhr.github.io/cleanfolio',

  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Dina Adel',
    role: 'Software Engineer and DevOps Engineer',
    description:
    'Software Engineering student at the German International University with hands-on experience in full-stack development and cloud computing. I am passionate about creating scalable, high-performance applications and continuously learning cutting-edge technologies.',
    social: {
      linkedin: 'linkedin.com/in/dina-adel',
      github: 'https://github.com/dinaa3',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Help Desk Full-Stack Website',
      description:
        'Participated in the devlopment of backend and frontend APIs for staff help desk website',
      stack: ['MongoDB', 'Express.js', 'React', 'Node,js'],
      sourceCode: 'https://github.com/dinaa3/ECS_helpDesk1',
      livePreview: 'https://ecs-help-desk-one.vercel.app/',
    },
    {
      name: 'Full-Stack E-commerce Website',
      description:
        'Developed a microservice-based (backend and frontend) e-commerce website',
      stack: ['NestJS', 'Next.jst', 'Kafka', 'MongoDB'],
      sourceCode: 'https://github.com/dinaa3/Eco-Pallets-project',
      livePreview: 'https://eco-pallets.vercel.app/',
    },
    {
      name: 'Event-Driven Orchestration System (Bachelor Project)',
      description:
        'Developed an event orchestration system using DistilBERT model and AWS Cloud services',
      stack: ['DynamoDB', 'S3', 'Step Function', 'SageMaker', 'EventBridge', 'SQS', 'lAMBDA'],
      sourceCode: 'https://github.com/dinaa3/event_orchestration_system-Bachelor-Thesis-Project-',
    },
  ]
  
  const skills = [
    // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Java',
  'Python',
  'C++',
  'SQL',
  'PHP',
  'Dart',
  'Flutter',
  'Node.js',
  'Next.js',
  'Angular',
  'Laravel',
  'MongoDB',
  'PostgreSQL',
  'Firebase',
  'AWS',
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'dinadel31@mail.com',
  }
  
  export { header, about, projects, skills, contact }
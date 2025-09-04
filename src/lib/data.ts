import { Project, Skill, Experience, Education, Certification } from '@/types'

export const personalInfo = {
  name: "Rahul Sarkar",
  title: "Data Scientist & Frappe/ERPNext Solution Architect",
  subtitle: "Transforming businesses through intelligent data solutions and enterprise automation",
  email: "rahulsarkar7phoenix@gmail.com",
  phone: "+91 8670972005",
  location: "Kolkata, West Bengal, India",
  website: "https://rahulsarkar99phoenix.netlify.app/",
  github: "https://github.com/Thunder-BluePhoenix",
  linkedin: "https://linkedin.com/in/rahul-sarkar",
  bio: "Full-Stack Data Scientist and Frappe/ERPNext Solution Architect with expertise in end-to-end ML pipelines, business intelligence, and enterprise automation. Passionate about leveraging AI/ML and modern ERP solutions to drive digital transformation.",
  expertise: [
    "Data Science & Machine Learning",
    "Frappe Framework & ERPNext Implementation",
    "Business Intelligence & Analytics",
    "Solution Architecture & Digital Transformation"
  ],
  availability: "Available for freelance projects and consultations"
}

export const skills: Skill[] = [
  // Data Science & Analytics
  {
    name: "Python Data Science Stack",
    category: "Data Science",
    level: 10,
    years: 4,
    projects: ["Brain Tumor Detection", "Business Analytics Dashboard", "ML Model Deployment"],
    icon: "🐍",
    subSkills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
    certifications: ["Python Data Science Specialist"]
  },
  {
    name: "Machine Learning",
    category: "AI/ML",
    level: 9,
    years: 3,
    projects: ["CNN Models", "Predictive Analytics", "NLP Solutions"],
    icon: "🤖",
    subSkills: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "Feature Engineering"]
  },
  {
    name: "Deep Learning & Neural Networks",
    category: "AI/ML",
    level: 9,
    years: 3,
    projects: ["Brain Tumor Detection", "Image Classification", "CNN Applications"],
    icon: "🧠",
    subSkills: ["TensorFlow", "Keras", "PyTorch", "CNN", "RNN", "Transfer Learning"]
  },
  {
    name: "Data Visualization",
    category: "Analytics",
    level: 9,
    years: 3,
    projects: ["Business Dashboards", "Research Presentations", "Interactive Charts"],
    icon: "📊",
    subSkills: ["Plotly", "Dash", "Streamlit", "Power BI", "Tableau", "D3.js"]
  },
  {
    name: "Big Data & Analytics",
    category: "Data Science",
    level: 8,
    years: 2,
    projects: ["Large Dataset Processing", "Real-time Analytics"],
    icon: "📈",
    subSkills: ["Apache Spark", "Hadoop", "Apache Kafka", "Data Warehousing"]
  },
  {
    name: "Statistics & Probability",
    category: "Data Science",
    level: 9,
    years: 4,
    projects: ["Statistical Analysis", "A/B Testing", "Research Papers"],
    icon: "📐",
    subSkills: ["Hypothesis Testing", "Bayesian Statistics", "Time Series Analysis", "Regression Analysis"]
  },
  {
    name: "MLOps & AI Operations",
    category: "AI/ML",
    level: 8,
    years: 2,
    projects: ["Model Deployment Pipeline", "ML Monitoring Systems"],
    icon: "⚙️",
    subSkills: ["Docker", "Kubernetes", "MLflow", "Model Versioning", "CI/CD for ML"]
  },
  {
    name: "LLM & NLP",
    category: "AI/ML",
    level: 8,
    years: 2,
    projects: ["AI Chatbots", "Text Analysis", "Document Processing"],
    icon: "🗣️",
    subSkills: ["OpenAI API", "Transformers", "BERT", "GPT", "Text Mining", "Sentiment Analysis"]
  },
  
  // Frappe & ERPNext
  {
    name: "Frappe Framework",
    category: "Frappe/ERPNext",
    level: 9,
    years: 3,
    projects: ["Custom ERP Solutions", "Business Process Automation", "Workflow Systems"],
    icon: "🔧",
    subSkills: ["DocTypes", "Server Scripts", "Client Scripts", "Print Formats", "Custom Apps"]
  },
  {
    name: "ERPNext Implementation",
    category: "Frappe/ERPNext",
    level: 9,
    years: 3,
    projects: ["Manufacturing ERP", "Retail Management", "Healthcare Systems"],
    icon: "🏢",
    subSkills: ["Modules Configuration", "Customization", "Integration", "Migration", "Training"]
  },
  {
    name: "Business Process Optimization",
    category: "Solution Architecture",
    level: 8,
    years: 3,
    projects: ["Workflow Automation", "Process Re-engineering", "Digital Transformation"],
    icon: "🔄",
    subSkills: ["Process Analysis", "Workflow Design", "Automation Strategy", "Change Management"]
  },
  {
    name: "ERP Integrations",
    category: "Frappe/ERPNext",
    level: 8,
    years: 2,
    projects: ["Payment Gateway Integration", "Third-party API Integration", "Data Migration"],
    icon: "🔗",
    subSkills: ["REST APIs", "Webhooks", "Data Synchronization", "Custom Connectors"]
  },
  
  // Full-Stack Development
  {
    name: "React.js & Next.js",
    category: "Frontend",
    level: 8,
    years: 3,
    projects: ["Data Visualization Dashboards", "ERP Interfaces", "Portfolio Websites"],
    icon: "⚛️",
    subSkills: ["React Hooks", "State Management", "Server Components", "TypeScript"]
  },
  {
    name: "Node.js & Express",
    category: "Backend",
    level: 8,
    years: 2,
    projects: ["API Development", "Microservices", "Real-time Applications"],
    icon: "🟢",
    subSkills: ["RESTful APIs", "GraphQL", "WebSockets", "Authentication"]
  },
  {
    name: "Database Management",
    category: "Database",
    level: 9,
    years: 4,
    projects: ["Data Warehousing", "ERP Databases", "Analytics Databases"],
    icon: "🗄️",
    subSkills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Data Modeling"]
  },
  {
    name: "Cloud & DevOps",
    category: "DevOps",
    level: 7,
    years: 2,
    projects: ["Model Deployment", "ERP Hosting", "Scalable Infrastructure"],
    icon: "☁️",
    subSkills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring"]
  }
]

export const projects: Project[] = [
  {
    id: "brain-tumor-detection-cnn",
    title: "Brain Tumor Detection using Advanced CNN",
    description: "State-of-the-art deep learning system for medical image analysis with 97% accuracy in detecting and classifying brain tumors from MRI scans.",
    longDescription: "Developed an advanced CNN architecture using transfer learning with ResNet50 and custom layers for brain tumor detection. The system includes data preprocessing, augmentation, model training, and deployment with a web interface for medical professionals. Published research paper on the methodology and results.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "React", "Docker"],
    category: "data-science",
    githubUrl: "https://github.com/Thunder-BluePhoenix/brain-tumor-detection-cnn",
    imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
    featured: true,
    complexity: "expert",
    metrics: {
      accuracy: "97% validation accuracy",
      dataProcessed: "5000+ MRI images",
      impact: "Published in peer-reviewed journal",
      performance: "Real-time inference <2 seconds"
    },
    tags: ["Deep Learning", "Medical AI", "CNN", "Computer Vision", "Healthcare"],
    status: "completed"
  },
  {
    id: "comprehensive-erp-solution",
    title: "Manufacturing ERP Solution with Frappe",
    description: "Complete ERP implementation for manufacturing company with custom modules, workflows, and integrations, improving operational efficiency by 45%.",
    longDescription: "Designed and implemented a comprehensive ERP solution using Frappe Framework for a mid-sized manufacturing company. Includes custom modules for production planning, inventory management, quality control, and financial reporting. Integrated with existing systems and provided comprehensive user training.",
    technologies: ["Frappe Framework", "ERPNext", "Python", "JavaScript", "MariaDB", "Docker", "Nginx"],
    category: "frappe-erp",
    githubUrl: "https://github.com/Thunder-BluePhoenix/manufacturing-erp",
    liveUrl: "https://demo-manufacturing-erp.com",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    featured: true,
    complexity: "expert",
    metrics: {
      users: 150,
      impact: "45% efficiency improvement",
      revenue: "$200K+ in process savings",
      performance: "99.9% uptime"
    },
    tags: ["ERP", "Manufacturing", "Business Process", "Automation", "Integration"],
    status: "completed"
  },
  {
    id: "ml-model-deployment-platform",
    title: "MLOps Platform for Model Deployment",
    description: "End-to-end MLOps platform for deploying, monitoring, and managing machine learning models in production with automated CI/CD pipelines.",
    longDescription: "Built a comprehensive MLOps platform that allows data scientists to deploy ML models with one-click deployment, version control, A/B testing, performance monitoring, and automatic scaling. Includes model registry, experiment tracking, and automated retraining capabilities.",
    technologies: ["Python", "FastAPI", "Docker", "Kubernetes", "MLflow", "PostgreSQL", "Redis", "React"],
    category: "ai-ml",
    githubUrl: "https://github.com/Thunder-BluePhoenix/mlops-platform",
    demoUrl: "https://mlops-demo.rahulsarkar.dev",
    imageUrl: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=800&h=600&fit=crop",
    featured: true,
    complexity: "expert",
    metrics: {
      users: 50,
      dataProcessed: "10TB+ monthly",
      performance: "75% faster deployment",
      impact: "Used by 5+ data science teams"
    },
    tags: ["MLOps", "DevOps", "Model Deployment", "Kubernetes", "Microservices"],
    status: "completed"
  },
  {
    id: "business-intelligence-dashboard",
    title: "Real-time Business Intelligence Dashboard",
    description: "Interactive BI dashboard with advanced analytics, predictive modeling, and real-time data visualization for executive decision making.",
    longDescription: "Developed a comprehensive business intelligence solution with real-time data ingestion, advanced analytics, and interactive visualizations. Features include KPI monitoring, trend analysis, predictive forecasting, and customizable reports with drill-down capabilities.",
    technologies: ["Python", "Pandas", "Plotly Dash", "Apache Kafka", "PostgreSQL", "Redis", "Apache Airflow"],
    category: "data-science",
    githubUrl: "https://github.com/Thunder-BluePhoenix/bi-dashboard",
    liveUrl: "https://bi-dashboard.demo.com",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    featured: true,
    complexity: "advanced",
    metrics: {
      users: 25,
      dataProcessed: "1M+ records daily",
      impact: "30% faster decision making",
      performance: "Sub-second query response"
    },
    tags: ["Business Intelligence", "Data Visualization", "Analytics", "Real-time"],
    status: "completed"
  },
  {
    id: "nlp-document-processor",
    title: "Intelligent Document Processing with NLP",
    description: "AI-powered document processing system using NLP and computer vision for automated data extraction and classification.",
    longDescription: "Built an intelligent document processing system that combines NLP, computer vision, and machine learning to automatically extract, classify, and process various document types. Includes OCR, entity recognition, sentiment analysis, and automated workflow routing.",
    technologies: ["Python", "spaCy", "Transformers", "OpenCV", "Tesseract", "FastAPI", "PostgreSQL"],
    category: "ai-ml",
    githubUrl: "https://github.com/Thunder-BluePhoenix/nlp-document-processor",
    imageUrl: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&h=600&fit=crop",
    featured: false,
    complexity: "advanced",
    metrics: {
      accuracy: "94% extraction accuracy",
      performance: "10x faster than manual processing",
      impact: "Processes 1000+ documents daily"
    },
    tags: ["NLP", "Document Processing", "OCR", "Automation", "AI"],
    status: "completed"
  },
  {
    id: "predictive-maintenance-system",
    title: "IoT-based Predictive Maintenance System",
    description: "Machine learning system for predictive maintenance using IoT sensor data, reducing equipment downtime by 60%.",
    longDescription: "Developed a comprehensive predictive maintenance solution that analyzes IoT sensor data to predict equipment failures before they occur. Includes time series analysis, anomaly detection, and maintenance scheduling optimization.",
    technologies: ["Python", "TensorFlow", "Apache Kafka", "InfluxDB", "Grafana", "Docker", "Kubernetes"],
    category: "ai-ml",
    githubUrl: "https://github.com/Thunder-BluePhoenix/predictive-maintenance",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    featured: false,
    complexity: "advanced",
    metrics: {
      impact: "60% reduction in downtime",
      dataProcessed: "Real-time sensor data",
      users: 20,
      revenue: "$500K+ savings annually"
    },
    tags: ["IoT", "Predictive Analytics", "Time Series", "Maintenance", "Industry 4.0"],
    status: "completed"
  }
]

export const experiences: Experience[] = [
  {
    id: "senior-data-scientist-freelance",
    company: "Freelance Consultant",
    position: "Senior Data Scientist & Frappe Solution Architect",
    duration: "2023 - Present",
    location: "Remote",
    type: "freelance",
    description: [
      "Leading end-to-end data science projects from problem definition to production deployment",
      "Designing and implementing custom Frappe/ERPNext solutions for diverse industries",
      "Providing technical consultation for digital transformation and business automation initiatives",
      "Mentoring junior data scientists and conducting technical workshops"
    ],
    technologies: ["Python", "TensorFlow", "Frappe Framework", "ERPNext", "AWS", "Docker"],
    achievements: [
      "Delivered 15+ successful data science projects with measurable business impact",
      "Implemented ERPNext for 8+ companies, improving operational efficiency by 40% average",
      "Generated $2M+ in cost savings for clients through process automation",
      "Achieved 95%+ client satisfaction rate with 100% project delivery success"
    ],
    projects: ["Brain Tumor Detection", "Manufacturing ERP", "MLOps Platform", "BI Dashboard"]
  },
  {
    id: "ml-research-intern",
    company: "AI Research Lab",
    position: "Machine Learning Research Intern",
    duration: "2022 - 2023",
    location: "West Bengal, India",
    type: "internship",
    description: [
      "Conducted cutting-edge research on disease detection in herbal plants using deep learning",
      "Developed novel CNN architectures for plant disease classification with ResNet algorithm",
      "Published peer-reviewed research paper with 97% accuracy in disease detection",
      "Collaborated with multidisciplinary team on AI applications in agriculture and healthcare"
    ],
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "ResNet", "Jupyter Notebooks"],
    achievements: [
      "Published research paper in international journal with 97% accuracy results",
      "Developed innovative approach to herbal plant disease classification",
      "Presented findings at 3 major AI/ML conferences",
      "Created dataset of 10,000+ plant images for research community"
    ],
    projects: ["Plant Disease Detection", "Medical Image Analysis", "Agricultural AI"]
  },
  {
    id: "fullstack-developer-internship",
    company: "Tech Startup",
    position: "Full-Stack Developer Intern",
    duration: "2021 - 2022",
    location: "Remote",
    type: "internship",
    description: [
      "Developed responsive web applications using modern JavaScript frameworks",
      "Built RESTful APIs and implemented database solutions for scalable applications",
      "Integrated third-party services and payment gateways for e-commerce platforms",
      "Participated in agile development processes and code review practices"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "Git"],
    achievements: [
      "Built 5+ production-ready web applications from scratch",
      "Improved application performance by 40% through optimization techniques",
      "Implemented secure authentication and authorization systems",
      "Mentored 3 junior interns in modern web development practices"
    ],
    projects: ["E-commerce Platform", "Portfolio Websites", "API Development"]
  }
]

export const education: Education[] = [
  {
    id: "btech-cse",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Coochbehar Government Engineering College",
    duration: "2019 - 2023",
    cgpa: "9.30",
    specialization: "Artificial Intelligence & Machine Learning",
    achievements: [
      "Graduated with First Class Honors (CGPA: 9.30/10)",
      "Specialized in AI/ML with focus on deep learning and computer vision",
      "Published research paper on medical image analysis during final year",
      "Led university AI/ML club and organized technical workshops",
      "Winner of multiple coding competitions and hackathons"
    ]
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary Certificate (Science)",
    institution: "Bishnupur High School",
    duration: "2017",
    percentage: "70%",
    specialization: "Physics, Chemistry, Mathematics",
    achievements: [
      "Secured admission in top engineering college",
      "Strong foundation in mathematics and sciences",
      "Participated in state-level science exhibitions"
    ]
  }
]

export const certifications: Certification[] = [
  {
    id: "aws-ml-specialty",
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    issueDate: "2023",
    credentialUrl: "https://aws.amazon.com/certification/",
    skills: ["Machine Learning", "AWS", "Cloud Computing", "MLOps"]
  },
  {
    id: "tensorflow-developer",
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    issueDate: "2023",
    credentialUrl: "https://www.tensorflow.org/certificate",
    skills: ["TensorFlow", "Deep Learning", "Neural Networks", "Computer Vision"]
  },
  {
    id: "frappe-certified-developer",
    name: "Frappe Certified Developer",
    issuer: "Frappe Technologies",
    issueDate: "2023",
    credentialUrl: "https://frappe.io/certification",
    skills: ["Frappe Framework", "ERPNext", "Business Applications", "Python"]
  }
]
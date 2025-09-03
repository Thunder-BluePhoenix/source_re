import { Project, Skill, Experience } from '@/types'

export const personalInfo = {
  name: "Rahul Sarkar",
  title: "Full-Stack Developer & AI/ML Engineer",
  subtitle: "Building intelligent web solutions with modern technologies",
  email: "rahulsarkar7phoenix@gmail.com",
  phone: "+91 8670972005",
  location: "Durgapur, West Bengal, India",
  website: "https://rahulsarkar99phoenix.netlify.app/",
  github: "https://github.com/Thunder-BluePhoenix",
  linkedin: "https://linkedin.com/in/rahul-sarkar",
  bio: "Passionate full-stack developer with expertise in AI/ML and enterprise solutions. I love creating scalable web applications that solve real-world problems using cutting-edge technologies.",
}

export const skills: Skill[] = [
  {
    name: "React.js",
    category: "Frontend",
    level: 9,
    years: 3,
    projects: ["E-commerce Platform", "Portfolio Website", "Analytics Dashboard"],
    icon: "⚛️"
  },
  {
    name: "Next.js",
    category: "Frontend", 
    level: 8,
    years: 2,
    projects: ["Portfolio Website", "Blog Platform"],
    icon: "🔺"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: 8,
    years: 2,
    projects: ["All recent projects"],
    icon: "📘"
  },
  {
    name: "Node.js",
    category: "Backend",
    level: 8,
    years: 2,
    projects: ["API Services", "Real-time Applications"],
    icon: "🟢"
  },
  {
    name: "Python",
    category: "Backend",
    level: 9,
    years: 4,
    projects: ["ML Models", "Data Analysis", "API Development"],
    icon: "🐍"
  },
  {
    name: "TensorFlow",
    category: "AI/ML",
    level: 9,
    years: 3,
    projects: ["Brain Tumor Detection", "Image Classification"],
    icon: "🧠"
  },
  {
    name: "MongoDB",
    category: "Database",
    level: 8,
    years: 2,
    projects: ["E-commerce", "User Management"],
    icon: "🍃"
  }
]

export const projects: Project[] = [
  {
    id: "blockchain-voting",
    title: "Enhanced Blockchain Voting System",
    description: "Secure, transparent voting platform built on Ethereum with real-time results and voter verification.",
    longDescription: "Complete voting application with smart contract backend, React frontend, and comprehensive admin panel. Features include voter registration, ballot creation, real-time vote tracking, and results visualization.",
    technologies: ["Ethereum", "Solidity", "React", "Web3.js", "Node.js", "MetaMask"],
    category: "blockchain",
    githubUrl: "https://github.com/Thunder-BluePhoenix/blockchain-voting-enhanced",
    imageUrl: "/projects/blockchain-voting.png",
    featured: true,
    metrics: {
      users: 1000,
      performance: "100% tamper-proof",
      impact: "Processed 1000+ secure votes"
    }
  },
  {
    id: "brain-tumor-detection",
    title: "Brain Tumor Detection System",
    description: "CNN-based medical image analysis system for detecting brain tumors in MRI scans with high accuracy.",
    longDescription: "Developed an advanced deep learning system using CNN architecture to detect and classify brain tumors from MRI images. The system achieves 95%+ accuracy and includes a web interface for medical professionals.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "React"],
    category: "ai-ml",
    githubUrl: "https://github.com/Thunder-BluePhoenix/brain-tumor-detection-enhanced",
    imageUrl: "/projects/brain-tumor.png",
    featured: true,
    metrics: {
      performance: "95% accuracy rate",
      impact: "Analyzed 1000+ medical images"
    }
  }
]

export const experiences: Experience[] = [
  {
    id: "freelance-developer",
    company: "Freelance",
    position: "Full-Stack Developer & Consultant", 
    duration: "2023 - Present",
    location: "Remote",
    description: [
      "Developing custom web applications and AI/ML solutions for diverse clients",
      "Leading end-to-end project development from requirement analysis to deployment",
      "Providing technical consultation for digital transformation initiatives"
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "MongoDB", "AWS"],
    achievements: [
      "Successfully delivered 10+ projects with 100% client satisfaction",
      "Reduced client operational costs by average 30% through automation",
      "Built scalable solutions serving 50,000+ end users"
    ]
  }
]
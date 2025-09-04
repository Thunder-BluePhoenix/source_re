import { BlogPost } from '@/types'

// Sample blog data - replace with your actual blog posts
const samplePosts: BlogPost[] = [
  {
    id: 'brain-tumor-detection-deep-dive',
    title: 'Building a Brain Tumor Detection System with Deep Learning',
    excerpt: 'A comprehensive guide on developing a CNN-based medical image analysis system that achieved 97% accuracy in detecting brain tumors from MRI scans.',
    content: 'Full article content here...',
    publishedAt: '2023-12-15',
    tags: ['Deep Learning', 'Medical AI', 'Computer Vision', 'TensorFlow'],
    category: 'ai-ml',
    readTime: 12,
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop'
  },
  {
    id: 'frappe-erp-implementation-guide',
    title: 'Complete Guide to ERPNext Implementation for Manufacturing',
    excerpt: 'Step-by-step process of implementing ERPNext for a manufacturing company, including customizations and business process optimization.',
    content: 'Full article content here...',
    publishedAt: '2023-12-10',
    tags: ['ERPNext', 'Frappe', 'Manufacturing', 'Business Process'],
    category: 'frappe',
    readTime: 15,
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
  },
  {
    id: 'mlops-best-practices',
    title: 'MLOps Best Practices: From Development to Production',
    excerpt: 'Learn how to build robust ML pipelines that scale from prototype to production with automated testing, monitoring, and deployment.',
    content: 'Full article content here...',
    publishedAt: '2023-12-05',
    tags: ['MLOps', 'DevOps', 'Machine Learning', 'Automation'],
    category: 'data-science',
    readTime: 10,
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=600&h=300&fit=crop'
  },
  {
    id: 'business-intelligence-dashboard',
    title: 'Creating Real-time Business Intelligence Dashboards',
    excerpt: 'How to build interactive BI dashboards that provide real-time insights and enable data-driven decision making.',
    content: 'Full article content here...',
    publishedAt: '2023-11-28',
    tags: ['Business Intelligence', 'Data Visualization', 'Analytics'],
    category: 'data-science',
    readTime: 8,
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop'
  },
  {
    id: 'frappe-custom-app-development',
    title: 'Building Custom Frappe Applications: A Developer\'s Guide',
    excerpt: 'Learn how to create custom applications in the Frappe framework with DocTypes, workflows, and business logic.',
    content: 'Full article content here...',
    publishedAt: '2023-11-20',
    tags: ['Frappe Framework', 'Custom Development', 'Python'],
    category: 'frappe',
    readTime: 12,
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop'
  }
]

export async function getBlogPosts(): Promise<BlogPost[]> {
  // In a real app, this would fetch from your CMS or database
  return samplePosts
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  // In a real app, this would fetch a specific post
  const post = samplePosts.find(post => post.id === id)
  return post || null
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  return samplePosts.filter(post => post.category === category)
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  return samplePosts.filter(post => post.featured)
}
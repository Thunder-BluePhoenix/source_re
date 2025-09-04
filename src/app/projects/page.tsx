import { Metadata } from 'next'
import { ProjectsHero } from '@/components/sections/projects-hero'
import { ProjectsGrid } from '@/components/sections/projects-grid'
import { ProjectsStats } from '@/components/sections/projects-stats'

export const metadata: Metadata = {
  title: 'Projects | Rahul Sarkar - Data Science & ERP Solutions',
  description: 'Explore Rahul Sarkar\'s portfolio of data science projects, ML models, and Frappe/ERPNext implementations. Real-world solutions with measurable business impact.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <ProjectsHero />
      <ProjectsStats />
      <ProjectsGrid />
    </div>
  )
}
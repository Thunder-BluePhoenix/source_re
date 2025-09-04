import { Metadata } from 'next'
import { ExperienceHero } from '@/components/sections/experience-hero'
import { ExperienceTimeline } from '@/components/sections/experience-timeline'
import { ExperienceImpact } from '@/components/sections/experience-impact'

export const metadata: Metadata = {
  title: 'Experience | Rahul Sarkar - Professional Journey',
  description: 'Rahul Sarkar\'s professional experience in Data Science, Machine Learning, and Frappe/ERPNext development. 15+ successful projects delivered.',
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-20">
      <ExperienceHero />
      <ExperienceTimeline />
      <ExperienceImpact />
    </div>
  )
}
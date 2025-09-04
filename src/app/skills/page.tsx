import { Metadata } from 'next'
import { SkillsHero } from '@/components/sections/skills-hero'
import { SkillsSection } from '@/components/sections/skills'
import { SkillsTimeline } from '@/components/sections/skills-timeline'

export const metadata: Metadata = {
  title: 'Skills | Rahul Sarkar - Technical Expertise',
  description: 'Comprehensive overview of Rahul Sarkar\'s technical skills in Data Science, AI/ML, Frappe/ERPNext, and full-stack development.',
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-20">
      <SkillsHero />
      <SkillsSection />
      <SkillsTimeline />
    </div>
  )
}
import { Metadata } from 'next'
import { AboutHero } from '@/components/sections/about-hero'
import { AboutExperience } from '@/components/sections/about-experience'
import { AboutEducation } from '@/components/sections/about-education'
import { AboutCertifications } from '@/components/sections/about-certifications'

export const metadata: Metadata = {
  title: 'About | Rahul Sarkar - Data Scientist & Frappe Solution Architect',
  description: 'Learn about Rahul Sarkar\'s journey in Data Science, Machine Learning, and Frappe/ERPNext development. 4+ years of experience delivering business value through technology.',
}


export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <AboutHero />
      <AboutExperience />
      <AboutEducation />
      <AboutCertifications />
    </div>
  )
}
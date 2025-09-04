import { Metadata } from 'next'
import { ContactHero } from '@/components/sections/contact-hero'
import { ContactSection } from '@/components/sections/contact'
import { ContactInfo } from '@/components/sections/contact-info'

export const metadata: Metadata = {
  title: 'Contact | Rahul Sarkar - Get In Touch',
  description: 'Get in touch with Rahul Sarkar for Data Science projects, Frappe/ERPNext implementations, or technical consultations.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <ContactHero />
      <ContactSection />
      <ContactInfo />
    </div>
  )
}
import { HeroSection } from '@/components/sections/hero'
import { SkillsSection } from '@/components/sections/skills'
import { ProjectsSection } from '@/components/sections/projects'
import { ContactSection } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
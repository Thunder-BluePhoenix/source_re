"use client"

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { personalInfo } from '@/lib/data'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function HeroSection() {
  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={fadeInUp}>
            <Badge variant="outline" className="text-sm px-4 py-2">
              👋 Hello, I'm Rahul Sarkar
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="block">Full-Stack Developer</span>
            <span className="block bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
              & AI/ML Engineer
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground h-20 flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                'Building intelligent web solutions',
                2000,
                'Creating scalable React applications',
                2000,
                'Developing AI/ML powered systems',
                2000,
                'Crafting seamless user experiences',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto"
          >
            {['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'TensorFlow', 'MongoDB', 'AWS'].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={handleScrollToProjects}
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <a href="/resume.pdf" download>
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              asChild
            >
              <a href={`mailto:${personalInfo.email}`}>
                Get In Touch
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            className="pt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block cursor-pointer"
              onClick={handleScrollToProjects}
            >
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
                <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mx-auto" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
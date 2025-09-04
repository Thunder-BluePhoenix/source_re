"use client"

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Download, Mail, Sparkles, Brain, Database, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
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

const expertiseAreas = [
  { icon: Brain, label: "AI/ML Expert", color: "text-purple-500", description: "4+ years" },
  { icon: Database, label: "Data Scientist", color: "text-blue-500", description: "Full-Stack" },
  { icon: Sparkles, label: "Frappe/ERPNext", color: "text-green-500", description: "Solution Architect" },
]

export function HeroSection() {
  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
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
            <Badge variant="outline" className="text-sm px-4 py-2 bg-background/80 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              Available for Data Science & ERP Projects
            </Badge>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="block">Data Scientist &</span>
            <span className="block gradient-text">
              Frappe Solution Architect
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground h-20 flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                'Building intelligent ML solutions',
                2000,
                'Implementing enterprise ERPNext systems',
                2000,
                'Transforming data into business insights',
                2000,
                'Automating complex business processes',
                2000,
                'Creating end-to-end AI/ML pipelines',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </motion.div>

          {/* Expertise Cards */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.label}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="p-4 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors`}>
                      <area.icon className={`w-5 h-5 ${area.color} group-hover:text-primary`} />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-sm">{area.label}</div>
                      <div className="text-xs text-muted-foreground">{area.description}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Key Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {[
              { number: "15+", label: "Data Science Projects" },
              { number: "8+", label: "ERP Implementations" },
              { number: "97%", label: "ML Model Accuracy" },
              { number: "$2M+", label: "Client Savings" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto"
          >
            {[
              'Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Frappe Framework', 
              'ERPNext', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'AWS', 'MLOps'
            ].map((tech) => (
              <Badge key={tech} variant="secondary" className="tech-badge text-sm py-1 px-3">
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
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Brain className="mr-2 h-4 w-4" />
              View My Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              asChild
              className="backdrop-blur-sm hover:bg-background/80"
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              asChild
              className="hover:bg-background/80 backdrop-blur-sm"
            >
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Let's Connect
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
              className="inline-block cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
              onClick={handleScrollToProjects}
            >
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
                <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mx-auto animate-bounce" />
              </div>
              <div className="text-xs text-muted-foreground mt-2">Scroll to explore</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
"use client"

import { motion } from 'framer-motion'
import { Brain, Database, Sparkles, Award } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <Brain className="w-8 h-8 mx-auto mb-2 text-purple-500" />
              <div className="font-semibold">AI/ML Expert</div>
              <div className="text-sm text-muted-foreground">4+ Years</div>
            </div>
            <div className="text-center">
              <Database className="w-8 h-8 mx-auto mb-2 text-blue-500" />
              <div className="font-semibold">Data Scientist</div>
              <div className="text-sm text-muted-foreground">Full-Stack</div>
            </div>
            <div className="text-center">
              <Sparkles className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <div className="font-semibold">Frappe/ERPNext</div>
              <div className="text-sm text-muted-foreground">Solution Architect</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-orange-500" />
              <div className="font-semibold">Published Research</div>
              <div className="text-sm text-muted-foreground">97% Accuracy</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
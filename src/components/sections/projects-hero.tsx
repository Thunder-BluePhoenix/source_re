"use client"

import { motion } from 'framer-motion'
import { Lightbulb, Target, TrendingUp } from 'lucide-react'

export function ProjectsHero() {
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
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of real-world solutions in Data Science, Machine Learning, and Enterprise Automation. 
            Each project demonstrates technical expertise and measurable business impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            <div className="text-center p-6 rounded-lg bg-background/50">
              <Lightbulb className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
              <div className="font-semibold">Innovation</div>
              <div className="text-sm text-muted-foreground">Cutting-edge AI/ML solutions</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-background/50">
              <Target className="w-8 h-8 mx-auto mb-3 text-red-500" />
              <div className="font-semibold">Impact</div>
              <div className="text-sm text-muted-foreground">Measurable business results</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-background/50">
              <TrendingUp className="w-8 h-8 mx-auto mb-3 text-green-500" />
              <div className="font-semibold">Scale</div>
              <div className="text-sm text-muted-foreground">Production-ready systems</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
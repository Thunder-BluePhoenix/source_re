"use client"

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users } from 'lucide-react'

export function ExperienceHero() {
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
            Professional Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through Data Science, Machine Learning, and Enterprise Solutions. 
            From research to real-world implementations that drive business transformation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Companies Served</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export function ContactHero() {
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
            Let's Work Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with Data Science or implement a robust ERP solution? 
            Let's discuss how we can achieve your goals together.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            <div className="text-center p-4 rounded-lg bg-background/50">
              <Mail className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="font-medium">Email</div>
              <div className="text-sm text-muted-foreground">{personalInfo.email}</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/50">
              <Phone className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="font-medium">Phone</div>
              <div className="text-sm text-muted-foreground">{personalInfo.phone}</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/50">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="font-medium">Location</div>
              <div className="text-sm text-muted-foreground">{personalInfo.location}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
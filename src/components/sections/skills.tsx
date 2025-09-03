"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { skills } from '@/lib/data'
import { SkillChart } from '@/components/charts/skill-chart'

const skillCategories = [
  'All',
  'Frontend',
  'Backend', 
  'AI/ML',
  'Database',
  'DevOps',
  'Frappe'
]

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  const getSkillsByCategory = (category: string) => 
    skills.filter(skill => skill.category === category)

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I've worked with and continue to learn. Each skill represents years of hands-on experience building real-world applications.
          </p>
        </motion.div>

        <Tabs defaultValue="grid" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="chart">Chart View</TabsTrigger>
          </TabsList>

          <TabsContent value="grid" className="space-y-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {skillCategories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">{skill.icon}</span>
                          <CardTitle className="text-lg">{skill.name}</CardTitle>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Skill Level Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Proficiency</span>
                          <span>{skill.level}/10</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level * 10}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>

                      {/* Experience */}
                      <div className="text-sm text-muted-foreground">
                        <strong>{skill.years}+ years</strong> of experience
                      </div>

                      {/* Project Count */}
                      <div className="text-sm">
                        <span className="font-medium text-primary">
                          {skill.projects.length}
                        </span>
                        <span className="text-muted-foreground"> projects</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="chart" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Skills by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <SkillChart data={skills} type="radar" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Experience Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <SkillChart data={skills} type="timeline" />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Frontend', 'Backend', 'AI/ML'].map((category) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category} Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SkillChart 
                      data={getSkillsByCategory(category)} 
                      type="bar" 
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
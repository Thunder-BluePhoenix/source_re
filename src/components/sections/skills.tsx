"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { skills } from '@/lib/data'
import { SkillChart } from '@/components/charts/skill-chart'

const skillCategories = [
  'All',
  'Data Science',
  'AI/ML', 
  'Frappe/ERPNext',
  'Analytics',
  'Frontend',
  'Backend',
  'Database'
]

const getCategoryColor = (category: string) => {
  const colors = {
    'Data Science': 'skill-data-science',
    'AI/ML': 'skill-ai-ml',
    'Frappe/ERPNext': 'skill-frappe',
    'Frontend': 'skill-frontend',
    'Backend': 'skill-backend',
    'Database': 'skill-database',
    'Analytics': 'skill-analytics',
    'DevOps': 'skill-devops',
    'Solution Architecture': 'skill-frappe'
  }
  return colors[category as keyof typeof colors] || 'skill-data-science'
}

const getSkillIcon = (skillName: string) => {
  const icons: { [key: string]: string } = {
    'Python Data Science Stack': '🐍',
    'Machine Learning': '🤖',
    'Deep Learning & Neural Networks': '🧠',
    'Data Visualization': '📊',
    'Big Data & Analytics': '📈',
    'Statistics & Probability': '📐',
    'MLOps & AI Operations': '⚙️',
    'LLM & NLP': '🗣️',
    'Frappe Framework': '🔧',
    'ERPNext Implementation': '🏢',
    'Business Process Optimization': '🔄',
    'ERP Integrations': '🔗',
    'React.js & Next.js': '⚛️',
    'Node.js & Express': '🟢',
    'Database Management': '🗄️',
    'Cloud & DevOps': '☁️'
  }
  return icons[skillName] || '💡'
}

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning Data Science, Machine Learning, Enterprise Solutions, 
            and Full-Stack Development. Each skill represents years of hands-on experience 
            delivering real-world business value.
          </p>
        </motion.div>

        <Tabs defaultValue="grid" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="grid">Skills Overview</TabsTrigger>
            <TabsTrigger value="chart">Data Visualization</TabsTrigger>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="interactive-card h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{getSkillIcon(skill.name)}</div>
                          <div>
                            <CardTitle className="text-lg leading-tight">{skill.name}</CardTitle>
                            <Badge 
                              variant="outline" 
                              className={`text-xs mt-1 ${getCategoryColor(skill.category)}`}
                            >
                              {skill.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right text-sm">
                          <div className="font-bold text-primary text-xl">{skill.level}/10</div>
                          <div className="text-xs text-muted-foreground">proficiency</div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Skill Level Bar */}
                      <div className="space-y-2">
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level * 10}%` }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>

                      {/* Experience & Projects */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center p-2 bg-muted/50 rounded-lg">
                          <div className="font-bold text-primary">{skill.years}+</div>
                          <div className="text-xs text-muted-foreground">years</div>
                        </div>
                        <div className="text-center p-2 bg-muted/50 rounded-lg">
                          <div className="font-bold text-primary">{skill.projects.length}</div>
                          <div className="text-xs text-muted-foreground">projects</div>
                        </div>
                      </div>

                      {/* Sub-skills */}
                      {skill.subSkills && (
                        <div className="space-y-2">
                          <div className="text-sm font-medium">Key Technologies:</div>
                          <div className="flex flex-wrap gap-1">
                            {skill.subSkills.slice(0, 4).map((subSkill) => (
                              <Badge key={subSkill} variant="secondary" className="text-xs py-0">
                                {subSkill}
                              </Badge>
                            ))}
                            {skill.subSkills.length > 4 && (
                              <Badge variant="secondary" className="text-xs py-0">
                                +{skill.subSkills.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Certifications */}
                      {skill.certifications && skill.certifications.length > 0 && (
                        <div className="pt-2 border-t">
                          <div className="text-sm font-medium text-green-600 dark:text-green-400">
                            ✅ Certified
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="chart" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="chart-container">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    📊 Skills by Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <SkillChart data={skills} type="radar" />
                </CardContent>
              </Card>

              <Card className="chart-container">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    ⏱️ Experience Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <SkillChart data={skills} type="timeline" />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Data Science', 'AI/ML', 'Frappe/ERPNext'].map((category) => (
                <Card key={category} className="chart-container">
                  <CardHeader>
                    <CardTitle className="text-lg">{category} Proficiency</CardTitle>
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
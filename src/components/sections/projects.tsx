"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github, Star, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { projects } from '@/lib/data'

const categories = ['all', 'fullstack', 'ai-ml', 'blockchain', 'frappe']

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise through real-world applications. Each project demonstrates problem-solving skills and modern development practices.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors capitalize"
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'ai-ml' ? 'AI/ML' : category}
            </Badge>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* All Projects Button */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: { technologies: string[]; [key: string]: any }, index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className={`object-cover transition-all duration-300 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-yellow-500 text-yellow-50">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="backdrop-blur-sm">
              {project.category === 'ai-ml' ? 'AI/ML' : project.category}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between space-y-4">
          {/* Technologies */}
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4} more
              </Badge>
            )}
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-2 gap-4 text-sm">
              {project.metrics.users && (
                <div className="flex items-center text-muted-foreground">
                  <Users className="w-4 h-4 mr-1" />
                  {project.metrics.users.toLocaleString()} users
                </div>
              )}
              {project.metrics.performance && (
                <div className="flex items-center text-muted-foreground">
                  <Zap className="w-4 h-4 mr-1" />
                  {project.metrics.performance}
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex space-x-2">
              {project.githubUrl && (
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>

            {/* Project Details Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  <DialogDescription>
                    {project.longDescription}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Metrics */}
                  {project.metrics && (
                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {project.metrics.users && (
                          <div className="text-center p-4 bg-muted rounded-lg">
                            <div className="text-2xl font-bold text-primary">
                              {project.metrics.users.toLocaleString()}+
                            </div>
                            <div className="text-sm text-muted-foreground">Users</div>
                          </div>
                        )}
                        {project.metrics.performance && (
                          <div className="text-center p-4 bg-muted rounded-lg">
                            <div className="text-2xl font-bold text-primary">
                              {project.metrics.performance}
                            </div>
                            <div className="text-sm text-muted-foreground">Performance</div>
                          </div>
                        )}
                        {project.metrics.impact && (
                          <div className="text-center p-4 bg-muted rounded-lg">
                            <div className="text-2xl font-bold text-primary">
                              {project.metrics.impact}
                            </div>
                            <div className="text-sm text-muted-foreground">Impact</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex justify-center space-x-4">
                    {project.githubUrl && (
                      <Button asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Source Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="outline" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
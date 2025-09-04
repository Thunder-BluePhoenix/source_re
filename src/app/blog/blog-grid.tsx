"use client"

import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BlogPost } from '@/types'

interface BlogGridProps {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  const featuredPosts = posts.filter(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured)

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <FeaturedPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  )
}

function FeaturedPostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
        <div className="relative aspect-video">
          <Image
            src={post.imageUrl || `https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop`}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-yellow-500 text-yellow-50">
              Featured
            </Badge>
          </div>
        </div>
        
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="w-4 h-4" />
            {new Date(post.publishedAt).toLocaleDateString()}
            <Clock className="w-4 h-4 ml-2" />
            {post.readTime} min read
          </div>
          
          <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </CardTitle>
          
          <CardDescription className="line-clamp-3">
            {post.excerpt}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/blog/${post.id}`}>
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 h-full">
        <div className="relative aspect-video">
          <Image
            src={post.imageUrl || `https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop`}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Calendar className="w-3 h-3" />
            {new Date(post.publishedAt).toLocaleDateString()}
            <Clock className="w-3 h-3 ml-2" />
            {post.readTime} min
          </div>
          
          <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <CardDescription className="line-clamp-2 mb-4">
            {post.excerpt}
          </CardDescription>
          
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              {post.category}
            </Badge>
            
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/blog/${post.id}`}>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
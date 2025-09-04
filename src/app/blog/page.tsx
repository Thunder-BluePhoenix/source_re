import { Metadata } from 'next'
import { BlogHeader } from '@/app/blog/blog-header'
import { BlogGrid } from '@/app/blog/blog-grid'
import { getBlogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | Rahul Sarkar',
  description: 'Technical articles, tutorials, and insights on full-stack development, AI/ML, and modern web technologies.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen pt-20">
      <BlogHeader />
      <BlogGrid posts={posts} />
    </div>
  )
}
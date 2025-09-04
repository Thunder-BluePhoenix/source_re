import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AIAssistant } from '@/components/ai-assistant'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rahul Sarkar | Data Scientist & Frappe Solution Architect',
  description: 'Senior Data Scientist and Frappe/ERPNext Solution Architect specializing in ML/AI, business intelligence, and enterprise automation solutions.',
  keywords: ['Data Scientist', 'Frappe Developer', 'ERPNext', 'Machine Learning', 'Business Intelligence', 'Solution Architecture'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <AIAssistant />
        </ThemeProvider>
      </body>
    </html>
  )
}
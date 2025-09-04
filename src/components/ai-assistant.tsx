"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { ChatMessage } from '@/types'

const SUGGESTED_QUESTIONS = [
  "Tell me about Rahul's data science expertise",
  "What Frappe/ERPNext projects has he worked on?",
  "How experienced is he with machine learning?",
  "What's his approach to solution architecture?",
  "Can he help with business process automation?",
  "What makes him different from other developers?"
]

const AI_CONTEXT = `
You are Rahul Sarkar's AI assistant. Rahul is a Senior Data Scientist and Frappe/ERPNext Solution Architect with the following expertise:

CORE STRENGTHS:
- Data Science: Python ecosystem (Pandas, NumPy, Scikit-learn), ML/AI, Deep Learning (TensorFlow, Keras, PyTorch)
- Frappe/ERPNext: Custom app development, business process automation, ERP implementation and customization
- Full-Stack Development: React, Next.js, Node.js, Python, databases
- Solution Architecture: End-to-end system design, digital transformation, process optimization

KEY PROJECTS:
1. Brain Tumor Detection using CNN - 97% accuracy, published research
2. Manufacturing ERP Solution - 45% efficiency improvement for client
3. MLOps Platform - Automated ML model deployment and monitoring
4. Business Intelligence Dashboard - Real-time analytics and reporting

EXPERIENCE:
- 4+ years in Data Science and ML
- 3+ years with Frappe Framework and ERPNext
- Published researcher with peer-reviewed papers
- Freelance consultant serving 15+ clients
- Expert in business process optimization and automation

Be helpful, professional, and knowledgeable. Provide specific details about his skills and achievements.
`

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: "👋 Hi! I'm Rahul's AI assistant. I can answer questions about his expertise in Data Science, Machine Learning, Frappe/ERPNext, and solution architecture. What would you like to know?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (message?: string) => {
    const messageToSend = message || input.trim()
    if (!messageToSend || isLoading) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: messageToSend,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setShowSuggestions(false)

    try {
      // Simulate AI response (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Generate contextual response based on the question
      const response = generateResponse(messageToSend)

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I'm having trouble connecting right now. Please try again or contact Rahul directly at rahulsarkar7phoenix@gmail.com",
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const generateResponse = (question: string): string => {
    const lowerQ = question.toLowerCase()
    
    if (lowerQ.includes('data science') || lowerQ.includes('machine learning') || lowerQ.includes('ml') || lowerQ.includes('ai')) {
      return "🧠 Rahul has 4+ years of experience in Data Science and Machine Learning! His expertise includes:\n\n• **Deep Learning**: TensorFlow, Keras, PyTorch for CNN, RNN models\n• **Computer Vision**: Brain tumor detection with 97% accuracy\n• **MLOps**: End-to-end ML pipeline development and deployment\n• **Analytics**: Business intelligence dashboards and predictive modeling\n• **Published Research**: Peer-reviewed papers in medical AI\n\nHe's worked on projects ranging from medical image analysis to predictive maintenance systems. Would you like to know about any specific area?"
    }
    
    if (lowerQ.includes('frappe') || lowerQ.includes('erpnext') || lowerQ.includes('erp')) {
      return "🏢 Rahul is an expert Frappe/ERPNext Solution Architect with 3+ years of experience:\n\n• **Custom Development**: Built 15+ custom Frappe apps\n• **ERP Implementation**: Successfully implemented ERPNext for 8+ companies\n• **Business Process**: 45% average efficiency improvement for clients\n• **Integration**: Third-party API integrations and data migration\n• **Industries**: Manufacturing, retail, healthcare, services\n\nHe specializes in transforming manual processes into automated workflows. His manufacturing ERP solution saved a client $200K+ annually! Need help with ERP implementation or customization?"
    }
    
    if (lowerQ.includes('experience') || lowerQ.includes('background') || lowerQ.includes('about')) {
      return "🎯 Rahul is a Senior Data Scientist & Frappe Solution Architect with impressive credentials:\n\n**Education**: B.Tech CSE (CGPA 9.30) from Coochbehar Govt. Engineering College\n\n**Experience**:\n• 4+ years in Data Science & ML\n• 3+ years in Frappe/ERPNext development\n• 15+ successful data science projects delivered\n• Published researcher with peer-reviewed papers\n\n**Impact**: Generated $2M+ in cost savings for clients through automation and AI solutions. He combines technical depth with business acumen to deliver measurable results."
    }
    
    if (lowerQ.includes('project') || lowerQ.includes('portfolio')) {
      return "🚀 Here are some of Rahul's standout projects:\n\n**1. Brain Tumor Detection System**\n• CNN-based medical imaging AI with 97% accuracy\n• Published research paper\n• Real-time inference under 2 seconds\n\n**2. Manufacturing ERP Solution**\n• Custom Frappe/ERPNext implementation\n• 45% efficiency improvement\n• $200K+ annual savings\n\n**3. MLOps Platform**\n• Automated ML model deployment\n• 75% faster deployment process\n• Used by 5+ data science teams\n\nEach project demonstrates his ability to deliver real business value through technology!"
    }
    
    if (lowerQ.includes('hire') || lowerQ.includes('available') || lowerQ.includes('freelance') || lowerQ.includes('consulting')) {
      return "✅ Great news! Rahul is currently available for:\n\n• **Data Science Projects**: ML model development, analytics, AI solutions\n• **Frappe/ERPNext**: Implementation, customization, migration\n• **Consulting**: Solution architecture, digital transformation\n• **Training**: Technical workshops and mentoring\n\n**Track Record**: 95%+ client satisfaction, 100% on-time delivery\n\nReady to discuss your project? Contact him at:\n📧 rahulsarkar7phoenix@gmail.com\n📱 +91 8670972005\n\nHe typically responds within 24 hours!"
    }
    
    if (lowerQ.includes('skill') || lowerQ.includes('technology') || lowerQ.includes('tech stack')) {
      return "⚡ Rahul's comprehensive tech stack:\n\n**Data Science & ML**:\n• Python, Pandas, NumPy, Scikit-learn\n• TensorFlow, Keras, PyTorch\n• Plotly, Streamlit, Jupyter\n\n**Frappe/ERPNext**:\n• Frappe Framework, ERPNext\n• Custom DocTypes, Server Scripts\n• Business Process Automation\n\n**Full-Stack**:\n• React, Next.js, Node.js\n• Python, JavaScript, TypeScript\n• MongoDB, PostgreSQL, MySQL\n\n**Cloud & DevOps**:\n• Docker, Kubernetes, AWS\n• MLOps, CI/CD pipelines\n\nHe stays updated with latest technologies and continuously expands his expertise!"
    }
    
    // Default response
    return `That's an interesting question! While I can provide general information about Rahul's expertise in Data Science, Machine Learning, Frappe/ERPNext, and solution architecture, I'd recommend contacting him directly for detailed discussions about specific projects or requirements.

📧 **Email**: rahulsarkar7phoenix@gmail.com
📱 **Phone**: +91 8670972005
🔗 **LinkedIn**: linkedin.com/in/rahul-sarkar

Is there anything specific about his technical skills or experience you'd like to know more about?`
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="lg"
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
            />
          </div>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]"
          >
            <Card className="h-full flex flex-col shadow-2xl border-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Bot className="w-6 h-6" />
                    <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-white">AI Assistant</CardTitle>
                    <p className="text-xs text-white/80">Ask about Rahul's expertise</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="w-4 h-4" />
                </Button>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col space-y-4 p-4 overflow-hidden">
                {/* Messages */}
                <ScrollArea ref={scrollAreaRef} className="flex-1 pr-4 custom-scrollbar">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex items-start gap-3 ${
                          message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                        }`}
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          message.role === 'user'
                            ? 'bg-primary text-white'
                            : 'bg-muted'
                        }`}>
                          {message.role === 'user' ? (
                            <User className="w-4 h-4" />
                          ) : (
                            <Bot className="w-4 h-4" />
                          )}
                        </div>
                        
                        <div className={`chat-bubble ${message.role} p-3 rounded-2xl max-w-[80%] ${
                          message.role === 'user'
                            ? 'bg-primary text-white ml-auto'
                            : 'bg-muted mr-auto'
                        }`}>
                          <div className="text-sm whitespace-pre-wrap leading-relaxed">
                            {message.content}
                          </div>
                          <div className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {isLoading && (
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="chat-bubble assistant p-3 rounded-2xl bg-muted">
                          <div className="typing-indicator">
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                {/* Suggestions */}
                {showSuggestions && messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <p className="text-xs text-muted-foreground px-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {SUGGESTED_QUESTIONS.slice(0, 3).map((suggestion, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="cursor-pointer hover:bg-primary hover:text-white transition-colors text-xs py-1"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Input */}
                <div className="flex space-x-2 pt-2 border-t">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything about Rahul..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    size="sm"
                    onClick={() => handleSend()}
                    disabled={!input.trim() || isLoading}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                {/* Footer */}
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Powered by AI • <span className="text-primary">Made with ❤️ by BluePhoenix</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
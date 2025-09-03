import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Here you can integrate with your preferred email service
    // Examples: Resend, SendGrid, Nodemailer, etc.
    
    // Example with Resend (you'll need to install and configure it)
    /*
    import { Resend } from 'resend'
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'contact@yourdomain.com',
      to: 'rahulsarkar7phoenix@gmail.com',
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    })
    */

    // For now, we'll just log the data and return success
    console.log('Contact form submission:', validatedData)
    
    // You could also store this in a database
    // Example with MongoDB:
    /*
    import { MongoClient } from 'mongodb'
    const client = new MongoClient(process.env.MONGODB_URI!)
    await client.connect()
    const db = client.db('portfolio')
    await db.collection('contacts').insertOne({
      ...validatedData,
      timestamp: new Date(),
      status: 'new'
    })
    await client.close()
    */

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }

    // Ensure error is an instance of Error before accessing its properties
    if (error instanceof Error) {
      console.error('Error details:', error.message)
    }
    
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
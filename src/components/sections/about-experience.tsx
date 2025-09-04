import { experiences } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AboutExperience() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.id}>
              <CardHeader>
                <CardTitle>{exp.position} at {exp.company}</CardTitle>
                <p className="text-muted-foreground">{exp.duration} • {exp.location}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {exp.description.map((desc, index) => (
                    <li key={index} className="text-muted-foreground">{desc}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"

const educationData = [
  {
    id: 1,
    institution: "University of Liberal Arts Bangladesh (ULAB)",
    degree: "Bachelor's Degree in Computer Science",
    period: "February 2024 - Present",
    status: "Currently Studying",
    location: "Dhaka, Bangladesh",
    website: "https://ulab.edu.bd/",
    description:
      "Pursuing Computer Science with focus on programming languages including CSS, Java, Python, C, and C++. Active member of Electronics and Robotics Club and Computer Programming Club.",
    achievements: [
      "Member of ULAB Electronics and Robotics Club",
      "Member of ULAB Computer Programming Club",
      "Strong foundation in multiple programming languages",
      "Digital marketing experience integration",
    ],
  },
  {
    id: 2,
    institution: "National College, Badda, Dhaka",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2021 - 2023",
    status: "Completed",
    location: "Badda, Dhaka, Bangladesh",
    website: "https://www.nationalcollege.edu.bd/",
    galleryLinks: ["https://www.nationalcollege.edu.bd/#gallery-5", "https://www.nationalcollege.edu.bd/#gallery-6"],
    description:
      "Completed higher secondary education with excellent academic performance, building foundation for computer science studies.",
    achievements: [
      "Excellent academic performance",
      "Strong foundation in science subjects",
      "Preparation for university entrance",
      "Featured in college gallery",
    ],
  },
  {
    id: 3,
    institution: "Setabganj Govt. Pilot Model High School",
    degree: "Secondary School Certificate (SSC)",
    period: "2016 - 2021",
    status: "Completed",
    location: "Setabganj, Bangladesh",
    description:
      "Completed secondary education with strong academic foundation, developing early interest in technology and programming.",
    achievements: [
      "Strong academic foundation",
      "Early interest in technology",
      "Leadership skills development",
      "Community involvement",
    ],
  },
]

export function EducationSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <GraduationCap className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Educational Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            My academic path from secondary school to university, building expertise in computer science and technology
          </p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card key={edu.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent">
              <CardHeader className="cursor-pointer" onClick={() => toggleCard(edu.id)}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl md:text-2xl group-hover:text-accent transition-colors">
                        {edu.institution}
                      </CardTitle>
                      <Badge variant={edu.status === "Currently Studying" ? "default" : "secondary"}>
                        {edu.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg font-medium text-foreground mb-2">{edu.degree}</CardDescription>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    {expandedCard === edu.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </div>
              </CardHeader>

              {expandedCard === edu.id && (
                <CardContent className="pt-0 animate-fade-in">
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-4">
                      {edu.website && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={edu.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit Website
                          </a>
                        </Button>
                      )}
                      {edu.galleryLinks &&
                        edu.galleryLinks.map((link, idx) => (
                          <Button key={idx} variant="outline" size="sm" asChild>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Gallery {idx + 1}
                            </a>
                          </Button>
                        ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

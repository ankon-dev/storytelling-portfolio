"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp, Users, Code, Zap } from "lucide-react"

const experienceData = [
  {
    id: 1,
    company: "ABCLIT",
    position: "Student & Freelancer",
    period: "May 2022 - Present",
    duration: "3 years 4 months",
    status: "Current",
    location: "Bangladesh",
    website: "https://abclit.com/",
    type: "Digital Marketing NGO",
    description:
      "Gained valuable experience in digital marketing through work with ABCLIT, a digital marketing NGO. Developed skills in online marketing strategies, content creation, and digital campaign management.",
    responsibilities: [
      "Digital marketing campaign development",
      "Content creation and management",
      "Social media strategy implementation",
      "Client communication and project coordination",
      "Market research and analysis",
    ],
    skills: ["Digital Marketing", "Content Creation", "Social Media", "Project Management", "Client Relations"],
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 2,
    company: "ULAB Electronics and Robotics Club",
    position: "Member",
    period: "August 2024 - Present",
    duration: "1 year 1 month",
    status: "Current",
    location: "University of Liberal Arts Bangladesh",
    website: "https://ulab.edu.bd/ulab-electronics-robotics-club",
    type: "University Club",
    description:
      "Active member of the Electronics and Robotics Club, participating in robotics projects, electronics workshops, and technical competitions. Contributing to innovative projects and learning advanced technical skills.",
    responsibilities: [
      "Robotics project development",
      "Electronics circuit design",
      "Workshop participation and organization",
      "Technical competition participation",
      "Peer collaboration and mentoring",
    ],
    skills: ["Robotics", "Electronics", "Circuit Design", "Arduino", "Sensors", "Programming"],
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: 3,
    company: "ULAB Computer Programming Club",
    position: "Member",
    period: "August 2024 - Present",
    duration: "1 year 1 month",
    status: "Current",
    location: "University of Liberal Arts Bangladesh",
    website: "https://ulab.edu.bd/ulab-computer-programming-club",
    type: "University Club",
    description:
      "Active member of the Computer Programming Club, participating in coding competitions, algorithm challenges, and collaborative programming projects. Enhancing programming skills across multiple languages.",
    responsibilities: [
      "Competitive programming participation",
      "Algorithm problem solving",
      "Code review and collaboration",
      "Programming workshop attendance",
      "Peer programming sessions",
    ],
    skills: ["Competitive Programming", "Algorithms", "Data Structures", "Problem Solving", "Code Optimization"],
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: 4,
    company: "Freelance Web Development",
    position: "Junior Web Developer",
    period: "January 2023 - Present",
    duration: "2 years",
    status: "Current",
    location: "Remote",
    type: "Freelance",
    description:
      "Providing web development services to small businesses and startups. Creating responsive websites, web applications, and digital solutions using modern technologies and frameworks.",
    responsibilities: [
      "Custom website development",
      "Responsive design implementation",
      "Client requirement analysis",
      "Project timeline management",
      "Technical support and maintenance",
    ],
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Responsive Design", "Git"],
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: 5,
    company: "Tech Startup Internship",
    position: "Software Development Intern",
    period: "June 2023 - August 2023",
    duration: "3 months",
    status: "Completed",
    location: "Dhaka, Bangladesh",
    type: "Internship",
    description:
      "Completed a summer internship at a local tech startup, working on mobile app development and learning industry best practices. Gained hands-on experience with agile development methodologies.",
    responsibilities: [
      "Mobile app feature development",
      "Bug fixing and testing",
      "Code documentation",
      "Team collaboration",
      "Agile methodology participation",
    ],
    skills: ["Mobile Development", "Java", "Android Studio", "Agile", "Team Collaboration"],
    icon: <Users className="w-5 h-5" />,
  },
]

export function ExperienceSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <Briefcase className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            My journey through various roles, building expertise in technology, digital marketing, and software
            development
          </p>
        </div>

        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <Card key={exp.id} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent">
              <CardHeader className="cursor-pointer" onClick={() => toggleCard(exp.id)}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        {exp.icon}
                        <CardTitle className="text-xl md:text-2xl group-hover:text-accent transition-colors">
                          {exp.company}
                        </CardTitle>
                      </div>
                      <Badge variant={exp.status === "Current" ? "default" : "secondary"}>{exp.status}</Badge>
                    </div>
                    <CardDescription className="text-lg font-medium text-foreground mb-2">
                      {exp.position} • {exp.type}
                    </CardDescription>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period} ({exp.duration})
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    {expandedCard === exp.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </div>
              </CardHeader>

              {expandedCard === exp.id && (
                <CardContent className="pt-0 animate-fade-in">
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Skills Developed:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {exp.website && (
                      <div className="pt-4">
                        <Button variant="outline" size="sm" asChild>
                          <a href={exp.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit Website
                          </a>
                        </Button>
                      </div>
                    )}
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

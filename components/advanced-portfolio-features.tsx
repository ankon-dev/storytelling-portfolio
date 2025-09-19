"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Trophy, Target, Zap, Users, Award, Calendar, BookOpen, Code2 } from "lucide-react"

export function AdvancedPortfolioFeatures() {
  const [activeTab, setActiveTab] = useState("achievements")

  const achievements = [
    {
      title: "Top Performer",
      description: "Ranked in top 10% of Computer Science students at ULAB",
      icon: Trophy,
      date: "2024",
      category: "Academic",
    },
    {
      title: "Project Excellence",
      description: "Successfully completed 15+ web development projects",
      icon: Target,
      date: "2024",
      category: "Professional",
    },
    {
      title: "Community Impact",
      description: "Mentored 20+ junior developers in programming",
      icon: Users,
      date: "2023-2024",
      category: "Leadership",
    },
  ]

  const skills = [
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "React", level: 88, category: "Frontend" },
    { name: "Node.js", level: 82, category: "Backend" },
    { name: "CSS/SCSS", level: 92, category: "Frontend" },
    { name: "Java", level: 80, category: "Backend" },
    { name: "C++", level: 78, category: "Programming" },
    { name: "Digital Marketing", level: 85, category: "Marketing" },
  ]

  const certifications = [
    {
      title: "Advanced Web Development",
      issuer: "ABCLIT",
      date: "2024",
      credentialId: "AWD-2024-001",
    },
    {
      title: "Digital Marketing Fundamentals",
      issuer: "Google Digital Garage",
      date: "2023",
      credentialId: "DMF-2023-456",
    },
    {
      title: "Python Programming",
      issuer: "Coursera",
      date: "2023",
      credentialId: "PP-2023-789",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Advanced Portfolio Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive showcase of achievements, skills, and professional development
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-muted p-1 rounded-lg">
            {[
              { id: "achievements", label: "Achievements", icon: Award },
              { id: "skills", label: "Skills Matrix", icon: Zap },
              { id: "certifications", label: "Certifications", icon: BookOpen },
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center space-x-2"
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <achievement.icon className="w-8 h-8 text-accent" />
                    <Badge variant="secondary">{achievement.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{achievement.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Skills Matrix Tab */}
        {activeTab === "skills" && (
          <div className="space-y-8">
            {["Frontend", "Backend", "Programming", "Marketing"].map((category) => (
              <div key={category}>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Code2 className="w-6 h-6 mr-2 text-accent" />
                  {category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === "certifications" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Award className="w-8 h-8 text-accent" />
                    <Badge variant="outline">{cert.date}</Badge>
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription>Issued by {cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    <p>Credential ID: {cert.credentialId}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

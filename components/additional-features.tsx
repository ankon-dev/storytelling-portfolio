"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "./3d-section-animations"
import {
  Clock,
  Award,
  BookOpen,
  Code2,
  Target,
  TrendingUp,
  Star,
  MessageSquare,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react"

export function AdditionalFeatures() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const skills = [
    { name: "JavaScript", level: 90, color: "bg-yellow-500" },
    { name: "Python", level: 85, color: "bg-blue-500" },
    { name: "Java", level: 80, color: "bg-red-500" },
    { name: "C++", level: 75, color: "bg-purple-500" },
    { name: "CSS", level: 95, color: "bg-pink-500" },
    { name: "React", level: 88, color: "bg-cyan-500" },
    { name: "Node.js", level: 82, color: "bg-green-500" },
    { name: "Digital Marketing", level: 85, color: "bg-orange-500" },
  ]

  const achievements = [
    { title: "ULAB Electronics Club Member", date: "2024", icon: Award },
    { title: "ULAB Programming Club Member", date: "2024", icon: Code2 },
    { title: "ABCLIT Digital Marketing", date: "2022-Present", icon: TrendingUp },
    { title: "Portfolio Projects Completed", date: "10+", icon: Target },
  ]

  const quickStats = [
    { label: "Projects Completed", value: "10+", icon: Target },
    { label: "Years of Experience", value: "3+", icon: Clock },
    { label: "Technologies Mastered", value: "8+", icon: Code2 },
    { label: "Client Satisfaction", value: "100%", icon: Star },
  ]

  return (
    <div className="space-y-16 py-16">
      {/* Live Clock & Status */}
      <AnimatedSection animationType="cube">
        <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              Live Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">{currentTime.toLocaleTimeString()}</div>
                <div className="text-sm text-muted-foreground">Current Time</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-500 font-semibold">Available</span>
                </div>
                <div className="text-sm text-muted-foreground">Status</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">Dhaka, Bangladesh</div>
                <div className="text-sm text-muted-foreground">Location</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Interactive Skills Radar */}
      <AnimatedSection animationType="sphere">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-accent" />
              Interactive Skills Radar
            </CardTitle>
            <CardDescription>Hover over skills to see proficiency levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} transition-all duration-2000 group-hover:animate-pulse`}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.3}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Achievement Timeline */}
      <AnimatedSection animationType="wave">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Achievement Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-500"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <achievement.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Quick Stats Dashboard */}
      <AnimatedSection animationType="flip">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              Quick Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/10 transition-all duration-800"
                >
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Quick Contact Actions */}
      <AnimatedSection animationType="slide">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-accent" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button
                variant="outline"
                className="h-20 flex-col gap-2 hover:bg-accent hover:text-accent-foreground transition-all duration-600 bg-transparent"
                onClick={() => window.open("mailto:ankondasgourab@gmail.com")}
              >
                <Mail className="w-6 h-6" />
                <span className="text-xs">Email Me</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col gap-2 hover:bg-accent hover:text-accent-foreground transition-all duration-600 bg-transparent"
                onClick={() => window.open("tel:+8801822738035")}
              >
                <Phone className="w-6 h-6" />
                <span className="text-xs">Call Me</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col gap-2 hover:bg-accent hover:text-accent-foreground transition-all duration-600 bg-transparent"
                onClick={() => window.open("https://linkedin.com/in/ankonofficial", "_blank")}
              >
                <Linkedin className="w-6 h-6" />
                <span className="text-xs">LinkedIn</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col gap-2 hover:bg-accent hover:text-accent-foreground transition-all duration-600 bg-transparent"
                onClick={() => window.open("https://github.com/ankonOfficial", "_blank")}
              >
                <Github className="w-6 h-6" />
                <span className="text-xs">GitHub</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Learning Progress */}
      <AnimatedSection animationType="slide">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent" />
              Current Learning Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div>
                  <h3 className="font-semibold">Computer Science Degree</h3>
                  <p className="text-sm text-muted-foreground">University of Liberal Arts Bangladesh</p>
                </div>
                <Badge variant="secondary">In Progress</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div>
                  <h3 className="font-semibold">Advanced Web Development</h3>
                  <p className="text-sm text-muted-foreground">React, Next.js, TypeScript</p>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div>
                  <h3 className="font-semibold">Digital Marketing Strategies</h3>
                  <p className="text-sm text-muted-foreground">ABCLIT NGO Experience</p>
                </div>
                <Badge variant="secondary">Ongoing</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  )
}

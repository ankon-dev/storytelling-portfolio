"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "./3d-section-animations"
import {
  Zap,
  Globe,
  Shield,
  Rocket,
  Brain,
  Heart,
  Star,
  Trophy,
  Code,
  Palette,
  Database,
  Smartphone,
  Search,
  BarChart3,
  Users,
  Clock,
} from "lucide-react"

export function PremiumFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)

  const premiumFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Development",
      description: "Leveraging artificial intelligence for smarter code generation and optimization",
      color: "from-purple-500 to-pink-500",
      details: "Advanced machine learning algorithms for automated testing and code review",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Lightning-fast applications with advanced caching and optimization techniques",
      color: "from-blue-500 to-cyan-500",
      details: "99.9% uptime guarantee with global CDN and edge computing",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with advanced encryption and threat protection",
      color: "from-green-500 to-emerald-500",
      details: "Multi-layer security protocols and regular penetration testing",
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Applications that scale seamlessly across multiple regions and platforms",
      color: "from-orange-500 to-red-500",
      details: "Auto-scaling infrastructure with load balancing and failover systems",
    },
  ]

  const technicalExpertise = [
    { name: "Full-Stack Development", icon: Code, level: 95 },
    { name: "UI/UX Design", icon: Palette, level: 90 },
    { name: "Database Architecture", icon: Database, level: 88 },
    { name: "Mobile Development", icon: Smartphone, level: 85 },
    { name: "SEO Optimization", icon: Search, level: 92 },
    { name: "Analytics & Insights", icon: BarChart3, level: 87 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % premiumFeatures.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-16 py-16">
      {/* Premium Features Showcase */}
      <AnimatedSection animationType="cube">
        <Card className="overflow-hidden">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
              <Star className="w-8 h-8 text-accent" />
              Premium Development Features
            </CardTitle>
            <CardDescription className="text-lg">
              Cutting-edge technologies and methodologies for exceptional results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {premiumFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-xl bg-gradient-to-br ${feature.color} text-white transform transition-all duration-500 hover:scale-105 cursor-pointer ${
                    activeFeature === index ? "ring-4 ring-white/50 scale-105" : ""
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <feature.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{feature.description}</p>
                  <div className="text-xs opacity-75">{feature.details}</div>
                  {activeFeature === index && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Technical Expertise Radar */}
      <AnimatedSection animationType="sphere">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
              <Trophy className="w-6 h-6 text-accent" />
              Technical Expertise Matrix
            </CardTitle>
            <CardDescription>Comprehensive skill assessment across multiple domains</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {technicalExpertise.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <skill.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <Badge variant="secondary" className="font-bold">
                      {skill.level}%
                    </Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-accent/70 transition-all duration-1000 group-hover:from-accent/80 group-hover:to-accent"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Success Metrics */}
      <AnimatedSection animationType="wave">
        <Card className="bg-gradient-to-r from-accent/10 to-accent/5">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
              <BarChart3 className="w-6 h-6 text-accent" />
              Success Metrics & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection animationType="flip">
        <Card className="text-center bg-gradient-to-br from-accent to-accent/80 text-accent-foreground">
          <CardContent className="p-8">
            <Heart className="w-16 h-16 mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-lg mb-6 opacity-90">
              Let's collaborate and bring your vision to life with cutting-edge technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-accent hover:bg-white/90"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Users className="w-5 h-5 mr-2" />
                Start a Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-accent bg-transparent"
                onClick={() => window.open("mailto:ankondasgourab@gmail.com")}
              >
                <Clock className="w-5 h-5 mr-2" />
                Schedule a Call
              </Button>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  )
}

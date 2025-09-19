"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Palette,
  Zap,
  Globe,
  Smartphone,
  Database,
  Shield,
  Rocket,
  Brain,
  Heart,
  Download,
  ExternalLink,
  Star,
  Trophy,
  Target,
  Lightbulb,
} from "lucide-react"

export function NewPortfolioFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Advanced Code Architecture",
      description: "Clean, scalable, and maintainable code following industry best practices",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design Systems",
      description: "Comprehensive design systems with consistent UI/UX patterns",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast applications with optimized loading and rendering",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Accessibility",
      description: "WCAG compliant applications accessible to users worldwide",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Development",
      description: "Responsive designs that work perfectly on all devices",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Integration",
      description: "Efficient data management with modern database solutions",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Implementation",
      description: "Robust security measures protecting user data and privacy",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deployment & DevOps",
      description: "Streamlined deployment processes with CI/CD pipelines",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Integration",
      description: "Smart features powered by artificial intelligence and machine learning",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User Experience Focus",
      description: "Intuitive interfaces designed with user psychology in mind",
      color: "from-pink-500 to-rose-500",
    },
  ]

  const achievements = [
    { icon: <Trophy className="w-6 h-6" />, label: "10+ Projects Completed", value: "100%" },
    { icon: <Star className="w-6 h-6" />, label: "Client Satisfaction", value: "5.0★" },
    { icon: <Target className="w-6 h-6" />, label: "On-Time Delivery", value: "100%" },
    { icon: <Lightbulb className="w-6 h-6" />, label: "Innovative Solutions", value: "∞" },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Advanced <span className="text-gradient">Portfolio Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Discover the cutting-edge technologies and methodologies that power my development process
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 transform-3d"
              >
                <div className="flex justify-center mb-3 text-accent">{achievement.icon}</div>
                <div className="text-2xl font-bold mb-1">{achievement.value}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </Card>
            ))}
          </div>

          {/* Interactive Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`p-8 cursor-pointer transition-all duration-500 hover:shadow-2xl transform-3d ${
                  activeFeature === index ? "ring-2 ring-accent scale-105" : "hover:scale-105"
                }`}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} p-4 mb-6 text-white animate-float-3d`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                {activeFeature === index && (
                  <div className="mt-4 pt-4 border-t border-border animate-fade-in-up">
                    <Badge variant="secondary" className="animate-pulse">
                      Featured Technology
                    </Badge>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/ankon-das-cv.pdf"
                  link.download = "Ankon-Das-CV.pdf"
                  link.click()
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 bg-transparent"
                onClick={() => window.open("https://thisisankon.netlify.app/", "_blank")}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Full Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function InteractiveSkillsCloud() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const skills = [
    { name: "React", level: 95, color: "text-blue-500" },
    { name: "Next.js", level: 90, color: "text-gray-800" },
    { name: "TypeScript", level: 88, color: "text-blue-600" },
    { name: "Python", level: 85, color: "text-yellow-500" },
    { name: "Java", level: 82, color: "text-red-500" },
    { name: "C++", level: 80, color: "text-purple-600" },
    { name: "CSS", level: 92, color: "text-blue-400" },
    { name: "Node.js", level: 85, color: "text-green-500" },
    { name: "MongoDB", level: 78, color: "text-green-600" },
    { name: "PostgreSQL", level: 80, color: "text-blue-700" },
    { name: "Git", level: 88, color: "text-orange-500" },
    { name: "Digital Marketing", level: 85, color: "text-pink-500" },
  ]

  return (
    <div ref={containerRef} className="relative py-16 overflow-hidden">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Interactive Skills Cloud</h3>
        <p className="text-muted-foreground">Hover over skills to see proficiency levels</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`relative px-6 py-3 rounded-full border-2 border-accent/20 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg ${skill.color} animate-float-3d`}
            style={{
              animationDelay: `${index * 0.1}s`,
              fontSize: `${0.8 + (skill.level / 100) * 0.6}rem`,
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <span className="font-semibold">{skill.name}</span>

            {hoveredSkill === skill.name && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-2 shadow-lg animate-fade-in-up">
                <div className="text-sm font-medium">{skill.level}% Proficiency</div>
                <div className="w-16 h-2 bg-muted rounded-full mt-1">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

"use client"
import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Smartphone, Globe, Database, Shield, Zap, Users, TrendingUp, BookOpen } from "lucide-react"

export function PortfolioFeatures() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web application development with modern technologies",
      skills: ["React", "Node.js", "TypeScript", "Next.js"],
      color: "text-blue-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces",
      skills: ["Figma", "Adobe XD", "Tailwind CSS", "Design Systems"],
      color: "text-purple-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Responsive and mobile-first application development",
      skills: ["React Native", "PWA", "Mobile UI", "Cross-platform"],
      color: "text-green-500",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Efficient data storage and retrieval solutions",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Database Design"],
      color: "text-orange-500",
    },
    {
      icon: Shield,
      title: "Security & Authentication",
      description: "Implementing secure authentication and authorization",
      skills: ["JWT", "OAuth", "Security Best Practices", "Encryption"],
      color: "text-red-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Building fast and efficient web applications",
      skills: ["Code Splitting", "Lazy Loading", "Caching", "SEO"],
      color: "text-yellow-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working effectively in team environments",
      skills: ["Git", "Agile", "Code Review", "Documentation"],
      color: "text-indigo-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic digital marketing and analytics",
      skills: ["SEO", "Social Media", "Analytics", "Content Strategy"],
      color: "text-pink-500",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Modern web development technologies and frameworks",
      skills: ["HTML5", "CSS3", "JavaScript", "Web APIs"],
      color: "text-cyan-500",
    },
    {
      icon: BookOpen,
      title: "Technical Writing",
      description: "Creating clear documentation and technical content",
      skills: ["Documentation", "Tutorials", "API Docs", "Blogging"],
      color: "text-emerald-500",
    },
  ]

  return (
    <section id="features" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Professional <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              A comprehensive skill set covering all aspects of modern web development and digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-6 h-6 ${feature.color} group-hover:animate-pulse`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

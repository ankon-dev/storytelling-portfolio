"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import {
  Code2,
  Palette,
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
  Users,
  BarChart3,
  Lightbulb,
  Star,
  Award,
} from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end web application development using modern technologies like React, Node.js, and Python.",
    color: "text-blue-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces with focus on user experience.",
    color: "text-purple-500",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive designs that work perfectly across all devices and screen sizes.",
    color: "text-green-500",
  },
  {
    icon: Globe,
    title: "Web Optimization",
    description: "Performance optimization, SEO, and accessibility improvements for better user experience.",
    color: "text-orange-500",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Efficient database design and management for scalable applications.",
    color: "text-red-500",
  },
  {
    icon: Shield,
    title: "Security Implementation",
    description: "Implementing robust security measures to protect applications and user data.",
    color: "text-indigo-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed optimization and performance tuning for lightning-fast applications.",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    title: "Collaborative Development",
    description: "Working effectively in teams using version control and agile methodologies.",
    color: "text-pink-500",
  },
  {
    icon: BarChart3,
    title: "Analytics Integration",
    description: "Implementing analytics and tracking systems for data-driven insights.",
    color: "text-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Problem Solving",
    description: "Creative problem-solving approach to tackle complex technical challenges.",
    color: "text-emerald-500",
  },
]

export function EnhancedFeatures() {
  const [visibleFeatures, setVisibleFeatures] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-feature-index") || "0")
            setVisibleFeatures((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.2 },
    )

    const featureElements = document.querySelectorAll("[data-feature-index]")
    featureElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            A comprehensive set of technical skills and creative abilities that I bring to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-feature-index={index}
              className={`transition-all duration-700 ${
                visibleFeatures.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent/50">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-muted/50 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Achievement Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-gradient">Achievements & Recognition</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-border hover:border-accent/50 transition-all duration-300">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">ULAB Club Member</h4>
              <p className="text-muted-foreground text-sm">
                Active member of Electronics & Robotics Club and Computer Programming Club
              </p>
            </Card>

            <Card className="p-6 text-center border-border hover:border-accent/50 transition-all duration-300">
              <Star className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Digital Marketing Experience</h4>
              <p className="text-muted-foreground text-sm">3+ years of experience with ABCLIT digital marketing NGO</p>
            </Card>

            <Card className="p-6 text-center border-border hover:border-accent/50 transition-all duration-300">
              <Code2 className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Multi-Language Proficiency</h4>
              <p className="text-muted-foreground text-sm">
                Proficient in CSS, Java, Python, C, and C++ programming languages
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

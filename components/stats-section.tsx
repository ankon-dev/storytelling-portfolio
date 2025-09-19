"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Code, Users, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: Code,
    value: "10+",
    label: "Projects Completed",
    description: "Diverse web applications and platforms",
  },
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    description: "Satisfied users and stakeholders",
  },
  {
    icon: Award,
    value: "3+",
    label: "Years Experience",
    description: "In digital marketing and development",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Availability",
    description: "Dedicated to project success",
  },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("stats-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats-section" className="py-20 px-4 bg-accent/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-gradient">By the Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            A snapshot of my journey and achievements in the world of technology and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`p-8 text-center border-border hover:border-accent/50 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-accent/10">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-accent mb-2">{stat.value}</h3>
              <h4 className="text-lg font-semibold mb-2">{stat.label}</h4>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

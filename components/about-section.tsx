"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
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

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Figma",
    "Adobe Creative Suite",
    "Tailwind CSS",
    "GraphQL",
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            <span className="text-gradient">My Journey</span> in Digital Craft
          </h2>

          <Card className="p-8 md:p-12 bg-card border-border">
            <div className="prose prose-lg max-w-none text-card-foreground">
              <p className="text-xl leading-relaxed mb-6">
                My passion for creating digital experiences began during my college years when I discovered the perfect
                intersection of logic and creativity in web development. What started as curiosity about how websites
                work evolved into a deep love for crafting user-centered solutions.
              </p>

              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                I believe that great design isn't just about aesthetics—it's about solving real problems and creating
                meaningful connections between users and technology. Every project I undertake is an opportunity to tell
                a story, whether it's helping a startup launch their first product or reimagining how users interact
                with complex data.
              </p>

              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                My approach combines technical expertise with design thinking, ensuring that every line of code serves a
                purpose and every pixel contributes to the overall user experience. I'm constantly learning and adapting
                to new technologies, always seeking to push the boundaries of what's possible on the web.
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Technologies I Work With</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

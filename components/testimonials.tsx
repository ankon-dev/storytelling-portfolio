"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Project Manager at TechCorp",
    content:
      "Ankon's attention to detail and problem-solving skills are exceptional. He delivered our project ahead of schedule with outstanding quality.",
    rating: 5,
    avatar: "/images/ankon-profile.jpg",
  },
  {
    name: "Dr. Ahmed Rahman",
    role: "Professor at ULAB",
    content:
      "One of the most dedicated students I've taught. Ankon combines technical expertise with creative thinking in remarkable ways.",
    rating: 5,
    avatar: "/images/ankon-profile.jpg",
  },
  {
    name: "Maria Garcia",
    role: "Digital Marketing Director",
    content:
      "Working with Ankon at ABCLIT was a pleasure. His digital marketing strategies significantly improved our campaign performance.",
    rating: 5,
    avatar: "/images/ankon-profile.jpg",
  },
]

export function Testimonials() {
  const [visibleTestimonials, setVisibleTestimonials] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-testimonial-index") || "0")
            setVisibleTestimonials((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.2 },
    )

    const testimonialElements = document.querySelectorAll("[data-testimonial-index]")
    testimonialElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 bg-muted/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-gradient">What People Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Feedback from colleagues, professors, and collaborators who have worked with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-testimonial-index={index}
              className={`transition-all duration-700 ${
                visibleTestimonials.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-accent/50">
                <div className="flex items-start space-x-4 mb-4">
                  <Quote className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{testimonial.content}"</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

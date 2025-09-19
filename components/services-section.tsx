"use client"
import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Smartphone, Database, TrendingUp, MessageSquare } from "lucide-react"

export function ServicesSection() {
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

  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description:
        "Complete web application development from frontend to backend with modern technologies and best practices.",
      features: ["React/Next.js Development", "Node.js Backend", "Database Integration", "API Development"],
      price: "Starting from $1,500",
      duration: "2-6 weeks",
      color: "text-blue-500",
      popular: true,
    },
    {
      icon: Palette,
      title: "UI/UX Design & Development",
      description: "Beautiful, user-friendly interfaces that provide exceptional user experiences across all devices.",
      features: ["Responsive Design", "User Experience Optimization", "Design Systems", "Prototyping"],
      price: "Starting from $800",
      duration: "1-3 weeks",
      color: "text-purple-500",
      popular: false,
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications that work seamlessly on both iOS and Android devices.",
      features: ["React Native Development", "Progressive Web Apps", "Mobile UI/UX", "App Store Deployment"],
      price: "Starting from $2,000",
      duration: "3-8 weeks",
      color: "text-green-500",
      popular: false,
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Solutions",
      description:
        "Comprehensive digital marketing strategies to grow your online presence and reach your target audience.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
      price: "Starting from $500/month",
      duration: "Ongoing",
      color: "text-pink-500",
      popular: true,
    },
    {
      icon: Database,
      title: "Database Design & Management",
      description: "Efficient database solutions for storing, managing, and retrieving your application data.",
      features: ["Database Architecture", "Performance Optimization", "Data Migration", "Backup Solutions"],
      price: "Starting from $600",
      duration: "1-2 weeks",
      color: "text-orange-500",
      popular: false,
    },
    {
      icon: MessageSquare,
      title: "Consultation & Code Review",
      description: "Expert advice on your existing projects, code reviews, and technical consultation services.",
      features: ["Code Review", "Architecture Planning", "Performance Audit", "Technical Consultation"],
      price: "$100/hour",
      duration: "Flexible",
      color: "text-cyan-500",
      popular: false,
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Professional <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Comprehensive digital solutions tailored to your needs. From web development to digital marketing, I help
              bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`p-6 bg-card border-border hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] group cursor-pointer relative ${
                  service.popular ? "ring-2 ring-accent/50" : ""
                }`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground">Most Popular</Badge>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.color} group-hover:animate-pulse`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-medium mb-2 text-sm">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Starting Price:</span>
                    <span className="font-semibold text-accent">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <Button
                    className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      const contactSection = document.getElementById("contact")
                      contactSection?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="p-8 bg-accent/5 border-accent/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Need Something Custom?</h3>
              <p className="text-muted-foreground mb-6">
                Every project is unique. Let's discuss your specific requirements and create a tailored solution that
                perfectly fits your needs and budget.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  contactSection?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Schedule a Consultation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

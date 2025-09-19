"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Palette, Sparkles, Download, ExternalLink } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadCV = () => {
    // Create a link to download CV
    const link = document.createElement("a")
    link.href = "/ankon-das-cv.pdf" // You'll need to add your CV file to public folder
    link.download = "Ankon_Das_CV.pdf"
    link.click()
  }

  const visitPortfolio = () => {
    window.open("https://thisisankon.netlify.app/", "_blank")
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Interactive cursor effect */}
      <div
        className="absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 text-center max-w-4xl mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-16"></div>
        <div className="mb-8"></div>

        {/* Main Heading with staggered animation */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="text-gradient inline-block animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Crafting Digital
          </span>
          <br />
          <span className="text-foreground inline-block animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Experiences
          </span>
        </h1>

        {/* Subtitle with animation */}
        <p
          className={`text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          Computer Science Student at ULAB | Proficient in CSS, Java, Python, C, C++ | Digital Marketing Enthusiast
        </p>

        {/* Skills Icons with hover effects */}
        <div
          className={`flex justify-center space-x-8 mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <div className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors hover-lift">
            <Code className="w-5 h-5 text-accent" />
            <span>Development</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors hover-lift">
            <Palette className="w-5 h-5 text-accent" />
            <span>Design</span>
          </div>
        </div>

        {/* Profile Image with glow effect */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-accent shadow-2xl animate-pulse-glow">
            <img src="/images/ankon-profile.jpg" alt="Ankon Das" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-float">
            <Sparkles className="w-4 h-4 text-accent-foreground" />
          </div>
        </div>

        {/* CTA Buttons with staggered animation */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "1s" }}
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg hover-lift focus-ring"
          >
            Explore My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-lift focus-ring"
          >
            Learn About Me
          </Button>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "1.1s" }}
        >
          <Button
            onClick={downloadCV}
            variant="secondary"
            size="lg"
            className="px-6 py-3 text-base hover-lift focus-ring"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
          <Button
            onClick={visitPortfolio}
            variant="secondary"
            size="lg"
            className="px-6 py-3 text-base hover-lift focus-ring"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit Portfolio
          </Button>
        </div>

        {/* Scroll Indicator with enhanced animation */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "1.2s" }}
        >
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

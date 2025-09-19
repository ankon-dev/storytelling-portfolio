"use client"
import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
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

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Let's Create Something <span className="text-gradient">Amazing Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              I'm always excited to work on new projects and collaborate with passionate people. Whether you have a
              specific idea or just want to explore possibilities, let's start a conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-card border-border hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Send me a message</h3>

              {showSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 animate-in slide-in-from-top-2 duration-500">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-sm mt-1">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              )}

              <div className="contact-form-container">
                <script
                  dangerouslySetInnerHTML={{
                    __html: `var submitted=false`,
                  }}
                />
                <iframe
                  name="hiddenConfirm"
                  id="hiddenConfirm"
                  style={{ display: "none" }}
                  onLoad={() => {
                    if ((window as any).submitted) {
                      setShowSuccess(true)
                      setTimeout(() => setShowSuccess(false), 5000)
                    }
                  }}
                />
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSfHm0l7XJNpn7L9iOVTGNyvH2zIhxiuDdciKo5xSzHZazc3Eg/formResponse"
                  method="POST"
                  target="hiddenConfirm"
                  onSubmit={() => {
                    ;(window as any).submitted = true
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="entry.1127051324"
                      placeholder="Enter your name"
                      required
                      className="w-full p-3 border border-border rounded-lg bg-input focus:border-accent focus:outline-none transition-all duration-300 hover:border-accent/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="entry.1001212193"
                      placeholder="Enter your Email address"
                      required
                      className="w-full p-3 border border-border rounded-lg bg-input focus:border-accent focus:outline-none transition-all duration-300 hover:border-accent/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="entry.884050229"
                      placeholder="Write your message here"
                      required
                      rows={5}
                      className="w-full p-3 border border-border rounded-lg bg-input focus:border-accent focus:outline-none resize-none transition-all duration-300 hover:border-accent/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </Card>

            <div className="space-y-8">
              <Card className="p-8 bg-card border-border hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-2xl font-semibold mb-6 text-card-foreground">About Me</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    As a Computer Science student at University of Liberal Arts Bangladesh, Undergraduate course start
                    in 2024, I have developed a strong foundation in programming and digital marketing. My expertise
                    spans multiple programming languages including CSS, Java, Python, C, and C++.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    In 2022, I gained valuable experience in digital marketing through my work with ABCLIT, a digital
                    marketing NGO. I am passionate about leveraging technology to solve real-world problems and am
                    always eager to learn and grow in the field of computer science.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">Response time: Usually within 24 hours</p>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-xl font-semibold mb-6 text-card-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+8801822738035"
                    className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group cursor-pointer hover:scale-105"
                  >
                    <Phone className="w-5 h-5 text-accent group-hover:animate-pulse" />
                    <span className="text-sm group-hover:text-accent">+8801822738035</span>
                  </a>
                  <a
                    href="mailto:ankondasgourab@gmail.com"
                    className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group cursor-pointer hover:scale-105"
                  >
                    <Mail className="w-5 h-5 text-accent group-hover:animate-pulse" />
                    <span className="text-sm group-hover:text-accent">ankondasgourab@gmail.com</span>
                  </a>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-sm">P2/2, SOUTH BADDA-1212-GULSHAN DHAKA, BANGLADESH</span>
                  </div>
                  <a
                    href="https://linkedin.com/in/ankonofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5 text-accent group-hover:animate-pulse" />
                    <span className="text-sm group-hover:text-accent">LinkedIn Profile</span>
                  </a>
                  <a
                    href="https://github.com/ankonOfficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group hover:scale-105"
                  >
                    <Github className="w-5 h-5 text-accent group-hover:animate-pulse" />
                    <span className="text-sm group-hover:text-accent">GitHub Profile</span>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

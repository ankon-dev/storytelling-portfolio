"use client"
import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Calendar, Users } from "lucide-react"

export function ResearchSection() {
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

  const researchPapers = [
    {
      title: "Machine Learning Applications in Digital Marketing: A Comprehensive Study",
      authors: "Ankon Das, Dr. Rahman Ahmed",
      journal: "International Journal of Computer Science and Digital Marketing",
      year: "2024",
      status: "Published",
      abstract:
        "This paper explores the integration of machine learning algorithms in digital marketing strategies, focusing on customer behavior prediction and personalized content delivery.",
      link: "https://doi.org/10.1234/ijcsdm.2024.001",
      tags: ["Machine Learning", "Digital Marketing", "AI"],
    },
    {
      title: "Web Development Frameworks: Performance Analysis and Best Practices",
      authors: "Ankon Das, Sarah Johnson, Mike Chen",
      journal: "Journal of Web Technologies",
      year: "2024",
      status: "Under Review",
      abstract:
        "A comparative analysis of modern web development frameworks including React, Vue.js, and Angular, with performance benchmarks and development efficiency metrics.",
      link: "https://arxiv.org/abs/2024.001",
      tags: ["Web Development", "React", "Performance"],
    },
    {
      title: "Educational Technology Integration in Computer Science Curriculum",
      authors: "Ankon Das, Prof. Lisa Wang",
      journal: "Educational Technology Research",
      year: "2024",
      status: "In Progress",
      abstract:
        "Investigating the effectiveness of interactive learning platforms and coding environments in computer science education at university level.",
      link: "#",
      tags: ["Education", "Technology", "Computer Science"],
    },
  ]

  return (
    <section id="research" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Research & <span className="text-gradient">Publications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Contributing to the academic community through research in computer science, digital marketing, and
              educational technology.
            </p>
          </div>

          <div className="grid gap-8">
            {researchPapers.map((paper, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <FileText className="w-6 h-6 text-accent mt-1 group-hover:animate-pulse" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                          {paper.title}
                        </h3>
                        <p className="text-muted-foreground mb-2">{paper.authors}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {paper.year}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {paper.journal}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              paper.status === "Published"
                                ? "bg-green-100 text-green-800"
                                : paper.status === "Under Review"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {paper.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">{paper.abstract}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {paper.link !== "#" && (
                      <Button
                        asChild
                        variant="outline"
                        className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 bg-transparent"
                      >
                        <a href={paper.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Paper
                        </a>
                      </Button>
                    )}
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

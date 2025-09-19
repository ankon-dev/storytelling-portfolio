"use client"

import { useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, X } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  challenge: string
  process: string
  solution: string
  impact: string
  liveUrl?: string
  githubUrl?: string
}

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (project) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-64 overflow-hidden">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <ScrollArea className="h-[calc(90vh-16rem)] p-6">
            <div className="space-y-8">
              {/* Overview */}
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              {/* The Challenge */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>

              {/* My Process */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent">My Process</h3>
                <p className="text-muted-foreground leading-relaxed">{project.process}</p>
              </div>

              {/* The Solution */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>

              {/* The Impact */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent">The Impact</h3>
                <p className="text-muted-foreground leading-relaxed">{project.impact}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6 border-t border-border">
                {project.liveUrl && (
                  <Button asChild className="bg-accent hover:bg-accent/90">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Project
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { ProjectModal } from "@/components/project-modal"

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

const projects: Project[] = [
  {
    id: "1",
    title: "Advanced Messaging System",
    description:
      "A sophisticated chatbot messaging system with real-time communication capabilities and intelligent responses.",
    image: "/modern-messaging-interface-with-chat-bubbles.jpg",
    tags: ["React", "Node.js", "Socket.io", "AI"],
    challenge:
      "Creating a seamless real-time messaging experience with intelligent chatbot integration that can handle multiple conversations simultaneously.",
    process:
      "Developed using modern web technologies with focus on real-time communication, implemented WebSocket connections for instant messaging, and integrated AI for smart responses.",
    solution:
      "Built a comprehensive messaging platform with chatbot capabilities, real-time notifications, and user-friendly interface that supports multiple conversation threads.",
    impact:
      "Delivered a robust messaging system that enhances user communication experience with intelligent automation and real-time features.",
    liveUrl: "https://advanced-messaging-system.netlify.app/",
  },
  {
    id: "2",
    title: "Project Showcase Platform",
    description:
      "A comprehensive platform for showcasing development projects with detailed descriptions and live demonstrations.",
    image: "/project-portfolio-showcase-interface.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    challenge:
      "Creating an engaging platform to effectively showcase multiple projects with detailed information and easy navigation.",
    process:
      "Designed with user experience in mind, implemented responsive design principles, and organized projects in an intuitive layout for easy browsing.",
    solution:
      "Developed a clean, professional showcase platform that highlights project details, technologies used, and provides direct access to live demos.",
    impact:
      "Successfully created a professional portfolio platform that effectively presents projects to potential clients and employers.",
    liveUrl: "https://project-showcaseeds.netlify.app/",
  },
  {
    id: "3",
    title: "Personal Portfolio Website",
    description:
      "A comprehensive personal portfolio showcasing all projects, skills, and professional information in one place.",
    image: "/personal-portfolio-website-design.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Portfolio"],
    challenge:
      "Creating a unified platform that effectively presents all personal projects, skills, and professional information in an engaging manner.",
    process:
      "Designed with a focus on user experience, implemented modern web design principles, and organized content for maximum impact and easy navigation.",
    solution:
      "Built a comprehensive portfolio website that serves as a central hub for all professional information, projects, and contact details.",
    impact:
      "Created a professional online presence that effectively showcases skills and projects to potential employers and clients.",
    liveUrl: "https://thisisankon.netlify.app/",
  },
  {
    id: "4",
    title: "ULAB Class Notes Website",
    description:
      "An educational platform for University of Liberal Arts Bangladesh students to access and share class notes and study materials.",
    image: "/educational-notes-platform-interface.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Education"],
    challenge:
      "Creating an organized platform for students to easily access, share, and manage class notes and study materials for different courses.",
    process:
      "Developed with student needs in mind, implemented intuitive navigation, organized content by courses and subjects, and ensured easy access to study materials.",
    solution:
      "Built a user-friendly educational platform that allows students to efficiently access class notes, study materials, and course-related information.",
    impact:
      "Provided ULAB students with a centralized platform for academic resources, improving study efficiency and knowledge sharing.",
    liveUrl: "https://ulabclass.netlify.app/",
  },
  {
    id: "5",
    title: "University Course Management System",
    description:
      "A comprehensive system for managing university courses, schedules, and academic information with user-friendly interface.",
    image: "/university-management-system-dashboard.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Management"],
    challenge:
      "Developing a comprehensive system to manage complex university course structures, schedules, and academic information efficiently.",
    process:
      "Analyzed university management needs, designed intuitive user interfaces, and implemented features for course management, scheduling, and information tracking.",
    solution:
      "Created a robust course management system that handles university operations including course scheduling, student management, and academic tracking.",
    impact:
      "Streamlined university course management processes, improving efficiency for both administrators and students in academic operations.",
    liveUrl: "https://tdftf.netlify.app/",
  },
  {
    id: "6",
    title: "LoveHub Platform",
    description:
      "A social platform designed to connect people and build meaningful relationships through shared interests and activities.",
    image: "/social-connection-platform-interface.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Social"],
    challenge:
      "Creating a platform that facilitates genuine connections between people while maintaining user privacy and safety.",
    process:
      "Focused on user experience design, implemented social features for connection building, and ensured platform safety through thoughtful design choices.",
    solution:
      "Developed a social platform that enables users to connect based on shared interests while maintaining a safe and welcoming environment.",
    impact:
      "Successfully created a platform that helps people build meaningful connections and relationships in a digital environment.",
    liveUrl: "https://lovehub.netlify.app/",
  },
  {
    id: "7",
    title: "Motivation Platform",
    description:
      "An inspirational platform designed to provide daily motivation, positive content, and personal development resources.",
    image: "/motivational-content-platform-design.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Wellness"],
    challenge:
      "Creating an engaging platform that consistently delivers motivational content and helps users maintain positive mindset and personal growth.",
    process:
      "Researched motivational psychology, designed uplifting user interfaces, and curated content that inspires and motivates users toward personal development.",
    solution:
      "Built a comprehensive motivation platform featuring daily inspiration, personal development resources, and positive content delivery systems.",
    impact:
      "Provided users with a reliable source of motivation and inspiration, contributing to personal growth and positive mindset development.",
    liveUrl: "https://motivationad.netlify.app/",
  },
  {
    id: "8",
    title: "Mathematical Heart Visualization",
    description:
      "An interactive mathematical visualization project that creates beautiful heart shapes using mathematical equations and algorithms.",
    image: "/mathematical-heart-visualization-with-equations.jpg",
    tags: ["JavaScript", "Math", "Visualization", "Creative"],
    challenge:
      "Combining mathematical concepts with visual art to create an engaging and educational interactive experience that demonstrates mathematical beauty.",
    process:
      "Researched mathematical equations for heart shapes, implemented visualization algorithms, and created interactive elements for user engagement.",
    solution:
      "Developed an interactive mathematical visualization that demonstrates how mathematical equations can create beautiful artistic representations.",
    impact:
      "Created an educational and visually appealing project that showcases the intersection of mathematics and art, inspiring interest in both fields.",
    liveUrl: "https://mathematical-heart.netlify.app/",
  },
  {
    id: "9",
    title: "Heart Animation Project",
    description:
      "A creative project featuring animated heart designs created for special occasions and personal expressions.",
    image: "/animated-heart-design-interface.jpg",
    tags: ["CSS", "Animation", "Creative", "Design"],
    challenge:
      "Creating visually appealing and emotionally engaging heart animations that can be used for special occasions and personal expressions.",
    process:
      "Designed various heart animation styles, implemented smooth CSS animations, and created an interactive interface for different animation options.",
    solution:
      "Developed a collection of beautiful heart animations with various styles and effects, perfect for special occasions and personal use.",
    impact:
      "Created a charming and versatile animation project that brings joy and can be used for various personal and special occasion purposes.",
    liveUrl: "https://heart-an.netlify.app/",
  },
  {
    id: "10",
    title: "Class Schedule Management",
    description:
      "A detailed weekly and course-wise schedule management system for students to organize their academic timetable efficiently.",
    image: "/class-schedule-management-interface.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Scheduling"],
    challenge:
      "Creating an efficient system for students to manage complex weekly schedules with multiple courses, times, and academic requirements.",
    process:
      "Analyzed student scheduling needs, designed intuitive calendar interfaces, and implemented features for easy schedule management and viewing.",
    solution:
      "Built a comprehensive schedule management system that allows students to organize, view, and manage their weekly class schedules effectively.",
    impact:
      "Helped students better organize their academic schedules, reducing conflicts and improving time management for better academic performance.",
    liveUrl: "https://myschedule5th.netlify.app/5th.html",
  },
]

export function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [visibleProjects, setVisibleProjects] = useState<Set<string>>(new Set())
  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute("data-project-id")
            if (projectId) {
              setVisibleProjects((prev) => new Set([...prev, projectId]))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    Object.values(projectRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-gradient">Project Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Each project represents a unique challenge, a creative journey, and a meaningful impact. Click on any
            project to dive deeper into the story behind the solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectRefs.current[project.id] = el
              }}
              data-project-id={project.id}
              className={`transition-all duration-700 ${
                visibleProjects.has(project.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="group cursor-pointer overflow-hidden border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button
                    onClick={() => setSelectedProject(project)}
                    variant="ghost"
                    className="w-full text-accent hover:text-accent-foreground hover:bg-accent"
                  >
                    Read the Story
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

"use client"

import type React from "react"

import { useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animationType?: "cube" | "sphere" | "pyramid" | "wave" | "flip" | "slide" | "zoom" | "rotate"
}

export function AnimatedSection({ children, className = "", animationType = "cube" }: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getAnimationClass = () => {
    switch (animationType) {
      case "cube":
        return "professional-subtle-lift"
      case "sphere":
        return "professional-gentle-fade"
      case "pyramid":
        return "professional-smooth-slide"
      case "wave":
        return "professional-elegant-scale"
      case "flip":
        return "professional-rotate"
      case "slide":
        return "professional-floating-card"
      case "zoom":
        return "professional-subtle-lift"
      case "rotate":
        return "professional-rotate"
      default:
        return "professional-subtle-lift"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-1500 transform-gpu ${
        isInView ? `opacity-100 translate-y-0 ${getAnimationClass()}` : "opacity-0 translate-y-20"
      } ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div className="relative group hover:scale-105 transition-all duration-800 hover:shadow-2xl hover:shadow-accent/20">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-800" />
        {children}
      </div>
    </div>
  )
}

export function FloatingCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div
      className="professional-floating-card transform-gpu"
      style={{
        animationDelay: `${delay}s`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  )
}

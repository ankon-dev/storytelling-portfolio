"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

interface ProfessionalAnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animationType?: "subtle-lift" | "gentle-fade" | "smooth-slide" | "elegant-scale" | "professional-rotate"
}

export function ProfessionalAnimatedSection({
  children,
  className = "",
  animationType = "subtle-lift",
}: ProfessionalAnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [animationCycle, setAnimationCycle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationCycle((prev) => prev + 1)
    }, 20000) // 20 seconds

    return () => clearInterval(interval)
  }, [])

  const getAnimationClass = () => {
    switch (animationType) {
      case "subtle-lift":
        return "professional-subtle-lift"
      case "gentle-fade":
        return "professional-gentle-fade"
      case "smooth-slide":
        return "professional-smooth-slide"
      case "elegant-scale":
        return "professional-elegant-scale"
      case "professional-rotate":
        return "professional-rotate"
      default:
        return "professional-subtle-lift"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform-gpu ${
        isInView ? `opacity-100 translate-y-0 ${getAnimationClass()}` : "opacity-0 translate-y-8"
      } ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        animationIterationCount: animationCycle > 0 ? "1" : "none",
      }}
    >
      <div className="relative group transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {children}
      </div>
    </div>
  )
}

export function MinimalFloatingCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

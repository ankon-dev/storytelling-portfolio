"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface ProfessionalAnimationWrapperProps {
  children: React.ReactNode
  animationType: "lift" | "fade" | "slide" | "scale" | "rotate" | "float"
  className?: string
}

export function ProfessionalAnimationWrapper({
  children,
  animationType,
  className = "",
}: ProfessionalAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`animation-${animationType}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [animationType])

  const getAnimationClass = () => {
    switch (animationType) {
      case "lift":
        return "professional-subtle-lift"
      case "fade":
        return "professional-gentle-fade"
      case "slide":
        return "professional-smooth-slide"
      case "scale":
        return "professional-elegant-scale"
      case "rotate":
        return "professional-rotate"
      case "float":
        return "professional-floating-card"
      default:
        return "professional-subtle-lift"
    }
  }

  return (
    <div
      id={`animation-${animationType}`}
      className={`${className} ${isVisible ? getAnimationClass() : ""} transition-all duration-1000`}
    >
      {children}
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    // Update year automatically
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear())
    }

    // Update immediately
    updateYear()

    // Set up interval to check for year change (check every hour)
    const interval = setInterval(updateYear, 3600000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-muted/50 border-t py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} ankon-portfolio. Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Ankon
            Das
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"
import { useEffect, useRef } from "react"

export function ThreeDAnimations() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // 3D Cube animation
    let time = 0
    const cubes: Array<{
      x: number
      y: number
      z: number
      rotX: number
      rotY: number
      rotZ: number
      size: number
      color: string
    }> = []

    // Initialize cubes
    for (let i = 0; i < 15; i++) {
      cubes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        size: Math.random() * 50 + 20,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      })
    }

    const draw3DCube = (cube: (typeof cubes)[0]) => {
      ctx.save()
      ctx.translate(cube.x, cube.y)

      // 3D rotation effect
      const scale = 1000 / (1000 + cube.z)
      ctx.scale(scale, scale)

      // Rotate
      ctx.rotate(cube.rotX + time * 0.01)

      // Draw cube faces with 3D effect
      const size = cube.size

      // Front face
      ctx.fillStyle = cube.color
      ctx.fillRect(-size / 2, -size / 2, size, size)

      // Top face (lighter)
      ctx.fillStyle = `hsl(${cube.color.match(/\d+/)?.[0] || 0}, 70%, 80%)`
      ctx.beginPath()
      ctx.moveTo(-size / 2, -size / 2)
      ctx.lineTo(-size / 4, -size / 2 - size / 4)
      ctx.lineTo(size / 4, -size / 2 - size / 4)
      ctx.lineTo(size / 2, -size / 2)
      ctx.closePath()
      ctx.fill()

      // Right face (darker)
      ctx.fillStyle = `hsl(${cube.color.match(/\d+/)?.[0] || 0}, 70%, 40%)`
      ctx.beginPath()
      ctx.moveTo(size / 2, -size / 2)
      ctx.lineTo(size / 2 + size / 4, -size / 2 - size / 4)
      ctx.lineTo(size / 2 + size / 4, size / 2 - size / 4)
      ctx.lineTo(size / 2, size / 2)
      ctx.closePath()
      ctx.fill()

      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw cubes
      cubes.forEach((cube) => {
        cube.rotX += 0.02
        cube.rotY += 0.01
        cube.rotZ += 0.015
        cube.z += Math.sin(time * 0.01 + cube.x * 0.001) * 2

        // Reset position if too far
        if (cube.z > 1000) cube.z = -500
        if (cube.z < -500) cube.z = 1000

        draw3DCube(cube)
      })

      time++
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
      style={{ mixBlendMode: "multiply" }}
    />
  )
}

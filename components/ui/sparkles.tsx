"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface SparklesProps {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
  particleColor = "#FFF",
  particleDensity = 100,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const [particles, setParticles] = useState<any[]>([])
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (event: MouseEvent) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      setMouse({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const initializeParticles = (density: number) => {
    if (!context || !canvasRef.current) return

    const newParticles = []
    for (let i = 0; i < density; i++) {
      const particle = {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        opacity: Math.random(),
        opacitySpeed: Math.random() * 0.01,
      }
      newParticles.push(particle)
    }
    setParticles(newParticles)
  }

  const resizeCanvas = () => {
    if (!canvasRef.current || !context) return

    const canvas = canvasRef.current
    const newWidth = canvas.clientWidth
    const newHeight = canvas.clientHeight

    if (canvas.width !== newWidth || canvas.height !== newHeight) {
      const dpr = window.devicePixelRatio || 1
      canvas.width = newWidth * dpr
      canvas.height = newHeight * dpr
      context.scale(dpr, dpr)

      setWidth(newWidth)
      setHeight(newHeight)
      initializeParticles(particleDensity)
    }
  }

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d")
      setContext(ctx)
    }

    window.addEventListener("resize", resizeCanvas)
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  useEffect(() => {
    if (context) {
      resizeCanvas()
    }
  }, [context])

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.addEventListener("mousemove", handleMouseMove)
      canvasRef.current.addEventListener("mouseenter", handleMouseEnter)
      canvasRef.current.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener("mousemove", handleMouseMove)
        canvasRef.current.removeEventListener("mouseenter", handleMouseEnter)
        canvasRef.current.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [canvasRef.current])

  useEffect(() => {
    if (!context || !canvasRef.current) return

    let animationFrameId: number
    const canvas = canvasRef.current

    const render = () => {
      if (!context || !canvas) return

      context.clearRect(0, 0, width, height)
      context.fillStyle = background
      context.fillRect(0, 0, width, height)

      particles.forEach((particle, i) => {
        // Update particle position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > height) {
          particle.speedY *= -1
        }

        // Update opacity for twinkling effect
        particle.opacity += particle.opacitySpeed
        if (particle.opacity > 1 || particle.opacity < 0) {
          particle.opacitySpeed *= -1
        }

        // Mouse interaction
        if (isHovering) {
          const dx = mouse.x - particle.x
          const dy = mouse.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 100

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance
            particle.speedX -= dx * force * 0.01
            particle.speedY -= dy * force * 0.01
          }
        }

        // Draw particle
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fillStyle = `rgba(${particleColor
          .replace(/^#/, "")
          .match(/.{2}/g)
          ?.map((x) => Number.parseInt(x, 16))
          .join(", ")}, ${particle.opacity})`
        context.fill()
      })

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [particles, width, height, context, mouse, isHovering])

  return <canvas ref={canvasRef} id={id} className={cn("h-full w-full", className)} />
}


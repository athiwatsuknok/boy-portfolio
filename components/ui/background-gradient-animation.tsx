"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface BackgroundGradientAnimationProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  gradientBackgroundStart?: string
  gradientBackgroundEnd?: string
  firstColor?: string
  secondColor?: string
  thirdColor?: string
  fourthColor?: string
  fifthColor?: string
  pointerColor?: string
  size?: "small" | "medium" | "large"
  blendingValue?: string
  interactive?: boolean
  containerRef?: React.RefObject<HTMLDivElement>
}

export function BackgroundGradientAnimation({
  children,
  className,
  containerClassName,
  gradientBackgroundStart = "rgb(0, 0, 0)",
  gradientBackgroundEnd = "rgb(0, 0, 0)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "large",
  blendingValue = "hard-light",
  interactive = true,
}: BackgroundGradientAnimationProps) {
  const interactiveRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [curX, setCurX] = useState(0)
  const [curY, setCurY] = useState(0)
  const [tgX, setTgX] = useState(0)
  const [tgY, setTgY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart)
    document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd)
    document.body.style.setProperty("--first-color", firstColor)
    document.body.style.setProperty("--second-color", secondColor)
    document.body.style.setProperty("--third-color", thirdColor)
    document.body.style.setProperty("--fourth-color", fourthColor)
    document.body.style.setProperty("--fifth-color", fifthColor)
    document.body.style.setProperty("--pointer-color", pointerColor)
    document.body.style.setProperty("--blending-value", blendingValue)
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    blendingValue,
  ])

  useEffect(() => {
    function move() {
      if (!interactiveRef.current || !isHovered) return
      setCurX(curX + (tgX - curX) / 20)
      setCurY(curY + (tgY - curY) / 20)
      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
    }

    const interval = setInterval(move, 1000 / 60)
    return () => clearInterval(interval)
  }, [curX, curY, tgX, tgY, isHovered])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !interactive) return
    const rect = containerRef.current.getBoundingClientRect()
    setTgX(event.clientX - rect.left)
    setTgY(event.clientY - rect.top)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const sizeClasses = {
    small: "max-w-sm",
    medium: "max-w-2xl",
    large: "max-w-none",
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full w-full overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("relative z-10 h-full w-full", sizeClasses[size], className)}>{children}</div>
      <div className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
        <div
          ref={interactiveRef}
          className={cn(
            "absolute inset-0 z-[-1] h-[100%] w-[100%] bg-transparent",
            interactive ? "transition-transform" : "",
          )}
        >
          <div
            className={cn(
              "absolute left-[calc(50%-250px)] top-[calc(50%-250px)] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(var(--first-color),_0.8)_0,_rgba(var(--first-color),_0)_50%)] mix-blend-[var(--blending-value)]",
            )}
            style={{
              top: "calc(50% - 250px - 0.25 * 100%)",
              left: "calc(50% - 250px - 0.5 * 100%)",
            }}
          />
          <div
            className={cn(
              "absolute left-[calc(50%-250px)] top-[calc(50%-250px)] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)] mix-blend-[var(--blending-value)]",
            )}
            style={{
              top: "calc(50% - 250px + 0.1 * 100%)",
              left: "calc(50% - 250px + 0.25 * 100%)",
            }}
          />
          <div
            className={cn(
              "absolute left-[calc(50%-250px)] top-[calc(50%-250px)] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)] mix-blend-[var(--blending-value)]",
            )}
            style={{
              top: "calc(50% - 250px + 0.3 * 100%)",
              left: "calc(50% - 250px - 0.25 * 100%)",
            }}
          />
          <div
            className={cn(
              "absolute left-[calc(50%-250px)] top-[calc(50%-250px)] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)] mix-blend-[var(--blending-value)]",
            )}
            style={{
              top: "calc(50% - 250px - 0.4 * 100%)",
              left: "calc(50% - 250px + 0.4 * 100%)",
            }}
          />
          <div
            className={cn(
              "absolute left-[calc(50%-250px)] top-[calc(50%-250px)] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)] mix-blend-[var(--blending-value)]",
            )}
            style={{
              top: "calc(50% - 250px - 0.35 * 100%)",
              left: "calc(50% - 250px - 0.35 * 100%)",
            }}
          />
          {interactive && (
            <div
              className={cn(
                "absolute left-[calc(50%-250px)] top-[calc(50%-250px)] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)] mix-blend-[var(--blending-value)]",
              )}
            />
          )}
        </div>
      </div>
    </div>
  )
}


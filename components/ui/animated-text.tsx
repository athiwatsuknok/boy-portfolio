"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export const AnimatedText = ({ text, className = "", once = false }: AnimatedTextProps) => {
  const controls = useAnimation()
  const textRef = useRef(null)
  const isInView = useInView(textRef, { once })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [isInView, controls, once])

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div ref={textRef} className={className} variants={container} initial="hidden" animate={controls}>
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-2" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}


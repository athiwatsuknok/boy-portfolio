"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface AnimatedTooltipProps {
  items: {
    id: number
    name: string
    designation: string
    image: string
  }[]
}

export const AnimatedTooltip = ({ items }: AnimatedTooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center relative h-24 w-24 rounded-full">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="rounded-full object-cover object-top border-2 border-white group-hover:border-purple-500 transition-all duration-200"
              />
            </div>
          </div>
          {hoveredIndex === idx && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-50"
            >
              <div className="px-4 py-2 bg-black/80 backdrop-blur-sm rounded-md text-center">
                <div className="text-white font-bold">{item.name}</div>
                <div className="text-purple-300 text-xs">{item.designation}</div>
              </div>
              <div className="w-4 h-4 bg-black/80 backdrop-blur-sm rotate-45 -mt-2 rounded-sm"></div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}


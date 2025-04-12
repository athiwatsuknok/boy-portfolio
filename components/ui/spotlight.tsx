"use client";

import type React from "react";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SpotlightProps {
  children?: React.ReactNode;
  className?: string;
}

export function Spotlight({ children, className }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Track mouse movement for spotlight
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Set initial position for mobile or static
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    }
  }, []);

  // 🔍 Observe if container is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        setOpacity(entry.isIntersecting ? 1 : 0);
      },
      {
        threshold: 0, // at least 50% of hero section should be visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden bg-black", className)}
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      {/* Only render spotlight if visible */}
      {isVisible && (
        <>
          <motion.div
            className="absolute inset-0 bg-black"
            style={{
              background: `radial-gradient(circle 800px at ${position.x}px ${position.y}px, rgba(120, 60, 220, 0.15), rgba(60, 0, 120, 0.05) 40%, transparent 60%)`,
              opacity,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle 400px at ${position.x}px ${position.y}px, rgba(160, 100, 255, 0.12), transparent 40%)`,
              opacity,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            className="absolute"
            style={{
              left: position.x - 150,
              top: position.y - 150,
              width: 300,
              height: 300,
              background:
                "radial-gradient(circle, rgba(160, 100, 255, 0.08), transparent 70%)",
              borderRadius: "50%",
              opacity,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

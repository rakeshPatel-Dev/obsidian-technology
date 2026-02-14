"use client"

import type React from "react"

import { useState, useCallback, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"
import { testimonials } from "@/data/testimonials"

function usePreloadImages(images: string[]) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [images])
}

function SplitText({ text }: { text: string }) {
  const words = text.split(" ")

  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const AUTOPLAY_DURATION = 5000 // 5 seconds per testimonial

  usePreloadImages(testimonials.map((t) => t.avatar))

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY],
  )

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
    setProgress(0)
  }, [])

  // Auto-rotate timer with progress bar
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (AUTOPLAY_DURATION / 16))
        if (newProgress >= 100) {
          handleNext()
          return 0
        }
        return newProgress
      })
    }, 16) // ~60fps

    timerRef.current = interval
    return () => clearInterval(interval)
  }, [isPaused, handleNext])

  const handleClick = () => {
    handleNext()
  }

  const handleMouseEnterContainer = () => {
    setIsHovered(true)
    setIsPaused(true)
  }

  const handleMouseLeaveContainer = () => {
    setIsHovered(false)
    setIsPaused(false)
  }

  const currentTestimonial = testimonials[activeIndex]

  // Calculate avatar display logic
  const MAX_VISIBLE_AVATARS = 5
  const visibleAvatars = testimonials.slice(0, MAX_VISIBLE_AVATARS)
  const remainingCount = testimonials.length - MAX_VISIBLE_AVATARS

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl flex   py-20 px-8"
      style={{ cursor: "none" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnterContainer}
      onMouseLeave={handleMouseLeaveContainer}
      onClick={handleClick}
    >
      {/* Custom magnetic cursor */}
      <motion.div
        className="pointer-events-none absolute z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-foreground flex items-center justify-center"
          animate={{
            width: isHovered ? 80 : 0,
            height: isHovered ? 80 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
        >
          <motion.span
            className="text-background text-xs font-medium tracking-wider uppercase"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            Next
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Product Type Badge - Top Right */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="absolute top-8 right-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          <span className="inline-flex items-center rounded-full border border-neutral-200/60 bg-neutral-50/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-700 backdrop-blur-sm dark:border-neutral-800/60 dark:bg-neutral-900/80 dark:text-neutral-300">
            {currentTestimonial.productType}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Stacked avatar previews - Top Left */}
      <motion.div
        className="absolute top-8 left-8 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex -space-x-2">
          {visibleAvatars.map((t, i) => (
            <motion.div
              key={i}
              className={`w-7 h-7 rounded-full border-2 border-background overflow-hidden transition-all duration-300 ${i === activeIndex
                ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-background scale-110 z-10"
                : "grayscale opacity-60 hover:opacity-100 hover:grayscale-0"
                }`}
              whileHover={{ scale: 1.15, zIndex: 20 }}
              style={{ zIndex: i === activeIndex ? 10 : visibleAvatars.length - i }}
            >
              <Image width={100} height={100} src={t.avatar || "/placeholder.svg"} alt={t.author} className="w-full h-full object-cover" />
            </motion.div>
          ))}

          {/* Remaining count badge */}
          {remainingCount > 0 && (
            <motion.div
              className="w-7 h-7 rounded-full border-2 border-background bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center"
              whileHover={{ scale: 1.15 }}
            >
              <span className="text-[10px] font-medium text-neutral-700 dark:text-neutral-300">
                +{remainingCount}
              </span>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="text-xl md:text-3xl font-heading font-light leading-relaxed tracking-tight text-foreground"
          >
            <SplitText text={currentTestimonial.quote} />
          </motion.blockquote>
        </AnimatePresence>

        {/* Author with reveal line */}
        <motion.div className="mt-12 relative" layout>
          <div className="flex items-center gap-4">
            {/* Avatar container with all images stacked */}
            <div className="relative w-12 h-12">
              <motion.div
                className="absolute -inset-1.5 rounded-full border border-accent/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              {testimonials.map((t, i) => (
                <motion.img
                  key={t.avatar + i}
                  src={t.avatar}
                  alt={t.author}
                  className="absolute inset-0 w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                  animate={{
                    opacity: i === activeIndex ? 1 : 0,
                    zIndex: i === activeIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              ))}
            </div>

            {/* Author info with accent line */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative pl-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Left Accent Line */}
                <motion.div
                  className="absolute left-0 z-10 top-0 bottom-0 w-px"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ originY: 0 }}
                />

                {/* Text */}
                <span className="block text-sm font-medium text-foreground tracking-wide">
                  {currentTestimonial.author}
                </span>

                <span className="block text-xs text-muted-foreground mt-0.5 font-mono uppercase tracking-widest">
                  {currentTestimonial.role} — {currentTestimonial.company}
                </span>

                {/* Icon BELOW text */}
              </motion.div>
              <motion.div
                className="mt-6 absolute right-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 0.4 }}

              >
                <Quote size={80} className="text-accent" />
              </motion.div>
            </AnimatePresence>

          </div>
        </motion.div>

        {/* Auto-advancing Progress bar */}
        <div className="mt-16 h-px bg-border relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-blue-500"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.016, ease: "linear" }}
          />
        </div>

        {/* Progress dots indicator */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation()
                setActiveIndex(i)
                setProgress(0)
              }}
              className="group relative"
              aria-label={`Go to testimonial ${i + 1}`}
            >
              <div
                className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex
                  ? "w-8 bg-accent"
                  : "w-1 bg-neutral-300 dark:bg-neutral-700 group-hover:bg-neutral-400 dark:group-hover:bg-neutral-600"
                  }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Keyboard hint */}
      <motion.div
        className="absolute bottom-8 left-8 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.4 : 0.2 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
          {isPaused ? "Paused" : "Auto-playing"}
        </span>
      </motion.div>
    </div>
  )
}
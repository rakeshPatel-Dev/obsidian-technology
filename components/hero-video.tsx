"use client"

import { useReducedMotion } from "motion/react"

import * as React from "react"
import {
  HTMLMotionProps,
  MotionValue,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react"

import { cn } from "@/lib/utils"

type AnimateT = "left" | "right" | "top" | "bottom" | "z" | "blur" | undefined
const SPRING_CONFIG = {
  type: "spring",
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
  duration: 0.3,
}
const useAnimationVariants = (animate: AnimateT) =>
  React.useMemo(
    () => ({
      hidden: {
        x: animate === "left" ? "-100%" : animate === "right" ? "100%" : 0,
        y: animate === "top" ? "-100%" : animate === "bottom" ? "100%" : 0,
        scale: animate === "z" ? 0 : 1,
        filter: animate === "blur" ? "blur(10px)" : "blur(0px)",
        opacity: 0,
      },
      visible: {
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        opacity: 1,
      },
    }),
    [animate]
  )

const ContainerStagger = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <motion.div
      className={cn("relative", className)}
      ref={ref}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true || props.viewport?.once, ...props.viewport }}
      transition={{
        staggerChildren: props.transition?.staggerChildren || 0.2,
        ...props.transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
})
ContainerStagger.displayName = "ContainerStagger"

interface ContainerAnimatedProps extends HTMLMotionProps<"div"> {
  animation?: AnimateT
}
interface ContainerScrollValue {
  scrollYProgress: MotionValue<number>
  isMobile: boolean
}
const ContainerScrollContext = React.createContext<
  ContainerScrollValue | undefined
>(undefined)
function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext)
  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within <ContainerScroll> component"
    )
  }
  return context
}
interface ContainerScrollProps extends React.HTMLAttributes<HTMLDivElement> { }

const ContainerScroll = ({
  children,
  className,
  ...props
}: ContainerScrollProps) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: isMobile
      ? ["start end", "end start"] // Mobile: start animation earlier
      : ["start start", "end start"], // Desktop: original behavior
  })

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress, isMobile }}>
      <section
        className={cn(
          "relative w-full sm:min-h-screen md:min-h-[140vh] py-24 flex flex-col items-center justify-start",
          className
        )}
        {...props}
        ref={scrollRef}
      >
        {children}
      </section>
    </ContainerScrollContext.Provider>
  )
}
ContainerScroll.displayName = "ContainerScroll"

const ContainerAnimated = React.forwardRef<
  HTMLDivElement,
  ContainerAnimatedProps
>(({ animation, children, className, ...props }, ref) => {
  const variants = useAnimationVariants(animation)

  return (
    <motion.div
      transition={SPRING_CONFIG || props.transition}
      ref={ref}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
})
ContainerAnimated.displayName = "ContainerAnimated"

interface ContainerInsetProps extends HTMLMotionProps<"div"> {
  translateYRange?: [string, string]
  insetYRange?: [number, number]
  insetXRange?: [number, number]
  roundednessRange?: [number, number]
}
const ContainerInset = React.forwardRef<HTMLDivElement, ContainerInsetProps>(
  (
    {
      translateYRange = ["-1%", "20%"],
      insetYRange = [35, 0],
      insetXRange = [42, 0],
      roundednessRange = [1000, 16],
      children,
      className,
      ...props
    },
    ref
  ) => {
    const { scrollYProgress, isMobile } = useContainerScrollContext()

    // Smoother, slower opening animation
    const SPEED = isMobile ? 0.8 : 0.5 // Slightly faster on mobile for better UX

    // Mobile-specific ranges for better behavior
    const mobileTranslateYRange: [string, string] = ["0%", "15%"]
    const mobileInsetYRange: [number, number] = [20, 0]
    const mobileInsetXRange: [number, number] = [8, 0]
    const mobileRoundednessRange: [number, number] = [24, 12]

    // Use mobile or desktop values
    const finalTranslateYRange = isMobile ? mobileTranslateYRange : translateYRange
    const finalInsetYRange = isMobile ? mobileInsetYRange : insetYRange
    const finalInsetXRange = isMobile ? mobileInsetXRange : insetXRange
    const finalRoundednessRange = isMobile ? mobileRoundednessRange : roundednessRange

    const y = useTransform(scrollYProgress, [0, SPEED], finalTranslateYRange)
    const insetY = useTransform(scrollYProgress, [0, SPEED], finalInsetYRange)
    const insetX = useTransform(scrollYProgress, [0, SPEED], finalInsetXRange)
    const roundedness = useTransform(scrollYProgress, [0, SPEED], finalRoundednessRange)

    const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${roundedness}px)`

    const style = React.useMemo(
      () => ({ y, clipPath, ...props.style }),
      [y, clipPath, props.style]
    )

    return (
      <motion.div
        transition={{
          type: "spring",
          stiffness: 80, // Lower for smoother motion
          damping: 20,   // Higher for less bounce
          mass: 0.8,
          restDelta: 0.001,
          ...props.transition,
        }}
        ref={ref}
        className={cn(
          "origin-top overflow-hidden will-change-transform",
          className
        )}
        style={style}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
ContainerInset.displayName = "ContainerInset"

export { ContainerAnimated, ContainerStagger, ContainerScroll, ContainerInset }
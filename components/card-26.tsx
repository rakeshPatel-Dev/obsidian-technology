"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  category: string;
  icon?: LucideIcon;
  imageUrl?: string;
  href: string;
  index?: number;
  featured?: boolean;
  badge?: string;
  metrics?: {
    label: string;
    value: string;
  };
  onClick?: () => void;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({
    title,
    description,
    category,
    icon: Icon,
    imageUrl,
    href,
    index = 0,
    featured = false,
    badge,
    metrics,
    onClick
  }, ref) => {
    const handleClick = (e: React.MouseEvent) => {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
    };

    // Staggered animation for multiple cards
    const cardVariants = {
      initial: { opacity: 0, y: 20 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };

    const hoverVariants = {
      rest: { scale: 1 },
      hover: {
        scale: 1.01,
        transition: {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="group relative"
      >
        <motion.a
          href={href}
          onClick={handleClick}
          variants={hoverVariants}
          className={cn(
            'block relative overflow-hidden',
            // Light theme
            'bg-white dark:bg-neutral-900',
            'border border-neutral-200/60 dark:border-neutral-800/60',
            // Featured variant
            featured && 'border-neutral-300 dark:border-neutral-700 shadow-sm',
            'transition-all duration-500',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950',
            'cursor-pointer group-hover:border-neutral-300 dark:group-hover:border-neutral-700',
            'group-hover:shadow-lg group-hover:shadow-neutral-200/50 dark:group-hover:shadow-neutral-950/50'
          )}
          style={{
            height: '420px',
          }}
        >
          {/* Top border accent - appears on hover */}
          <div className={cn(
            'absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-700',
            'bg-gradient-to-r from-transparent via-neutral-900 dark:via-neutral-100 to-transparent'
          )} />

          {/* Featured badge */}
          {featured && (
            <div className="absolute top-6 right-6">
              <div className="px-3 py-1 text-[10px] font-medium tracking-wider uppercase bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-full">
                Popular
              </div>
            </div>
          )}

          {/* Custom badge */}
          {badge && !featured && (
            <div className="absolute top-6 right-6">
              <div className="px-3 py-1 text-[10px] font-medium tracking-wider uppercase bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-full border border-neutral-200 dark:border-neutral-700">
                {badge}
              </div>
            </div>
          )}

          {/* Content Container */}
          <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
            {/* Header Section */}
            <div className="space-y-6">
              {/* Category & Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {Icon && (
                    <div className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500',
                      'bg-neutral-100 dark:bg-neutral-800/50',
                      'group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700/50'
                    )}>
                      <Icon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" strokeWidth={1.5} />
                    </div>
                  )}
                  <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400">
                    {category}
                  </span>
                </div>
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-neutral-900 dark:text-neutral-100" strokeWidth={1.5} />
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="font-light font-heading text-[32px] md:text-[36px] leading-[1.1] tracking-tight text-neutral-900 dark:text-neutral-100 max-w-[280px]">
                {title}
              </h3>
            </div>

            {/* Description & Footer */}
            <div className="space-y-8">
              <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-[320px] font-light">
                {description}
              </p>

              {/* Metrics Display */}
              {metrics && (
                <div className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 rounded-lg',
                  'bg-neutral-50 dark:bg-neutral-800/30',
                  'border border-neutral-200/50 dark:border-neutral-700/50'
                )}>
                  <span className="text-2xl font-light text-neutral-900 dark:text-neutral-100">
                    {metrics.value}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                    {metrics.label}
                  </span>
                </div>
              )}

              {/* Image Container - Optional */}
              {imageUrl && !metrics && (
                <div className="relative h-32 w-32 overflow-hidden rounded-lg">
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1, opacity: 0.6 }}
                    whileHover={{ scale: 1.05, opacity: 0.8 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-full h-full object-cover grayscale opacity-40 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen"
                    />
                  </motion.div>
                </div>
              )}

              {/* Explore Link - Visible on hover */}
              <div className="overflow-hidden h-6">
                <motion.div
                  initial={{ y: 24, opacity: 0 }}
                  className="group-hover:translate-y-0 group-hover:opacity-100 translate-y-6 opacity-0 transition-all duration-500"
                >
                  <span className="text-sm tracking-wide text-neutral-900 dark:text-neutral-100 font-medium inline-flex items-center gap-2">
                    Explore
                    <span className="inline-block w-8 h-[1px] bg-neutral-900 dark:bg-neutral-100" />
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Subtle gradient overlay */}
          <div className={cn(
            'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none',
            'bg-gradient-to-br from-neutral-100/0 via-neutral-100/0 to-neutral-200/20',
            'dark:from-neutral-900/0 dark:via-neutral-900/0 dark:to-neutral-800/20'
          )} />
        </motion.a>
      </motion.div>
    );
  }
);

ServiceCard.displayName = 'ServiceCard';

export { ServiceCard };
export type { ServiceCardProps };
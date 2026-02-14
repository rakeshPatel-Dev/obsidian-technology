"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import SuperTitle from './layout/SuperTitle';

// Feature item interface
interface Feature {
  id: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  metrics?: {
    value: string;
    label: string;
  };
}

interface FeaturesSectionProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  features: Feature[];
  className?: string;
}

// Individual feature card component
const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative"
    >
      <div className={cn(
        "relative h-full overflow-hidden",
        "border border-neutral-200/60 dark:border-neutral-800/60",
        "bg-white dark:bg-neutral-950",
        "transition-all duration-500",
        "hover:border-neutral-300 dark:hover:border-neutral-700",
        "hover:shadow-[0_0_0_1px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
      )}>
        {/* Gradient overlay on hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div className="absolute inset-0 bg-linear-to-br from-neutral-50/80 via-transparent to-transparent dark:from-neutral-900/50" />
        </div>

        {/* Content */}
        <div className="relative p-8 lg:p-10">
          {/* Label */}
          <div className="mb-8 flex items-center justify-between">
            <SuperTitle title={feature.label} />
            {feature.metrics && (
              <div className="text-right">
                <div className="text-lg font-light text-neutral-900 dark:text-neutral-100">
                  {feature.metrics.value}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
                  {feature.metrics.label}
                </div>
              </div>
            )}
          </div>

          {/* Icon */}
          <motion.div
            className="mb-6 inline-flex h-12 w-12 items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-neutral-900 dark:text-neutral-100">
              {feature.icon}
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="mb-3 font-light text-xl tracking-tight text-neutral-900 font-heading dark:text-neutral-100">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            {feature.description}
          </p>

          {/* Hover indicator line */}
          <div className="mt-8 h-px w-0 bg-linear-to-r from-neutral-900 to-transparent transition-all duration-500 group-hover:w-16 dark:from-neutral-100" />
        </div>
      </div>
    </motion.div>
  );
};

// Main features section component
export const FeaturesSection = ({
  eyebrow,
  heading,
  description,
  features,
  className
}: FeaturesSectionProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden",
        "bg-neutral-50 dark:bg-background",
        "py-24 lg:py-32",
        className
      )}
    >
      {/* Background grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-2xl text-center lg:mb-20"
        >
          {eyebrow && (
            <SuperTitle title={eyebrow} />
          )}

          <h2 className="mb-6 font-heading font-light text-4xl tracking-tight text-neutral-900 dark:text-neutral-100 lg:text-5xl">
            {heading}
          </h2>

          {description && (
            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
          )}
        </motion.div>

        {/* Features grid */}
        <div className="grid gap-px bg-neutral-200 dark:bg-neutral-800 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Alternative: Bento-style layout
export const FeaturesSectionBento = ({
  eyebrow,
  heading,
  description,
  features,
  className
}: FeaturesSectionProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden",
        "bg-white dark:bg-neutral-950",
        "py-24 lg:py-32",
        className
      )}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-20"
        >
          {eyebrow && (
            <div className="mb-4">
              <span className="inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                {eyebrow}
              </span>
            </div>
          )}

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <h2 className="font-light text-4xl tracking-tight text-neutral-900 dark:text-neutral-100 lg:text-5xl">
              {heading}
            </h2>

            {description && (
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 lg:pt-2">
                {description}
              </p>
            )}
          </div>
        </motion.div>

        {/* Bento Grid - Asymmetric layout */}
        <div className="grid gap-4 lg:grid-cols-6 lg:grid-rows-2">
          {features.map((feature, index) => {
            // Define custom spans for bento layout
            const spans = [
              'lg:col-span-4', // First item - wide
              'lg:col-span-2', // Second item - narrow
              'lg:col-span-2', // Third item - narrow
              'lg:col-span-4', // Fourth item - wide
              'lg:col-span-3', // Fifth item - medium
              'lg:col-span-3', // Sixth item - medium
            ];

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={cn(
                  "group relative overflow-hidden",
                  "border border-neutral-200/60 dark:border-neutral-800/60",
                  "bg-neutral-50 dark:bg-neutral-900",
                  "transition-all duration-500",
                  "hover:border-neutral-300 dark:hover:border-neutral-700",
                  spans[index % spans.length]
                )}
              >
                <div className="relative p-8 lg:p-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex h-10 w-10 items-center justify-center">
                    <div className="text-neutral-900 dark:text-neutral-100">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
                      {feature.label}
                    </span>

                    <h3 className="font-light text-xl tracking-tight text-neutral-900 dark:text-neutral-100">
                      {feature.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {feature.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  {feature.metrics && (
                    <div className="mt-8 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60">
                      <div className="text-2xl font-light text-neutral-900 dark:text-neutral-100">
                        {feature.metrics.value}
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
                        {feature.metrics.label}
                      </div>
                    </div>
                  )}

                  {/* Gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-linear-to-br from-neutral-100/60 via-transparent to-transparent dark:from-neutral-800/40" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export type { Feature, FeaturesSectionProps };
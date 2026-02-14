"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import SuperTitle from './layout/SuperTitle'

interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  faqs: FAQItem[]
  categories?: string[]
  showCategories?: boolean
  contactCTA?: {
    text: string
    href: string
  }
  className?: string
}

const FAQAccordion = ({ item, isOpen, onClick }: {
  item: FAQItem
  isOpen: boolean
  onClick: () => void
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group border-b border-neutral-200/60 dark:border-neutral-800/60"
    >
      <button
        onClick={onClick}
        className="w-full py-6 px-4 text-left transition-colors duration-300 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/50"
        aria-expanded={isOpen}
      >
        <div className="flex items-start justify-between gap-6 px-1">
          <div className="flex-1 space-y-1">
            {/* Category badge */}
            {item.category && (
              <motion.span
                className="inline-block text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0.6 }}
                transition={{ duration: 0.2 }}
              >
                {item.category}
              </motion.span>
            )}

            {/* Question */}
            <h3 className={cn(
              "text-lg font-medium font-heading tracking-wide transition-colors duration-200",
              isOpen
                ? "text-neutral-900 dark:text-neutral-100"
                : "text-neutral-700 dark:text-neutral-300"
            )}>
              {item.question}
            </h3>
          </div>

          {/* Icon toggle */}
          <motion.div
            className="relative mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white transition-colors duration-300 group-hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950 dark:group-hover:border-neutral-700"
            animate={{
              rotate: isOpen ? 180 : 0,
              scale: isOpen ? 1.05 : 1
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="minus"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Minus className="h-4 w-4 text-neutral-700 dark:text-neutral-300" strokeWidth={2} />
                </motion.div>
              ) : (
                <motion.div
                  key="plus"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus className="h-4 w-4 text-neutral-700 dark:text-neutral-300" strokeWidth={2} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Answer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                opacity: { duration: 0.2 }
              }}
              className="overflow-hidden"
            >
              <motion.div
                className="pb-2 pl-1 pr-14 pt-4"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {item.answer}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Active indicator line */}
      <motion.div
        className="h-px w-full bg-gradient-to-r from-accent via-accent/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: isOpen ? 1 : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
      />
    </motion.div>
  )
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  categories = [],
  showCategories = false,
  contactCTA,
  className
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredFAQs = activeCategory
    ? faqs.filter(faq => faq.category === activeCategory)
    : faqs

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className={cn(
      "relative w-full overflow-hidden bg-white dark:bg-background py-24 lg:py-32",
      className
    )}>
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />

        {/* Gradient accent */}
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center">
          <SuperTitle title="Frequently Asked Questions" />
          <motion.div
            className="mb-16 text-center lg:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mb-4 text-4xl font-light tracking-tight text-neutral-900 font-heading dark:text-neutral-100 lg:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* Category filters */}
          {showCategories && categories.length > 0 && (
            <motion.div
              className="mb-12 flex flex-wrap items-center justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button
                onClick={() => setActiveCategory(null)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300",
                  activeCategory === null
                    ? "bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                )}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300",
                    activeCategory === category
                      ? "bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                  )}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* FAQ List */}
        <div className="w-full space-y-0">
          {filteredFAQs.map((faq) => (
            <FAQAccordion
              key={faq.id}
              item={faq}
              isOpen={openId === faq.id}
              onClick={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        {contactCTA && (
          <motion.div
            className="mt-16 w-full rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-8 text-center backdrop-blur-sm dark:border-neutral-800/60 dark:bg-neutral-900/50 lg:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-3 text-2xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
              Still have questions?
            </h3>
            <p className="mb-6 text-neutral-600 dark:text-neutral-400">
              Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help.
            </p>
            <a
              href={contactCTA.href}
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-neutral-100 transition-all duration-300 hover:bg-neutral-800 hover:gap-3 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              {contactCTA.text}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export type { FAQItem, FAQSectionProps }
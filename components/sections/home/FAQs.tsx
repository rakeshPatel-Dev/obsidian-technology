"use client"

import { FAQSection } from '@/components/faq'
import { faqs, FaqCategories } from '@/data/faq'

// Example 1: Basic FAQ (No categories)
export function BasicFAQ() {
  return (
    <FAQSection
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about our product and billing. Can't find the answer you're looking for? Please chat to our friendly team."
      faqs={faqs}
      contactCTA={{
        text: 'Contact Support',
        href: '/contact'
      }}
    />
  )
}

// Example 2: FAQ with Categories
export function CategorizedFAQ() {
  return (
    <FAQSection
      title="Got Questions?"
      subtitle="Find answers to common questions about our platform, billing, and support."
      faqs={faqs}
      categories={FaqCategories}
      showCategories={true}
      contactCTA={{
        text: 'Get in Touch',
        href: '/contact'
      }}
    />
  )
}


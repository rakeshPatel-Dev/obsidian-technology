export type FAQCategory =
  | 'Engagement'
  | 'Process'
  | 'Engineering'
  | 'Security'
  | 'Collaboration'

export interface FAQ {
  id: string
  category: FAQCategory
  question: string
  answer: string
}

export const FaqCategories: FAQCategory[] = [
  'Engagement',
  'Process',
  'Engineering',
  'Security',
  'Collaboration',
]

export const faqs: FAQ[] = [
  {
    id: '1',
    category: 'Engagement',
    question: 'How do you structure project engagements?',
    answer:
      'Every engagement begins with a structured discovery phase to define business objectives, technical scope, and measurable outcomes. Projects are milestone-based with clearly defined deliverables, timelines, and accountability at each stage.',
  },
  {
    id: '2',
    category: 'Engagement',
    question: 'What types of companies do you work with?',
    answer:
      'We partner with growth-focused startups, established brands, and international businesses that require scalable, performance-driven digital systems. Our work is best suited for teams that value long-term technical stability over short-term fixes.',
  },
  {
    id: '3',
    category: 'Process',
    question: 'What is your development process?',
    answer:
      'Our process includes strategic planning, system architecture design, interface validation, engineering execution, and performance optimization. Each phase is documented and aligned with business objectives to ensure clarity and measurable progress.',
  },
  {
    id: '4',
    category: 'Engineering',
    question: 'How do you ensure scalability and performance?',
    answer:
      'We design modular architectures, enforce performance budgets, and conduct real-world load testing before deployment. Systems are built for long-term scalability, not just launch-day functionality.',
  },
  {
    id: '5',
    category: 'Engineering',
    question: 'What technologies do you specialize in?',
    answer:
      'We select technologies based on business requirements rather than trends. Our expertise includes modern frontend frameworks, scalable backend architectures, cloud infrastructure, and performance optimization strategies.',
  },
  {
    id: '6',
    category: 'Security',
    question: 'How do you protect sensitive business data?',
    answer:
      'We implement strict access controls, encrypted environments, and secure deployment pipelines. All projects operate under formal confidentiality agreements, and infrastructure decisions follow enterprise-grade security standards.',
  },
  {
    id: '7',
    category: 'Collaboration',
    question: 'How do you work with internal teams?',
    answer:
      'We integrate seamlessly with in-house design, product, and engineering teams. Communication is structured, documentation is shared, and progress reporting is consistent to ensure alignment without operational friction.',
  },
  {
    id: '8',
    category: 'Engagement',
    question: 'Do you work with international clients?',
    answer:
      'Yes. We collaborate across multiple time zones using structured communication protocols and milestone tracking to ensure clarity, consistency, and timely delivery.',
  },
]

import {
	CodeIcon,
	GlobeIcon,
	// LayersIcon,
	Users,
	Star,
	FileText,
	Shield,
	RotateCcw,
	Handshake,
	HelpCircle,
	BarChart,
	PlugIcon,
	Smartphone,
	Paintbrush,
	Rocket,
	Briefcase,
} from "lucide-react"

import { LucideIcon } from "lucide-react"

export type LinkItem = {
	title: string
	href: string
	icon: LucideIcon
	description?: string
}

/* ================================
   SERVICES / PRODUCTS
================================ */

export const productLinks: LinkItem[] = [
  {
    title: "Digital Platforms",
    href: "/services/web-development",
    description:
      "We architect scalable, high-performance platforms engineered for growth — not just launch. Built to handle scale, speed, and long-term evolution.",
    icon: GlobeIcon,
  },
  {
    title: "Interface Systems",
    href: "/services/frontend",
    description:
      "From UX strategy to pixel-perfect execution, we design and engineer intuitive interfaces that feel seamless, deliberate, and conversion-driven.",
    icon: Paintbrush,
  },
  {
    title: "Growth Optimization",
    href: "/services/performance-seo",
    description:
      "Speed, accessibility, and search visibility aligned into a performance engine that increases engagement, retention, and measurable revenue impact.",
    icon: BarChart,
  },
  {
    title: "System Integrations",
    href: "/services/integrations",
    description:
      "We connect payments, CMS, APIs, and third-party tools into a unified, automated ecosystem that eliminates friction and operational inefficiencies.",
    icon: PlugIcon,
  },
]


/* ================================
   COMPANY
================================ */

export const companyLinks: LinkItem[] = [
	{
		title: "About Obsydean",
		href: "/about",
		description: "Who we are, what we value, and how we work",
		icon: Users,
	},
	{
		title: "Our Work",
		href: "/work",
		description: "Real projects, real results",
		icon: Star,
	},
	{
		title: "Partnerships",
		href: "/partnerships",
		description: "Collaborate with us on long-term growth",
		icon: Handshake,
	},
	{
		title: "Careers",
		href: "/careers",
		description: "Join a team that builds serious digital products",
		icon: Briefcase,
	},
]

/* ================================
   LEGAL / RESOURCES
================================ */

export const companyLinks2: LinkItem[] = [
	{
		title: "Terms of Service",
		href: "/terms",
		icon: FileText,
	},
	{
		title: "Privacy Policy",
		href: "/privacy",
		icon: Shield,
	},
	{
		title: "Refund Policy",
		href: "/refund",
		icon: RotateCcw,
	},
	{
		title: "Blog & Insights",
		href: "/blog",
		icon: Rocket,
	},
	{
		title: "Help & Support",
		href: "/support",
		icon: HelpCircle,
	},
]

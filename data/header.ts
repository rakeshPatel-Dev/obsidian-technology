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
		title: "Web Development",
		href: "/services/web-development",
		description: "High-performance, scalable websites built with modern tech",
		icon: GlobeIcon,
	},
	{
		title: "Frontend Engineering",
		href: "/services/frontend",
		description: "Pixel-perfect UI with React, Next.js & modern frameworks",
		icon: CodeIcon,
	},
	{
		title: "UI / UX Design",
		href: "/services/ui-ux",
		description: "Clean, conversion-focused interfaces users love",
		icon: Paintbrush,
	},
	{
		title: "Mobile-First Solutions",
		href: "/services/mobile",
		description: "Fast, responsive experiences across all devices",
		icon: Smartphone,
	},
	{
		title: "Performance & SEO",
		href: "/services/performance-seo",
		description: "Optimized speed, accessibility, and search visibility",
		icon: BarChart,
	},
	{
		title: "Integrations & APIs",
		href: "/services/integrations",
		description: "Payments, CMS, third-party tools & custom APIs",
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

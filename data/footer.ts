import { FacebookIcon,  InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';

export interface FooterSection {
	label: string;
	links: FooterLink[];
}

export interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

export const footerLinks: FooterSection[] = [
	{
		label: 'Services',
		links: [
			{ title: 'Web Development', href: '/services/web-development' },
			{ title: 'Frontend Engineering', href: '/services/frontend' },
			{ title: 'UI / UX Design', href: '/services/ui-ux' },
			{ title: 'Mobile-First Solutions', href: '/services/mobile' },
			{ title: 'Performance & SEO', href: '/services/performance-seo' },
			{ title: 'Integrations & APIs', href: '/services/integrations' },
			{ title: 'Maintenance & Support', href: '/services/maintenance' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'About Obsidian', href: '/about' },
			{ title: 'Our Work', href: '/projects' },
			{ title: 'Partnerships', href: '/partnerships' },
			{ title: 'Careers', href: '/careers' },
			{ title: 'Contact', href: '/contact' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Blog', href: '/blog' },
			{ title: 'Case Studies', href: '/case-studies' },
			{ title: 'Tech Stack', href: '/tech-stack' },
			{ title: 'FAQs', href: '/faqs' },
		],
	},
	{
		label: 'Legal',
		links: [
			{ title: 'Privacy Policy', href: '/privacy' },
			{ title: 'Terms of Service', href: '/terms' },
			{ title: 'Refund Policy', href: '/refund' },
			{ title: 'Cookies Policy', href: '/cookies' },
		],
	},
	{
		label: 'Social',
		links: [
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
			{ title: 'Instagram', href: '#', icon: InstagramIcon },
			{ title: 'Facebook', href: '#', icon: FacebookIcon },
			{ title: 'YouTube', href: '#', icon: YoutubeIcon },
		],
	},
];

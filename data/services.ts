  
import { Paintbrush, BarChart, Plug, Globe } from 'lucide-react';


  export const services = [
    {
      title: "Digital Platforms",
      description:
        "Scalable, high-performance web platforms engineered for long-term growth — built to handle traffic, scale, and evolving product demands.",
      category: "Infrastructure",
      icon: Globe,
      href: "/services/digital-platforms",
      featured: true,
      metrics: {
        label: "uptime",
        value: "99.9%",
      },
    },
    {
      title: "Interface Systems",
      description:
        "Strategic UX and precision frontend engineering combined into seamless, conversion-driven interfaces that elevate user experience.",
      category: "Experience",
      icon: Paintbrush,
      href: "/services/interface-systems",
      metrics: {
        label: "engagement lift",
        value: "+35%",
      },
    },
    {
      title: "Growth Optimization",
      description:
        "Performance tuning, technical SEO, and accessibility improvements aligned into a measurable growth engine.",
      category: "Performance",
      icon: BarChart,
      href: "/services/growth-optimization",
      badge: "Impact",
      metrics: {
        label: "load speed",
        value: "<1.5s",
      },
    },
    {
      title: "System Integrations",
      description:
        "Payments, CMS, APIs, and third-party tools unified into a cohesive ecosystem that eliminates operational friction.",
      category: "Systems",
      icon: Plug,
      href: "/services/system-integrations",
      badge: "Enterprise",
    },
  ];
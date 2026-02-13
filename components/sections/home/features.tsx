"use client"
import {
  Zap,
  Shield,
  Sparkles,
  Lock,
  TrendingUp,
  Users
} from 'lucide-react';
import { FeaturesSection, FeaturesSectionBento } from '@/components/feature';
import { ArrowUpRight, CompassIcon, Gauge, Layers, Layout, ShieldCheck } from "lucide-react";

// Example 1: Standard Grid Layout
export function StandardFeaturesExample() {
  const features = [
    {
      id: '1',
      icon: <CompassIcon className="h-6 w-6" strokeWidth={1.5} />,
      label: 'Strategy',
      title: 'Clarity Before Execution',
      description:
        'Every engagement begins with structured thinking — positioning, system mapping, and measurable objectives before a single line of code is written.',
    },
    {
      id: '2',
      icon: <Gauge className="h-6 w-6" strokeWidth={1.5} />,
      label: 'Performance',
      title: 'Engineered for Speed',
      description:
        'Performance is built into the foundation, not optimized later. Clean architecture and disciplined engineering ensure consistently fast experiences.',
      metrics: {
        value: '< 1.5s',
        label: 'Load Time Target',
      },
    },
    {
      id: '3',
      icon: <Layout className="h-6 w-6" strokeWidth={1.5} />,
      label: 'Experience',
      title: 'Conversion-Driven Design',
      description:
        'Interfaces are structured to guide behavior — reducing friction, increasing clarity, and translating attention into measurable action.',
      metrics: {
        value: '+30%',
        label: 'Avg. Engagement Lift',
      },
    },
    {
      id: '4',
      icon: <Layers className="h-6 w-6" strokeWidth={1.5} />,
      label: 'Architecture',
      title: 'Built to Scale',
      description:
        'Modular systems and maintainable codebases designed for long-term evolution — preventing costly rebuilds as your business grows.',
    },
    {
      id: '5',
      icon: <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />,
      label: 'Execution',
      title: 'Senior-Led Delivery',
      description:
        'Experienced engineers and designers oversee every project phase. No outsourcing. No diluted ownership. Precision from start to launch.',
    },
    {
      id: '6',
      icon: <ArrowUpRight className="h-6 w-6" strokeWidth={1.5} />,
      label: 'Partnership',
      title: 'Beyond Launch',
      description:
        'Continuous refinement, optimization, and strategic guidance ensure your digital presence remains competitive long after release.',
    },
  ];


  return (
    <FeaturesSection
      eyebrow="Features"
      heading="Our Standards"
      description="Everything you need to scale your business, all in one place. Powerful features that just work."
      features={features}
    />
  );
}

// Example 2: Bento Layout
export function BentoFeaturesExample() {
  const features = [
    {
      id: '1',
      icon: <Zap className="h-6 w-6" strokeWidth={1.5} />,
      label: 'Performance',
      title: 'Blazing Fast Infrastructure',
      description: 'Built on edge computing with global CDN. Your users experience instant load times, anywhere.',
      metrics: {
        value: '< 50ms',
        label: 'Global Latency'
      }
    },
    {
      id: '2',
      icon: <Shield className="h-6 w-6" strokeWidth={1.5} />,
      label: 'Security',
      title: 'Fort Knox Protection',
      description: 'Military-grade security that never gets in your way.',
    },
    {
      id: '3',
      icon: <Sparkles className="h-6 w-6" strokeWidth={1.5} />,
      label: 'AI Assistant',
      title: 'Your Smart Copilot',
      description: 'AI that understands context and adapts to your workflow.',
    },
    {
      id: '4',
      icon: <Lock className="h-6 w-6" strokeWidth={1.5} />,
      label: 'Compliance',
      title: 'Regulatory Ready',
      description: 'SOC 2 Type II, GDPR, HIPAA, and ISO 27001 certified. Audited quarterly by independent security firms.',
      metrics: {
        value: '100%',
        label: 'Compliant'
      }
    },
    {
      id: '5',
      icon: <TrendingUp className="h-6 w-6" strokeWidth={1.5} />,
      label: 'Scalability',
      title: 'Infinite Scale',
      description: 'From startup to enterprise, our infrastructure scales with you.',
      metrics: {
        value: '1M+',
        label: 'Requests/sec'
      }
    },
    {
      id: '6',
      icon: <Users className="h-6 w-6" strokeWidth={1.5} />,
      label: 'Integration',
      title: 'Connect Everything',
      description: 'Seamlessly integrate with your existing tools and workflows.',
      metrics: {
        value: '200+',
        label: 'Integrations'
      }
    },
  ];

  return (
    <FeaturesSectionBento
      eyebrow="Capabilities"
      heading="Enterprise power, startup simplicity"
      description="We've obsessed over every detail so you don't have to. Focus on what matters most—growing your business."
      features={features}
    />
  );
}

// Example 3: Minimal (No metrics, no eyebrow)
export function MinimalFeaturesExample() {
  const features = [
    {
      id: '1',
      icon: <Zap className="h-6 w-6" strokeWidth={1.5} />,
      label: 'Speed',
      title: 'Instant Everything',
      description: 'No loading screens. No waiting. Just instant, delightful experiences.',
    },
    {
      id: '2',
      icon: <Shield className="h-6 w-6" strokeWidth={1.5} />,
      label: 'Trust',
      title: 'Always Secure',
      description: 'Sleep well knowing your data is protected by industry-leading security.',
    },
    {
      id: '3',
      icon: <Sparkles className="h-6 w-6" strokeWidth={1.5} />,
      label: 'Magic',
      title: 'Works Like Magic',
      description: 'Intuitive design meets powerful features. No manual required.',
    },
  ];

  return (
    <FeaturesSection
      heading="The difference is in the details"
      features={features}
    />
  );
}

// Example 4: Full Page Demo
export default function FeaturesPageDemo() {
  return (
    <div className="min-h-screen">
      {/* Grid Layout */}
      <StandardFeaturesExample />

      {/* Bento Layout */}
      {/* <BentoFeaturesExample /> */}

      {/* Minimal */}
      {/* <MinimalFeaturesExample /> */}
    </div>
  );
}
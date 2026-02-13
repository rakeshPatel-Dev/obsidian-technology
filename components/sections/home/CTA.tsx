"use client"
import { Sparkles } from 'lucide-react';
import { AnimatedFeatureSpotlight } from '@/components/feature-spotlight';

export default function AnimatedFeatureSpotlightDemo() {
  return (
    <div className="flex items-center dark:bg-background justify-center w-full min-h-screen bg-muted p-4">
      <AnimatedFeatureSpotlight
        preheaderIcon={<Sparkles className="h-4 w-4" />}
        preheaderText="Let’s Build What Others Can’t"
        heading={
          <>
            <span className="text-primary">Exceptional</span> Digital{' '}
            <span className="text-primary">Experiences</span>
          </>
        }
        description="From strategy to scalable engineering, we design and build high-performance digital platforms that elevate brands and drive measurable growth. Every project is crafted with precision, performance, and long-term vision."
        buttonText="Start a Project"
        buttonProps={{ onClick: () => alert('CTA Clicked!') }}
        imageUrl="https://forecaster.biz/wp-content/uploads/2025/06/screener-1536x993.avif"
        imageAlt="Showcase of a high-performance digital platform"
      />
    </div>
  );
}

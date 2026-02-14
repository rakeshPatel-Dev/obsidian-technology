"use client"
import React from 'react';
import { ServiceCard } from '@/components/card-26';
import { services } from '@/data/services';
import SuperTitle from '@/components/layout/SuperTitle';
// Example usage with SaaS-style service cards
const Services = () => {



  const handleCardClick = (service: string) => {
    // Handle navigation programmatically if needed
    console.log(`Navigating to ${service}`);
    // router.push(href) or custom navigation logic
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-20 px-6 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <SuperTitle title="Services" />
          <h1 className="text-5xl font-heading md:text-6xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
            Engineered for Ambitious Brands
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            We design and build digital systems that combine strategy, performance,
            and precision engineering — turning complex ideas into scalable realities.

          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.href}
              title={service.title}
              description={service.description}
              category={service.category}
              icon={service.icon}
              href={service.href}
              index={index}
              featured={service.featured}
              badge={service.badge}
              metrics={service.metrics}
              onClick={() => handleCardClick(service.href)}
            />
          ))}
        </div>

        {/* Footer CTA */}
        {/* <div className="mt-20 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-6">
            Ready to build something exceptional?
          </p>
          <button className="px-8 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
            Get a quote
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
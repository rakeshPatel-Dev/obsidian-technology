import { BrandHero } from "@/components/sections/home/background"
import AnimatedFeatureSpotlightDemo from "@/components/sections/home/CTA"
import FeaturesPageDemo from "@/components/sections/home/features"
import { LogoLoop } from "@/components/sections/home/Logoloop"
import ServiceCardExample from "@/components/sections/home/services"
import ClientTestimonials from "@/components/sections/home/testimonials"
import { DemoVariant1 } from "@/components/sections/home/VideoPlayer"

const page = () => {
  return (
    <div>
      <BrandHero />
      <LogoLoop />
      <ServiceCardExample />
      <DemoVariant1 />
      <FeaturesPageDemo />
      <ClientTestimonials />
      <AnimatedFeatureSpotlightDemo />

    </div>
  )
}

export default page

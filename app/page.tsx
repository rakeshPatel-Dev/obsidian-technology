import { BrandHero } from "@/components/sections/home/background"
import HomeCTA from "@/components/sections/home/CTA"
import { BasicFAQ } from "@/components/sections/home/FAQs"
import FeaturesPageDemo from "@/components/sections/home/features"
import { LogoLoop } from "@/components/sections/home/Logoloop"
import { FeatureStepsDemo } from "@/components/sections/home/Process"
import Services from "@/components/sections/home/services"
import ClientTestimonials from "@/components/sections/home/testimonials"
import { PromoVideo } from "@/components/sections/home/VideoPlayer"

const page = () => {
  return (
    <div>
      <BrandHero />
      <LogoLoop />
      <Services />
      <PromoVideo />
      <FeaturesPageDemo />
      <ClientTestimonials />
      <FeatureStepsDemo />
      <BasicFAQ />
      <HomeCTA />

    </div>
  )
}

export default page

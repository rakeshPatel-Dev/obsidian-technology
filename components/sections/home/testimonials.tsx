import { Testimonial } from "@/components/clean-testimonial"
import { ContainerAnimated, ContainerStagger } from "@/components/hero-video"

export default function ClientTestimonials() {
  return (
    <main className="min-h-screen flex flex-col gap-10 items-center justify-center bg-background w-full">
      <ContainerStagger viewport={{ once: false }}>
        <ContainerAnimated>
          <h3 className=" font-heading text-2xl md:text-5xl ">Client Testimonials</h3>
        </ContainerAnimated>
      </ContainerStagger>
      <Testimonial />
    </main>
  )
}

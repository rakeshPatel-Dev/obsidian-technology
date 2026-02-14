import { Testimonial } from "@/components/clean-testimonial"
import { ContainerAnimated, ContainerStagger } from "@/components/hero-video"
import SuperTitle from "@/components/layout/SuperTitle"

export default function ClientTestimonials() {
  return (
    <main className="min-h-screen flex flex-col gap-10 items-center justify-center bg-background w-full">
      <ContainerStagger viewport={{ once: false }}>
        <ContainerAnimated className=" flex items-center gap-4 flex-col">
          <SuperTitle title="Feedbacks " />
          <h3 className=" font-heading text-2xl md:text-5xl ">Client Testimonials</h3>
          <p className="text-muted-foreground text-center px-6 max-w-2xl" >Hear what our clients have to say about their experience working with us. Real thoughts from people we&apos;ve helped. </p>
        </ContainerAnimated>
      </ContainerStagger>
      <Testimonial />
    </main>
  )
}

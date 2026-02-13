import {
  ContainerInset,
  ContainerScroll,
  ContainerStagger,
  ContainerAnimated
} from "@/components/hero-video"

const DemoVariant1 = () => {
  return (
    <ContainerScroll className="bg-stone-100 relative dark:bg-background text-stone-800 dark:text-foreground">
      <ContainerStagger viewport={{ once: false }}>
        <ContainerAnimated animation="top">
          <h1 className="text-3xl font-heading md:text-5xl font-black leading-tight tracking-tight">
            Wait. What is this?
          </h1>
        </ContainerAnimated>
      </ContainerStagger>

      <ContainerInset className="mt-16 w-full relative aspect-video mx-auto rounded-2xl shadow-2xl">
        <video
          loop
          playsInline
          autoPlay
          muted
          preload="metadata"
          className="relative z-10 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/8084758/8084758-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </ContainerInset>
    </ContainerScroll>
  )
}


export { DemoVariant1 }
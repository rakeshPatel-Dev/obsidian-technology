import { Hero } from "@/components/hero"

function BrandHero() {
  return (
    <Hero
      title="We build fast, scalable digital products."
      subtitle="Obsydean is a modern web studio helping startups and businesses design, engineer, and launch high-performance websites and applications that grow with them."
      actions={[
        {
          label: "View Our Work",
          href: "/work",
          variant: "outline",
        },
        {
          label: "Start a Project",
          href: "/contact",
          variant: "default",
        },
      ]}
      titleClassName="text-4xl font-heading max-w-4xl md:text-6xl font-extrabold tracking-tight"
      subtitleClassName="text-base md:text-xl max-w-[640px] text-muted-foreground"
      actionsClassName="mt-10"
    />
  )
}

export { BrandHero }

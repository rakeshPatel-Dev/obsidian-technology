import { Sparkles } from "@/components/ui/sparkles"
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { logos } from "@/data/brands"

export function LogoLoop() {
  return (
    <div className=" w-full overflow-hidden">
      <div className="mx-auto w-full max-w-4xl">
        {/* <div className="text-center text-3xl text-foreground">
          <span className="text-indigo-900 dark:text-indigo-200">
            Trusted by experts.
          </span>
          <br />
          <span>Used by the leaders.</span>
        </div> */}

        <div className="relative mt-7 h-25 w-full">
          <InfiniteSlider
            className='flex h-full w-full items-center'
            duration={30}
            gap={48}
          >
            {logos.map(({ id, component: Logo, className }) => (
              <div
                key={id}
                className={className}
              >
                <span className=" flex items-center justify-center gap-4">
                  <Logo />
                  <span className=" font-heading capitalize">{id}</span>
                </span>
              </div>
            ))}
          </InfiniteSlider>
          <ProgressiveBlur
            className='pointer-events-none absolute top-0 left-0 h-full w-50'
            direction='left'
            blurIntensity={1}
          />
          <ProgressiveBlur
            className='pointer-events-none absolute top-0 right-0 h-full w-50'
            direction='right'
            blurIntensity={1}
          />
        </div>
      </div>

      <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-900" />
        <Sparkles
          density={1200}
          className="absolute text-foreground dark:text-black inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </div>
  )
}
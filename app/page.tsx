import Image from "next/image";
import { ContactDialog } from "@/components/contact-dialog";
import { HeroEffects } from "@/components/hero-effects";
import headshot from "./headshot.png";

export default function Home() {
  return (
    <main className="relative flex min-h-svh flex-col overflow-hidden bg-[#050505] text-[#f5f5f3]">
      <section className="relative min-h-[80svh] flex-1 overflow-hidden" aria-labelledby="intro-title">
        <HeroEffects />
        <div className="absolute inset-x-0 bottom-0 top-0 z-20 mx-auto w-full max-w-[72rem]">
          <Image
            src={headshot}
            alt="Labib Amir Salimi"
            fill
            priority
            sizes="(max-width: 640px) 120vw, (max-width: 1024px) 82vw, 68vw"
            className="object-contain object-center [mask-image:linear-gradient(to_bottom,black_68%,transparent_100%)]"
          />
        </div>

        <h1 id="intro-title" data-parallax-text className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-center font-mono font-semibold uppercase leading-[0.72] tracking-[-0.065em] will-change-transform">
          <span className="block text-[clamp(5.6rem,17.6vw,21rem)]">Labib</span>
          <span className="mt-[0.18em] block text-[clamp(2.9rem,9.4vw,11.25rem)] tracking-[-0.01em]">Amir Salimi</span>
        </h1>

        <p
          aria-hidden="true"
          data-parallax-text
          className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center text-center font-mono font-semibold uppercase leading-[0.72] tracking-[-0.065em] will-change-transform opacity-50"
        >
          <span className="block text-[clamp(5.6rem,17.6vw,21rem)] text-transparent [-webkit-text-stroke:2px_#f5f5f3]">Labib</span>
          <span className="mt-[0.18em] block text-[clamp(2.9rem,9.4vw,11.25rem)] tracking-[-0.01em] text-transparent [-webkit-text-stroke:1px_#f5f5f3]">Amir Salimi</span>
        </p>

        <p className="absolute inset-x-4 bottom-28 z-30 text-center text-[clamp(0.9rem,1.7vw,1.35rem)] font-medium leading-snug tracking-[-0.025em] text-white/80 sm:inset-x-0 sm:bottom-32 sm:whitespace-nowrap">
          Full-stack developer building reliable products that outlast the MVP.
        </p>
      </section>

      <nav className="absolute bottom-6 left-1/2 z-40 grid h-16 w-[calc(100%-2rem)] max-w-screen-xl -translate-x-1/2 grid-cols-[minmax(0,1fr)_4.5rem_minmax(0,1fr)] border border-white/20 bg-black/75 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:h-[4.5rem] sm:grid-cols-[minmax(0,1fr)_5.5rem_minmax(0,1fr)]" aria-label="Explore portfolio">
        <a className="group flex items-center justify-between px-5 text-sm font-medium tracking-[-0.045em] outline-none transition-colors hover:bg-[#466dff] hover:text-white focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white sm:px-7 sm:text-base" href="#what-i-do">
          <span>What I do</span><span className="opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">↘</span>
        </a>
        <ContactDialog />
        <a className="group flex items-center justify-between px-5 text-sm font-medium tracking-[-0.045em] outline-none transition-colors hover:bg-[#2e8b86] hover:text-white focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white sm:px-7 sm:text-base" href="#who-i-am">
          <span>Who I am</span><span className="opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">↘</span>
        </a>
      </nav>
    </main>
  );
}

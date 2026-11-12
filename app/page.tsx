import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MoveUpLeft, MoveUpRight } from "lucide-react";
import { ContactDialog } from "@/components/contact-dialog";
import { HeroEffects } from "@/components/hero-effects";
import { PageTransition } from "@/components/page-transition";
import headshot from "./headshot.png";

export default function Home() {
  return (
    <PageTransition>
      <main className="relative flex min-h-svh flex-col overflow-hidden bg-[#050505] text-[#f5f5f3]">
      <section className="relative min-h-[80svh] flex-1 overflow-hidden" aria-labelledby="intro-title">
        <HeroEffects />
        <nav className="absolute left-6 top-6 z-40 hidden flex-col items-start gap-3 sm:flex" aria-label="Personal highlights">
          <Link className="inline-flex items-center gap-1.5 text-[0.95rem] text-white/55 outline-none transition-colors hover:text-[#aebfff] focus-visible:ring-1 focus-visible:ring-white" href="/personal#on-the-go" transitionTypes={["to-personal"]}>Beyond the Screen <MoveUpRight className="size-3.5" strokeWidth={1.5} aria-hidden="true" /></Link>
          <Link className="inline-flex items-center gap-1.5 text-[0.95rem] text-white/55 outline-none transition-colors hover:text-[#aebfff] focus-visible:ring-1 focus-visible:ring-white" href="/personal#about-me" transitionTypes={["to-personal"]}>About Me <MoveUpRight className="size-3.5" strokeWidth={1.5} aria-hidden="true" /></Link>
          <Link className="inline-flex items-center gap-1.5 text-[0.95rem] text-white/55 outline-none transition-colors hover:text-[#aebfff] focus-visible:ring-1 focus-visible:ring-white" href="/personal#journal" transitionTypes={["to-personal"]}>Blog <MoveUpRight className="size-3.5" strokeWidth={1.5} aria-hidden="true" /></Link>
        </nav>
        <nav className="absolute right-6 top-6 z-40 hidden flex-col items-end gap-3 sm:flex" aria-label="Professional highlights">
          <Link className="inline-flex items-center gap-1.5 text-[0.95rem] text-white/55 outline-none transition-colors hover:text-[#aebfff] focus-visible:ring-1 focus-visible:ring-white" href="/work#capabilities" transitionTypes={["to-professional"]}><MoveUpLeft className="size-3.5" strokeWidth={1.5} aria-hidden="true" /> Skills and Capabilities</Link>
          <Link className="inline-flex items-center gap-1.5 text-[0.95rem] text-white/55 outline-none transition-colors hover:text-[#aebfff] focus-visible:ring-1 focus-visible:ring-white" href="/work#experience" transitionTypes={["to-professional"]}><MoveUpLeft className="size-3.5" strokeWidth={1.5} aria-hidden="true" /> Experiences</Link>
          <Link className="inline-flex items-center gap-1.5 text-[0.95rem] text-white/55 outline-none transition-colors hover:text-[#aebfff] focus-visible:ring-1 focus-visible:ring-white" href="/work#selected-work" transitionTypes={["to-professional"]}><MoveUpLeft className="size-3.5" strokeWidth={1.5} aria-hidden="true" /> Projects</Link>
        </nav>
        <div className="absolute bottom-[15%] left-1/2 top-[15%] z-20 w-[min(88vw,25rem)] -translate-x-1/2 sm:bottom-0 sm:top-0 sm:w-[min(62vw,34rem)] 2xl:w-[min(48vw,58rem)]">
          <Image
            src={headshot}
            alt="Labib Amir Salimi"
            fill
            priority
            sizes="(max-width: 640px) 120vw, (max-width: 1024px) 82vw, 68vw"
            className="object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_58%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_58%,transparent_100%)] sm:object-center"
          />
        </div>

        <h1 id="intro-title" data-parallax-text className="pointer-events-none absolute inset-x-0 bottom-[12%] top-[-12%] z-10 flex flex-col items-center justify-center text-center font-mono font-semibold uppercase leading-[0.72] tracking-[-0.065em] will-change-transform sm:inset-0">
          <span className="block text-[clamp(3.5rem,20vw,5.6rem)] sm:text-[clamp(5.6rem,17.6vw,21rem)] 2xl:text-[clamp(14rem,18vw,32rem)]">Labib</span>
          <span className="mt-[0.18em] block text-[clamp(1.85rem,10vw,2.9rem)] tracking-[-0.01em] sm:text-[clamp(2.9rem,9.4vw,11.25rem)] 2xl:text-[clamp(7.2rem,9.4vw,16.5rem)]">Amir Salimi</span>
        </h1>

        <p
          aria-hidden="true"
          data-parallax-text
          className="pointer-events-none absolute inset-x-0 bottom-[12%] top-[-12%] z-30 flex flex-col items-center justify-center text-center font-mono font-semibold uppercase leading-[0.72] tracking-[-0.065em] will-change-transform opacity-50 sm:inset-0"
        >
          <span className="block text-[clamp(3.5rem,20vw,5.6rem)] text-transparent [-webkit-text-stroke:1px_#f5f5f3] sm:text-[clamp(5.6rem,17.6vw,21rem)] sm:[-webkit-text-stroke:2px_#f5f5f3] 2xl:text-[clamp(14rem,18vw,32rem)]">Labib</span>
          <span className="mt-[0.18em] block text-[clamp(1.85rem,10vw,2.9rem)] tracking-[-0.01em] text-transparent [-webkit-text-stroke:1px_#f5f5f3] sm:text-[clamp(2.9rem,9.4vw,11.25rem)] 2xl:text-[clamp(7.2rem,9.4vw,16.5rem)]">Amir Salimi</span>
        </p>

        <p className="absolute inset-x-5 bottom-28 z-30 text-center text-[clamp(0.85rem,1.7vw,1.35rem)] font-medium leading-snug tracking-[-0.025em] text-white/80 sm:inset-x-0 sm:bottom-32 sm:whitespace-nowrap 2xl:text-[clamp(1.35rem,1.7vw,2rem)]">
          Full-stack developer building reliable products that outlast the MVP.
        </p>
      </section>

      <nav className="absolute bottom-5 left-1/2 z-40 grid h-14 w-[calc(100%-1.5rem)] max-w-screen-xl -translate-x-1/2 grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] border border-white/20 bg-black/75 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:bottom-6 sm:h-[4.5rem] sm:w-[calc(100%-2rem)] sm:grid-cols-[minmax(0,1fr)_5.5rem_minmax(0,1fr)]" aria-label="Explore portfolio">
        <Link className="group flex items-center justify-between px-5 text-sm font-medium tracking-[-0.045em] outline-none transition-colors hover:bg-[#aebfff] hover:text-[#101a44] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white sm:px-7 sm:text-base" href="/personal" transitionTypes={["to-personal"]}>
          <ChevronLeft className="size-4" strokeWidth={1.5} aria-hidden="true" /><span>Who I am</span>
        </Link>
        <ContactDialog />
        <Link className="group flex items-center justify-between px-5 text-sm font-medium tracking-[-0.045em] outline-none transition-colors hover:bg-[#aebfff] hover:text-[#101a44] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white sm:px-7 sm:text-base" href="/work" transitionTypes={["to-professional"]}>
          <span>What I do</span><ChevronRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
        </Link>
      </nav>
      </main>
    </PageTransition>
  );
}

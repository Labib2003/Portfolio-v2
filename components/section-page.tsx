import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { SectionRailNav } from "@/components/section-rail-nav";

export type SectionEntry = {
  title: string;
  detail: string;
  meta: string;
};

type SectionPageProps = {
  kind: "personal" | "professional";
  title: string;
  introduction: string;
  entries: SectionEntry[];
};

function HomeLink({ isPersonal, transitionType }: { isPersonal: boolean; transitionType: "from-personal" | "from-professional" }) {
  const Icon = isPersonal ? ChevronRight : ChevronLeft;

  return (
    <Link href="/" transitionTypes={[transitionType]} className="inline-flex items-center gap-2 text-sm text-white/65 outline-none transition-colors hover:text-white focus-visible:ring-1 focus-visible:ring-white">
      {!isPersonal && <Icon className="size-4" strokeWidth={1.5} />}
      Home
      {isPersonal && <Icon className="size-4" strokeWidth={1.5} />}
    </Link>
  );
}

export function SectionPage({ kind, title, introduction, entries }: SectionPageProps) {
  const isPersonal = kind === "personal";
  const homeTransition = isPersonal ? "from-personal" : "from-professional";
  const railBorder = isPersonal ? "md:border-r" : "md:border-l";

  const rail = (
    <aside className={`accent-scrollbar hidden h-svh shrink-0 flex-col overflow-y-auto border-white/15 bg-black/45 p-7 backdrop-blur-md md:flex md:w-72 ${railBorder} lg:w-80`}>
      <div>
        <p className="text-xs font-medium tracking-[0.08em] text-white/40">{isPersonal ? "Personal" : "Professional"}</p>
        <SectionRailNav entries={entries} label={`${title} sections`} />
      </div>
      <p className="mt-auto border-t border-white/15 pt-5 text-xs leading-5 text-white/35">Labib Amir Salimi<br />Full-stack developer</p>
    </aside>
  );

  return (
    <PageTransition>
      <main className="h-svh overflow-hidden bg-[#050505] text-[#f5f5f3] md:flex">
        {isPersonal && rail}
        <section data-section-scroll className="accent-scrollbar section-scroll h-svh min-w-0 flex-1 overflow-y-auto px-5 pb-16 sm:px-10 lg:px-16">
          <div className={`sticky top-0 z-20 flex h-20 items-center bg-[#050505]/90 backdrop-blur-md ${isPersonal ? "justify-start md:justify-end" : "justify-start"}`}>
            <HomeLink isPersonal={isPersonal} transitionType={homeTransition} />
          </div>
          <div className="mx-auto max-w-4xl">
            <p className="text-sm text-[#aebfff]">{isPersonal ? "A little beyond the work." : "Engineering that holds up."}</p>
            <h1 className="mt-4 max-w-3xl font-mono text-[clamp(2.5rem,7vw,6rem)] font-semibold uppercase leading-[0.92] tracking-[-0.07em]">{title}</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">{introduction}</p>

            <div className="mt-16 border-t border-white/15">
              {entries.map((entry, index) => (
                <article id={entry.title.toLowerCase().replaceAll(" ", "-")} className="group grid gap-4 border-b border-white/15 py-8 sm:grid-cols-[8rem_minmax(0,1fr)_auto] sm:gap-8" key={entry.title}>
                  <p className="font-mono text-xs text-[#aebfff]">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h2 className="text-xl font-medium tracking-[-0.04em]">{entry.title}</h2>
                    <p className="mt-3 max-w-xl leading-7 text-white/60">{entry.detail}</p>
                  </div>
                  <div className="flex items-start justify-between gap-4 sm:flex-col sm:items-end">
                    <p className="text-sm text-white/35">{entry.meta}</p>
                    <ArrowUpRight className="size-5 text-white/30 transition-colors group-hover:text-[#aebfff]" strokeWidth={1.25} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {!isPersonal && rail}
      </main>
    </PageTransition>
  );
}

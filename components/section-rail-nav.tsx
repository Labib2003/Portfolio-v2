"use client";

import { useEffect, useState } from "react";

type RailEntry = { title: string };

function entryId(title: string) {
  return title.toLowerCase().replaceAll(" ", "-");
}

export function SectionRailNav({ entries, label }: { entries: RailEntry[]; label: string }) {
  const [activeId, setActiveId] = useState(() => entryId(entries[0]?.title ?? ""));

  useEffect(() => {
    const updateActive = () => {
      const hash = window.location.hash.slice(1);
      setActiveId(hash || entryId(entries[0]?.title ?? ""));
    };

    updateActive();
    window.addEventListener("hashchange", updateActive);
    window.addEventListener("popstate", updateActive);
    return () => {
      window.removeEventListener("hashchange", updateActive);
      window.removeEventListener("popstate", updateActive);
    };
  }, [entries]);

  return (
    <nav className="mt-5" aria-label={label}>
      <ul className="space-y-1">
        {entries.map((entry) => {
          const id = entryId(entry.title);
          const isActive = id === activeId;
          return (
            <li key={entry.title}>
              <a
                className={`flex items-center gap-3 py-2 text-sm transition-colors ${isActive ? "text-white" : "text-white/55 hover:text-white"}`}
                href={`#${id}`}
              >
                <span className={`size-1.5 rounded-full transition-colors ${isActive ? "bg-[#aebfff]" : "bg-white/25"}`} />
                {entry.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

import { SectionPage, type SectionEntry } from "@/components/section-page";

const entries: SectionEntry[] = [
  { title: "About Me", detail: "A curious builder who enjoys making complex systems feel calm, useful, and human. Usually found following an idea until it has a shape.", meta: "Introduction" },
  { title: "On the Go", detail: "Notes from conferences, workshops, meetups, conventions, and the occasional trip made memorable by a great conversation.", meta: "Field notes" },
  { title: "Beyond the Screen", detail: "Karate practice, guitar sessions, and other deliberate distractions that keep the work from becoming the whole story.", meta: "Off hours" },
  { title: "Bookshelf", detail: "A changing shelf of engineering, history, and fiction—annotated with quick ratings and the occasional longer reflection.", meta: "Reading list" },
  { title: "Watchlist", detail: "Films and series worth recommending for their craft, their ideas, or simply a well-earned evening away from a terminal.", meta: "Worth watching" },
  { title: "Journal", detail: "Personal stories, observations, and opinions collected while building, travelling, and paying attention.", meta: "Notes" },
  { title: "Gallery", detail: "Photography and small moments that deserve to remain visible after the day has moved on.", meta: "Archive" },
];

export default function PersonalPage() {
  return <SectionPage kind="personal" title="Who I am" introduction="The work matters, but so does the life around it. Here are the interests, places, and stories that inform how I see things." entries={entries} />;
}

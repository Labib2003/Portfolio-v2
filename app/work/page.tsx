import { SectionPage, type SectionEntry } from "@/components/section-page";

const entries: SectionEntry[] = [
  { title: "Overview", detail: "I build software with an emphasis on clarity, resilience, and the unglamorous details that keep a product useful after launch day.", meta: "Approach" },
  { title: "Selected Work", detail: "A selection of delivered solutions, production projects, and client work where reliability had to be more than a promise.", meta: "Case studies" },
  { title: "Capabilities", detail: "Backend engineering, systems integrations, automation, cloud infrastructure, and the connective work between them.", meta: "What I do" },
  { title: "Experience", detail: "Teams, responsibilities, and achievements that shaped how I approach technical decisions and delivery.", meta: "Background" },
  { title: "The Lab", detail: "MCP servers, prototypes, experiments, and open-source work—small projects built to test a useful idea properly.", meta: "In progress" },
  { title: "Technical Writing", detail: "Architecture breakdowns, tutorials, and engineering notes for problems that are easier to solve when shared clearly.", meta: "Writing" },
  { title: "Let's Collaborate", detail: "Available for freelance engagements, consulting, and conversations about difficult systems worth making simpler.", meta: "Contact" },
];

export default function WorkPage() {
  return <SectionPage kind="professional" title="What I do" introduction="A practical engineering practice for teams that need durable systems, not just a fast first release." entries={entries} />;
}

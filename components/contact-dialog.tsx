"use client";

import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group flex h-full w-full items-center justify-center border-x border-[#7286d2] bg-[#aebfff] text-[#101a44] outline-none transition-colors hover:bg-[#d7e0ff] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white" aria-label="Get in touch">
          <Mail className="size-6 transition-transform duration-200 group-hover:-translate-y-0.5" strokeWidth={1.5} aria-hidden="true" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Let&apos;s make it work.</DialogTitle>
        <DialogDescription>
          Have a product, platform, or difficult problem in mind? I&apos;d like to hear about it.
        </DialogDescription>
        <a className="mt-7 inline-flex border-b border-white pb-1 text-sm font-medium outline-none transition-opacity hover:opacity-60 focus-visible:ring-1 focus-visible:ring-white" href="mailto:hello@labibamirsalimi.com">
          hello@labibamirsalimi.com
        </a>
      </DialogContent>
    </Dialog>
  );
}

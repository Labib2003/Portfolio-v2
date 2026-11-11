"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ComponentProps } from "react";

function Dialog(props: ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger(props: ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogContent({ children, className = "", ...props }: ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in" />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={`fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 border border-white/30 bg-[#090909] p-7 text-white shadow-2xl outline-none ${className}`}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 p-1 text-white/60 outline-none transition hover:text-white focus-visible:ring-1 focus-visible:ring-white" aria-label="Close contact dialog">
          <X className="size-5" strokeWidth={1.5} />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

function DialogTitle(props: ComponentProps<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title className="text-2xl font-medium tracking-[-0.06em]" {...props} />;
}

function DialogDescription(props: ComponentProps<typeof DialogPrimitive.Description>) {
  return <DialogPrimitive.Description className="mt-3 text-sm leading-6 text-white/60" {...props} />;
}

export { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger };

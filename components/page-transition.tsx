import { ViewTransition } from "react";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={{
        "to-personal": "slide-from-left",
        "to-professional": "slide-from-right",
        "from-personal": "slide-from-right",
        "from-professional": "slide-from-left",
        default: "none",
      }}
      exit={{
        "to-personal": "slide-to-right",
        "to-professional": "slide-to-left",
        "from-personal": "slide-to-left",
        "from-professional": "slide-to-right",
        default: "none",
      }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}

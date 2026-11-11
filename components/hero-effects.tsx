"use client";

import { useEffect } from "react";

export function HeroEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const textLayers = document.querySelectorAll<HTMLElement>("[data-parallax-text]");
    let animationFrame: number | undefined;
    let pointerX = 0;
    let pointerY = 0;

    const update = () => {
      const x = ((pointerX / window.innerWidth) - 0.5) * 10;
      const y = ((pointerY / window.innerHeight) - 0.5) * 7;
      textLayers.forEach((layer) => {
        layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
      animationFrame = undefined;
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (animationFrame === undefined) animationFrame = requestAnimationFrame(update);
    };

    const reset = () => textLayers.forEach((layer) => { layer.style.transform = "translate3d(0, 0, 0)"; });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("blur", reset);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("blur", reset);
      if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute left-1/2 top-[43%] size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#426cff]/15 blur-[110px]" />
    </div>
  );
}

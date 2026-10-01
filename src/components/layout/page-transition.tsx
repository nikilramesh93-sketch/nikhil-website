"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { WrapperPaper } from "@/components/ui/wrapper-paper";

/**
 * A sheet of wrapper paper passes across the screen on every route change.
 *
 * It covers nothing that matters: the next page is already rendered underneath,
 * the sheet only crosses it, and it never takes pointer events. The point is
 * that navigating feels like being handed the next thing across the counter.
 *
 * Driven by the Web Animations API rather than React state or a toggled class.
 * State would re-render the whole shell on every navigation for a decoration,
 * and a class gets wiped the next time React reconciles this element's
 * className — which killed the sweep mid-pass.
 */
export function PageTransition() {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement | null>(null);
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    // Only sweep when the route actually changed. Tracking the last path rather
    // than a "first render" flag covers two cases at once: a fresh page load,
    // where a sheet crossing the screen before anyone has clicked anything just
    // looks like a glitch, and StrictMode's double-invoked effects in dev, which
    // would otherwise fire a sweep on arrival.
    if (lastPath.current === pathname) return;
    const isInitial = lastPath.current === null;
    lastPath.current = pathname;
    if (isInitial) return;

    const node = ref.current;
    if (!node || typeof node.animate !== "function") return;

    // The sheet is display:none unless the visitor is fine with motion, so a
    // reduced-motion visitor gets nothing to animate and nothing to cancel.
    node.getAnimations().forEach((animation) => animation.cancel());
    node.animate(
      [
        { transform: "translate3d(-101%, 0, 0)" },
        { transform: "translate3d(101%, 0, 0)" },
      ],
      { duration: 580, easing: "cubic-bezier(0.65, 0, 0.35, 1)" },
    );
  }, [pathname]);

  return (
    <div ref={ref} aria-hidden="true" className="page-sweep">
      <WrapperPaper tone="ink" opacity={0.12} size={200} />
    </div>
  );
}

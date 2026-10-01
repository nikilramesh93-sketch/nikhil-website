"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Scroll-entry motion primitive.
 *
 * Two variants, deliberately only two — a brand reads as intentional when it
 * repeats a small vocabulary, and as twitchy when every block moves differently.
 *
 *   rise — content lifts and settles. For copy blocks, cards, list rows.
 *   wipe — a left-to-right "butter wipe" uncovers the frame. For photography.
 *
 * Elements start hidden only inside a `prefers-reduced-motion: no-preference`
 * block in globals.css, so a reduced-motion visitor sees everything at rest
 * rather than a page of invisible sections.
 */
type RevealVariant = "rise" | "wipe";

interface RevealProps {
  children: ReactNode;
  /** Wrapper element. Defaults to a div; pass "section" / "article" to keep semantics. */
  as?: ElementType;
  variant?: RevealVariant;
  /** Milliseconds to hold before moving. Use index * 60 to stagger a grid. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export function Reveal({
  children,
  as: Tag = "div",
  variant = "rise",
  delay = 0,
  className = "",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // The revealed flag is a class toggled on the node, not React state:
    // nothing else in the tree depends on it, so there is no reason to
    // re-render — and the server render has to stay the un-revealed markup
    // either way to avoid a hydration mismatch.
    const reveal = () => node.classList.add("is-revealed");

    // Show immediately, rather than trap content behind an event that may not
    // fire, when any of these hold:
    //   - no IntersectionObserver at all;
    //   - the visitor asked for reduced motion;
    //   - the document is hidden. Browsers don't deliver intersection
    //     callbacks to a hidden page, so a link opened in a background tab
    //     would otherwise sit at opacity 0. Nobody is watching the animation
    //     in that tab anyway, so skipping straight to the rest state costs
    //     nothing and removes the only way this can hide content for good.
    if (
      typeof IntersectionObserver === "undefined" ||
      document.hidden ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal();
          observer.disconnect();
        }
      },
      // Fire a touch before the block reaches the fold so the motion finishes
      // as it arrives, instead of starting once it is already being read.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${className}`.trim()}
      style={
        delay ? ({ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties) : style
      }
    >
      {/* The wipe's clip-path has to sit on an inner element, never on the
          observed one: Chrome folds a target's own clip-path into the
          intersection rect it reports, so a clipped target measures 0x0, never
          crosses the threshold, and would stay hidden for good. */}
      {variant === "wipe" ? (
        <span className="reveal-wipe-mask">{children}</span>
      ) : (
        children
      )}
    </Tag>
  );
}

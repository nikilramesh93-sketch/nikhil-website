import type { CSSProperties } from "react";

/**
 * The Holy Pav wrapper paper, as a surface you can lay over anything.
 *
 * The pattern is the one piece of brand material a customer actually holds, so
 * it does the work a generic texture would otherwise do: dividers, the reveal
 * sheet that unwraps a photo, the empty 404 panel, the sweep between pages.
 *
 * The tile (public/brand/wrapper-tile.png, built by scripts/build-wrapper-tile.mjs)
 * is an alpha mask rather than black artwork, so the ink colour comes from
 * background-color here and the same asset prints on cream and on deep red.
 *
 * Always decorative — it renders aria-hidden and ignores pointer events. The
 * parent must establish a positioning context.
 */
const TONE_INK = {
  ink: "var(--ink)",
  paper: "var(--paper)",
  gold: "var(--brand-gold)",
  red: "var(--brand-red-deep)",
} as const;

interface WrapperPaperProps {
  tone?: keyof typeof TONE_INK;
  /** 0–1. Past roughly 0.14 the pattern stops being paper and starts competing with copy. */
  opacity?: number;
  /** Tile edge in CSS pixels. Smaller reads as finer paper, larger as a poster. */
  size?: number;
  className?: string;
}

export function WrapperPaper({
  tone = "ink",
  opacity = 0.08,
  size = 240,
  className = "",
}: WrapperPaperProps) {
  return (
    <span
      aria-hidden="true"
      className={`wrapper-paper ${className}`.trim()}
      style={
        {
          "--wrapper-ink": TONE_INK[tone],
          "--wrapper-opacity": opacity,
          "--wrapper-size": `${size}px`,
        } as CSSProperties
      }
    />
  );
}

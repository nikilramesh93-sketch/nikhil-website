import { WrapperPaper } from "@/components/ui/wrapper-paper";

/**
 * A torn strip of wrapper paper, used where a 1px rule would otherwise sit.
 *
 * Sections on this site are separated by whitespace; where a joint needs to be
 * said out loud, it gets said in the brand's own material instead of a hairline
 * border. Use it sparingly — two or three per page. Past that it stops being a
 * punctuation mark and becomes wallpaper.
 */
export function WrapperDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`wrapper-divider ${className}`.trim()} role="presentation">
      <div className="wrapper-divider-sheet">
        <WrapperPaper opacity={0.14} size={168} />
      </div>
    </div>
  );
}

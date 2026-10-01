import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

/**
 * Share card for WhatsApp / Instagram / X.
 *
 * Next wires this into both og:image and twitter:image automatically.
 *
 * This is the brand key visual, shown whole rather than cropped. It already
 * carries the logo, "Sinfully good.", the three pillars and the packaging, so
 * there is no overlay type here on purpose — a second headline on top would
 * only compete with the one built into the artwork.
 *
 * The artwork is 3:2 and a share card is 1.905:1, so it letterboxes a little
 * left and right. The bed below is sampled from the artwork's own edge pixels
 * (~#4a0101 under its vignette), which makes the bars read as part of the
 * backdrop instead of as bars.
 */
export const alt =
  "Holy Pav — Sinfully good. Vada pav, packaging and branding from a pav kitchen in Koramangala, Bengaluru";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function asDataUrl(relativePath: string, mime: string) {
  const bytes = await readFile(path.join(process.cwd(), "public", relativePath));
  return `data:${mime};base64,${bytes.toString("base64")}`;
}

export default async function OpengraphImage() {
  const keyVisual = await asDataUrl("brand/holy-pav-key-visual.jpg", "image/jpeg");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#470202",
        }}
      >
        <img
          src={keyVisual}
          alt=""
          width={945}
          height={630}
          style={{ width: 945, height: 630, objectFit: "contain" }}
        />
      </div>
    ),
    size,
  );
}

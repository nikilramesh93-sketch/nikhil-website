import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

/**
 * Share card for WhatsApp / Instagram / X.
 *
 * Next wires this into both og:image and twitter:image automatically.
 * The headline comes from the logo PNG rather than live text so we don't have
 * to ship a font binary for satori (which can't read the cached woff2 files).
 */
export const alt = "Holy Pav — a pav kitchen in Koramangala, Bengaluru";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function asDataUrl(relativePath: string, mime: string) {
  const bytes = await readFile(path.join(process.cwd(), "public", relativePath));
  return `data:${mime};base64,${bytes.toString("base64")}`;
}

export default async function OpengraphImage() {
  const [photo, logo] = await Promise.all([
    asDataUrl("hero/vada-pav.jpg", "image/jpeg"),
    asDataUrl("hero-logo.png", "image/png"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#860000",
        }}
      >
        <img
          src={photo}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 42%",
          }}
        />

        {/* Scrim so the mark and the strapline stay legible over the food.
            Satori only paints a gradient layer when the box has explicit
            dimensions — `inset: 0` alone leaves it 0×0. The left bed has to be
            near-solid: the photography is busy and light through the middle. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            backgroundImage:
              "linear-gradient(90deg, #700000 0%, #700000 28%, rgba(112,0,0,0.88) 42%, rgba(112,0,0,0.45) 58%, rgba(112,0,0,0.08) 78%, rgba(112,0,0,0) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 64,
            width: 760,
          }}
        >
          <img src={logo} alt="" width={132} height={132} />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                alignSelf: "flex-start",
                backgroundColor: "#d9a03a",
                color: "#860000",
                padding: "8px 18px",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Sinfully good.
            </div>
            <div
              style={{
                marginTop: 26,
                display: "flex",
                flexDirection: "column",
                color: "#ffffff",
                fontSize: 64,
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: -1.5,
              }}
            >
              <div>If it goes with pav,</div>
              <div>we are making it.</div>
            </div>
            <div
              style={{
                marginTop: 28,
                color: "#f5e2bd",
                fontSize: 23,
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Koramangala, Bengaluru · 11 AM – 11 PM
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

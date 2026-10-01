/**
 * Builds public/brand/wrapper-tile.png — the Holy Pav wrapper paper as a
 * seamless, tileable alpha mask.
 *
 * Why a script instead of a checked-in design file: the wrapper pattern does not
 * exist anywhere in this repo as flat artwork. It only exists printed on paper,
 * photographed inside the food shots. So the two glyphs (the haloed pav mark and
 * the stacked HOLY PAV lockup) are lifted out of the sharpest, flattest, least
 * occluded wrapper in the photo set, cleaned to pure alpha, and then re-laid out
 * on an exact checkerboard so the tile repeats without a seam. That keeps the
 * real artwork rather than a redrawn lookalike, and keeps the provenance
 * auditable.
 *
 * Output is an alpha mask, not black art, so CSS can print it in any brand
 * colour via mask-image + background-color.
 *
 * Run: node scripts/build-wrapper-tile.mjs
 * Replace this with the print file (and delete the script) if the real
 * wrapper artwork ever turns up.
 */
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const SOURCE = "public/menu/adrak-chai-holypav.jpg";
const OUT = "public/brand/wrapper-tile.png";

/** One cell of the checkerboard, in CSS pixels. The tile is 2x2 cells. */
const CELL = 120;
/** Export at 2x so the tile stays crisp on retina at its CSS size. */
const DENSITY = 2;

/** Inkness ramp. Below LO is paper, above HI is solid ink; between is the edge. */
const LO = 0.2;
const HI = 0.58;

/**
 * Pulls one glyph out of the photo and returns it as a black RGBA image whose
 * alpha is how much ink the paper had at that pixel.
 */
async function liftGlyph(region) {
  const { data, info } = await sharp(SOURCE)
    .extract(region)
    .greyscale()
    .normalise()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const alpha = new Uint8Array(width * height);
  for (let i = 0; i < alpha.length; i += 1) {
    const inkness = 1 - data[i] / 255;
    const ramped = (inkness - LO) / (HI - LO);
    alpha[i] = Math.round(Math.min(1, Math.max(0, ramped)) * 255);
  }

  // Trim to the ink so the layout below can position by the glyph, not by how
  // generously the crop was drawn.
  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (alpha[y * width + x] < 24) continue;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
  if (maxX < 0) throw new Error(`No ink found in region ${JSON.stringify(region)}`);

  const w = maxX - minX + 1;
  const h = maxY - minY + 1;
  const rgba = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      rgba[(y * w + x) * 4 + 3] = alpha[(y + minY) * width + (x + minX)];
    }
  }

  return sharp(rgba, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
}

/** Scales a glyph to a target box and gives it a slight hand-printed tilt. */
async function place(buffer, { height, width, rotate }) {
  return sharp(buffer)
    .resize({ height, width, fit: "inside", kernel: "lanczos3" })
    .rotate(rotate, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

const mark = await liftGlyph({ left: 107, top: 84, width: 74, height: 92 });
const word = await liftGlyph({ left: 96, top: 194, width: 100, height: 92 });

const markArt = await place(mark, { height: 62 * DENSITY, rotate: -3 });
const wordArt = await place(word, { width: 60 * DENSITY, rotate: 2 });

const markMeta = await sharp(markArt).metadata();
const wordMeta = await sharp(wordArt).metadata();

const tile = CELL * 2 * DENSITY;
const half = CELL * DENSITY;
const centred = (meta, cx, cy) => ({
  input: meta.art,
  left: Math.round(cx - meta.width / 2),
  top: Math.round(cy - meta.height / 2),
});
const markAt = { ...markMeta, art: markArt };
const wordAt = { ...wordMeta, art: wordArt };

await mkdir("public/brand", { recursive: true });
await sharp({
  create: { width: tile, height: tile, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([
    // Checkerboard: mark, lockup, mark, lockup — the layout the printed paper
    // uses, and the only arrangement that tiles cleanly in both axes.
    centred(markAt, half * 0.5, half * 0.5),
    centred(wordAt, half * 1.5, half * 0.5),
    centred(wordAt, half * 0.5, half * 1.5),
    centred(markAt, half * 1.5, half * 1.5),
  ])
  .png({ compressionLevel: 9, palette: false })
  .toFile(OUT);

console.log(`${OUT} — ${tile}x${tile}px (${CELL * 2}px CSS tile)`);

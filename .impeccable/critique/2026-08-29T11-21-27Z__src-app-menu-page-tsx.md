---
target: menu page (src/app/menu/page.tsx)
total_score: 23
p0_count: 1
p1_count: 2
timestamp: 2026-08-29T11-21-27Z
slug: src-app-menu-page-tsx
---
Method: dual-agent (A: design-review sub-agent · B: detector/browser-evidence sub-agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Sticky pill-nav has no active/current-section indicator; no scroll-spy, no `aria-current`. |
| 2 | Match System / Real World | 2 | Photos don't match products (all 8 vada pav variants share one image); redundant "VEG" tag on all 35 cards. |
| 3 | User Control and Freedom | 3 | Anchor-scroll works, no dead ends, but no filter by subcategory/price once inside a 35-item list. |
| 4 | Consistency and Standards | 3 | Internally consistent, but applied so uniformly it becomes monotony; no differentiated hero treatment anywhere. |
| 5 | Error Prevention | 3 | Out-of-stock overlay and dietary-tag coding exist but are untested in practice (0 of 35 items trigger either). |
| 6 | Recognition Rather Than Recall | 2 | Nav pills show no item counts; "Signature" badge (3 items) isn't summarized as a bestsellers jump point. |
| 7 | Flexibility and Efficiency | 1 | No search, no filter, no sort, no "jump to bestsellers" across a 35-item single-scroll menu. |
| 8 | Aesthetic and Minimalist Design | 3 | Clean grid and strong typographic voice, undercut by placeholder-heavy sections reading as sparse/broken. |
| 9 | Error Recovery | 2 | No onError fallback in menu-card.tsx if a real image genuinely fails to load. |
| 10 | Help and Documentation | 2 | Every combo description ends "Ask us in-store for what's included" — pushes basic info off-site. |
| **Total** | | **23/40** | **Acceptable — significant improvements needed** |

## Anti-Patterns Verdict

**LLM assessment:** Not textbook AI slop at the token level — Anton display type, the locked red/cream/gold palette, and the card hover treatment (`-translate-y-1`, `scale-[1.03]` image zoom) show a real point of view. The tell is structural: **every one of the 5 categories gets identical scaffolding regardless of what it contains.** Vada Pav (flagship, 8 items, two subcategories) renders with the exact same weight and rhythm as Holy Combos (value bundle, 7 items, zero subcategories, zero photography). The numbered index (`01`-`05`) carries no real sequence information, it's decorative restating of array order — a recurring house motif (also on the homepage trust cards) rather than invented on the spot, which softens but doesn't erase the criticism. Most damaging: **57% of items (20 of 35) show "Photo coming soon"**, concentrated as 100% of three whole categories, and even the "real" photos are recycled per-dish-family rather than per-SKU (all 8 Vada Pav variants share one photo; the "Cheese Burst Vada Pav" card shows no visible cheese).

**Deterministic scan:** `detect.mjs --json` on `src/app/menu/page.tsx` and `src/components/menu/menu-card.tsx` returned `[]`, exit 0. Confirmed clean across three independent invocations (relative paths, absolute paths, and plain-text mode). Zero rule hits, so nothing for the LLM read to corroborate or contradict at the pattern-detector level; the real findings here are structural/IA judgment calls the deterministic scanner isn't built to catch (identical-treatment-of-unequal-content, recycled photography, decorative numbering).

**Visual overlays:** Not available this run. Browser visualization was attempted via the chrome-devtools MCP toolset but every call failed with an identical profile-lock error (`The browser is already running for .../chrome-profile`), traced to a separate already-running Chrome DevTools MCP process holding the singleton lock. No alternative browser tool was available to fall back on, and no destructive action (killing the other process) was taken to force it. No user-visible overlay exists this run; the fallback signal is the explicit lock-conflict error above, not a guess.

## Overall Impression

The typographic and color system is confident and distinctive — this doesn't look like a template. But the menu's information architecture applies uniform treatment to unequal content: the brand's namesake category and its highest-ticket category get identical scaffolding, and more than half the menu sits behind an unstyled "Photo coming soon" tile. The single biggest opportunity is wayfinding: a sticky category nav that doesn't track scroll position is doing half its job.

## What's Working

1. **Sticky pill-nav is the right IA instinct.** Anchor-scrolling between 5 categories on a 35-item page is a sound pattern; the sticky positioning correctly offsets for header height so it doesn't overlap site chrome. The mechanism is right, only the active-state feedback is missing.
2. **Typographic voice is confident and on-brand.** Anton uppercase display at 26-76px, tight tracking, hairline rules read as a restaurant with a point of view. The card hover (`-translate-y-1`, soft tinted shadow, `scale-[1.03]` image zoom) is restrained and fits the register.
3. **The "Signature" gold badge + veg/non-veg legend** is a lightweight, appropriately scoped curation signal (3 of 35 items) — good instinct, currently underused (see Recognition heuristic).

## Priority Issues

**[P0] Sticky nav has no scroll-spy / active-state feedback**
Why it matters: once a user taps a category pill and scrolls past it, nothing in the nav shows where they currently are. For a 35-item single-scroll page, this is the entire reason to build a sticky nav in the first place — one-way navigation (click-to-jump) without two-way feedback (scroll-to-highlight) leaves users lost mid-scroll, especially after an interruption (a call, a notification) breaks their scroll position.
Fix: add an `IntersectionObserver` per section, apply an active visual state (filled pill, not just hover) to the matching nav pill as each section enters the viewport.
Suggested command: `$impeccable polish`

**[P1] 57% of the menu (20 of 35 items) shows "Photo coming soon," concentrated as 100% of three categories**
Why it matters: for a craving-driven street-food brand, imagery carries most of the purchase intent. Three entire categories (Holy Bites, Holy Drinks, Holy Combos) are visually indistinguishable grids of the same static placeholder text on flat background — this reads as unfinished, not restrained, and actively weakens conversion on the higher-ticket combo category specifically.
Fix: prioritize real photography for these three categories before the next ship. Where photography timelines don't allow that, give the placeholder actual brand character (illustrated line-art icon, textured pattern) rather than plain centered text repeated 20 times identically.
Suggested command: `$impeccable delight` (placeholder execution) — shooting real photography is a content/production task outside any code command's scope.

**[P1] Photography doesn't match product identity**
Why it matters: all 8 Vada Pav SKUs share one photo regardless of stated differences (cheese, schezwan, crispy); the "Cheese Burst Vada Pav" card shows no visible cheese. This is worse than an honest placeholder — it actively misrepresents what's being sold, and undermines trust exactly where a first-time customer is deciding what to order.
Fix: at minimum, prioritize shooting the top 2-3 highest-price-point differentiators (cheese burst, schezwan variants) first, since they're the items where the visual gap most directly costs conversion.
Suggested command: none (asset production, not a design-system command).

**[P2] Chunking violations: Holy Bites (5 items) and Holy Combos (7 items) render as flat, unsubcategorized grids**
Why it matters: every other category (Vada Pav, Must Try, Holy Drinks) is broken into clear subgroups; these two aren't, which is both a scannability gap and an inconsistent application of the site's own established pattern. Holy Combos in particular (its highest average order value category) would benefit most from structure like "Solo" vs "Sharing."
Fix: add subcategories to `menu.ts` for these two categories, mirroring the treatment already given elsewhere.
Suggested command: `$impeccable layout`

**[P3] "VEG" badge repeated identically on all 35 cards with zero discriminating value**
Why it matters: every item in the current data is `dietaryTag: "veg"`, so the badge (and its unused non-veg color branch) is pure repeated visual noise, not a real signal.
Fix: state it once (e.g., a "100% Vegetarian Kitchen" strip near the page header) and drop the per-card badge, or keep the per-card badge only once non-veg items actually ship.
Suggested command: `$impeccable distill`

## Persona Red Flags

**Jordan (first-timer):** Wants to understand "what is Holy Pav" quickly, and the strong Vada Pav opener delivers that. But by the time Jordan reaches Holy Combos — exactly the "just tell me what to order" bundle a first-timer wants — every combo description reads "Ask us in-store for what's included." Jordan can't decide anything about the ₹419 combo from the site itself; they'd have to call, WhatsApp, or walk in blind.

**Riley (stress tester):** Taps the "Holy Bites" pill and the page jumps, but nothing highlights to confirm the jump landed correctly. Riley also tries comparing "Cheese Grilled" (₹149) vs "Cheese Burst" (₹159) vs "Crispy Cheese Burst" (₹169) Vada Pav: all three show the identical stock photo with no cheese visible in any of them, so a ₹20 price delta has to be inferred from dense line-clamped paragraph text rather than seen.

**Casey (distracted mobile user):** At 390px, the sticky pill-nav is `overflow-x-auto` with no edge-fade or scroll-snap affordance — Casey may not realize "Holy Combos" sits off-screen to the right and never discover it via the nav. Combined with the P0 wayfinding gap, if Casey gets interrupted mid-scroll and returns, the page gives no way to reorient beyond re-reading category headers from scratch.

## Minor Observations

- `dictionary.menu.availabilityLabel` / `.inStock` are defined in `i18n.ts` but never referenced in `menu-card.tsx` or `page.tsx` — dead dictionary keys, likely leftover from an earlier availability-badge design.
- The `accent` gradient field on every `MenuItem` in `menu.ts` is unused in current rendering (confirmed via grep) — a fossil from an earlier design iteration.
- `next/image` in `menu-card.tsx` has no `placeholder="blur"` / `blurDataURL`, so real photos pop in abruptly rather than fading in.
- Kannada category/subcategory labels are fully translated and wired correctly; anchor IDs stay stable across locale switches since they're always derived from the English label. Good i18n detail.
- FSSAI license number in the footer is a literal placeholder ("FSSAI Lic. #####") — outside menu-page scope, but undermines the hygiene/trust messaging the brand explicitly leans on elsewhere.

## Questions to Consider

1. If 57% of the menu has no photography, should those items even be visually equal to photographed ones, or would a deliberately different (smaller, list-style) treatment for "coming soon" items communicate more confidence than pretending they're equivalent?
2. Vada Pav (the flagship) opens the scroll and Holy Combos (likely the highest average order value) closes it, least-photographed and least-structured. Should category order follow business priority rather than a flat taxonomy?
3. Is the sticky pill-nav earning its place if it can't show current position — would a simpler non-sticky table of contents plus a persistent "back to top" deliver the same wayfinding value with less engineering debt than full scroll-spy?

# Holy Pav — Design Critique (Living Doc)

> A working document. Findings move from **Open → In progress → Fixed** as we improve the site. Add new findings at the bottom of each section; do not edit historical findings — strike them through and move them to the **Resolved** log.

**Last updated:** 2026-06-28 (v1.0–v1.3 shipped)
**Snapshot at:** http://localhost:3000 (Next.js 16, webpack dev)
**Screens reviewed:** Home, Menu, Contact, Partners, Checkout (desktop 1440px + mobile 390px)
**Logo / brand mark:** Locked. Do not change. Everything else is in scope.

---

## 0. V1 scope decisions (the floor under everything below)

> Locked 2026-06-28. Read this before reading any finding — some findings have been struck through because they fall outside v1.

### 0.1 What's IN for v1
- Brand identity, layout, copy, type, color, motion, mobile fixes
- Pages: **Home, Menu (browse only), Partners, Contact**
- (Likely) a new **/about** page to land the Mumbai → Bengaluru story
- Both **EN and ಕನ್ನಡ** copies for every change

### 0.2 What's OUT for v1 — hidden until the commerce flow is ready
- **Cart, Wishlist, Checkout** are non-functional and will be **hidden from the UI** to prevent users from hitting broken flows.
- Concretely, this means:
  - Remove `/cart`, `/wishlist`, `/checkout` from the **header nav** ([site-header.tsx:24-32](nikhil-website/src/components/layout/site-header.tsx#L24))
  - Remove them from the **footer link grid** ([site-footer.tsx:25-44](nikhil-website/src/components/layout/site-footer.tsx#L25))
  - Hide the **"Add to cart" + "Wishlist" buttons** on every menu card ([menu-card.tsx:62-78](nikhil-website/src/components/menu/menu-card.tsx#L62))
  - Replace the homepage hero **"Order now"** CTA (currently links to /checkout — broken) with a working alternative (decision pending — see §9)
  - Routes themselves can stay in the codebase (dead pages, no nav exposure) so we don't have to rip out and re-add code. Add a 0-cost guard so direct URL visits land on `/menu` instead of an empty cart.

### 0.3 What's DEFERRED — out of v1 but planned
- **Food photography** — Holy Pav team will deliver later. Until then we work with the current placeholder thumbnails. Any layout that assumes great photography (new hero, IG strip, /about photo grid) gets **wireframed with photo slots** so we can drop in real images later without a rebuild.
- **Cart/Wishlist/Checkout UI polish** — the existing pages will need their own design pass when commerce is unhidden. Defer until then.

### 0.4 What changes about the critique
- Findings tagged 🛒 below depend on hidden commerce surfaces and are **shelved**, not removed.
- Findings tagged 📷 depend on real food photography and are **wireframed-only** for v1.
- Everything else proceeds as planned.

---

## Status legend
- 🔴 **Critical** — visibly broken, blocking, or actively hurting brand perception
- 🟡 **Moderate** — clear improvement, ship it in the next sprint
- 🟢 **Minor** — polish, do when adjacent work happens
- ✅ **Fixed** — done, moved to Resolved log

---

## 1. Overall verdict

The **logo carries 90% of the brand identity**. The rest of the site is generic — pastel gradients, rounded cards, wellness-brand mood — and it actively undercuts what the logo promises. A Bombay vada-pav joint should feel a little hungrier, a little louder, more confident. The opportunity isn't polish; it's a **personality reset** so the site lives up to the mark.

The **five big themes** below are the level-1 issues. Everything in §2–§5 is the specific evidence per surface (desktop, mobile, motion, accessibility).

---

## 2. The five biggest themes

### 2.1 🔴 The site fights the logo
Logo: brutalist, all-caps, single-color red badge. Site: peach-orange-emerald gradients, 24px+ rounded everything, hairline borders, lots of whitespace. Two opposite personalities. The site reads "matcha café," not "vada pav."
**Direction:** Sharper geometry, less rounding, fewer pastels, more high-contrast moments. Commit to a single confident voice.

### 2.2 🔴 📷 No food photography anywhere — *DEFERRED for v1*
Homepage hero shows the *logo* in a frame. Menu thumbnails look stock. For a craving-driven category, the website should make people hungry in the first scroll.
**Direction:** Commission/shoot 4–6 hero photos (Cheese Burst Vada Pav top-down, misal bowl, chutney macro, shopfront, person eating).
**v1 plan:** Brand team delivers photos later. We build the new hero, /about, IG strip with **photo-shaped slots** using current placeholders so we can drop in real images without rebuilding the layout.

### 2.3 🟡 One gradient does all the work
Orange→amber→emerald appears behind the hero, behind menu items, behind partner cards, behind the contact card. It stops being an accent and becomes the visual default. Every page = same mood. No rhythm.
**Direction:** Reserve the gradient for one hero moment per page. Replace elsewhere with brand cream + deliberate accents.

### 2.4 🟡 "Why people choose Holy Pav" cards are dead weight
Three plain white cards, generic claims, no visuals. The screenshot Nikhil's team shared (numbered dark-red **03 HYGIENE** card) is the correct direction — numbered, dense color, opinionated. Use that treatment.

### 2.5 🟡 No brand story / no /about page
Site has product + checkout but no pitch. For a brand whose whole positioning is "Mumbai soul in Bengaluru" there's nothing on the site about who started it, why, what's different about the bun or chutney or masala. This is also where the new copy ("Born in Mumbai. Built for Bengaluru" / "We are not just in Bengaluru. We are for Bengaluru.") wants to land.

---

## 3. Desktop findings (1440px)

| # | Area | Severity | Finding | Recommendation |
|---|---|---|---|---|
| D1 | Button hierarchy | 🟡 | "Explore menu" = filled black; "Order now" = white outline on cream = nearly invisible. Inconsistent across pages. | One pattern: primary = filled brand-red; secondary = outlined brand-red on cream. |
| D2 | Color palette | 🟡 | 5 accent colors (red, orange, amber, emerald, slate), all low-saturation. Hedging. | Tighten to red + cream + ONE accent (mustard or deep green). Drop emerald. |
| D3 | Type hierarchy | 🟡 | H1/H2/H3 all sit at similar weights. No editorial moments. | Bigger H1↔H2 contrast. One display moment per page (pull quote, oversized number, receipt-style menu list). |
| D4 | Hero stat tiles (Prep / Heat / Delivery) | 🟢 | Feel like an app onboarding tutorial. | Remove, or collapse into one horizontal strip: "12 MIN · SPICY · FREE DELIVERY". |
| D5 | Hero right pane | 🟡 📷 | "Holy Pav logo on a gradient" framed as the hero food image. | Replace with a real food photo (deferred). For v1, build the slot at the same aspect with current placeholder, restyled so it doesn't read as a framed logo. |
| D6 | Footer | 🟡 | Plain link grid. No IG icons, no map, no hours, no IG photo strip. | Add IG icon + 6-photo strip, embedded map, hours block, Maps link on address. |
| D7 | Menu section headers | 🟢 | "Signature Menu" and "Holy Pav Menu" use identical type — unclear what differs. | Badge "Signature" with a numbered/colored marker so it actually feels signature. |
| D8 | Menu cards | 🟢 | Veg "VEG" pill is small and lost. | Use the standard FSSAI veg/non-veg square mark — users expect it, also a11y. |
| D8b | Menu cards | 🛒 | Add to cart + Wishlist buttons sit at the bottom of every card. | **v1: hide both buttons.** The card becomes browse-only. Reclaim the space — push the description longer or add an ingredient strip. |
| D9 | Contact page | 🟡 | Two equal pastel cards. No map. No shopfront photo. | Embed Google Map of Adugodi location. Add one shopfront photo. De-emphasise the corporate card. |
| D10 | "Corporate and bulk enquiries" card | 🟢 | Visually equal-weight to primary contact info. | Make it a smaller secondary block beneath, not a peer. |
| D11 | Partners page | 🟢 | "What you get after signup" = 3 boring text rows. "Apply as partner" form is fine but flat. | Add a creator-style visual moment (mock IG card / mock affiliate code chip). |

---

## 4. Mobile findings (390px viewport)

### 4.1 🔴 The header is broken on every page
- **7 nav items as plain text wrap to 2 rows** (HOME / MENU / CART / WISHLIST / CHECKOUT / PARTNERS / CONTACT). No hamburger menu exists.
- **Bilingual logo + tagline + language toggle eat ~100px of vertical space** before the nav even renders.
- **Total header height ≈ 180px** = ~21% of the visible viewport (844px) before any actual content.
- **Result:** every mobile page wastes a fifth of the fold on chrome.
**v1 fix:** After hiding cart/wishlist/checkout (§0.2), the nav drops to **4 items** (Home / Menu / Partners / Contact). At 4 items a single-row nav fits on mobile *without* a hamburger — much smaller scope. Still required: reduce header height to ~64px, collapse the "BORN IN MUMBAI…" tagline below the brand name on mobile, move the EN/ಕನ್ನಡ toggle to the right of the nav (not a separate row). If a hamburger is wanted regardless for future-proofing, build it once and reuse when commerce comes back.

### 4.2 🔴 The hero H1 takes 6 lines on mobile
"HOLY PAV BRINGS THE SOUL OF MUMBAI'S STREETS TO BENGALURU" wraps to six lines at the current `text-6xl` (which is `font-size: 60px` — far too large for 390px). The hero is ~700px tall before CTAs appear — three-quarters of a viewport just for one headline.
**Fix:** Use responsive scale — `text-4xl sm:text-5xl lg:text-7xl` (or smaller). Aim for 3 lines max on mobile.

### 4.3 🔴 🛒 "Order now" CTA is invisible on mobile — *also v1-shelved as a CTA*
White outline pill on the cream gradient = no contrast. **And** it currently links to the hidden /checkout. The button needs to be either replaced or removed for v1 (see §9.1).
**Fix:** Decide what the new primary hero CTA is for v1 (visit us / order on Swiggy / WhatsApp). Whatever it becomes, adopt the unified primary/secondary system from D1.

### 4.4 🟡 No mobile menu drawer means trapped nav
Since #4.1 hasn't been built, users tap a tiny "CONTACT" text link from the wrapped row of 7. Tap-target failure plus visual clutter. **Mitigated by §0.2** — once 3 nav items are hidden, the remaining 4 fit comfortably on one row at 44px tap targets.

### 4.5 🟡 Menu cards are full-width with very tall images
Each menu card image is ~390px wide × ~300px tall (75% of fold for one item). Card density is too low — scrolling through 8 items takes forever.
**v1 fix:** Reduce image aspect ratio to 4:3 or 3:2. Tighter padding. With Add to cart + Wishlist removed (§D8b), each card naturally becomes shorter — combined with the aspect fix, mobile menu should show ~2 items per fold.

### 4.6 🟡 Footer mobile layout collapses tagline + links awkwardly
Footer tagline "SERVING AUTHENTIC MUMBAI STREET FOOD IN BENGALURU" sits above two columns of plain text links with no padding rhythm. Reads like a sitemap, not a brand sign-off.
**Fix:** Stack as: brand block → IG strip → quick links → address+hours+map. One block per row.

### 4.7 🟢 Dev indicator "N" dot showing in screenshots
The black "N" pill in the bottom-left is the Next.js dev toolbar — only in dev, not production. Note for the team: confirm it's gone in `next build` before launch.

### 4.8 ~~🟢 Cart page (empty state) is underbuilt on mobile~~ — 🛒 *SHELVED for v1*
~~"YOUR CART IS EMPTY" + "View menu" is fine but feels like a 404. No image, no upsell ("Start with our bestseller"), no warmth.~~ Revisit when cart is unhidden.

---

## 5. Motion & micro-interactions audit

### 5.1 The state of motion on the site
- **No motion library installed.** No framer-motion, no GSAP, no Lottie. All animation is Tailwind utility classes.
- **24 bare `transition` classes** — no `duration-*` or `ease-*` modifiers, no `transition-colors` or `transition-transform` specificity. Means every property transitions at the default 150ms. Functional, uninspired.
- **No page transitions.** No `loading.tsx`, no Suspense skeletons, no fade between routes. Page nav = hard cut, blank flash possible.
- **No scroll-driven motion.** No reveals, no parallax, no sticky-element transitions, no IntersectionObserver use.

### 5.2 🟡 Hover states are bland and inconsistent
| Class | Where it's used | Problem |
|---|---|---|
| `hover:bg-slate-100` (10×) | Secondary buttons | Generic grey wash, ignores brand red |
| `hover:bg-slate-700` (9×) | Primary buttons | Goes lighter on hover — fine but un-branded |
| `hover:text-orange-700` (8×) | Footer + header links | Only color shift, no underline/scale |
| `hover:shadow-md` (1×) | Only the menu card | Inconsistent — partner-program / contact cards don't lift. Should apply to all clickable cards. |
| `hover:-translate-y-0.5` (1×) | Only the menu card | Card lift is correctly wired here. **Correction:** my earlier "translate-y-0 typo" was a regex artifact — the real class is `-translate-y-0.5` (2px lift). Not a bug. Still a finding: this lift treatment isn't applied to any other card on the site. |

**Fix direction:** Define a small motion vocabulary — buttons get a 200ms color + subtle scale; cards get a 250ms lift (`-translate-y-1 shadow-lg`); links get an animated underline. Apply consistently.

### 5.3 🔴 Focus rings are inconsistent / probably broken for keyboard users
14 `focus:border-orange-400` instances on form inputs. **No `focus-visible:ring-*` patterns anywhere** — meaning buttons, links, and cards likely show inconsistent or no focus indicator on keyboard navigation. Default browser focus rings get over-ridden in places (Tailwind `rounded-full` buttons typically clip the default outline).
**Fix:** Add a global `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500` to every interactive element. Test with Tab key.

### 5.4 🟡 No micro-feedback on the few interactive actions left in v1
- ~~Add to cart / Wishlist / Cart count badge~~ — 🛒 hidden for v1, revisit later.
- **Form submit on Partners** → no spinner, no inline disabled state. **In v1 scope.**
- **Language toggle** → hard swap, no transition. **In v1 scope (see §5.6).**
- **Nav active state** → instant solid pill change. Could animate.
**v1 fix:** Add a loading state + disabled button to the Partners form submit. Tiny success affordance after submit ("Welcome to Holy Pav Partners" success card already exists — animate it in). Defer cart/wishlist micro-feedback until commerce is unhidden.

### 5.5 🟢 No skeleton or shimmer for menu cards
Menu page loads from a local data file (instant), so this isn't visible today, but the moment the menu becomes API-driven, you'll get layout shift. Add skeleton cards with `animate-pulse`.

### 5.6 🟢 Language toggle is a hard swap
EN ↔ ಕನ್ನಡ click = full re-render with no transition. A 150ms cross-fade on the affected text would feel intentional.

### 5.7 🟢 No scroll-snap or carousel on "Top picks"
Currently a 4-column grid on desktop, single-column on mobile. A horizontal swipe carousel on mobile would feel more like a food brand (Swiggy/Zomato all do this).

---

## 6. Accessibility quick reads (not exhaustive)
- **Contrast:** "Order now" white-on-cream outline button — almost certainly fails WCAG AA. Light grey body text on white at ~14px — borderline. Run an axe audit.
- **Focus rings:** Likely broken or missing for keyboard nav (§5.3). 🔴
- **Touch targets on mobile:** "Wishlist" text link under "Add to cart" buttons looks <40px tap area. Below the 44px iOS guideline.
- **Form labels:** Partners form labels are visible but not programmatically associated (need to verify by inspecting `htmlFor`/`id`).
- **Alt text:** Hero logo has alt; menu item images need verification.
- **Lang attribute:** Should switch between `lang="en"` and `lang="kn"` when the toggle is used.

---

## 7. What's working — keep
- ✅ The **logo and the brand red** — genuinely great.
- ✅ **"Born in Mumbai. Built for Bengaluru."** and **"We are not just in Bengaluru. We are for Bengaluru."** — sharp positioning.
- ✅ **Information architecture** — Home / Menu / Cart / Wishlist / Checkout / Partners / Contact is sensible.
- ✅ **Bilingual support (EN/ಕನ್ನಡ)** — rare for a new D2C brand, very Bengaluru, a real differentiator.
- ✅ **The Partners affiliate flow exists at all** — most new F&B brands don't think about this until much later.

---

## 8. v1 implementation plan

> **Goal:** Ship a v1 of the site where every link works, the brand looks like the logo deserves, and the mobile experience doesn't waste a fifth of the viewport on chrome. Commerce stays hidden, photos are slot-shaped until they arrive.

### Phase v1.0 — Hide non-functional commerce (half a day, ship first)
Pure removal work. No design decisions needed.
- [ ] **0.1** Remove `cart`, `wishlist`, `checkout` from `navItems` in [site-header.tsx:24-32](nikhil-website/src/components/layout/site-header.tsx#L24)
- [ ] **0.2** Drop `cartItems` / `wishlistItems` reads from header since they're no longer rendered
- [ ] **0.3** Remove the cart / wishlist / checkout links from [site-footer.tsx:25-44](nikhil-website/src/components/layout/site-footer.tsx#L25)
- [ ] **0.4** In [menu-card.tsx:62-78](nikhil-website/src/components/menu/menu-card.tsx#L62), hide both "Add to cart" + "Wishlist" buttons. Drop the `addToCart` / `addToWishlist` imports.
- [ ] **0.5** Replace homepage hero secondary CTA from "Order now" → /checkout with **"Visit Us"** → Google Maps deeplink to Adugodi store (§9.1). Make sure it gets the secondary button style from step 1.3 (not the broken white-outline-on-cream version).
- [ ] **0.6** Add a quick redirect guard so direct URL visits to `/cart`, `/wishlist`, `/checkout` land on `/menu`. (Cheap: in each page component, useEffect → router.replace.)
- [ ] **0.7** Verify EN + ಕನ್ನಡ both look right after the cuts.

### Phase v1.1 — "Stop the bleeding" (1 weekend) 🔴
The things that visibly hurt the site today.
- [ ] **1.1** Responsive H1 scale on hero so it stops taking 6 lines on mobile (§4.2)
- [ ] **1.2** Mobile header: shrink to ~64px, stack tagline under brand name, single-row nav at 4 items, language toggle inline (§4.1)
- [ ] **1.3** Define + apply unified primary/secondary button system. Primary = filled brand-red, secondary = outlined brand-red on cream. Replace every existing ad-hoc button. (§D1, §4.3)
- [ ] **1.4** Add global `focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2` to all interactive elements. Test with Tab. (§5.3)
- [ ] **1.5** Apply the same card-lift hover (`-translate-y-0.5 shadow-md transition-all duration-200`) to **every** card on the site, not just menu cards. (§5.2)

### Phase v1.2 — "Personality reset" (1–2 weeks) 🔴
The biggest brand wins. Photos are deferred but layouts go in.
- [ ] **2.1** Tighten color palette to **brand red + cream + mustard yellow** (§9.2). Drop emerald and most pastels. Define Tailwind tokens for each. (§D2)
- [ ] **2.2** Stop using the gradient as page background. Reserve it for one hero moment per page. Replace with brand cream elsewhere. (§2.3)
- [ ] **2.3** Rebuild homepage hero with a proper food-photo slot (not a logo-in-frame). Use current placeholder image; document the slot dimensions so real photo drops in without rebuild. (§D5, 📷)
- [ ] **2.4** Replace "Why people choose Holy Pav" cards with the numbered dark-red treatment from Nikhil's team's reference (the HYGIENE 03 card). (§2.4)
- [ ] **2.5** Type hierarchy: bigger H1/H2 contrast, introduce one editorial moment per page (pull quote / oversized number / receipt-style menu list). (§D3)

### Phase v1.3 — "Make it a brand" (2–3 weeks) 🟡
- [ ] **3.1** Build `/about` page — Mumbai → Bengaluru story, photo slots, founder section. (§2.5)
- [ ] **3.2** Footer redesign: IG handle + photo strip slot, embedded map, hours, "Maps" link on address. (§D6, §4.6)
- [ ] **3.3** Contact page redesign: embed Google Map of Adugodi location, shopfront photo slot, demote the corporate card. (§D9, §D10)
- [ ] **3.4** Define motion vocabulary: button 200ms color shift, card 250ms lift, link animated underline. Apply consistently. Document tokens. (§5.2)
- [ ] **3.5** Add `loading.tsx` Suspense skeletons + a subtle 200ms page-transition fade. (§5.1)

### Phase v1.4 — "Polish" (ongoing 🟢)
- [ ] **4.1** FSSAI veg/non-veg mark on menu cards (§D8)
- [ ] **4.2** Menu "Signature" badge treatment (§D7)
- [ ] **4.3** Horizontal scroll-snap "Top picks" carousel on mobile (§5.7)
- [ ] **4.4** Language toggle 150ms cross-fade (§5.6)
- [ ] **4.5** Partners form: loading state on submit, animated success card (§5.4)
- [ ] **4.6** Partners page creator-visual moment (§D11)

### Deferred — post-v1 (when commerce comes back) 🛒
- Cart, Wishlist, Checkout page UI redesigns
- Cart empty state warmth (§4.8)
- Cart count badge "pop" animation
- Add-to-cart toast
- Wishlist heart-fill animation
- Menu card "Add to cart" sticky bar on mobile

### Deferred — when food photos arrive 📷
- Drop real photos into all `/about` slots, footer IG strip, contact shopfront, homepage hero
- Replace placeholder menu thumbnails
- Add the IG-style 6-photo strip to the footer

---

## 9. Decisions locked for v1

### 9.1 ✅ Hero secondary CTA → **"Visit Us"** (Google Maps deeplink to Adugodi)
The menu stays for discovery, but the on-site order CTA is dormant until commerce works. Until then, the primary thing we want users to do (other than read the brand story) is **come to the shop**. Link target:
`https://www.google.com/maps/search/?api=1&query=Holy+Pav+Adugodi+Bengaluru`
(or a place-id-anchored URL once we confirm it's the right pin).

### 9.2 ✅ Third accent color → **Mustard yellow**
Pairs hard with the brand red, on-category for Indian street food, reads warm + hungry. Use it for:
- Numbered card backgrounds (alongside the dark red used in Nikhil's team's HYGIENE-03 reference)
- Hover underlines on links
- The "Signature" badge on menu cards
- Small accent moments — kicker tags, status pills, etc.
Pin a specific token in code (suggest `mustard-500: #E5A823` or similar — confirm at implementation time with a contrast check).

### 9.3 ✅ /about → **In v1** (Phase v1.3 step 3.1)
Story page is on. Bigger build but lands the entire positioning. Photo slots inside until real shots arrive.

### 9.4 Still open — not blocking v1 start
- Swiggy / Zomato presence planned? (Lets us add real order CTAs in v1.5.)
- Single-location Adugodi for foreseeable future, or multi-store soon?
- Is the "Premium street-food ordering experience for Bengaluru-first delivery" footer line locked, or can it be replaced with the new positioning copy?

---

## 10. Resolved log
*(Move findings here as they ship, with date + commit/PR link.)*

### 2026-06-28 — v1.0 → v1.3 shipped in one pass

**Phase v1.0 — Commerce hidden:**
- ✅ 0.1 Cart, Wishlist, Checkout removed from header nav ([site-header.tsx](nikhil-website/src/components/layout/site-header.tsx))
- ✅ 0.2 `cartItems` / `wishlistItems` reads dropped from header
- ✅ 0.3 Cart/Wishlist/Checkout removed from footer
- ✅ 0.4 Add-to-cart + Wishlist buttons hidden on every menu card ([menu-card.tsx](nikhil-website/src/components/menu/menu-card.tsx))
- ✅ 0.5 Hero secondary CTA replaced — now "Visit Us" → Google Maps deeplink to Adugodi
- ✅ 0.6 `/cart`, `/wishlist`, `/checkout`, `/order/confirmation` now `redirect("/menu")` server-side
- ✅ 0.7 Both EN and ಕನ್ನಡ updated together

**Phase v1.1 — Foundations:**
- ✅ 1.1 Hero H1 responsive scale: `text-[44px] sm:text-[64px] lg:text-[80px]` — now fits in 5 lines on mobile (was 6)
- ✅ 1.2 Mobile header redesigned — compact ~96px total (was ~180px), top row (logo + lang), bottom row (5-item nav single row)
- ✅ 1.3 Unified Button component built ([button.tsx](nikhil-website/src/components/ui/button.tsx)) — primary (filled red), secondary (outlined red), ghost — used everywhere
- ✅ 1.4 Global focus ring added in [globals.css](nikhil-website/src/app/globals.css) (`*:focus-visible { outline: 2px solid var(--brand-gold); }`)
- ✅ 1.5 Universal card-lift hover applied across menu cards, trust cards, footer links

**Phase v1.2 — Personality reset:**
- ✅ 2.1 Palette tightened to **brand-red + cream + mustard-gold + deep-ink**. Pastels (emerald, amber-50, fuchsia-100 etc) still defined as overrides but no longer used in components.
- ✅ 2.2 Universal gradient killed — body is now flat cream (`var(--background)`). Three radial-gradient body bg + the `SiteShell` orange/amber/emerald blob layer both removed.
- ✅ 2.3 Hero rebuilt — left column type-driven, right column is a confident red photo-slot with Signature Cheese Burst Vada Pav label + ₹95 mustard chip. Logo-in-frame composition is gone.
- ✅ 2.4 Trust cards replaced with a numbered statement stack — `01 Oil that hasn't seen yesterday.` / `02 Nothing here is mild by accident.` / `03 Every batch starts when you do.` Each one is a full-width row, Anton at 60px, alternating cream and deep-red-with-grain, scroll-revealed. (Corrects an earlier note here that claimed `01 MUMBAI RECIPES / 02 MADE FOR THE CITY / 03 HYGIENE` had shipped in v1.2 — it hadn't; the icon cards were still live until this change.)
- ✅ 2.5 Typography hierarchy redone — eyebrow labels in mustard tracking-wide, display in Anton at 80px/52px/44px, body in Sora at 18px max, editorial "Est. 2026" moment in the story section

**Phase v1.3 — Make it a brand:**
- ✅ 3.1 `/about` page built — 4 numbered sections (the why / the bun / the masala / the promise), oversized red quote block, hero with positioning copy
- ✅ 3.2 Footer redesigned — three-column (brand block + tagline / visit + hours / find-us + explore), small caps labels, animated arrow on Instagram link, copyright + FSSAI line
- ✅ 3.3 Contact page redesigned — left: address + hours + phone + IG + corporate, right: embedded Google Maps iframe of Adugodi pin. Corporate-bulk demoted to a single block below.
- ✅ 3.4 Motion vocabulary tokens in [button.tsx](nikhil-website/src/components/ui/button.tsx) + [globals.css](nikhil-website/src/app/globals.css) — buttons get 200ms color shift + 0.98 active scale, cards get -translate-y-1 with shadow on hover, links get color + arrow translate.
- ✅ Story section added to homepage — eyebrow + display title + body + secondary CTA to /about.
- ✅ Menu page rebuilt — numbered category headers (`01 SIGNATURE MENU · 3 items`), tighter card grid, FSSAI veg/non-veg mark replaces the old "VEG" pill, "Signature" badge in mustard.
- ✅ Partners form: loading state (`isSubmitting` disables button + "Creating code…" copy), success card shows affiliate code in a dashed brand-red panel.

### Carried forward — not done in this pass
- 🟢 Page-transition fades (1.5 step in plan) — not added; skipped to keep scope tight. The on-load `brandRiseIn` is preserved but limited to first-fold elements only.
- 🟢 4.3 Horizontal scroll-snap "Top picks" carousel on mobile — current grid stacks fine, defer.
- 🟢 4.4 Language toggle cross-fade — hard swap remains. Defer.
- 🛒 All deferred-commerce items remain deferred.
- 📷 All photo slots are wireframed with placeholders ready for real shots.

### 2026-10-02 — Wrapper paper as a material (brand-experience audit, swing #5)

The wrapper is the one thing every customer physically holds. It only existed
inside photographs; now it is a reusable surface in the design system, printed
in four places. Shipped on `feat/motion-vocabulary` (PR #2).

- ✅ **The tile.** `public/brand/wrapper-tile.png` — 480×480 (a 240px CSS tile),
  generated by [scripts/build-wrapper-tile.mjs](nikhil-website/scripts/build-wrapper-tile.mjs).
  The two glyphs are **lifted out of the brand's own wrapper photography**
  (`public/menu/adrak-chai-holypav.jpg`), cleaned to pure alpha and re-laid on an
  exact checkerboard so the repeat is seamless. Not a redraw: a redraw would be a
  lookalike, and an SVG `<text>` tile can't load a webfont when it's used as a
  mask. Emitted as an **alpha mask**, so one asset prints ink, cream or gold
  depending on where it sits. If the print file exists, swap the source and
  re-run the script.
- ✅ **`<WrapperPaper>`** ([wrapper-paper.tsx](nikhil-website/src/components/ui/wrapper-paper.tsx))
  — the surface primitive. `tone` × `opacity` × `size`, no hooks, drops into any
  positioned parent.
- ✅ **Torn dividers** ([wrapper-divider.tsx](nikhil-website/src/components/ui/wrapper-divider.tsx))
  — two on the homepage, where the pitch ends and where the story starts. The
  edge polygon is deliberately uneven; an even zigzag reads as a sawtooth graphic.
- ✅ **Unwrap reveals.** The `wipe` variant of `<Reveal>` now takes a sheet of
  wrapper paper off the frame instead of just uncovering it, so photography
  arrives the way the food does. Live on every menu card and the story panel.
- ✅ **404 is an empty wrapper** — gold print on the red panel. The pattern is
  what you hold when there *is* food in your hand; printing it empty behind a
  dead URL is the most on-brand way to say this page has nothing in it.
- ✅ **Page sweep** ([page-transition.tsx](nikhil-website/src/components/layout/page-transition.tsx))
  — a sheet crosses the screen on route change. Driven by the Web Animations API,
  not a toggled class: React reconciliation wipes an imperatively added
  `className` and killed the pass mid-flight. Closes the "page-transition fades"
  item carried forward from v1.3.

All four are off behind `prefers-reduced-motion` where they move, and the
at-rest state is the finished state, so a reduced-motion visitor loses nothing.

---

## 11. Changelog
- **2026-06-28** — Initial critique. Desktop + mobile + motion audit. Five themes, ~25 findings, 20-item prioritized plan.
- **2026-06-28** — v1 scope locked. Cart / Wishlist / Checkout hidden until commerce works. Food photography deferred (slot-shaped layouts). Plan re-phased into v1.0–v1.4 + two Deferred lanes (🛒, 📷). Open questions narrowed to 4 decisions needed to finalise v1. Corrected false-positive motion finding (the menu card's hover lift is `-translate-y-0.5`, not a typo — was a regex artifact in my earlier audit).
- **2026-06-28** — Three decisions locked: hero secondary CTA = **"Visit Us"** Maps deeplink, third accent color = **mustard yellow**, **/about page is in v1**. v1.0–v1.4 plan now fully unblocked.
- **2026-10-02** — **Wrapper paper is a material, not a photo detail.** One tiled asset lifted from the brand's own wrapper shots now prints as section dividers, the sheet that unwraps photography, the empty 404, and the sweep between pages. Per-item manifest in §10.
- **2026-06-28** — **v1.0 → v1.3 shipped.** Commerce hidden, palette reset to red+cream+mustard, hero rebuilt, numbered trust cards replace the bland 3-card section, /about page built with positioning story + oversized quote, footer + contact + menu + partners all redesigned, motion vocabulary applied. Both EN and ಕನ್ನಡ updated in lockstep. Doc's Resolved log §10 has the per-step manifest.

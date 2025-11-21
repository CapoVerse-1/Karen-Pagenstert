# Karin Portfolio Web App — Detailed Plan

## 1. Purpose & Principles
- **Goal:** Deliver a single-page, premium digital business card for Karin, highlighting her handmade earrings and wristbands. The experience must feel bespoke, spa-like, and instantly luxurious, especially for QR visitors on phone screens.
- **Aesthetic keywords:** clean girl, soft touch, glassy minimalism, luminous neutrals, quiet confidence.
- **Vibe description:** Think of a sunlit atelier reflected in frosted glass—airy spacing, whisper-light typography, soft gradients, and gentle reflections that echo skincare packaging and luxury fragrance landing pages.
- **Mobile-first promise:** Design, typography, and animations are conceived for 360–430px viewports first, then gracefully scale to tablet/desktop while preserving proportions.
- **Guiding principles:** elegant restraint, micro-animation richness, zero clutter, obvious contact actions, tactile haptics, and every surface feels lightly frosted or pearlescent.

## 2. Core Content Inventory
- **Identity**
  - Name: *Karen Pagenstert*
  - Descriptor: *Handcrafted adornments. Modern ritual.*
- **Contact**
  - Phone: `+49 176 6216 3294` (tap-to-call, copies on long-press)
  - Email: `karen.pagenstert@yahoo.de` (tap-to-email)
  - Instagram handle placeholder (optional, muted secondary link)
- **Products (pricing preview)**
  - `TOHO ARMBÄNDER (einfach)` — 12€ *(ohne Plättchen 10€)*
  - `TOHO ARMBÄNDER (mit Gold/Silber)` — 15€ *(ohne Plättchen 12€)*
  - `SILBER/GOLD ARMBÄNDER` — 23€ *(ohne Plättchen 21€)*
  - `GLITZERPERLEN ARMBÄNDER` — 23€ *(ohne Plättchen 21€)*
  - `GLASKRISTALLPERLEN ARMBÄNDER` — 20€
  - `ARMBÄNDER AUS GEMISCHTEN PERLEN` — 20€
  - `RINGE` — 12€ *(dünn & dick)*
- **Value props phrases**
  - *“Limited micro-batches, each piece signed.”*
  - *“Recycled gold-fill & cruelty-free fibers.”*
- **CTA copy**
  - Primary: *“Book a private showing”*
  - Secondary: *“Request bespoke set”*

## 3. Information Architecture & Flow
1. **Immersive Hero (0–1 viewport)**
   - Occupies full height on mobile; content vertically centered with 24px safe-area padding.
   - Includes clean stacked name, descriptor, micro manifesto line, and dual CTA row.
   - Background gradient + glass shard overlay immediately sets the clean girl + glassy vibe.
2. **Craft Narrative (1–1.7 viewport)**
   - Scroll-revealed story cards describing materials & process; still mobile-stacked but transforms into a split column by ≥768px.
   - Thin glass dividers and soft captions reinforce attention to detail.
3. **Featured Pieces Carousel (1.7–3 viewport)**
   - Horizontal swipe section pinned to 90vh height; cards snap within a frosted rail.
   - Each product entry uses consistent card specs and price badge.
4. **Contact & Order Panel (3–4 viewport)**
   - Sticky glass cards for phone/email plus persistent CTA strip hugging bottom safe area.
   - Panel ensures QR visitors instantly know how to reach Karen without scrolling back up.
5. **Footer Signature (last 0.3 viewport)**
   - Minimal monogram, provenance line, and timestamp; subtle looping motion closing the journey.

## 4. Visual System
- **Color tokens (clean-girl neutrals)**
  - `bg.charcoal = #08090D` — anchoring void backdrop.
  - `surface.frost = rgba(12, 14, 19, 0.55)` with background blur (see below).
  - `accent.champagne = #F5E6D3` — headlines + key lines.
  - `accent.rose = #B47C74` — secondary buttons, underline cues.
  - `accent.pearl = #FDF7F0` — subtle highlights on glass edges.
  - `accent.mintglow = rgba(217, 255, 251, 0.35)` — hover luminance.
  - Gradient: `linear(135deg, #0F1016 0%, #1B1C23 40%, #2F2028 100%)` rotates slowly for hero.
- **Glassy surfaces**
  - All cards use `backdrop-filter: blur(22px)` (mobile) / `blur(28px)` (desktop) plus `border: 1px solid rgba(245, 230, 211, 0.25)`.
  - Edge highlight via `box-shadow: inset 0 1px 0 rgba(255,255,255,0.25)` and outer drop `0 18px 60px rgba(4,5,8,0.55)`.
  - Corner radius: 20px mobile, 24px desktop; hero CTA chip radius 999px.
- **Typography**
  - Display: `PP Editorial New` weight 600; mobile sizes 32/38/44px depending on section; desktop +12px increments. Tracking +0.04em.
  - Body: `Suisse Intl` weight 300/400; base font 15px mobile, 17px desktop; tracking -0.01em.
  - Numerals (prices) use tabular `Suisse Intl Mono` for perfect alignment.
- **Spacing & rhythm**
  - Unit = 4px; cards internal padding = 24px mobile / 32px desktop.
  - Vertical stack spacing increments: 12px (micro), 24px (standard), 48px (section).
  - Hero top/bottom padding: 56px mobile, 96px desktop.
- **Grid**
  - Mobile: single column with 24px horizontal padding and 8px safe-area offset.
  - Tablet: 6-column fluid grid (min 640px).
  - Desktop: 12-column centered grid max width 1200px; featured cards span 4 columns each.
- **Iconography**
  - Line icons drawn at 1.25px stroke, rounded caps; sized 18px mobile, 20px desktop; accent.rose for inactive, accent.champagne for active.
- **Stroke & divider rules**
  - Standard rule weight = 1px (hairline) using `rgba(245,230,211,0.35)`.
  - Emphasis strokes (e.g., CTA borders) = 1.5px; highlight rings use gradient strokes with 2px width but 30% opacity.

## 5. Animation & Interaction Specs
- **Global Scroll Physics**
  - Smooth scroll via Lenis with 1.15 damping; inertia disabled for reduced-motion users.
  - Section reveal triggers when 20% visible: `opacity 0→1` and `translateY 24px→0` over 0.7s, `cubic-bezier(0.19,1,0.22,1)`.
- **Hero**
  - Gradient plate: rotates 360° over 40s linear, blur pulses 18↔26px every 8s.
  - Name + descriptor: sequential rise (delay 0.05s between lines) with micro letter-spacing expansion (`0.02em→0.04em`).
  - CTA chips: slide in from 12px below with spring (`stiffness 220, damping 24`); ripple halo appears on tap (radius 0→120px, 0.6s).
- **Craft Narrative**
  - Mask wipe from left with clip-path animation (0.5s) plus faint gold underline drawing (stroke-dasharray).
  - Divider hairline glows to `accent.rose` for 0.8s when both columns fully in view.
- **Featured Product Cards**
  - Entry: `scale 0.96→1`, `blur 4px→0`, 0.5s.
  - Idle: parallax tilt tied to pointer/gyro (max 4°) with shadow shifting.
  - Swipe: cards snap using `type: "spring" (stiffness 260, damping 22)`; trailing neon stroke sweeps across header in 0.35s.
  - Price counting animation: increments from 0 to final value over 0.45s with easing `easeOutQuad`.
- **Contact Cards**
  - Tap/click: glass surface brightens (`background rgba(255,255,255,0.18)`) for 180ms, radial ripple expands, copy-to-clipboard toast slides from bottom (duration 1.2s).
  - Long-press (mobile): haptic trigger + subtle vibration icon (Framer Motion `animate={{scale:[1,0.96,1]}}`).
- **CTA Strip**
  - Sticky reveal: fades + slides up 12px when 60% scroll depth reached; remains 96% opaque.
  - Button hover/tap: diagonal fill wipe (mask rotates 15°) over 250ms; arrow icon rotates 90° simultaneously.
- **Footer Monogram**
  - Continuous rotation 360°/45s with slight easing at 0° and 180°; duplicates blur to simulate engraved feel.
- **Page Exit**
  - Fade overlay `rgba(8,9,13,0.85)` in 120ms while content scales down 0.98; navigation delayed 150ms for smoothness.

## 6. Section Blueprints
### Hero
- **Content:** Name, descriptor, manifesto line (≤60 chars), primary CTA “Book a private showing”, secondary ghost CTA “Request bespoke set”.
- **Layout:** Mobile—stacked left-aligned text within 24px padding; CTAs occupy full width, separated by 12px gap. Desktop—text column on left 6 columns wide, subtle negative space to right with floating particles.
- **Background treatment:** Rotating gradient plate + translucent glass shards (CSS pseudo elements) with 1px champagne strokes and 20% opacity noise overlay.
- **Details:** Baseline grid ensures descriptor sits 16px below name; manifesto uses uppercase microtype at 12px with 2px letter spacing; CTAs have 1.5px border and 18px vertical padding.
- **Animation:** Already covered above; ensure background shard shimmer has random 3s delays for organic feel.

### Craft Narrative
- **Content Blocks:** “Material Story” (focus on recycled metals) & “Making Process” (care instructions). Each block has title, two bullet statements, and supporting microcopy line.
- **Card specs:** Glass panels radius 20px, `border: 1px solid rgba(245,230,211,0.22)`, inner padding 24px, top icon chip 36px diameter with gradient ring.
- **Layout:** Mobile—cards stack with 20px spacing; a vertical hairline (1px, 30% opacity) aligns flush left as timeline indicator. Tablet+—cards sit side-by-side separated by 32px with center divider line (1px) glowing on reveal.
- **Typography:** Titles 18px uppercase serif, bullets 14px with 150% line height; microcopy uses italic to mimic label maker.
- **Animation refinement:** mask reveal for each bullet + slight upward float (translateY -6px) when hovered.

### Featured Pieces
- **Structure:** Horizontal scroll container height 320px mobile / 360px desktop, using `motion.div` with drag constraints.
- **Card specs:** Width 260px mobile / 300px desktop; radius 24px; glass blur 24px; border 1px gradient stroke (`linear 90deg, rgba(245,230,211,0.28), rgba(180,124,116,0.42)`); drop shadow `0 20px 50px rgba(0,0,0,0.45)`.
- **Content arrangement:** Product name top-left, style tag (chip) top-right, price row with stacked “mit/ohne Plättchen” detail; bottom features single-line description + “Reserve” text button arrow.
- **Indicators:** Scroll progress bar (1px) along bottom of section filling as user swipes; mobile hints (chevron icons) fade after first interaction.
- **Animations:** Idle tilt (max 4°) + chromatic edge highlight; tapping card triggers luminous stroke traveling around perimeter in 600ms.

### Contact & Order
- **Cards:** Phone + Email displayed as separate glass cards (radius 18px) with 1px stroke. Each card line height 140%, includes icon, label, and value. Value uses accent.champagne and underlined to imply tap action.
- **Copy affordance:** Icon button on the right (32px circle) animates to checkmark (stroke-dash offset) once copied; tooltip "Copied" slides upward 12px before fading.
- **CTA Strip:** Sticky glass dock anchored 12px above safe area; background gradient `linear(120deg, rgba(180,124,116,0.7), rgba(245,230,211,0.15))`. Primary button fills width minus 16px margin, 54px tall, with 1.5px border; ghost button sits beside at 40% width on desktop, stacked on mobile.
- **Micro-interactions:** When sticky bar appears, it casts faint glow onto page (drop shadow `0 -10px 40px rgba(8,9,13,0.65)`); on scroll direction change (upwards), bar subtly lift (translateY -6px) indicating reactivity.

### Footer Signature
- **Content:** Circular monogram “KP” inside 1px champagne stroke circle (diameter 72px mobile / 96px desktop), caption “Designed in Germany · 2025” and final micro CTA linking to Instagram.
- **Surface:** Same glass treatment but with extra inner shadow `inset 0 0 20px rgba(255,255,255,0.08)` so it feels etched.
- **Animation:** Rotation cycle 45s; inner gradient shimmer sweeps across diagonally every 8s; when hovered, ring pulse extends outward 20px before fading.

## 7. Accessibility & Responsiveness
- **Mobile-first layout:** Default viewport width assumption 390px; ensure safe-area insets respected using `padding-top/bottom: calc(24px + env(safe-area-inset-top))`.
- **Breakpoints:** 480px (scale typography + card widths), 768px (enable dual columns for narrative), 1200px (desktop max). Layout should never exceed 72ch text width.
- **Contrast & legibility:** Maintain ≥4.5:1 on all text vs background; glass surfaces gain darker overlay on light mode (if toggled). Provide alternative text for decorative particles (aria-hidden).
- **Motion sensitivity:** Respect `prefers-reduced-motion` by disabling parallax/tilt, replacing transitions with opacity fades under 200ms, pausing rotating gradients.
- **Touch targets:** Minimum 48x48px; sticky bar buttons 54px high. Provide `:focus-visible` outlines using `box-shadow: 0 0 0 2px rgba(217,255,251,0.6)`.
- **Performance:** Cap animation GPU layers (max 4). Use intersection observers for lazy animation start to maintain 60fps on mobile hardware.

## 8. Technical Stack & Implementation Notes
- **Framework:** React + TypeScript + Vite for speedy dev + QR-ready bundle (<80kb JS target).
- **Styling:** Tailwind with custom config or CSS Modules + CSS variables for tokens (`--color-accent-champagne`, etc.). Create utility class for glass surfaces (blur, borders, shadows) to ensure consistency.
- **Animation tooling:** Framer Motion for scroll/tap, `framer-motion/3d` tilt effect fallback to CSS transforms. Lenis for smooth scrolling; GSAP optional for stroke dash reveals if simpler.
- **State/data:** Static `content.ts` exports strongly typed arrays; integrate with React context for future edits. Use `Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })`.
- **Interaction hooks:** Custom hook `useClipboardFeedback()` to handle copy + toast state; `useScrollDepth()` to trigger sticky CTA.
- **Iconography:** Inline SVG components sized via props; define stroke width 1.25px default.
- **Performance:** Preload display font via `@font-face` + `font-display: swap`; compress background texture to <80kb. Use `prefers-reduced-data` to disable heavy gradients.
- **Deployment:** Static hosting (Vercel); set `Cache-Control: public, max-age=31536000` for assets. Provide canonical URL for QR linking.

## 9. Data Structures
```ts
type Product = {
  name: string;
  price: number;
  description: string;
  type: 'earring' | 'wristband';
};

type ContactChannel = {
  label: string;
  value: string;
  action: 'tel' | 'mailto' | 'external';
  icon: 'phone' | 'mail' | 'instagram';
};
```

- Products and contact arrays exported from `content.ts` to feed components.
- CTA targets configurable for future updates.

## 10. QA & Handoff Checklist
- Verify QR opens page under 1s on LTE (Lighthouse perf ≥ 90).
- Test animations on Safari iOS + Chrome Android (no jitter, respects reduced motion).
- Confirm tap actions: phone dials, email opens draft, copy-to-clipboard works with fallback tooltip.
- Run accessibility audit (axe) to ensure focus order, aria labels on animated cards.
- Validate responsive breakpoints: 360px, 768px, 1280px.
- Provide final color/typography tokens and animation timing table in handoff doc.
- Device QA on iPhone 13 mini + Galaxy S22 to ensure sticky CTA sits above safe area and glass blur performs smoothly.
- Review glass surfaces under dark-mode screenshot to make sure strokes remain visible at 1px.

---
This plan defines all copy, layout, motion, and technical expectations so implementation can proceed without ambiguity.


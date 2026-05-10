# Graffitea — AI Website Build Prompt

> Copy this entire prompt into Claude, ChatGPT, Cursor, or any AI coding agent to generate the full website as a single HTML file.

---

Build a complete, modern, single-page marketing website as a single self-contained HTML file for a local Nepali business called "Graffitea" — a tea shop and cold press juice brand based in Aloknagar, Kathmandu.

---

## BRAND IDENTITY

**Business name:** Graffitea
**Tagline:** (create something warm, local, and inviting — e.g. "Brewed with Heart, Pressed with Care")
**Location:** Aloknagar, Kathmandu, Nepal
**Language:** English only
**Vibe:** Warm, cozy, earthy, inviting — a beloved local neighbourhood shop. Think handcrafted textures, warm neutrals, terracotta, deep greens, and golden ambers. Not corporate, not flashy — genuine and local.

**Brand CSS tokens** — define ALL of these as CSS custom properties in `:root` so the entire site can be rebranded by editing only this block:

```css
:root {
  /* ── Brand Colors ── */
  --color-primary: #5C3D2E;        /* deep earthy brown */
  --color-secondary: #D4A853;      /* warm golden amber */
  --color-accent: #7A9E6E;         /* muted sage green */
  --color-bg: #FAF6F1;             /* warm off-white page background */
  --color-surface: #F0E8DC;        /* card/section surfaces */
  --color-dark: #2C1F14;           /* headings, dark text */
  --color-muted: #7A6A5A;          /* body text, captions */
  --color-border: #E0D5C5;         /* subtle borders */

  /* ── Typography ── */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Lato', 'Segoe UI', sans-serif;

  /* ── Spacing & Shape ── */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --section-padding: 80px 2rem;
}
```

Import Google Fonts in the `<head>`: Playfair Display (400, 700, italic) and Lato (300, 400, 700).

---

## SECTION TOGGLE SYSTEM

Every major section must be wrapped in a `<section>` with a unique ID and a paired CSS class like `.section--hero`, `.section--menu`, etc.

At the top of the CSS, include a clearly labelled comment block:

```css
/* ═══════════════════════════════════════════
   SECTION VISIBILITY CONTROLS
   To hide a section: change `display: block` to `display: none`
   ═══════════════════════════════════════════ */
.section--hero           { display: block; }
.section--marquee        { display: block; }
.section--about          { display: block; }
.section--menu           { display: block; }
.section--cold-press     { display: block; }
.section--gallery        { display: block; }
.section--testimonials   { display: block; }
.section--location       { display: block; }
.section--contact        { display: block; }
```

---

## SECTIONS TO BUILD (in this order)

### 1. NAVIGATION (sticky)
- Logo: "Graffitea" in display font + small italic subtitle "Tea & Cold Press"
- Nav links: Home, Menu, Cold Press, About, Contact
- Sticky on scroll, background becomes solid on scroll (add a `.scrolled` class via JS)
- A "Find Us" CTA button on the right

### 2. HERO SECTION (.section--hero)
- Full-width hero with a warm earthy background
- Large headline with brand name and tagline
- Short 1–2 sentence subtext about what Graffitea is
- Two CTA buttons: "Explore Menu" (primary) and "Our Story" (ghost/outline)
- On the right side: a floating card stack previewing 3 signature items:
  - Masala Chiya — Rs 40 / cup
  - Apple Cold Press — Rs 180 / 250ml
  - Mango Cold Press — Rs 180 / 250ml
- Decorative background: subtle repeating dot pattern or organic shape overlays using the brand palette

### 3. MARQUEE STRIP (.section--marquee)
- A continuously scrolling ticker strip in `--color-secondary` background
- Repeating items: "Fresh Cold Press Juices · Handcrafted Teas · No Preservatives · Made in Kathmandu · Zero Added Sugar · Apple & Mango Cold Press ·"
- CSS-only animation (no JS), infinite loop

### 4. ABOUT / OUR STORY (.section--about)
- Two-column layout: left = decorative visual/illustration placeholder, right = text
- Section tag: "Who We Are"
- Headline: "A Cozy Corner for Honest Drinks"
- 2 short paragraphs about Graffitea being a small local Kathmandu shop that brews teas fresh daily and makes cold press juices in small batches with zero additives
- 3 stat boxes: "5+ Tea Varieties", "2 Cold Press Flavours", "0 Preservatives"

### 5. MENU SECTION (.section--menu)
- Section header: "Our Menu"
- Tab row: All · Hot Teas · Cold Press (functional JS tabs — clicking filters cards)
- Menu cards in a 3-column responsive grid
- Each card has: coloured background swatch area at top, a badge (Hot / Cold Press / New), name, short description, price, and a circular "+" add button
- Include these items:

  **HOT TEAS:**
  - Masala Chiya — Rs 40/cup — Classic Nepali spiced milk tea with cardamom, ginger & cloves
  - Green Tea — Rs 60/cup — Light Nepali high-altitude green tea
  - Tulsi Lemon Tea — Rs 55/cup — Holy basil & lemon immunity blend
  - Ginger Lemon Tea *(New)* — Rs 50/cup — Fresh ginger, lemon, honey

  **COLD PRESS:**
  - Apple Cold Press — Rs 180/250ml — Pure cold-pressed apple juice, no sugar added
  - Mango Cold Press — Rs 180/250ml — 100% pure mango, rich and naturally sweet

### 6. COLD PRESS SPOTLIGHT (.section--cold-press)
- Dark background section (use `--color-dark`)
- Section header in light text: "Our Cold Press Juices"
- Two large feature cards side by side:
  - Apple: deep green card, apple emoji, "Pure Apple", description, Rs 180 / 250ml
  - Mango: deep orange-brown card, mango emoji, "Pure Mango", description, Rs 180 / 250ml
- Below the cards: a row of 3 feature pills: "Zero Additives", "Cold Pressed", "Made in Nepal"

### 7. GALLERY (.section--gallery)
- Section title: "From Our Shop"
- A responsive CSS grid of 6 image placeholder boxes (aspect-ratio: 4/3)
- Each placeholder uses a warm earthy gradient in the brand palette with a subtle label: "Photo coming soon"
- Caption below: "Follow us on Instagram @graffitea" ← `/* EDIT: replace with your Instagram handle */`

### 8. TESTIMONIALS (.section--testimonials)
- Warm cream background
- 3 testimonial cards in a grid, each with: star rating (★★★★★), italic quote, avatar circle with initials, name, and neighbourhood (e.g. "Aloknagar, Kathmandu")
- Write 3 believable, warm, locally-flavoured testimonials

### 9. LOCATION & HOURS (.section--location)
- Two-column layout
- Left: business info — address (Aloknagar, Kathmandu), hours (Mon–Sun: 7am–8pm), phone placeholder, a "Get Directions" button
- Right: embedded Google Map iframe
  - Use this embed URL: `https://maps.google.com/maps?q=Aloknagar,Kathmandu,Nepal&output=embed`
  - `/* EDIT: replace with your precise Google Maps embed URL if you have an exact pin */`
  - Style the iframe: width 100%, height 320px, border-radius: var(--radius-md), border: none

### 10. CONTACT FORM (.section--contact)
- Section title: "Get In Touch"
- Form integrated with Formspree:
  - `<form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">`
  - `/* EDIT: replace YOUR_FORMSPREE_ID with your ID from formspree.io */`
  - Fields: Full Name, Email Address, Message (textarea), Send Message button
  - Add a honeypot field for spam protection: `<input type="text" name="_gotcha" style="display:none">`
  - On submit, show a friendly success message ("Thanks! We'll be in touch soon ☕") — handle with a small JS snippet that shows a hidden div after form submit
  - Style the form cleanly: full-width inputs, warm border, focus ring in `--color-secondary`

### 11. FOOTER
- Dark background (`--color-dark`)
- 3-column grid: Brand blurb left, Quick Links middle, Contact Info right
- Bottom bar: copyright line left, "Made with love in Kathmandu" italic right
- All footer text in light/muted tones

---

## FLOATING WHATSAPP BUTTON

- Fixed position: bottom-right corner (bottom: 24px, right: 24px)
- Circular green button (#25D366) with WhatsApp SVG icon (white)
- Link: `https://wa.me/977XXXXXXXXXX` ← `/* EDIT: replace with your WhatsApp number in international format e.g. 9779812345678 */`
- On hover: slight scale up
- Tooltip on hover: "Chat with us on WhatsApp"
- Subtle animated pulse ring to draw attention
- z-index: 9999

---

## GENERAL CODE REQUIREMENTS

- **Single file:** everything in one `.html` file — HTML, CSS in `<style>`, JS in `<script>` at bottom
- **Fully responsive:** mobile-first, smooth at 375px, 768px, and 1280px
- **Smooth scroll:** `scroll-behavior: smooth` on `html`
- Nav highlights active section on scroll using IntersectionObserver
- No external CSS frameworks (no Bootstrap, no Tailwind)
- No JS frameworks (vanilla JS only)
- Decorative elements (dividers, organic shapes) using CSS `clip-path` or inline SVG — no external image dependencies
- Consistent spacing system using the CSS variables defined above
- Add `/* EDIT: ... */` comments next to every placeholder value so the owner can find and replace them instantly

---

## PLACEHOLDERS TO LABEL CLEARLY

Mark each of the following with a `/* EDIT: replace with your ... */` comment:

| Placeholder | Location |
|---|---|
| Formspree form ID | Contact form action URL |
| WhatsApp phone number | Floating button href |
| Google Maps embed URL | Location section iframe src |
| Instagram handle | Gallery section caption |
| Phone number | Contact section + footer |
| Business address detail | Location section + footer |
| Gallery image src (×6) | Gallery section img tags |

---

## QUICK-START CHECKLIST (for the owner after receiving the file)

1. Search the file for `EDIT:` — there are ~8 placeholders to fill in
2. **Formspree:** go to formspree.io → create free account → new form → copy the ID (e.g. `xpwzabcd`) → paste into form action URL
3. **WhatsApp:** replace `977XXXXXXXXXX` with your number in international format (e.g. `9779812345678`)
4. **Google Maps:** go to Google Maps → find your shop → Share → Embed a map → copy the `src` URL → paste into the iframe
5. **Gallery photos:** when ready, replace the 6 placeholder `src` attributes with real image paths or URLs
6. **Hide a section:** find the Section Visibility Controls block in the CSS → change `display: block` to `display: none` for any section you don't want shown

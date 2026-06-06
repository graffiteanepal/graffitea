Build a polished, responsive Tailwind CSS landing page for a local tea shop and cycling community called “Graffitea”.

Use `reference/graffitea-ui.png` as the visual and content reference. The screenshot is a rough wireframe, not a pixel-perfect final design. Preserve its identity, sections, wording, and blue-and-yellow color direction, but turn it into a modern production-quality website.

Start by inspecting the existing repository. Identify the framework, entry page, Tailwind setup, and reusable components. Modify the existing app rather than creating a second app or replacing the project structure unnecessarily. Use the project’s current conventions. If Tailwind CSS is not installed, add and configure it correctly.

## Design direction

Create a clean, welcoming landing page with a playful local-community feel. It should feel like a real tea shop and cycling meetup website, not a generic SaaS landing page.

Use this visual palette:

- Primary blue: approximately `#0c96d8`
- Dark blue: approximately `#087bb4`
- Yellow accent: approximately `#f5c94a`
- Dark ink text: approximately `#173b55`
- Warm cream background where appropriate: approximately `#fff9e8`

Use rounded cards, soft shadows, subtle transparency, and a light glass effect. Keep the interface readable and uncluttered. Avoid excessive animations, gradients, or decorative effects.

## Page structure

Implement a single responsive homepage with the following sections.

### 1. Full-height hero area

Use a blue background, optionally with a restrained blue-to-cyan gradient and subtle decorative blurred circles.

At the top, add a translucent rounded navigation bar.

Left side:

- Brand name: `Graffitea`
- Subtitle: `Local tea shop & hangout place`

Right side navigation:

- Shop
- Menu
- Rides
- Contact

On mobile, allow the navigation items to wrap cleanly or use a simple compact layout. Do not add an unnecessary hamburger menu unless the existing project already has one.

In the center of the hero, include:

- Small pill label: `Tea · Trails · Community`
- Main headline: `offer.ride.giveaway.`
- Visually emphasize the punctuation with the yellow accent color
- Supporting text: `A neighborhood tea stop for cold presses, masala tea, local products, and weekend rides across Nepal.`
- Primary button: `Explore the menu`
- Secondary button: `View upcoming rides`

The buttons should scroll to the relevant content sections.

### 2. Three feature cards

Below the main hero message, add a responsive card grid:

- Three columns on desktop
- One column on small screens
- Comfortable spacing between cards

Each card should use a white or slightly translucent white background, a rounded border radius, a subtle border, and a soft shadow. Add a small yellow icon container at the top right of each card. Use inline SVG icons or an icon package that is already installed. Do not add a new heavy icon dependency just for three icons.

#### Shop card

Title: `Shop`

Items:

- Pickle
- Titaura
- Fruit powder
- Cold press

Use a shopping bag icon.

#### Menu card

Title: `Menu`

Items:

- Masala tea
- Lemon tea
- Coffee
- Seasonal specials

Use a tea cup icon.

#### Ride card

Title: `Ride`

Small label: `2026 ride calendar`

Items displayed as month and destination pairs:

- June — Nuwakot
- July — Mustang
- August — Manang

Use a bicycle icon.

Give the cards a subtle hover lift on devices that support hover. Keep the interaction gentle.

### 3. Community signup and contact bar

Below the cards, add a dark-blue rounded call-to-action panel.

Left side:

- Small uppercase yellow label: `Join the community`
- Heading: `Sign up for ride alerts and giveaways.`

Right side:

- Primary yellow button with an envelope icon: `Contact us`
- Secondary outlined button with a location-pin icon: `Find the shop`

Use placeholders that are easy to update:

- Email link: `mailto:hello@graffitea.example`
- Location link: `#`

### 4. Footer

Add a lightweight footer inside the blue area.

Left side:

- `© 2026 Graffitea. Tea, trails, and good company.`

Right side:

- Instagram
- Facebook
- Location

Use placeholder links for now.

## Responsive behavior

The page must work well at:

- 375px mobile width
- Tablet widths
- Standard desktop widths
- Wide desktop screens

Pay attention to:

- Headline wrapping
- Card spacing
- Touch-friendly button sizes
- Navigation wrapping
- Text contrast
- Avoiding horizontal overflow

Use semantic HTML and accessible labels where useful. Ensure keyboard-visible focus states on links and buttons.

## Implementation constraints

- Use Tailwind utility classes as the primary styling approach.
- Reuse the project’s existing layout and component structure.
- Do not use CSS modules, styled-components, or large custom CSS files unless required by the existing app.
- Keep the page lightweight.
- Do not use remote stock photos.
- Do not add a backend, form submission service, carousel, or unnecessary dependencies.
- Use inline SVG icons if an icon library is not already present.
- Keep all text easy to edit later.
- Do not leave unused starter content in the page.

## Quality checks

After implementation:

1. Run the appropriate formatting command if one exists.
2. Run linting if configured.
3. Run the production build.
4. Fix any errors or warnings introduced by your changes.
5. Summarize the files modified and the commands run.

Make the changes directly in the repository. Do not only describe the solution.

# Website Analysis Report: PowerCem Technologies
**Target Website:** [https://powercem.me/](https://powercem.me/)
**Date:** January 23, 2026

This report documents the structure, components, and design system of the PowerCem Technologies website to serve as a reference for the Next.js replication project.

## 1. Design System Overview

### Typography
- **Primary Font:** `Poppins`
- **Fallbacks:** `-apple-system`, `system-ui`, `Segoe UI`, `Roboto`, `sans-serif`
- **Base Font Size:** `16.8px` (calculated)

### Color Palette
- **Primary Action Color (Buttons):** `rgb(0, 88, 163)` (Deep Blue)
- **Primary Text Color:** `rgb(44, 44, 46)` (Dark Grey)
- **Footer/Dark Section Background:** `rgb(17, 20, 31)` (Very Dark Blue/Black)
- **Hero Text Color:** White (`#FFFFFF`)
- **Navbar Background:** White (`#FFFFFF`)

---

## 2. Component Breakdown

### 2.1 Header / Navigation
**Selector:** `.navbar`
**Screenshot:** `screenshots/header.png`
- **Description:** Sticky or fixed top navigation bar.
- **Elements:**
  - Logo (SVG) on the left.
  - Desktop Navigation Links: "What We Do", "Our Products" (Dropdown), "Projects", "News", "Careers".
  - "Contact Us" CTA button with an icon.
  - Hamburger menu icon (visible on mobile/tablet).
- **Notes:** The navbar has a clean white background.

### 2.2 Hero Section
**Selector:** `.home-hero`
**Screenshot:** `screenshots/hero.png`
- **Description:** Full-width carousel slider.
- **Elements:**
  - Background images (multiple slides).
  - Overlay text (H1 Title: "82% CO2 REDUCTION", Subtitle description).
  - CTA Button: "What We Do" (Primary style).
  - Navigation dots at the bottom.
- **Functionality:** Auto-playing carousel with manual navigation dots.

### 2.3 About / Introduction Section
**Selector:** `.side-by-side-section`
**Screenshot:** `screenshots/about.png`
- **Description:** Text-heavy section introducing the company.
- **Elements:**
  - Heading: "We are PowerCem Technologies".
  - Two paragraphs of text describing the company history and mission.
- **Layout:** Simple, clean typography focused layout.

### 2.4 Products Grid
**Selector:** `.products-section`
**Screenshot:** `screenshots/products.png`
- **Description:** Grid layout showcasing main products.
- **Elements:**
  - Product Cards (RoadCem, ImmoCem, ConcreCem).
  - Each card includes an image and a "Learn More" button.
- **Notes:** Likely uses CSS Grid or Flexbox. Cards have a hover effect or entry animation (`data-delay` attributes observed in HTML).

### 2.5 Dark Section (Transition)
**Selector:** `.dark-section`
**Screenshot:** `screenshots/dark_section.png`
- **Description:** A simple, full-width dark section acting as a divider or statement.
- **Elements:** Heading "Soil Stabilization for a sustainable future".

### 2.6 Statistics Section
**Selector:** `.stats-section`
**Screenshot:** `screenshots/stats.png`
- **Description:** Key performance metrics.
- **Elements:**
  - Three stat cards.
  - Large numbers (e.g., "4.500.000").
  - Units (m², kg).
  - Description text.
- **Animation:** Staggered entry animations suggested by `style="--delay: 0s;"`.

### 2.7 Partners Carousels
**Selector:** `.partners-carousel-section`
**Screenshots:** `screenshots/partners_1.png`
- **Description:** Two distinct carousel sections.
  1. "Partners of success": Trusted partnerships.
  2. "Our Partners": Worldwide patented technology / Clients.
- **Functionality:** Infinite scrolling logo marquee or simple carousel.
- **Data:** Populated via JavaScript (`window.PartnersCarouselData`).

### 2.8 Partnership & World Map
**Selector:** `.partnership-section`
**Screenshot:** `screenshots/partnership_map.png`
- **Description:** Interactive section highlighting global presence.
- **Elements:**
  - Text content: "Global collaboration, local impact".
  - Interactive SVG World Map.
  - Hotspots/Dots on continents (North America, South America, Europe (HQ), Africa, Asia, Australia).
  - Hover tooltips for countries/continents.

### 2.9 Footer
**Selector:** `.footer`
**Screenshot:** `screenshots/footer.png`
- **Description:** Comprehensive site footer.
- **Elements:**
  - Columns: Company links, Product links, Contact info, Social media links.
  - Contact details: Address (Cairo, Egypt), Email, Phone.
  - Social Icons: LinkedIn, YouTube.
  - Large background watermark/logo.
  - Copyright text.

---

## 3. Technical Notes for Replication

- **Framework:** Next.js (React).
- **Styling:** Tailwind CSS is recommended for rapid replication of the layout and typography.
- **Animations:** Framer Motion can be used to replicate the entry animations (Stats, Products) and the carousel transitions.
- **Icons:** Use `lucide-react` or `heroicons` for UI icons; SVGs from the source for specific logos.
- **State Management:** React `useState`/`useEffect` for the simple carousels and map interactivity.

## 4. Next Steps
1. Initialize Next.js project.
2. Setup Tailwind CSS with the extracted color palette and fonts.
3. Create component scaffold based on the list above.
4. Implement the Header and Hero section first.

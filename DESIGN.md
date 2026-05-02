# DEUKOM Design System

## Brand

- **Name:** DEUKOM
- **Logo:** LTS.png (ersetzt das "D" im Schriftzug, daneben "EUKOM")
- **Claim:** "KI-Workflows für Betriebe, die vorankommen wollen."
- **Mission:** "Weniger Zeit am Bildschirm. Mehr Zeit für das, was zählt."

---

## Farben

### Primär
| Name | Variable | Wert | Verwendung |
|------|----------|------|------------|
| Cream | `--color-cream` | `#f6f0e7` | Haupt-Hintergrund |
| Paper | `--color-paper` | `#fbf8f2` | Hellerer Hintergrund |
| Panel | `--color-panel` | `rgba(255, 252, 247, 0.78)` | Karten, Panels (transluzent) |
| Ink | `--color-ink` | `#16120d` | Text, Hauptfarbe |
| Muted | `--color-muted` | `#635b54` | Sekundärer Text, Labels |
| Line | `--color-line` | `rgba(22, 18, 13, 0.12)` | Borders, Trennlinien |
| Accent | `--color-accent` | `#87603b` | Akzentfarbe (warm braun) |
| Accent Soft | `--color-accent-soft` | `#ddc2a4` | Sanfte Akzentfarbe |

### Dunkel (Terminal, Hero-Screen)
| Verwendung | Wert |
|------------|------|
| Terminal Hintergrund | `#1e1e1e` |
| Hero Mission Panel | `#0a0a0a` |
| Terminal Bar | `#2d2d2d` |
| Terminal Border | `#3a3a3a` |

### Terminal Syntax-Farben
| Element | Farbe |
|---------|-------|
| Command (`$`) | `#7ec87e` (grün) |
| Index-Dateien | `#f0c674` (gelb) |
| Ordner | `#81a2be` (blau) |
| Kontext-Dateien | `#cc6666` (rot) |
| Badge | `rgba(240, 198, 116, 0.15)` bg, `#f0c674` text |
| Badge grün | `rgba(126, 200, 126, 0.15)` bg, `#7ec87e` text |

---

## Typografie

### Fonts
- **Sans-Serif:** Manrope (Gewichte: 400, 500, 600, 700, 800)
- **Serif:** Instrument Serif (für Mission-Headline)
- **Mono:** SF Mono, Fira Code, Consolas (Terminal)

### Schriftgrößen (Hierarchie)
| Element | Größe | Gewicht | Tracking |
|---------|-------|---------|----------|
| Hero H1 | `clamp(1.8rem, 3.4vw, 3.4rem)` | 700 | `-0.04em` |
| Section H2 | `clamp(2.7rem, 5.8vw, 5.8rem)` | 700 | `-0.07em` |
| Page H1 (Legal) | `clamp(2.8rem, 5vw, 4rem)` | 800 | `-0.04em` |
| Mission Title | `clamp(2.8rem, 5.5vw, 4.5rem)` | 300 (serif) | `-0.03em` |
| BaseLayer Headline | `clamp(2.8rem, 6vw, 5rem)` | 800 | `-0.05em` |
| Card H3 | `clamp(1.4rem, 2vw, 2rem)` | 700 | `-0.04em` |
| Body Text | `clamp(0.98rem, 1.2vw, 1.08rem)` | 400 | normal |
| Eyebrow | `0.7rem` | 500 | `0.22em` (uppercase) |
| Mini Label | `0.7rem` | 500 | `0.22em` (uppercase) |

---

## Spacing

| Kontext | Wert |
|---------|------|
| Page Padding Top | `8rem` |
| Section Gap | `1.25rem` |
| Content Frame Padding | `clamp(1rem, 3vw, 2rem)` |
| Card Padding | `clamp(1.35rem, 2vw, 2rem)` |
| Card Border Radius | `1.7rem` |
| Hero Text Padding Left | `12rem` |
| Header Padding | `calc(12rem + clamp(1rem, 3vw, 2rem))` |

---

## Komponenten

### Navbar (Topbar)
- Fixed, transparent
- Links: DEUKOM Logo (Buchstaben collabieren zu "D" beim Scrollen)
- Rechts: Sandwich-Button (animiert zu X)
- Fadet aus beim Scrollen (20px start, 150px komplett)
- Z-Index: 100

### Mobile Navigation
- Fullscreen Overlay mit GlassSurface
- `backdrop-filter: blur(30px) brightness(0.92)`
- `background: rgba(0, 0, 0, 0.08)`
- Links faden gestaffelt ein (200ms, 320ms, 440ms...)
- `visibility: hidden` wenn geschlossen (kein Nebel-Effekt)

### Hero Grafik (Mission Panel)
- Schwarzer Hintergrund (`#0a0a0a`)
- 2-spaltes Grid: Text links (serif), Bild rechts
- Scroll-Expand: wächst von `24rem` Padding auf volle Breite
- Border-Radius animiert von `2.2rem` auf `0`
- Trigger: ab `--section-progress > 0.35`, Faktor `6`

### Cards (Story/UseCase/Feature)
- Border: `1px solid var(--color-line)`
- Background: `var(--color-panel)`
- Border-Radius: `1.7rem`
- Padding: `clamp(1.35rem, 2vw, 2rem)`
- Backdrop-filter: `blur(16px)`
- Box-shadow: `0 20px 60px rgba(76, 54, 28, 0.07)`

### Stack (Unsere Arbeit)
- Drag & Click swipe
- Autoplay: 8s Delay
- Animation: `stiffness: 180, damping: 22`
- Card Background: `#f5f0ea`
- Card Border: `2px solid rgba(0, 0, 0, 0.12)`
- 16:9 Querformat, max-width 64rem

### Terminal (BaseLayer)
- Background: `#1e1e1e`
- Bar: `#2d2d2d` mit rot/gelb/grün Dots
- Sticky bei `top: 5%`
- Scroll-gesteuerte Ordner-Aufklappung
- Annotations links/rechts mit animierten Linien
- Section-Höhe: `400vh`

### Footer
- Einzeilige Bar
- Logo (LTS.png) + "EUKOM" (kein Gap)
- Nav-Buttons: Kontakt, Impressum, Datenschutz, AGB
- Copyright rechts
- Background: `var(--color-bg)`, Border-top

### Kontakt (Hero-Style)
- Split-Layout: 60% Content, 40% Formular
- Min-height: `60svh`
- Rechte Seite: Gradient-Hintergrund mit Glassmorphism-Formular
- Clip-Path auf dem Bild-Bereich

---

## Animationen

### Reveal (data-reveal)
- IntersectionObserver mit `threshold: 0.12`
- Klasse `is-visible` wird hinzugefügt

### Parallax
- `--section-progress` CSS Variable (0 bis 1)
- Gesteuert per Scroll-Position

### DEUKOM Brand Animation
- Buchstaben E, U, K, O, M collabieren mit `max-width: 0`
- Transition: `400ms cubic-bezier(0.4, 0, 0.2, 1)`

### Navbar Fade
- Scroll-basiert (nicht zeitbasiert)
- Start: 20px, Ende: 150px
- Opacity und pointer-events per JS

### BaseLayer Terminal
- Zeilen faden ein: `opacity 0.6s`, `max-height 0.6s`, `translateY(-4px)`
- Annotations: Linie zeichnet sich mit `scaleX`, Text fadet 0.5s verzögert

---

## Seiten-Struktur

| Seite | Route (Hash) | Layout |
|-------|-------------|--------|
| Landing Page | `#home` | Hero + Mission + Workflows + Lokal + Kontakt |
| Unsere Arbeit | `#work` | Stack-Cards + UseCase-Grid + Split-Sections |
| BaseLayer | `#baselayer` | Scroll-Terminal + Split + Principles + Compat |
| Kontakt | `#contact` | Hero-Style Split + Formular |
| Impressum | `#impressum` | Legal Text |
| Datenschutz | `#datenschutz` | Legal Text |
| AGB | `#agb` | Legal Text |

---

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Motion (framer-motion) — für Stack-Komponente
- Keine weiteren Dependencies

---

## Dateien

```
src/
├── App.tsx                    # Haupt-App mit allen Seiten
├── index.css                  # Komplettes Styling
├── main.tsx                   # Entry Point
├── assets/
│   └── LTS.png               # DEUKOM Logo
├── components/
│   ├── DotField.tsx/.css      # Interaktive Punkt-Animation
│   ├── GlassSurface.tsx/.css  # Frosted Glass Overlay
│   └── Stack.tsx/.css         # Drag/Swipe Karten-Stack
public/
├── favicon.png                # Browser-Tab Icon
├── mission-natur.jpg          # Hero Mission Bild
└── video v1.1.mp4             # Demo-Video
```

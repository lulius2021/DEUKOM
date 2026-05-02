# DEUKOM Website — Claude Context

## Projekt

DEUKOM Website — KI-Workflows für Handwerk und Mittelstand. React + TypeScript + Vite + Tailwind CSS.

## Tech Stack

- React 19, TypeScript, Vite 8, Tailwind CSS 4
- Motion (framer-motion) fuer Stack-Komponente
- Kein Router — Hash-basiertes Page-Routing via State
- Keine weiteren Dependencies ohne Genehmigung

## Architektur

Alles in einer App.tsx mit conditional rendering per `currentPage` State:
- `home` — Landing Page (Hero, Mission, Workflows, Lokal, Kontakt)
- `work` — Unsere Arbeit (Stack-Cards, UseCase-Grid)
- `baselayer` — BaseLayer (Scroll-Terminal mit Annotations)
- `contact` — Kontakt (Split-Layout mit Formular)
- `impressum`, `datenschutz`, `agb` — Legal Pages

Navigation ueber `navigateTo(page)` Funktion die Hash setzt und scrollt.

## Design System

### Farben
- Hintergrund: `#f6f0e7` (cream), `#fbf8f2` (paper)
- Text: `#16120d` (ink)
- Sekundaer: `#635b54` (muted)
- Borders: `rgba(22, 18, 13, 0.12)` (line)
- Akzent: `#87603b`, `#ddc2a4`
- Panels: `rgba(255, 252, 247, 0.78)` (transluzent)
- Dunkel (Terminal/Hero): `#0a0a0a`, `#1e1e1e`

### Fonts
- Sans: Manrope (400-800)
- Serif: Instrument Serif (Mission-Headline)
- Mono: SF Mono, Fira Code, Consolas (Terminal)

### Kern-Pattern
- Cards: `border: 1px solid var(--color-line)`, `background: var(--color-panel)`, `border-radius: 1.7rem`
- Eyebrow Labels: `0.7rem`, `letter-spacing: 0.22em`, uppercase
- Reveal-Animation: IntersectionObserver mit `data-reveal` + `.is-visible`
- Parallax: `--section-progress` CSS Variable per Scroll

## Wichtige Komponenten

### DotField (`src/components/DotField.tsx`)
Interaktive Canvas-Punkt-Animation. Reagiert auf Mausbewegung mit Bulge-Effekt.

### Stack (`src/components/Stack.tsx`)
Drag/Swipe Karten-Stack mit Autoplay. Nutzt `motion/react` fuer Animationen.

### GlassSurface (`src/components/GlassSurface.tsx`)
Frosted Glass Overlay mit SVG-Filter. Wird fuer Mobile-Nav verwendet.

## Scroll-Effekte

### Hero Stage Expand
- Stage-card waechst beim Scrollen von `24rem` Padding auf volle Breite
- Border-radius animiert von `2.2rem` auf `0`
- Gesteuert durch `--section-progress` und CSS calc

### BaseLayer Terminal
- Sticky Terminal bei `top: 5%` in 400vh Section
- Ordner klappen per Scroll auf (JS fuegt `.bl-visible` hinzu)
- Annotations erscheinen seitlich mit Linien-Animation
- Section-ID: `#bl-scroll`

### Navbar
- Fadet per JS aus (scroll-basiert, 20px-150px)
- DEUKOM Buchstaben collabieren zu D (CSS max-width transition)
- Mobile Nav: visibility toggle + backdrop-filter

## Dateistruktur

```
src/
  App.tsx              # Alles: Pages, Routing, Scroll-Logic
  index.css            # Komplettes Styling (~2000 Zeilen)
  main.tsx             # Entry
  assets/LTS.png       # Logo
  components/
    DotField.tsx/.css   # Canvas Punkt-Animation
    GlassSurface.tsx/.css # Glass Overlay
    Stack.tsx/.css      # Karten-Stack
public/
  favicon.png          # Browser-Icon
  mission-natur.jpg    # Hero Bild
  video v1.1.mp4       # Demo Video
```

## Regeln

- Sprache: Deutsch (Code-Kommentare Englisch ok)
- Keine neuen Dependencies ohne Genehmigung
- Keine Dateien loeschen ohne Bestaetigung
- Einfachste Loesung die funktioniert
- Kein Over-Engineering
- Immer TypeScript, immutable Patterns

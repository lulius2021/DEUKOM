import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import DotField from './components/DotField'
import GlassSurface from './components/GlassSurface'
import Stack from './components/Stack'

const tickerItems = [
  'Angebote in 90 Sekunden',
  'DSGVO-konform',
  'Lokal gehostet',
  'Kein Cloud-Risiko',
  'Für Handwerk und Mittelstand',
  'Bayerisch geerdet',
]

const useCases = [
  {
    tag: 'ANGEBOTE',
    title: 'Vom Anruf zum fertigen Angebot.',
    body:
      'Fünf Felder ausfüllen, Angebot im eigenen Layout erzeugen, prüfen und direkt rausschicken.',
    note: 'Typisch spart das pro Angebot rund 30 Minuten.',
  },
  {
    tag: 'ABRECHNUNG',
    title: 'Foto vom Stundenzettel rein, Rechnung raus.',
    body:
      'Stundenzettel werden gelesen, dem Auftrag zugeordnet und für DATEV, Lexware oder sevDesk vorbereitet.',
    note: 'Typisch spart das 15 bis 20 Minuten pro Rechnung.',
  },
  {
    tag: 'KOMMUNIKATION',
    title: 'Wichtige E-Mails zuerst.',
    body:
      'Anfragen, Lieferanten, Newsletter und Dringendes werden sauber sortiert, inklusive Antwort-Entwurf.',
    note: 'Typisch spart das 30 bis 45 Minuten pro Tag.',
  },
]

const localReasons = [
  'Eure Daten bleiben bei euch im Haus oder in einem deutschen Rechenzentrum.',
  'Keine Abhängigkeit von OpenAI, Microsoft oder Google.',
  'Keine laufenden Kosten pro Anfrage wie bei typischen Cloud-KI-Tools.',
]

const processSteps = [
  '30 Minuten Erstgespräch, kostenlos und ohne Verpflichtung.',
  'Kurze Workflow-Analyse: Wo verliert ihr Zeit, was lohnt sich wirklich?',
  'Bau, Installation und Übergabe mit euren echten Daten und Programmen.',
]

// --- Nav-Einträge hier anpassen ---
// --- Nav-Einträge hier anpassen ---
type Page = 'home' | 'work' | 'baselayer' | 'contact'

const navItems: { label: string; page: Page }[] = [
  { label: 'Start', page: 'home' },
  { label: 'Unsere Arbeit', page: 'work' },
  { label: 'BaseLayer', page: 'baselayer' },
  { label: 'Kontakt', page: 'contact' },
]

function App() {
  const [formState, setFormState] = useState<'idle' | 'success'>('idle')
  const [headerCondensed, setHeaderCondensed] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const hash = window.location.hash.replace('#', '') as Page
    return ['home', 'work', 'baselayer', 'contact'].includes(hash) ? hash : 'home'
  })

  const navigateTo = (page: Page) => {
    setMenuOpen(false)
    setCurrentPage(page)
    window.location.hash = page
    window.scrollTo({ top: 0 })
    const topbar = document.querySelector<HTMLElement>('.topbar')
    if (topbar) {
      topbar.style.opacity = '1'
      topbar.style.pointerEvents = 'auto'
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    const items = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const sections = document.querySelectorAll<HTMLElement>('[data-parallax-section]')

    items.forEach((item) => observer.observe(item))

    const updateParallax = () => {
      const viewportHeight = window.innerHeight

      setHeaderCondensed(window.scrollY > 24)

      const topbar = document.querySelector<HTMLElement>('.topbar')
      if (topbar) {
        const fadeStart = 20
        const fadeEnd = 150
        const scrollY = window.scrollY
        const opacity = Math.max(0, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart))
        topbar.style.opacity = scrollY < fadeStart ? '1' : String(opacity)
        topbar.style.pointerEvents = opacity <= 0 ? 'none' : 'auto'
      }

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height)
        const clamped = Math.max(0, Math.min(progress, 1))
        section.style.setProperty('--section-progress', clamped.toFixed(4))
      })
    }

    const updatePointer = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5
      const y = event.clientY / window.innerHeight - 0.5
      document.documentElement.style.setProperty('--pointer-x', x.toFixed(4))
      document.documentElement.style.setProperty('--pointer-y', y.toFixed(4))
    }

    updateParallax()
    window.addEventListener('scroll', updateParallax, { passive: true })
    window.addEventListener('resize', updateParallax)
    window.addEventListener('pointermove', updatePointer)

    // BaseLayer scroll reveal
    let blUpdateFn: (() => void) | null = null

    const initBl = setTimeout(() => {
      const blSection = document.getElementById('bl-scroll')
      if (!blSection) return
      const blLines = blSection.querySelectorAll<HTMLElement>('.bl-scroll-line')
      const blAnnos = blSection.querySelectorAll<HTMLElement>('.bl-annotation')
      if (blLines.length === 0) return

      blUpdateFn = () => {
        const rect = blSection.getBoundingClientRect()
        const scrollable = blSection.offsetHeight - window.innerHeight
        const scrolled = -rect.top
        const progress = Math.max(0, Math.min(1, scrolled / scrollable))

        blLines.forEach((line, i) => {
          const threshold = i / blLines.length
          if (progress > threshold) {
            line.classList.add('bl-visible')
          } else {
            line.classList.remove('bl-visible')
          }
        })

        blAnnos.forEach((anno) => {
          const afterIndex = parseInt(anno.getAttribute('data-anno-after') || '0', 10)
          const threshold = afterIndex / blLines.length
          if (progress > threshold) {
            anno.classList.add('bl-anno-visible')
          } else {
            anno.classList.remove('bl-anno-visible')
          }
        })
      }

      window.addEventListener('scroll', blUpdateFn, { passive: true })
      blUpdateFn()
    }, 50)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateParallax)
      clearTimeout(initBl)
      if (blUpdateFn) window.removeEventListener('scroll', blUpdateFn)
      window.removeEventListener('resize', updateParallax)
      window.removeEventListener('pointermove', updatePointer)
    }
  }, [currentPage])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormState('success')
  }

  return (
    <main className="site-shell">
      <header className={`topbar ${headerCondensed ? 'is-condensed' : ''}`}>
        <a href="#hero" className="brand">
          <span className="brand-letter">D</span>
          <span className="brand-collapse">E</span>
          <span className="brand-collapse">U</span>
          <span className="brand-collapse">K</span>
          <span className="brand-collapse">O</span>
          <span className="brand-collapse">M</span>
        </a>
        <button
          className={`menu-button ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}>
        <GlassSurface
          width="100%"
          height="100%"
          borderRadius={0}
          backgroundOpacity={0.92}
          saturation={0.4}
          blur={30}
          brightness={15}
          className="mobile-nav-glass"
        >
          <div className="mobile-nav-inner">
            {navItems.map((item) => (
              <button
                key={item.page}
                className={`mobile-nav-link ${currentPage === item.page ? 'is-active' : ''}`}
                onClick={() => navigateTo(item.page)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
        </GlassSurface>
      </nav>

      {/* ===== LANDING PAGE ===== */}
      {currentPage === 'home' && (<>
      <section id="hero" className="section-shell hero" data-parallax-section>
        <div className="content-frame hero-grid">
          <div className="hero-copy reveal" data-reveal>
            <h1>
              KI-Workflows für Betriebe,
              <br />
              die vorankommen
              <br />
              wollen.
            </h1>
          </div>

          <div className="hero-stage reveal" data-reveal>
            <div className="stage-card">
              <DotField
                dotRadius={1.5}
                dotSpacing={14}
                bulgeStrength={67}
                glowRadius={160}
                sparkle={false}
                waveAmplitude={0}
                gradientFrom="rgba(135, 96, 59, 0.4)"
                gradientTo="rgba(214, 196, 174, 0.3)"
                glowColor="rgba(18, 15, 13, 0.8)"
              />
            </div>
          </div>

        </div>
      </section>

      <section id="workflows" className="section-shell section-tall" data-parallax-section>
        <div className="content-frame stack-layout">
          <div className="section-heading reveal" data-reveal>
            <p className="eyebrow">WAS WIR BAUEN</p>
            <h2>Drei Workflows, die fast jeder Betrieb sofort versteht.</h2>
            <p>
              Eingabe rein, Ergebnis raus. Ohne neue Software-Religion und ohne dass eure Daten das
              Haus verlassen.
            </p>
          </div>

          <div className="usecase-grid">
            {useCases.map((useCase) => (
              <article key={useCase.title} className="usecase-card reveal" data-reveal>
                <p className="mini-label">{useCase.tag}</p>
                <div className="media-placeholder workflow-media">
                  <span className="media-label">Screenshot Placeholder</span>
                  <strong>{useCase.tag}</strong>
                </div>
                <h3>{useCase.title}</h3>
                <p>{useCase.body}</p>
                <p className="usecase-note">{useCase.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-tall" data-parallax-section>
        <div className="content-frame split-section">
          <article className="split-card reveal" data-reveal>
            <p className="eyebrow">WARUM LOKAL</p>
            <h2>Eure Daten bleiben bei euch. Aus Prinzip.</h2>
            <p>
              DEUKOM installiert KI-Automatisierungen direkt in eurem Betrieb oder in einem
              deutschen Rechenzentrum. Ohne unnötige Cloud-Abhängigkeit.
            </p>
            <div className="media-placeholder wide">
              <span className="media-label">Diagramm Placeholder</span>
              <strong>Datenfluss lokal vs. Cloud</strong>
            </div>
          </article>

          <div className="reason-grid">
            {localReasons.map((reason) => (
              <article key={reason} className="story-card reveal" data-reveal>
                <p>{reason}</p>
              </article>
            ))}
            <article className="story-card reveal" data-reveal>
              <p className="mini-label">So läuft es ab</p>
              <ul>
                {processSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-hero">
        <div className="contact-hero-content reveal" data-reveal>
          <header className="contact-hero-header">
            <span className="contact-logo">D</span>
            <div>
              <p className="contact-logo-text">DEUKOM</p>
              <p className="contact-logo-slogan">Lokale KI-Workflows</p>
            </div>
          </header>

          <div className="contact-hero-main">
            <h2>
              Lass uns reden.
              <br />
              30 Minuten, kostenlos.
            </h2>
            <div className="contact-hero-divider" />
            <p>Kein Pitch, kein Druck. Wir schauen gemeinsam, ob ein Workflow euch wirklich Zeit spart.</p>
            <a href="mailto:julius@deukom.de" className="contact-hero-cta">
              TERMIN VEREINBAREN →
            </a>
          </div>

          <footer className="contact-hero-footer">
            <div className="contact-info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" x2="22" y1="12" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>deukom.de</span>
            </div>
            <div className="contact-info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Auf Anfrage</span>
            </div>
            <div className="contact-info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Burghausen, Bayern</span>
            </div>
          </footer>
        </div>

        <div className="contact-hero-image reveal" data-reveal>
          <div className="contact-hero-image-inner" />
        </div>
      </section>
      </>)}

      {/* ===== UNSERE ARBEIT PAGE ===== */}
      {currentPage === 'work' && (
        <div className="page-content">
          <div className="content-frame">
            <div className="work-hero-layout work-hero-centered">
              <div className="work-stack-wrapper reveal" data-reveal>
                <Stack
                  randomRotation={true}
                  sensitivity={80}
                  sendToBackOnClick={true}
                  autoplay={true}
                  autoplayDelay={8000}
                  pauseOnHover={true}
                  animationConfig={{ stiffness: 180, damping: 22 }}
                  cards={useCases.map((useCase) => (
                    <div key={useCase.title} className="stack-card-content">
                      <div className="stack-card-screenshot">
                        <span className="media-label">Screenshot</span>
                        <strong>{useCase.tag}</strong>
                      </div>
                      <p className="mini-label">{useCase.tag}</p>
                      <h3>{useCase.title}</h3>
                      <p>{useCase.body}</p>
                    </div>
                  ))}
                />
              </div>
            </div>

            <div className="usecase-grid">
              {useCases.map((useCase) => (
                <article key={useCase.title} className="usecase-card reveal" data-reveal>
                  <p className="mini-label">{useCase.tag}</p>
                  <div className="media-placeholder workflow-media">
                    <span className="media-label">Screenshot Placeholder</span>
                    <strong>{useCase.tag}</strong>
                  </div>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.body}</p>
                  <p className="usecase-note">{useCase.note}</p>
                </article>
              ))}
            </div>

            <div className="page-section">
              <div className="page-header reveal" data-reveal>
                <p className="eyebrow">WARUM LOKAL</p>
                <h2>Eure Daten bleiben bei euch. Aus Prinzip.</h2>
                <p>
                  DEUKOM installiert KI-Automatisierungen direkt in eurem Betrieb oder in einem
                  deutschen Rechenzentrum. Ohne unnötige Cloud-Abhängigkeit.
                </p>
              </div>

              <div className="reason-grid">
                {localReasons.map((reason) => (
                  <article key={reason} className="story-card reveal" data-reveal>
                    <p>{reason}</p>
                  </article>
                ))}
                <article className="story-card reveal" data-reveal>
                  <p className="mini-label">So läuft es ab</p>
                  <ul>
                    {processSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>

            <div className="page-cta reveal" data-reveal>
              <h3>Klingt interessant?</h3>
              <p>Lass uns in 30 Minuten herausfinden, ob ein Workflow für euch Sinn macht.</p>
              <button type="button" className="button-primary" onClick={() => navigateTo('contact')}>
                Kontakt aufnehmen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== BASELAYER PAGE ===== */}
      {currentPage === 'baselayer' && (<>
        <section className="bl-scroll-section" id="bl-scroll">
          <div className="bl-scroll-text">
            <div className="content-frame">
              <div className="hero-copy reveal" data-reveal>
                <h1>
                  BaseLayer —
                  <br />
                  die Grundschicht
                  <br />
                  für eure KI.
                </h1>
              </div>
            </div>
          </div>

          <div className="bl-scroll-sticky">
            <div className="bl-annotated-wrapper">
            <div className="bl-terminal">
              <div className="bl-terminal-bar">
                <span className="bl-dot" />
                <span className="bl-dot" />
                <span className="bl-dot" />
                <span className="bl-terminal-title">BaseLayer / Euer Betrieb</span>
              </div>
              <div className="bl-terminal-body">
                <div className="bl-static-line"><span className="bl-cmd">$</span> tree baselayer/</div>
                <div className="bl-static-line"><span className="bl-file-index">INDEX.md</span> <span className="bl-badge">Startpunkt</span></div>

                <div className="bl-static-line">📂 <span className="bl-file-folder">Kunden/</span></div>
                <div className="bl-scroll-line">&nbsp;&nbsp;├─ projekt-xyz/</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;│&nbsp;&nbsp;├─ <span className="bl-file-ctx">KONTEXT.md</span> <span className="bl-badge bl-badge-green">aktuell</span></div>
                <div className="bl-scroll-line">&nbsp;&nbsp;│&nbsp;&nbsp;├─ angebot-v2.md</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;│&nbsp;&nbsp;└─ briefing.md</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;└─ projekt-abc/</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ <span className="bl-file-ctx">KONTEXT.md</span></div>
                <div className="bl-scroll-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ rechnung-final.md</div>

                <div className="bl-static-line">📂 <span className="bl-file-folder">SOPs/</span></div>
                <div className="bl-scroll-line">&nbsp;&nbsp;├─ angebot-erstellen.md</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;├─ rechnung-workflow.md</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;├─ kunden-onboarding.md</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;└─ e-mail-regeln.md</div>

                <div className="bl-static-line">📂 <span className="bl-file-folder">Team/</span></div>
                <div className="bl-scroll-line">&nbsp;&nbsp;├─ rollen.md</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;├─ meetings.md</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;└─ urlaubsplanung.md</div>

                <div className="bl-static-line">📂 <span className="bl-file-folder">Vorlagen/</span></div>
                <div className="bl-scroll-line">&nbsp;&nbsp;├─ angebot-template.md</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;├─ rechnung-template.md</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;└─ e-mail-template.md</div>

                <div className="bl-static-line">📂 <span className="bl-file-folder">Skills/</span></div>
                <div className="bl-scroll-line">&nbsp;&nbsp;├─ angebot-schreiben.md</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;├─ rechnung-erstellen.md</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;├─ e-mail-sortieren.md</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;└─ projekt-status.md</div>

                <div className="bl-static-line">📂 <span className="bl-file-folder">Regeln/</span></div>
                <div className="bl-scroll-line">&nbsp;&nbsp;├─ tonalitaet.md</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;├─ datenschutz.md</div>
                <div className="bl-scroll-line">&nbsp;&nbsp;└─ formatting.md</div>

                <div className="bl-static-line"><span className="bl-cmd">$</span> <span className="bl-cursor">_</span></div>
              </div>
            </div>

            {/* Annotations */}
            <div className="bl-annotation bl-annotation-right bl-anno-kunden" data-anno-after="7">
              <div className="bl-anno-line" />
              <div className="bl-anno-text">
                <strong>Kundenprojekte</strong>
                <p>Jedes Projekt hat eine eigene KONTEXT.md — der Agent weiß immer, wo ihr stehen geblieben seid.</p>
              </div>
            </div>

            <div className="bl-annotation bl-annotation-left bl-anno-sops" data-anno-after="12">
              <div className="bl-anno-line" />
              <div className="bl-anno-text">
                <strong>Standard-Prozesse</strong>
                <p>Eure SOPs als Markdown — der Agent arbeitet nach euren Regeln, nicht nach seinen.</p>
              </div>
            </div>

            <div className="bl-annotation bl-annotation-right bl-anno-team" data-anno-after="15">
              <div className="bl-anno-line" />
              <div className="bl-anno-text">
                <strong>Team-Struktur</strong>
                <p>Wer ist wofür zuständig? Der Agent kennt eure Rollen und Abläufe.</p>
              </div>
            </div>

            <div className="bl-annotation bl-annotation-left bl-anno-vorlagen" data-anno-after="18">
              <div className="bl-anno-line" />
              <div className="bl-anno-text">
                <strong>Vorlagen</strong>
                <p>Angebote, Rechnungen, E-Mails — immer im gleichen Format, immer on-brand.</p>
              </div>
            </div>

            <div className="bl-annotation bl-annotation-right bl-anno-skills" data-anno-after="22">
              <div className="bl-anno-line" />
              <div className="bl-anno-text">
                <strong>Skills</strong>
                <p>Wiederholbare Aufgaben als Bausteine. Ein Befehl, fertig.</p>
              </div>
            </div>

            <div className="bl-annotation bl-annotation-left bl-anno-regeln" data-anno-after="25">
              <div className="bl-anno-line" />
              <div className="bl-anno-text">
                <strong>Regeln</strong>
                <p>Tonalität, Datenschutz, Formatierung — der Agent hält sich dran.</p>
              </div>
            </div>

            </div>
          </div>
        </section>

        <section className="section-shell" data-parallax-section>
          <div className="content-frame split-section">
            <article className="split-card reveal" data-reveal>
              <p className="eyebrow">WAS WIR MACHEN</p>
              <h2>Wir denken euren Betrieb einmal komplett in Ordnerstruktur.</h2>
              <p>
                Das ist die eigentliche Arbeit — und genau dafür gibt es uns. Wir setzen
                uns mit euch hin, analysieren eure Abläufe und bauen daraus eine Struktur,
                die jeder KI-Agent sofort versteht.
              </p>
            </article>

            <div className="reason-grid">
              <article className="story-card reveal" data-reveal>
                <div className="bl-step-num">01</div>
                <h3>Index-Datei</h3>
                <p>Das Inhaltsverzeichnis eures Betriebs. Der Agent liest sie zuerst und weiß sofort, wo was liegt.</p>
              </article>
              <article className="story-card reveal" data-reveal>
                <div className="bl-step-num">02</div>
                <h3>Kontext-Dateien</h3>
                <p>Jedes Projekt hat eine KONTEXT.md. Der Agent liest rein und weiß, wo ihr stehen geblieben seid.</p>
              </article>
              <article className="story-card reveal" data-reveal>
                <div className="bl-step-num">03</div>
                <h3>Agent arbeitet</h3>
                <p>&bdquo;Weiter am Projekt XY.&ldquo; — Der Agent navigiert zur richtigen Stelle und macht weiter.</p>
              </article>
              <article className="story-card reveal" data-reveal>
                <div className="bl-step-num">04</div>
                <h3>Closed Loop</h3>
                <p>Neuer Kontext wird automatisch zurückgeschrieben. Ein Loop, der sich selbst füttert.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-shell section-tall" data-parallax-section>
          <div className="content-frame stack-layout">
            <div className="section-heading reveal" data-reveal>
              <p className="eyebrow">GRUNDPRINZIPIEN</p>
              <h2>Vier Bausteine. Mehr braucht es nicht.</h2>
            </div>

            <div className="usecase-grid">
              <article className="usecase-card reveal" data-reveal>
                <p className="mini-label">ORDNER</p>
                <h3>Euer Wissen, logisch strukturiert</h3>
                <p>Die komplette Organisation — Kunden, Projekte, SOPs, Vorlagen — in einer klaren Verzeichnisstruktur.</p>
              </article>
              <article className="usecase-card reveal" data-reveal>
                <p className="mini-label">INDEX-DATEIEN</p>
                <h3>Das Inhaltsverzeichnis für den Agent</h3>
                <p>Der Agent liest die Index-Datei zuerst und findet sich sofort zurecht — wie ein Mitarbeiter mit Einarbeitung.</p>
              </article>
              <article className="usecase-card reveal" data-reveal>
                <p className="mini-label">FESTE REGELN</p>
                <h3>Klare Anweisungen, wie gearbeitet wird</h3>
                <p>Tonalität, Formatierung, Prozesse — alles definiert, damit der Agent sich an eure Standards hält.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-shell" data-parallax-section>
          <div className="content-frame split-section">
            <article className="split-card reveal" data-reveal>
              <p className="eyebrow">KOMPATIBILITÄT</p>
              <h2>Kein eigenes Programm. Funktioniert mit allem.</h2>
              <p>
                BaseLayer ist eine Struktur, kein Tool. Claude Code, OpenCode, Codex,
                Cursor — jeder Agent, der Dateien lesen kann, arbeitet damit.
                Wir richten es einmal ein, ihr arbeitet dauerhaft damit.
              </p>
              <div className="bl-tool-tags">
                <span className="bl-tag">Claude Code</span>
                <span className="bl-tag">OpenCode</span>
                <span className="bl-tag">Codex</span>
                <span className="bl-tag">Cursor</span>
                <span className="bl-tag">Jeder Agent</span>
              </div>
            </article>

            <div className="reason-grid">
              <article className="story-card editorial-card reveal" data-reveal>
                <p>
                  Ihr erklärt uns euren Betrieb. Wir liefern die komplette Ordnerstruktur,
                  Index-Dateien, Kontext-Templates und den Closed Loop — fertig eingerichtet,
                  sofort einsatzbereit.
                </p>
              </article>
              <article className="story-card reveal" data-reveal>
                <p>
                  <a href="#" className="contact-hero-cta" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}>
                    ERSTGESPRÄCH VEREINBAREN →
                  </a>
                </p>
              </article>
            </div>
          </div>
        </section>
      </>)}

      {/* ===== KONTAKT PAGE ===== */}
      {currentPage === 'contact' && (
        <section className="contact-hero contact-hero--full">
          <div className="contact-hero-content reveal" data-reveal>
            <header className="contact-hero-header">
              <span className="contact-logo">D</span>
              <div>
                <p className="contact-logo-text">DEUKOM</p>
                <p className="contact-logo-slogan">Lokale KI-Workflows</p>
              </div>
            </header>

            <div className="contact-hero-main">
              <h2>
                Lass uns reden.
                <br />
                30 Minuten, kostenlos.
              </h2>
              <div className="contact-hero-divider" />
              <p>
                Kein Pitch, kein Druck. Wir schauen gemeinsam, ob ein Workflow euch
                wirklich Zeit spart. Wenn nicht, sagen wir das ehrlich.
              </p>

              <div className="contact-full-details">
                <div className="contact-detail-block">
                  <p className="mini-label">So erreicht ihr uns</p>
                  <div className="contact-info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <a href="mailto:julius@deukom.de">julius@deukom.de</a>
                  </div>
                  <div className="contact-info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" x2="22" y1="12" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span>deukom.de</span>
                  </div>
                  <div className="contact-info-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Burghausen, Bayern</span>
                  </div>
                </div>

                <div className="contact-detail-block">
                  <p className="mini-label">Was passiert nach der Anfrage</p>
                  <ol className="contact-steps">
                    <li>Ihr schreibt uns — kurz reicht</li>
                    <li>Wir melden uns innerhalb von 24h</li>
                    <li>30-Minuten-Call: Wo verliert ihr Zeit?</li>
                    <li>Wenn es passt, bauen wir einen Workflow</li>
                  </ol>
                </div>
              </div>
            </div>

            <footer className="contact-hero-footer">
              <a href="mailto:julius@deukom.de" className="contact-hero-cta">
                TERMIN VEREINBAREN →
              </a>
            </footer>
          </div>

          <div className="contact-hero-image contact-hero-image--form reveal" data-reveal>
            <form className="contact-full-form" onSubmit={handleSubmit}>
              <h3>Schreib uns direkt</h3>
              <label>
                <span>Name *</span>
                <input type="text" name="name" required placeholder="Max Mustermann" />
              </label>
              <label>
                <span>E-Mail *</span>
                <input type="email" name="email" required placeholder="max@firma.de" />
              </label>
              <label>
                <span>Firma (optional)</span>
                <input type="text" name="company" placeholder="Musterbetrieb GmbH" />
              </label>
              <label>
                <span>Telefon (optional)</span>
                <input type="tel" name="phone" placeholder="+49 123 456789" />
              </label>
              <label>
                <span>Was kostet euch gerade am meisten Zeit?</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="z. B. Angebote schreiben, E-Mails sortieren, Rechnungen erstellen, Stundenzettel abtippen..."
                />
              </label>
              <button type="submit" className="button-primary">
                Nachricht senden
              </button>
              <p className="form-meta">
                {formState === 'success'
                  ? 'Hab ich. Ich melde mich innerhalb von 24 Stunden.'
                  : 'Direkt, ehrlich, ohne Verpflichtung.'}
              </p>
            </form>
          </div>
        </section>
      )}

      <footer className="site-footer">
        <div className="footer-bar">
          <div className="footer-left">
            <span className="footer-logo">D</span>
            <span className="footer-brand-name">DEUKOM</span>
          </div>
          <nav className="footer-nav">
            <button type="button" onClick={() => navigateTo('work')}>Unsere Arbeit</button>
            <span className="footer-dot">&middot;</span>
            <button type="button" onClick={() => navigateTo('contact')}>Kontakt</button>
            <span className="footer-dot">&middot;</span>
            <button type="button" onClick={() => navigateTo('home')}>Impressum</button>
            <span className="footer-dot">&middot;</span>
            <button type="button" onClick={() => navigateTo('home')}>Datenschutz</button>
            <span className="footer-dot">&middot;</span>
            <button type="button" onClick={() => navigateTo('home')}>AGB</button>
          </nav>
          <div className="footer-right">
            <span className="footer-copy">&copy; 2026 DEUKOM. Alle Rechte vorbehalten.</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App

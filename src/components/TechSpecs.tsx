const features = [
  {
    label: 'Elevate your coffee experience',
    title: 'Rise above mediocrity',
    description: 'With a precision-engineered lift (exactly one coaster thick), Oryzo doesn\'t just hold your mug — it elevates it. Literally. Above every boring surface you\'ve ever known.',
  },
  {
    label: 'Thermodynamic stability',
    title: 'Handles Extremes with Ease',
    description: 'From piping-hot mugs to ice-cold drinks — Oryzo stays perfectly stable. Your coffee table already tapped out three sips ago.',
  },
  {
    label: 'Now 37.9% More Circular',
    title: 'Perfectly Round, Seriously',
    description: 'Our engineers recalibrated its circumference with disturbing levels of attention to detail — just because we could.',
  },
]

const temperatures = [
  { label: 'Creative', value: 'T = 10', pct: 95 },
  { label: 'Balanced', value: 'T = 1', pct: 50 },
  { label: 'Deterministic', value: 'T = 0.1', pct: 10 },
]

export function TechSpecs() {
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* ORYZO-1 label */}
        <div className="text-center mb-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-text-muted mb-1">6</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">ORYZO-1</h2>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 mt-16">
          {features.map((f) => (
            <div key={f.title} className="border-t border-border pt-6">
              <p className="text-xs tracking-[0.15em] uppercase text-text-muted mb-3">{f.label}</p>
              <h3 className="text-xl font-medium mb-3 tracking-tight">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Temperature scales */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {temperatures.map((t) => (
            <div key={t.label} className="bg-bg-soft border border-border rounded-xl p-6">
              <p className="text-sm text-text-secondary mb-1">{t.label}</p>
              <p className="text-lg font-mono mb-4">{t.value}</p>
              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-text/30 rounded-full"
                  style={{ width: `${t.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Constant lift + TDM */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-bg-soft border border-border rounded-xl p-8">
            <p className="text-xs tracking-[0.15em] uppercase text-text-muted mb-4">Constant lift via geometry</p>
            {/* Diagram placeholder */}
            <div className="aspect-[16/9] border border-dashed border-border-dark rounded-lg flex items-center justify-center">
              <p className="text-xs text-text-muted">[Visualization Placeholder]</p>
            </div>
          </div>
          <div className="bg-bg-soft border border-border rounded-xl p-8">
            <p className="text-xs tracking-[0.15em] uppercase text-text-muted mb-2">
              Thermal Diffusion Model (TDM)
            </p>
            <p className="text-[10px] text-text-muted mb-6">A visualization, not a warranty</p>
            <div className="aspect-[16/9] border border-dashed border-border-dark rounded-lg flex items-center justify-center">
              <p className="text-xs text-text-muted">[TDM Diagram Placeholder]</p>
            </div>
          </div>
        </div>

        {/* Circularity + RoPE */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bg-soft border border-border rounded-xl p-8">
            <p className="text-sm text-text-muted mb-2">Circularity (circle = 1.0)</p>
            <p className="text-5xl font-mono font-light">1.0</p>
          </div>
          <div className="bg-bg-soft border border-border rounded-xl p-8">
            <p className="text-xs tracking-[0.15em] uppercase text-text-muted mb-2">RoPE</p>
            <p className="text-lg font-medium tracking-tight">Roundness Optimization & Perimeter Engineering</p>
          </div>
        </div>
      </div>
    </section>
  )
}

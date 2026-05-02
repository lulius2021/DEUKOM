const products = [
  {
    name: 'ORYZO',
    tagline: 'One coaster. One job. Done beautifully.',
    description: 'The original. Refined until it feels inevitable. Lifts just enough, grips just right, and quietly disappears into your day like it was never there.',
    highlights: ['Single layer lift', 'Natural cork insulation', 'Stable grip on everyday surfaces'],
    specs: {
      Stack: '1',
      Lift: '1 coaster thick',
      Material: 'Cork',
      Connectivity: 'None',
      Pairing: 'Not Required',
      Updates: 'Never',
      'Best for': 'Daily mugs and quiet desks',
    },
  },
  {
    name: 'ORYZO Pro',
    tagline: 'Twice the cork. Twice the commitment. Still effortless.',
    description: 'A little more presence. Double the cork, double the confidence — without losing the plot.',
    highlights: ['Double stack lift', 'More mass, more steadiness', 'Designed to be standout'],
    specs: {
      Stack: '2',
      Lift: '2 coasters thick',
      Material: 'Cork',
      Connectivity: 'None',
      Pairing: 'Not Required',
      Updates: 'Never',
      'Best for': 'Taller cups and extra stability',
    },
    highlighted: true,
  },
  {
    name: 'ORYZO Pro Max',
    tagline: 'Three layers of confidence. For people who like their coffee slightly above it all.',
    description: 'Maximum stack for maximum unnecessary satisfaction. A bold little pedestal for your mug and a quiet flex for the whole desk.',
    highlights: ['Triple stack lift', 'Extra insulation by design', 'Deployable on RTX 3090, on device'],
    specs: {
      Stack: '3',
      Lift: '3 coasters thick',
      Material: 'Cork',
      Connectivity: 'None',
      Pairing: 'Not Required',
      Updates: 'Never',
      'Best for': 'Maximum lift and maximum presence',
    },
  },
]

export function ProductComparison() {
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-3">Choose your own</p>
        </div>

        {/* Product toggle labels */}
        <div className="flex gap-6 mb-12 border-b border-border pb-4">
          {products.map((p) => (
            <span key={p.name} className="text-sm font-medium tracking-tight">{p.name}</span>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className={`rounded-xl p-8 border transition-colors ${
                p.highlighted
                  ? 'border-text/15 bg-bg-soft hover:border-text/25'
                  : 'border-border bg-bg hover:border-border-dark'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-border text-text-muted tracking-widest uppercase">
                  New
                </span>
              </div>
              <h3 className="text-2xl font-light tracking-tight mt-3 mb-2">{p.name}</h3>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">{p.tagline}</p>

              {/* Highlights */}
              <div className="space-y-2 mb-8">
                {p.highlights.map((h) => (
                  <p key={h} className="text-xs text-text-muted">{h}</p>
                ))}
              </div>

              {/* Specs table */}
              <div className="border-t border-border pt-4 space-y-0">
                {Object.entries(p.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2.5 border-b border-border/60 last:border-0">
                    <span className="text-xs text-text-muted">{key}:</span>
                    <span className="text-xs font-mono">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const stats = [
  {
    value: '25',
    title: 'Average age of first harvest',
    description: 'Cork oaks are typically first harvested at around 25 years, once the bark is thick enough to remove safely.',
  },
  {
    value: '9',
    title: 'Harvesting interval',
    description: 'After each harvest, the bark takes about 9 years to regrow, making cork a renewable material.',
  },
  {
    value: '0',
    title: 'Power draw while in use',
    description: 'No compute. No tokens. So you can say "please" and "thank you" as much as you want, guilt free.',
  },
]

export function Sustainability() {
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-3">100% Plant-based</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Vegan-friendly<br />sustainability
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Pure cork sourced sustainably. Completely vegan — no cows were harmed, but it might be full of "bull"sh*t.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.title}
              className="border-t border-border pt-8 pb-4"
            >
              <p className="text-6xl font-mono font-light mb-4">{s.value}</p>
              <h3 className="text-sm font-medium tracking-tight mb-3 uppercase">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

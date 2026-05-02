const features = [
  {
    title: 'Runs on the edge',
    subtitle: 'Refuses the cloud',
    description: 'On-device.',
  },
  {
    title: 'Always On',
    subtitle: '',
    description: '24/7 UPTIME. No power required.',
  },
  {
    title: 'Runs on RTX 3090',
    subtitle: '',
    description: 'No More OOM on any consumer GPUs',
  },
  {
    title: 'Perfect By Design',
    subtitle: '',
    description: '',
  },
  {
    title: 'Drop-Tested',
    subtitle: '',
    description: 'Test conditions: hard surface DATE: 02/29/2026 Damage: The Floor ;)',
  },
  {
    title: 'Legacy Support',
    subtitle: '',
    description: 'Supporting backward compatibility since the 5th millennium BCE',
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-bg-soft border border-border rounded-xl p-8 hover:border-border-dark transition-colors group"
            >
              {/* Icon placeholder */}
              <div className="w-10 h-10 rounded-lg bg-border/60 flex items-center justify-center mb-5 group-hover:bg-border-dark/30 transition-colors">
                <div className="w-4 h-4 rounded-sm bg-text/10" />
              </div>
              <h3 className="text-base font-medium tracking-tight mb-1">{f.title}</h3>
              {f.subtitle && (
                <p className="text-xs text-text-muted mb-2">{f.subtitle}</p>
              )}
              {f.description && (
                <p className="text-sm text-text-secondary leading-relaxed mt-2">{f.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

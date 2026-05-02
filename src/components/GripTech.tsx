export function GripTech() {
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        {/* Friction gauge */}
        <div className="bg-bg-soft border border-border rounded-xl p-12 flex flex-col items-center justify-center aspect-square">
          <div className="relative w-44 h-44">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#e5e5e5" strokeWidth="2" />
              <circle
                cx="100" cy="100" r="80"
                fill="none" stroke="#0a0a0a" strokeWidth="3" opacity="0.25"
                strokeDasharray={`${0.80 * 502} 502`}
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-mono font-light">0.80</span>
            </div>
          </div>
          <p className="text-xs text-text-muted mt-4 tracking-wide">Friction coefficient (est)</p>
        </div>

        {/* Text */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-3">Precision Grip, Zero Drama</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Grip-locked Antislip<br />technology
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Micro-textured cork so grippy your drink files a restraining order against gravity. Spills? Consider them politely discouraged.
          </p>
        </div>
      </div>
    </section>
  )
}

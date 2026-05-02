export function PoweredByAI() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Intro text */}
        <div className="max-w-3xl mb-20">
          <p className="text-3xl md:text-4xl font-light leading-snug tracking-tight mb-6">
            Oryzo isn't just a coaster. It's the result of unprecedented AI* breakthroughs.
          </p>
        </div>

        {/* Two column */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-3">Powered by AI*</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Oryzo-1</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              An open-weight model designed to be lightweight and easy to carry.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              AI fills in the gaps. We said high five. It heard six.
            </p>
            <p className="text-sm text-text-muted italic">* Adobe Illustrator</p>
          </div>

          {/* Interactive placeholder */}
          <div className="aspect-square bg-bg-soft rounded-xl border border-border flex items-center justify-center relative overflow-hidden">
            <div className="text-center">
              <div className="w-28 h-28 mx-auto rounded-full border border-border-dark flex items-center justify-center mb-4">
                <span className="text-2xl font-mono text-text-muted">AI</span>
              </div>
              <p className="text-xs text-text-muted tracking-wide">Try to hover hand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

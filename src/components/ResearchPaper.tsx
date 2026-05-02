export function ResearchPaper() {
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-xs tracking-[0.2em] uppercase text-text-muted mb-8">Our SOTA Open Weight model</h2>
          <div className="flex justify-center gap-6 text-sm">
            <span className="text-text-secondary underline underline-offset-4 cursor-pointer hover:text-text transition-colors">Paper</span>
            <span className="text-text-secondary underline underline-offset-4 cursor-pointer hover:text-text transition-colors">MODEL (.OBJ)</span>
            <span className="text-text-muted cursor-not-allowed">Code coming soon</span>
          </div>
        </div>

        {/* Abstract */}
        <div className="mb-10">
          <h3 className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">Abstract</h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            We present Oryzo-1, an open-weight 3D model of a cork coaster for rendering, simulation, and gloriously unnecessary research. Oryzo-1 faithfully reproduces key coaster behaviors — table protection, perfect circularity, and passive thermal moderation under everyday beverage conditions. Released in clean OBJ format with baseline results on our own WoodenBench (a standardized evaluation suite conducted on a single desk and very possibly rigged by us). Limitations include heavy dependency on gravity, mugs, and human deployment.
          </p>
        </div>

        {/* Acknowledgements */}
        <div className="mb-10">
          <h3 className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">Acknowledgements</h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            This website was single-shot espresso'd into existence by the creative team at Lusion.
          </p>
        </div>

        {/* Peer Review */}
        <div className="mb-10">
          <h3 className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">Peer Review</h3>
          <div className="border-l-2 border-border-dark pl-5">
            <p className="text-sm text-text-secondary italic leading-relaxed">
              "Oryzo-1 A0B is the best model out there. Trust me bro."
            </p>
            <p className="text-xs text-text-muted mt-2">— Anonymous LocalLLaMA Reddit user</p>
          </div>
        </div>

        {/* BibTeX */}
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-text-muted mb-4">BibTeX</h3>
          <pre className="bg-bg-soft border border-border rounded-lg p-5 text-xs font-mono text-text-secondary overflow-x-auto leading-relaxed">
{`@misc{oryzo2026,
  title        = {Oryzo-1: Open-Weight Coaster Model},
  author       = {Lusion},
  year         = {2026},
  howpublished = {OBJ release},
  note         = {A high-fidelity 3D model of a cork
                  coaster. Code: coming soon.}
}`}
          </pre>
        </div>
      </div>
    </section>
  )
}

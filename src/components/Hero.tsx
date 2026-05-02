export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20">
      {/* Top credit */}
      <div className="animate-fade-up text-center mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-text-muted leading-relaxed">
          Designed<br />
          by Lusion,<br />
          the award-winning<br />
          design studio.
        </p>
      </div>

      <h1 className="animate-fade-up-d1 text-5xl md:text-7xl lg:text-[5.5rem] font-light text-center leading-[1.05] tracking-tight max-w-4xl">
        Made for mugs.<br />
        Built for tables.
      </h1>

      <p className="animate-fade-up-d2 mt-8 text-base md:text-lg text-text-secondary text-center max-w-xl leading-relaxed">
        Designed to lift, insulate, and grip in all the right ways. Oryzo makes the simplest moment feel considered.
      </p>

      <p className="animate-fade-up-d2 mt-3 text-sm text-text-muted text-center">
        The world's most unnecessarily sophisticated cork coaster.
      </p>

      {/* Video Placeholder */}
      <div className="animate-fade-up-d3 mt-16 w-full max-w-4xl aspect-video bg-bg-soft rounded-xl border border-border flex items-center justify-center relative overflow-hidden group cursor-pointer hover:border-border-dark transition-colors">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.02]" />
        <div className="relative flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border border-text/20 flex items-center justify-center group-hover:border-text/40 transition-all group-hover:scale-105">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" className="ml-0.5 text-text/60 group-hover:text-text/80 transition-colors">
              <polygon points="6,3 16,9 6,15" />
            </svg>
          </div>
          <span className="text-xs text-text-muted tracking-widest uppercase">Play</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce-subtle">
        <span className="text-[10px] text-text-muted tracking-[0.2em] uppercase">Scroll to continue</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-muted">
          <path d="M3 4.5l3 3 3-3" />
        </svg>
      </div>
    </section>
  )
}

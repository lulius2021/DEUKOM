export function Wearable() {
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-10">
          So portable, it's wearable
        </h2>

        {/* Warning Box */}
        <div className="bg-warning-bg border border-warning-border rounded-lg px-6 py-4 mb-16 max-w-lg mx-auto">
          <p className="text-xs tracking-[0.15em] uppercase text-warning font-medium mb-1">Warning</p>
          <p className="text-sm text-text-secondary italic leading-relaxed">
            This stunt was performed by professionals. Do not attempt this at home.
          </p>
        </div>

        {/* Mock Social Post */}
        <div className="bg-bg-soft border border-border rounded-xl p-6 max-w-md mx-auto mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-border-dark" />
            <span className="text-sm text-text-secondary">@curious_user</span>
          </div>
          <p className="text-text-secondary text-sm mb-4">Hey @oryzo, can you put on a bikini?</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a reply..."
              className="flex-1 bg-bg border border-border rounded-lg px-3 py-2 text-sm text-text-muted outline-none focus:border-border-dark transition-colors"
              readOnly
            />
            <button className="px-4 py-2 bg-text text-bg rounded-lg text-xs font-medium tracking-wide uppercase hover:bg-text/90 transition-colors">
              Send
            </button>
          </div>
        </div>

        {/* Magazine Style */}
        <div className="border-t border-border pt-12 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-text-muted mb-6">Issue No. 00124</p>
          <h3 className="text-4xl md:text-5xl font-serif italic leading-tight mb-4">
            AI SLOP IDEAS<br />FOR THIS<br />WINTER
          </h3>
          <p className="text-xl text-text-secondary">We Are So Cooked!</p>
        </div>
      </div>
    </section>
  )
}

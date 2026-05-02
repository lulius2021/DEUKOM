const testimonials = [
  {
    rating: '4.9/5',
    quote: '',
    name: '',
    role: '',
    isImageCard: true,
    imageLabel: 'ORYZO in use',
  },
  {
    rating: '5/5',
    quote: "This is the best coaster that I've ever used. I can't go to the space without it",
    name: 'Edan K.',
    role: 'NASA astronaut wannabe',
  },
  {
    rating: '4.5/5',
    quote: "My coaster? If you want it, I'll let you have it. Look for it! I left everything I gathered together in one place!",
    name: 'Gol D. Roger',
    role: 'Old-school Pirate',
  },
  {
    rating: '5/5',
    quote: 'We are so cooked. Hollywood is not ready for a coaster this cinematic.',
    name: 'Jamie R.',
    role: 'AI influencer, Ex-Web3 influencer',
  },
  {
    rating: '5/5',
    quote: 'I tried the wearable mode. I achieved... attention.',
    name: 'Jules M.',
    role: 'Minimalist',
  },
  {
    rating: '5/5',
    quote: "My table hasn't been this protected since I stopped trusting gravity.",
    name: 'Priya K.',
    role: 'Flat Earth believer',
  },
]

export function Testimonials() {
  return (
    <section id="product" className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            People all around the world love Oryzo
          </h2>
          <p className="text-text-secondary">
            Do not take our word for it, see what people say after living with Oryzo.
          </p>
        </div>

        {/* Rating header */}
        <div className="flex items-baseline justify-between mb-8 border-b border-border pb-4">
          <p className="text-sm text-text-muted">Rating & Reviews</p>
          <p className="text-sm text-text-muted">Custom reviews [ 364 ]</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-bg-soft border border-border rounded-xl p-6 hover:border-border-dark transition-colors"
            >
              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs font-mono text-text-muted">[ {t.rating} ]</span>
              </div>

              {t.isImageCard ? (
                /* Image placeholder card */
                <div className="aspect-[4/3] bg-border/50 rounded-lg flex items-center justify-center mb-4">
                  <p className="text-xs text-text-muted tracking-wide">[{t.imageLabel}]</p>
                </div>
              ) : (
                <>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-[10px] font-mono text-text-muted">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-xs font-medium">{t.name}</p>
                      <p className="text-[10px] text-text-muted">{t.role}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

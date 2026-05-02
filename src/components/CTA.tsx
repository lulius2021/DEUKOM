import { useState } from 'react'

export function CTA() {
  const [copied, setCopied] = useState(false)
  const [email, setEmail] = useState('')

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-snug mb-6">
          We caught your attention with a non-existent product. If we can sell a coaster, imagine what we can do for your brand.
        </h2>

        <a
          href="https://lusion.co"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm text-text underline underline-offset-4 decoration-text-muted hover:decoration-text transition-colors mb-16"
        >
          lusion.co
        </a>

        <div className="border-t border-border pt-10 mb-10">
          <p className="text-xs text-text-muted mb-1">Built by Lusion</p>
          <p className="text-xs text-text-muted">with love</p>
        </div>

        {/* Share */}
        <div className="mb-12">
          <p className="text-xs text-text-muted tracking-wide mb-3">Share with friends If you like it</p>
          <button
            onClick={copyUrl}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg text-xs text-text-secondary hover:text-text hover:border-border-dark transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="4.5" y="4.5" width="7" height="7" rx="1" />
              <path d="M2.5 9.5V2.5h7" />
            </svg>
            {copied ? 'Copied!' : 'Copy URL'}
          </button>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-xs text-text-muted tracking-wide mb-3">Subscribe to Lusion's Newsletter:</p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-bg-soft border border-border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-border-dark transition-colors"
            />
            <button className="px-4 py-2.5 bg-text text-bg rounded-lg text-xs font-medium tracking-wide hover:bg-text/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

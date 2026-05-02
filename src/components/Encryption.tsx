import { useState } from 'react'

export function Encryption() {
  const [message] = useState('Hello World')
  const [encoded, setEncoded] = useState(false)

  const flipText = (text: string) =>
    text
      .split('')
      .map((c) => {
        const flips: Record<string, string> = {
          a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ',
          h: 'ɥ', i: 'ᴉ', j: 'ɾ', k: 'ʞ', l: 'l', m: 'ɯ', n: 'u',
          o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n',
          v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z',
          H: 'H', W: 'M', M: 'W',
        }
        return flips[c] || c
      })
      .reverse()
      .join('')

  const displayText = encoded ? flipText(message) : message

  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-3">Secure communications simplified</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Smart flip<br />encryption
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            Write a message. Flip. Instantly secure — until someone flips it back. Genius.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setEncoded(true)}
              className={`px-5 py-2.5 rounded-lg text-xs tracking-wide uppercase transition-all border ${
                encoded
                  ? 'bg-text text-bg border-text'
                  : 'border-border-dark text-text-secondary hover:border-text hover:text-text'
              }`}
            >
              Encode Message
            </button>
            <button
              onClick={() => setEncoded(false)}
              className={`px-5 py-2.5 rounded-lg text-xs tracking-wide uppercase transition-all border ${
                !encoded
                  ? 'bg-text text-bg border-text'
                  : 'border-border-dark text-text-secondary hover:border-text hover:text-text'
              }`}
            >
              Decode Message
            </button>
          </div>
        </div>

        <div className="bg-bg-soft border border-border rounded-xl p-12 flex items-center justify-center min-h-[280px]">
          <p
            className={`text-3xl md:text-4xl font-mono text-center transition-all duration-500 ${
              encoded ? 'rotate-180' : ''
            }`}
          >
            {displayText}
          </p>
        </div>
      </div>
    </section>
  )
}

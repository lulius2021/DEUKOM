export function Footer() {
  return (
    <footer id="contact" className="py-14 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* New Business */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted mb-3">New Business:</p>
            <a href="mailto:business@lusion.co" className="text-sm text-text-secondary hover:text-text transition-colors">
              business@lusion.co
            </a>
          </div>

          {/* General */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-text-muted mb-3">General Enquires:</p>
            <a href="mailto:hello@lusion.co" className="text-sm text-text-secondary hover:text-text transition-colors">
              hello@lusion.co
            </a>
          </div>

          {/* Social */}
          <div>
            <div className="flex gap-5">
              <a href="#" className="text-sm text-text-secondary hover:text-text transition-colors">X</a>
              <a href="#" className="text-sm text-text-secondary hover:text-text transition-colors">Instagram</a>
              <a href="#" className="text-sm text-text-secondary hover:text-text transition-colors">Linkedin</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <a href="#" className="block text-sm text-text-secondary hover:text-text transition-colors mb-2">
              Terms & Conditions
            </a>
            <a href="#" className="block text-sm text-text-secondary hover:text-text transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-[10px] text-text-muted leading-relaxed max-w-2xl">
            This entire site is a fictional creative project by Lusion. Oryzo doesn't exist. No products are for sale. All claims are satirical and for entertainment purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}

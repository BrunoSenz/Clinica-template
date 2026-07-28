import { Instagram, MessageCircle } from 'lucide-react'
import { brand, nav } from '../data/content'
import ButterflyMark from './ButterflyMark'

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/20 pb-10 pt-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center">
        <img src="/images/logo-barbara.webp" alt={brand.name} className="h-12 w-auto" />

        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-[0.8rem] text-ink-soft transition-colors hover:text-gold-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={brand.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="rounded-full border border-gold/40 p-2.5 text-ink-soft transition-colors hover:border-gold hover:text-gold-dark"
          >
            <Instagram size={16} />
          </a>
          <a
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="rounded-full border border-gold/40 p-2.5 text-ink-soft transition-colors hover:border-gold hover:text-gold-dark"
          >
            <MessageCircle size={16} />
          </a>
        </div>

        <ButterflyMark className="h-5 w-7 text-gold/60" />

        <p className="font-body text-[0.72rem] text-ink-faint">
          © {new Date().getFullYear()} {brand.name} — {brand.tagline}. Todos os direitos reservados.
        </p>
        <p className="font-body text-[0.72rem] text-ink-faint">
  Desenvolvido por{" "}
  <a
    href="https://instagram.com/brunosenz.dev"
    target="_blank"
    rel="noreferrer"
    className="text-gold transition-colors hover:text-gold-dark"
  >
    Bruno Senz
  </a>
</p>
      </div>
    </footer>
  )
}

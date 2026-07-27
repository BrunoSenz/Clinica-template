import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, brand } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
      <div
        className={`glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-shadow duration-500 sm:px-6 ${
          scrolled ? 'shadow-glass' : ''
        }`}
      >
        <a href="#topo" className="flex items-center gap-2.5">
          <img
            src="/images/logo-barbara.webp"
            alt={`${brand.name} — ${brand.tagline}`}
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-[0.8rem] tracking-wide text-ink-soft transition-colors hover:text-gold-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden rounded-full bg-gold-gradient px-5 py-2 font-body text-[0.78rem] font-medium tracking-wide text-cream shadow-gold transition-transform duration-300 hover:scale-[1.03] md:inline-block"
        >
          Agendar
        </a>

        <button
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-1.5 text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass mx-auto mt-2 flex max-w-5xl flex-col gap-1 rounded-3xl p-4 md:hidden"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 font-body text-sm text-ink-soft hover:bg-nude-light hover:text-gold-dark"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-gold-gradient px-3 py-2.5 text-center font-body text-sm font-medium text-cream"
            >
              Agendar avaliação
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

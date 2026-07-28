import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { hero } from '../data/content'
import ButterflyMark from './ButterflyMark'

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      {/* Ambient gold glow, discreet */}
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-gold-light/25 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[320px] w-[320px] rounded-full bg-plum/10 blur-[110px]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr,1fr] lg:gap-10">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 lg:order-1"
        >
          <span className="eyebrow inline-flex items-center gap-2">
            <ButterflyMark className="h-4 w-5 text-gold" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-5 font-display text-[2.6rem] italic leading-[1.08] text-ink sm:text-[3.4rem] lg:text-[3.7rem]">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-md font-body text-[1.02rem] leading-relaxed text-ink-soft">
            {hero.text}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="rounded-full bg-gold-gradient px-8 py-3.5 font-body text-sm font-medium tracking-wide text-cream shadow-gold transition-transform duration-300 hover:scale-[1.03]"
            >
              {hero.cta}
            </a>
            <a
              href="#sobre"
              className="font-body text-sm tracking-wide text-ink-soft underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold-dark"
            >
              Conhecer a Bárbara
            </a>
          </div>

          <div className="mt-12 hairline max-w-md" />

         <ul className="mt-6 grid max-w-md grid-cols-1 gap-x-6 gap-y-3 min-[390px]:grid-cols-2">
            {hero.badges.map((badge) => (
              <li key={badge} className="flex items-center gap-2 font-body text-[0.8rem] text-ink-soft">
                <Sparkles size={14} className="text-gold" />
                {badge}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2.5rem] border border-gold/30 sm:-inset-4" />
          <div className="overflow-hidden rounded-[2.2rem] shadow-soft">
            <img
              src="/images/hero.webp"
              alt="Bárbara Fontes, esteticista cosmetóloga, sorrindo na entrada da clínica"
              className="h-full w-full object-cover"
              width="900"
              height="1125"
              fetchpriority="high"
            />
          </div>
          <div className="glass absolute -bottom-6 left-1/2 w-[86%] -translate-x-1/2 rounded-2xl px-5 py-3.5 text-center sm:left-6 sm:w-auto sm:translate-x-0 sm:text-left">
            <p className="font-display text-lg italic text-ink">Bárbara Fontes</p>
            <p className="font-body text-[0.72rem] uppercase tracking-widest2 text-gold-dark">
              Esteticista Cosmetóloga
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

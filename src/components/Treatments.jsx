import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { treatments } from '../data/content'
import ButterflyMark from './ButterflyMark'

export default function Treatments() {
  return (
    <section id="tratamentos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow inline-flex items-center gap-2">
            <ButterflyMark className="h-4 w-5 text-gold" />
            {treatments.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">
            {treatments.title}
          </h2>
          <p className="mt-5 font-body text-[0.98rem] leading-relaxed text-ink-soft">
            {treatments.text}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.items.map((item, i) => (
            <motion.a
              href="#contato"
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-[1.6rem] shadow-soft"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-nude-dark">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-xl italic text-cream">{item.name}</h3>
                <p className="mt-1.5 font-body text-[0.82rem] leading-snug text-cream/80">
                  {item.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 font-body text-[0.75rem] uppercase tracking-widest2 text-gold-light">
                  Saiba mais
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

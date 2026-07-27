import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '../data/content'
import ButterflyMark from './ButterflyMark'

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow inline-flex items-center gap-2">
            <ButterflyMark className="h-4 w-5 text-gold" />
            {testimonials.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">
            {testimonials.title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="glass-card flex flex-col rounded-[1.6rem] p-7 shadow-glass"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={15} className="fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-display text-[1.15rem] italic leading-relaxed text-ink">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-5 font-body text-[0.78rem] uppercase tracking-widest2 text-gold-dark">
                {t.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

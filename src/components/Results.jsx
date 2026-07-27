import { motion } from 'framer-motion'
import { results } from '../data/content'
import ButterflyMark from './ButterflyMark'
import BeforeAfterSlider from './BeforeAfterSlider'

export default function Results() {
  return (
    <section id="resultados" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow inline-flex items-center gap-2">
            <ButterflyMark className="h-4 w-5 text-gold" />
            {results.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">
            {results.title}
          </h2>
          <p className="mt-5 font-body text-[0.98rem] leading-relaxed text-ink-soft">
            {results.text}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {results.items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            >
              <BeforeAfterSlider before={item.before} after={item.after} label={item.label} />
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-md text-center font-body text-[0.75rem] italic text-ink-faint">
          {results.disclaimer}
        </p>
      </div>
    </section>
  )
}

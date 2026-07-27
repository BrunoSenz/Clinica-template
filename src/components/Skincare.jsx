import { motion } from 'framer-motion'
import { skincare } from '../data/content'
import ButterflyMark from './ButterflyMark'

export default function Skincare() {
  return (
    <section id="skincare" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-nude-dark/40" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-[380px] w-[380px] rounded-full bg-gold-light/30 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow inline-flex items-center gap-2">
            <ButterflyMark className="h-4 w-5 text-gold" />
            {skincare.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">
            {skincare.title}
          </h2>
          <p className="mt-5 font-body text-[0.98rem] leading-relaxed text-ink-soft">
            {skincare.text}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {skincare.products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
              className="glass-card group flex flex-col items-center rounded-[1.8rem] px-6 pb-7 pt-9 text-center shadow-glass"
            >
              <div className="mb-6 aspect-square w-full max-w-[180px] overflow-hidden rounded-2xl bg-cream/70">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-xl italic text-ink">{product.name}</h3>
              <p className="mt-2 font-body text-[0.85rem] leading-relaxed text-ink-soft">
                {product.benefit}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contato"
            className="inline-block rounded-full bg-gold-gradient px-8 py-3.5 font-body text-sm font-medium tracking-wide text-cream shadow-gold transition-transform duration-300 hover:scale-[1.03]"
          >
            {skincare.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

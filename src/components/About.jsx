import { motion } from 'framer-motion'
import { about } from '../data/content'
import ButterflyMark from './ButterflyMark'

export default function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[0.85fr,1.15fr] lg:gap-16">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src="/images/about-barbara.webp"
              alt="Bárbara Fontes em sua clínica de estética"
              className="h-full w-full object-cover"
              loading="lazy"
              width="700"
              height="860"
            />
          </div>
          <div className="absolute -right-5 -top-5 -z-10 h-full w-full rounded-[2rem] border border-gold/40 sm:-right-6 sm:-top-6" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="eyebrow inline-flex items-center gap-2">
            <ButterflyMark className="h-4 w-5 text-gold" />
            {about.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">{about.title}</h2>
          <p className="mt-1 font-body text-sm uppercase tracking-widest2 text-gold-dark">
            {about.role}
          </p>

          <div className="mt-7 space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-[1rem] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl px-3 py-5 text-center sm:px-4"
              >
                <p className="text-gradient-gold font-display text-3xl font-semibold sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-body text-[0.72rem] leading-tight text-ink-soft">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

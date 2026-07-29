import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { instagramSection, brand } from '../data/content'
import ButterflyMark from './ButterflyMark'

// O loop vai puxar as imagens insta-01.webp até insta-04.webp automaticamente
const placeholders = [1, 2, 3, 4]

export default function InstagramSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <span className="eyebrow inline-flex items-center gap-2 sm:justify-start justify-center">
              <ButterflyMark className="h-4 w-5 text-gold" />
              {instagramSection.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl italic text-ink sm:text-4xl">
              {instagramSection.title}
            </h2>
            <p className="mt-3 max-w-md font-body text-[0.95rem] text-ink-soft">
              {instagramSection.text}
            </p>
          </div>
          <a
            href={brand.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 font-body text-sm text-ink-soft transition-colors hover:border-gold hover:text-gold-dark"
          >
            <Instagram size={16} />
            {instagramSection.cta}
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {placeholders.map((n, i) => (
            <motion.a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              key={n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group aspect-square overflow-hidden rounded-2xl bg-nude-dark shadow-soft"
            >
              <img
                src={`/images/insta-0${n}.webp`}
                alt="Publicação do Instagram da clínica"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
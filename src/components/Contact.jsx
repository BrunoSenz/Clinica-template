import { motion } from 'framer-motion'
import { MapPin, MessageCircle } from 'lucide-react'
import { contact, brand } from '../data/content'
import ButterflyMark from './ButterflyMark'

export default function Contact() {
  const mapQuery = encodeURIComponent(brand.address)

  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow inline-flex items-center gap-2">
            <ButterflyMark className="h-4 w-5 text-gold" />
            {contact.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">
            {contact.title}
          </h2>
          <p className="mt-5 font-body text-[0.98rem] leading-relaxed text-ink-soft">
            {contact.text}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="glass-card mt-14 grid grid-cols-1 overflow-hidden rounded-[2rem] shadow-glass lg:grid-cols-2"
        >
          <div className="h-72 w-full lg:h-full">
            <iframe
              title="Localização da clínica"
              src={`https://www.google.com/maps/place/B%C3%A1rbara+Fontes+-+Est%C3%A9tica,+sa%C3%BAde+%26+bem-estar/@-23.9405986,-46.3227792,15z/data=!4m6!3m5!1s0x94ce0341531cc737:0x2e57a92e73b6dbd7!8m2!3d-23.940561!4d-46.304915!16s%2Fg%2F11y4l7xzwl?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D`}
              className="h-full w-full grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 p-8 sm:p-10">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-gold" />
              <div>
                <p className="font-body text-sm font-medium text-ink">Endereço</p>
                <p className="font-body text-sm text-ink-soft">{brand.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageCircle size={20} className="mt-0.5 shrink-0 text-gold" />
              <div>
                <p className="font-body text-sm font-medium text-ink">WhatsApp</p>
                <p className="font-body text-sm text-ink-soft">{brand.whatsappDisplay}</p>
              </div>
            </div>

            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-3.5 font-body text-sm font-medium tracking-wide text-cream shadow-gold transition-transform duration-300 hover:scale-[1.02]"
            >
              <MessageCircle size={16} />
              {contact.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

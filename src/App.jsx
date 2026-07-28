import { MessageCircle } from 'lucide-react'
import { brand } from './data/content'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Treatments from './components/Treatments'
import Results from './components/Results'
import Skincare from './components/Skincare'
import Testimonials from './components/Testimonials'
import InstagramSection from './components/InstagramSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="hairline" />
    </div>
  )
}

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Treatments />
        <Divider />
        <Results />
        <Skincare />
        <Divider />
        <Testimonials />
        <InstagramSection />
        <Divider />
        <Contact />
      </main>
      <Footer />
      <a
  href={`https://wa.me/${brand.whatsapp}`}
  target="_blank"
  rel="noreferrer"
  aria-label="WhatsApp"
  className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110"
>
  <MessageCircle size={28} />
</a>
    </div>
  )
}

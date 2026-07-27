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
    </div>
  )
}

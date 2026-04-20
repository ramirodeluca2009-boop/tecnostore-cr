import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalogo from './components/Catalogo'
import Joysticks from './components/Joysticks'
import Dispenser from './components/Dispenser'
import Accesorios from './components/Accesorios'
import Extras from './components/Extras'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Particles from './components/Particles'
import CursorFollower from './components/CursorFollower'

const sections = {
  controles: Catalogo,
  joysticks: Joysticks,
  dispenser: Dispenser,
  accesorios: Accesorios,
  extras: Extras,
}

function App() {
  const [section, setSection] = useState(null)

  const navigate = (s) => {
    setSection(s)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const ActiveSection = section ? sections[section] : null

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Particles />
      <div className="relative z-10 w-full">
        <Navbar section={section} onNavigate={navigate} />
        <AnimatePresence mode="wait">
          {!section ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Hero onNavigate={navigate} />
            </motion.div>
          ) : (
            <motion.div
              key={section}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="pt-16">
                <ActiveSection />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Footer onNavigate={navigate} />
      </div>
      <FloatingButtons />
      <CursorFollower />
    </div>
  )
}

export default App

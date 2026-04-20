import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP = 'https://wa.me/5492974254894'

const links = [
  { label: 'Controles', id: 'controles' },
  { label: 'Joysticks', id: 'joysticks' },
  { label: 'Dispenser', id: 'dispenser' },
  { label: 'Accesorios', id: 'accesorios' },
  { label: 'Extras', id: 'extras' },
]

export default function Navbar({ section, onNavigate }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate(null)} className="cursor-pointer flex items-center gap-2">
              <img src="/images/1002097393.png" alt="TecnoStoreCR" className="h-8 w-auto" />
              <span className="font-bold text-white text-sm hidden sm:block">TecnoStoreCR</span>
            </button>

            <AnimatePresence>
              {section && (
                <motion.button
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  onClick={() => onNavigate(null)}
                  className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Inicio
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => onNavigate(l.id)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-all cursor-pointer ${
                  section === l.id
                    ? 'text-white bg-white/10 font-medium'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {l.label}
              </button>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-1.5 text-sm font-semibold bg-[#25D366] text-white rounded-lg hover:bg-[#20bd5a] transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-neutral-400 cursor-pointer"
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {section && (
                <button
                  onClick={() => { onNavigate(null); setOpen(false) }}
                  className="flex items-center gap-1 text-neutral-400 text-sm py-2 cursor-pointer"
                >
                  ← Inicio
                </button>
              )}
              {links.map(l => (
                <button
                  key={l.id}
                  onClick={() => { onNavigate(l.id); setOpen(false) }}
                  className={`text-left text-sm py-2 px-2 rounded-lg cursor-pointer ${
                    section === l.id ? 'text-white bg-white/10 font-medium' : 'text-neutral-400'
                  }`}
                >
                  {l.label}
                </button>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-2 text-center text-sm font-semibold bg-[#25D366] text-white rounded-lg"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

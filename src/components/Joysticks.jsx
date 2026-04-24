import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import joysticksData from '../data/joysticks.json'

const WHATSAPP = 'https://wa.me/5492974254894'

function Modal({ item, onClose }) {
  useEffect(() => {
    const h = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', h); document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', h); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <motion.div initial={{ scale: 0.9, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-lg bg-[#111] rounded-2xl overflow-hidden shadow-2xl neon-border-violet" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white/60 hover:text-white cursor-pointer">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="bg-gradient-to-br from-violet-950/30 to-black p-10">
          <motion.img
            src={item.img} alt={item.nombre}
            className="w-full h-72 object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            initial={{ scale: 0.8 }} animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 20 }}
          />
        </div>
        <div className="p-6">
          <p className="font-bold text-white text-xl mb-5 neon-text-violet">{item.nombre}</p>
          <a href={`${WHATSAPP}?text=${encodeURIComponent(`Hola! Me interesa el ${item.nombre}. ¿Tienen stock?`)}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold rounded-xl transition-colors shadow-[0_0_20px_rgba(37,211,102,0.2)]">
            Consultar por WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Joysticks() {
  const items = joysticksData.map((j, i) => ({ id: i, ...j }))
  const [selected, setSelected] = useState(null)

  return (
    <section className="w-full py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white neon-text-violet"
          >
            Joysticks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-violet-400/70 text-sm mt-2"
          >
            Inalámbricos para PS4 y PS3
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mt-4"
          />
        </div>
        {items.length === 0 ? (
          <div className="text-center py-20 text-neutral-500 text-sm">
            Agregá imágenes a <code className="text-neutral-400">public/images/joysticks/</code>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {items.map((item, i) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.08, 0.5), type: 'spring', damping: 20 }}
                whileHover={{ y: -10, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelected(item)}
                className="neon-card-violet neon-shimmer rounded-2xl overflow-hidden cursor-pointer group"
              >
                <div className="relative p-6 pb-4 bg-gradient-to-br from-violet-950/20 to-transparent">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_70%)] group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                  <motion.img
                    src={item.img} alt={item.nombre}
                    className="relative z-10 w-full h-44 sm:h-52 object-contain drop-shadow-[0_0_20px_rgba(139,92,246,0.15)] group-hover:drop-shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all duration-500"
                  />
                </div>
                <div className="relative z-10 bg-black/40 px-5 py-4 border-t border-violet-500/10">
                  <p className="font-bold text-white text-base group-hover:neon-text-violet transition-all duration-300">{item.nombre}</p>
                  <p className="text-violet-400/50 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click para ver más</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <AnimatePresence>{selected && <Modal item={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  )
}

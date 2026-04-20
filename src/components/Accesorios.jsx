import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP = 'https://wa.me/5492974254894'

function parseFilename(f) {
  return { nombre: f.replace(/\.\w+$/, ''), img: `/images/accesorios/${f}` }
}

function Modal({ item, onClose }) {
  useEffect(() => {
    const h = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', h); document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', h); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-md bg-[#141414] rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white/60 hover:text-white cursor-pointer">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="bg-white p-8"><img src={item.img} alt={item.nombre} className="w-full h-60 object-contain" /></div>
        <div className="p-5">
          <p className="font-bold text-white text-lg mb-4">{item.nombre}</p>
          <a href={`${WHATSAPP}?text=${encodeURIComponent(`Hola! Me interesa ${item.nombre}. ¿Tienen stock?`)}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold rounded-xl transition-colors">
            Consultar por WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Accesorios() {
  const [items, setItems] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetch('/api/accesorios').then(r => r.json())
      .then(files => setItems(files.map((f, i) => ({ id: i, ...parseFilename(f) }))))
      .catch(() => setItems([]))
  }, [])

  return (
    <section className="w-full py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Accesorios Tech</h2>
          <p className="text-neutral-500 text-sm mt-1">Tiras LED, pen drives, cargadores y más</p>
        </div>
        {items.length === 0 ? (
          <div className="text-center py-20 text-neutral-500 text-sm">
            Agregá imágenes a <code className="text-neutral-400">public/images/accesorios/</code>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {items.map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: Math.min(i * 0.03, 0.4) }}
                whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} onClick={() => setSelected(item)}
                className="bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-black/30 transition-all duration-200">
                <div className="p-4 pb-3"><img src={item.img} alt={item.nombre} className="w-full h-28 sm:h-32 object-contain" /></div>
                <div className="bg-neutral-900 px-3 py-3 border-t border-neutral-800">
                  <p className="font-bold text-white text-sm">{item.nombre}</p>
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

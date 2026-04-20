import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP = 'https://wa.me/5492974254894'

function parseFilename(filename) {
  const name = filename.replace(/\.\w+$/, '')
  const parts = name.split(/\s+/)
  const codigo = parts[0] || ''
  const marcas = parts.slice(1).join(', ') || 'Universal'
  return { codigo, marcas, img: `/images/controles/${filename}` }
}

function Modal({ item, onClose }) {
  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-md bg-[#141414] rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white/60 hover:text-white cursor-pointer">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="bg-white p-8">
          <img src={item.img} alt={item.codigo} className="w-full h-60 object-contain" />
        </div>
        <div className="p-5">
          <p className="font-bold text-white text-lg">{item.codigo}</p>
          <p className="text-neutral-500 text-sm mt-1 mb-5">Compatible con: {item.marcas}</p>
          <a
            href={`${WHATSAPP}?text=${encodeURIComponent(`Hola! Me interesa el control ${item.codigo}, compatible con ${item.marcas}. ¿Tienen stock?`)}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Consultar por WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Catalogo() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetch('/api/controles')
      .then(r => r.json())
      .then(files => setItems(files.map((f, i) => ({ id: i, ...parseFilename(f) }))))
      .catch(() => setItems([]))
  }, [])

  const filtered = items.filter(c =>
    c.codigo.toLowerCase().includes(search.toLowerCase()) ||
    c.marcas.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="w-full py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Controles Remotos</h2>
            <p className="text-neutral-500 text-sm mt-1">{filtered.length} de {items.length} productos</p>
          </div>
          <div className="relative w-full sm:w-72">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar marca o código..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#141414] border border-white/10 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: Math.min(i * 0.02, 0.4) }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(item)}
              className="bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-black/30 transition-all duration-200"
            >
              <div className="p-4 pb-3">
                <img src={item.img} alt={item.codigo} className="w-full h-28 sm:h-32 object-contain" />
              </div>
              <div className="bg-neutral-900 px-3 py-3 border-t border-neutral-800">
                <p className="font-bold text-white text-sm">{item.codigo}</p>
                <p className="text-neutral-500 text-[11px] mt-0.5 line-clamp-1">{item.marcas}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {items.length > 0 && filtered.length === 0 && (
          <p className="text-center text-neutral-500 mt-16 text-sm">Sin resultados para esa búsqueda.</p>
        )}
      </div>
      <AnimatePresence>{selected && <Modal item={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  )
}

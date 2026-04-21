import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import controlesData from '../data/controles.json'
import joysticksData from '../data/joysticks.json'
import dispenserData from '../data/dispenser.json'
import accesoriosData from '../data/accesorios.json'

const WHATSAPP = 'https://wa.me/5492974254894'

const categorias = [
  {
    id: 'controles',
    titulo: 'Controles Remotos',
    subtitulo: '60+ modelos disponibles',
    desc: 'El catálogo más completo de controles remotos. Smart TV, LED, LCD, convertidores y decodificadores. Compatibles con Samsung, LG, Philips, Sony, Noblex, TCL, Hitachi, BGH, Telefunken y todas las marcas del mercado.',
    img: '/images/controles/LCD-629 TOP HOUSE TELEFUNKEN SMARTLIFE BGH KODAK DATSUN IRT KOGAN RCA.jpeg',
    color: 'blue',
  },
  {
    id: 'joysticks',
    titulo: 'Joysticks PS4 / PS3',
    subtitulo: 'Inalámbricos DualShock',
    desc: 'Joysticks de alta calidad para PlayStation 4 y PlayStation 3. Conexión inalámbrica Bluetooth, vibración dual, batería recargable de larga duración. Ideales para gaming sin cables.',
    img: null,
    color: 'violet',
  },
  {
    id: 'dispenser',
    titulo: 'Bomba Dispenser de Agua',
    subtitulo: 'Recargable por USB',
    desc: 'Dispensador de agua eléctrico para bidones de 10 y 20 litros. Recargable por USB, silencioso, portátil y de fácil instalación. Práctico para el hogar u oficina.',
    img: null,
    color: 'blue',
  },
  {
    id: 'accesorios',
    titulo: 'Accesorios Tech',
    subtitulo: 'LED · Pen Drives · Cargadores',
    desc: 'Complementá tu setup con lo mejor: tiras LED RGB con control remoto, pen drives de 64GB de alta velocidad, cargadores universales para notebook y más accesorios de tecnología.',
    img: null,
    color: 'violet',
  },
  {
    id: 'extras',
    titulo: 'Extras de Temporada',
    subtitulo: 'Ofertas y novedades',
    desc: 'Productos especiales que varían según la época del año. Regalos, ofertas de temporada y novedades exclusivas. Consultanos para saber qué hay disponible.',
    img: null,
    color: 'blue',
  },
]

const extraImgs = {
  joysticks: '/images/controles/LCD-557 SONY.jpeg',
  dispenser: '/images/controles/LCD-670 LG.jpeg',
  accesorios: '/images/controles/LCD-520 SAMSUNG.jpeg',
  extras: '/images/controles/LCD-551 SAMSUNG.jpeg',
}

function FeaturedProducts({ onNavigate }) {
  const items = useMemo(() => {
    const shuffled = [...controlesData].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 8)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Productos destacados</h2>
            <p className="text-neutral-500 text-sm mt-1">Algunos de nuestros controles más pedidos</p>
          </div>
          <button onClick={() => onNavigate('controles')}
            className="text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors cursor-pointer hidden sm:block">
            Ver todos →
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              onClick={() => onNavigate('controles')}
              className="bg-white rounded-xl overflow-hidden cursor-pointer group hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] transition-all duration-300 active:scale-95">
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
        <button onClick={() => onNavigate('controles')}
          className="mt-6 text-sm font-semibold text-blue-500 hover:text-blue-400 cursor-pointer sm:hidden">
          Ver todos los controles →
        </button>
      </div>
    </section>
  )
}

export default function Hero({ onNavigate }) {
  const catImages = {
    joysticks: joysticksData[0]?.img || null,
    dispenser: dispenserData[0]?.img || null,
    accesorios: accesoriosData[0]?.img || null,
  }

  return (
    <div className="w-full">
      {/* Hero con efecto neón */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-[-50px] w-[300px] h-[300px] bg-blue-500/3 rounded-full blur-[80px]" />
        {/* Neon side lines */}
        <div className="absolute left-0 top-[10%] h-[80%] w-[2px] bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-40 neon-pulse" style={{ boxShadow: '0 0 12px #3b82f6, 0 0 30px rgba(59,130,246,0.3)' }} />
        <div className="absolute right-0 top-[10%] h-[80%] w-[2px] bg-gradient-to-b from-transparent via-violet-500 to-transparent opacity-40 neon-pulse" style={{ boxShadow: '0 0 12px #8b5cf6, 0 0 30px rgba(139,92,246,0.3)' }} />

        <div className="relative z-10 text-center max-w-4xl mx-auto py-32">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <img src="/images/1002097393.png" alt="TecnoStoreCR" className="h-20 sm:h-24 w-auto mx-auto mb-8 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-6"
          >
            <span className="drop-shadow-[0_0_40px_rgba(59,130,246,0.4)] bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text">
              Todo lo que
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(139,92,246,0.5)]">
              necesitás
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Controles remotos, joysticks, accesorios y más.
            <span className="text-neutral-300"> Desde Comodoro Rivadavia para todo el país.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button onClick={() => onNavigate('controles')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] cursor-pointer active:scale-95">
              Ver catálogo
            </button>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#2be672] text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-green-600/20 inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
            className="flex items-center justify-center gap-6 mt-12 text-neutral-500 text-xs font-medium">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Envíos a todo el país</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Garantía</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Atención inmediata</span>
          </motion.div>
        </div>
      </section>

      {/* Categorías zigzag */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Nuestros productos</h2>
            <p className="text-neutral-500 text-base max-w-lg mx-auto">Explorá cada categoría y encontrá exactamente lo que necesitás</p>
          </motion.div>

          <div className="space-y-8 sm:space-y-12">
            {categorias.map((cat, i) => {
              const isEven = i % 2 === 0
              const neonColor = cat.color === 'violet' ? 'violet' : 'blue'
              const borderClass = neonColor === 'violet'
                ? 'border-violet-500/20 hover:border-violet-500/50 hover:shadow-violet-500/10'
                : 'border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/10'
              const tagClass = neonColor === 'violet' ? 'text-violet-400 bg-violet-500/10' : 'text-blue-400 bg-blue-500/10'
              const btnClass = neonColor === 'violet'
                ? 'bg-violet-600 hover:bg-violet-500 shadow-violet-600/25'
                : 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/25'

              const imgSrc = cat.img || catImages[cat.id] || null

              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  onClick={() => onNavigate(cat.id)}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch bg-[#111] border ${borderClass} rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group`}
                >
                  {/* Imagen */}
                  <div className="w-full md:w-2/5 bg-white p-6 sm:p-8 flex items-center justify-center min-h-[200px] sm:min-h-[280px]">
                    {imgSrc ? (
                      <img src={imgSrc} alt={cat.titulo} className="max-h-48 sm:max-h-56 w-auto object-contain group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="text-7xl sm:text-8xl opacity-60">
                        {cat.id === 'joysticks' ? '🎮' : cat.id === 'dispenser' ? '💧' : cat.id === 'accesorios' ? '💡' : '🎁'}
                      </div>
                    )}
                  </div>

                  {/* Texto */}
                  <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center">
                    <span className={`inline-block w-fit px-3 py-1 ${tagClass} rounded-full text-xs font-semibold mb-4`}>
                      {cat.subtitulo}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">{cat.titulo}</h3>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">{cat.desc}</p>
                    <div>
                      <span className={`inline-flex items-center gap-2 px-5 py-2.5 ${btnClass} text-white font-semibold text-sm rounded-xl shadow-lg transition-all`}>
                        Ver productos
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <FeaturedProducts onNavigate={onNavigate} />

      {/* Trust */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🚚', t: 'Envíos a todo el país', d: 'Tu pedido en la puerta de tu casa', color: 'blue' },
            { icon: '💬', t: 'Atención por WhatsApp', d: 'Respuesta inmediata', color: 'violet' },
            { icon: '🛡️', t: 'Garantía incluida', d: 'En todos los productos', color: 'blue' },
            { icon: '⚡', t: 'Stock permanente', d: 'Disponibilidad inmediata', color: 'violet' },
          ].map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ delay: i * 0.08 }}
              className={`text-center p-5 rounded-xl bg-[#111] ${b.color === 'blue' ? 'neon-border-blue' : 'neon-border-violet'} transition-all duration-300 cursor-default`}>
              <div className="text-3xl mb-3">{b.icon}</div>
              <p className="font-bold text-white text-sm">{b.t}</p>
              <p className="text-neutral-500 text-xs mt-1">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="relative max-w-2xl mx-auto text-center p-10 rounded-2xl bg-[#111] neon-border-blue">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">¿No encontrás lo que buscás?</h2>
          <p className="text-neutral-500 text-sm mb-8">Escribinos y te ayudamos a encontrar el producto exacto.</p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#2be672] text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-green-600/20">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Contactanos por WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}

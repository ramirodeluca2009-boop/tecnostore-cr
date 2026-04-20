import { motion } from 'framer-motion'

const beneficios = [
  {
    title: 'Envíos a todo el país',
    desc: 'Recibí tu control en la puerta de tu casa, estés donde estés.',
    icon: '🚚',
  },
  {
    title: 'Atención personalizada',
    desc: 'Te asesoramos por WhatsApp para encontrar el control exacto.',
    icon: '💬',
  },
  {
    title: 'Garantía incluida',
    desc: 'Todos nuestros productos cuentan con garantía de funcionamiento.',
    icon: '✅',
  },
  {
    title: 'Precios accesibles',
    desc: 'Las mejores marcas al mejor precio del mercado.',
    icon: '💰',
  },
]

export default function Beneficios() {
  return (
    <section id="beneficios" className="w-full py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-5">
            <span className="drop-shadow-[0_0_15px_rgba(138,43,226,0.5)]">¿Por qué elegirnos?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 0 25px rgba(138,43,226,0.3)' }}
              className="p-10 rounded-2xl bg-dark-surface border border-neon-violet/30 hover:border-neon-violet/60 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-5">{b.icon}</div>
              <h3 className="font-orbitron font-bold text-white mb-3">{b.title}</h3>
              <p className="text-gray-400 text-sm font-poppins">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

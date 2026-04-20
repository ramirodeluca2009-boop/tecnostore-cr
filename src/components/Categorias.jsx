import { motion } from 'framer-motion'

const categorias = [
  {
    title: 'Controles TV',
    desc: 'LED, LCD y tubos CRT',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'neon-blue',
  },
  {
    title: 'Smart TV',
    desc: 'Netflix, YouTube y más',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
      </svg>
    ),
    color: 'neon-violet',
  },
  {
    title: 'Joysticks PS4',
    desc: 'Inalámbricos DualShock 4',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'neon-pink',
  },
  {
    title: 'Joysticks PS3',
    desc: 'Inalámbricos DualShock 3',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    color: 'neon-blue',
  },
]

const colorMap = {
  'neon-blue': {
    text: 'text-neon-blue',
    border: 'border-neon-blue/30',
    hoverBorder: 'hover:border-neon-blue',
    shadow: 'hover:shadow-[0_0_25px_rgba(0,191,255,0.3)]',
    bg: 'bg-neon-blue/10',
  },
  'neon-pink': {
    text: 'text-neon-pink',
    border: 'border-neon-pink/30',
    hoverBorder: 'hover:border-neon-pink',
    shadow: 'hover:shadow-[0_0_25px_rgba(255,0,255,0.3)]',
    bg: 'bg-neon-pink/10',
  },
  'neon-violet': {
    text: 'text-neon-violet',
    border: 'border-neon-violet/30',
    hoverBorder: 'hover:border-neon-violet',
    shadow: 'hover:shadow-[0_0_25px_rgba(138,43,226,0.3)]',
    bg: 'bg-neon-violet/10',
  },
}

export default function Categorias() {
  return (
    <section id="categorias" className="w-full py-28 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-5">
            <span className="drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]">Categorías</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categorias.map((cat, i) => {
            const c = colorMap[cat.color]
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`flex flex-col items-center text-center p-10 rounded-2xl bg-black/40 border ${c.border} ${c.hoverBorder} ${c.shadow} transition-all duration-300 cursor-pointer`}
              >
                <div className={`${c.bg} ${c.text} p-4 rounded-xl mb-5`}>
                  {cat.icon}
                </div>
                <h3 className={`font-orbitron font-bold text-lg ${c.text} mb-3`}>{cat.title}</h3>
                <p className="text-gray-400 text-sm font-poppins">{cat.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

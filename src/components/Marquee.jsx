export default function Marquee() {
  const content = '📺 CONTROLES REMOTOS ⚡ SMART TV ⚡ LED ⚡ LCD 🎮 JOYSTICKS PS4/PS3 🚚 ENVÍOS A TODO EL PAÍS'

  return (
    <section className="w-full py-6 bg-dark-surface border-y border-neon-blue/20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-violet/10 via-neon-blue/5 to-neon-pink/10 pointer-events-none" />
      <div
        className="flex whitespace-nowrap relative"
        style={{ animation: 'marquee 20s linear infinite' }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="mx-8 text-sm sm:text-base font-orbitron font-semibold text-neon-blue drop-shadow-[0_0_10px_rgba(0,191,255,0.5)]"
          >
            {content}
          </span>
        ))}
      </div>
    </section>
  )
}

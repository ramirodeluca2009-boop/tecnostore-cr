const INSTAGRAM = 'https://instagram.com/tecnostorecrokk'
const WHATSAPP = 'https://wa.me/5492974254894'

const navLinks = [
  { label: 'Inicio', id: null },
  { label: 'Controles', id: 'controles' },
  { label: 'Joysticks', id: 'joysticks' },
  { label: 'Dispenser', id: 'dispenser' },
  { label: 'Accesorios', id: 'accesorios' },
  { label: 'Extras', id: 'extras' },
]

export default function Footer({ onNavigate }) {
  return (
    <footer className="w-full border-t border-blue-500/10 bg-[#0a0a0a]" style={{ boxShadow: '0 -1px 20px rgba(59,130,246,0.05)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <button onClick={() => onNavigate(null)} className="cursor-pointer flex items-center gap-2 mb-3">
              <img src="/images/1002097393.png" alt="TecnoStoreCR" className="h-8 w-auto" />
              <span className="font-bold text-white text-sm">TecnoStoreCR</span>
            </button>
            <p className="text-neutral-500 text-xs leading-relaxed">
              Electrónica y accesorios desde Comodoro Rivadavia para todo el país.
            </p>
          </div>

          <div>
            <p className="font-semibold text-neutral-400 text-xs uppercase tracking-wider mb-3">Navegación</p>
            <div className="flex flex-col gap-1.5">
              {navLinks.map(l => (
                <button key={l.label} onClick={() => onNavigate(l.id)}
                  className="text-neutral-500 text-sm hover:text-white transition-colors text-left cursor-pointer">
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-neutral-400 text-xs uppercase tracking-wider mb-3">Contacto</p>
            <div className="flex flex-col gap-1.5">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-neutral-500 text-sm hover:text-white transition-colors">WhatsApp</a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-neutral-500 text-sm hover:text-white transition-colors">@tecnostorecrokk</a>
              <p className="text-neutral-500 text-sm">Comodoro Rivadavia, Argentina</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-neutral-600 text-xs">© {new Date().getFullYear()} TecnoStoreCR</p>
        </div>
      </div>
    </footer>
  )
}

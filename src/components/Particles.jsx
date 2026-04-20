import { useEffect, useRef } from 'react'

export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    let nodes = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.4
        this.speedY = (Math.random() - 0.5) * 0.4
        this.opacity = Math.random() * 0.4 + 0.1
        this.color = Math.random() > 0.6 ? '#8b5cf6' : '#3b82f6'
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    const count = Math.min(60, Math.floor(window.innerWidth / 20))
    for (let i = 0; i < count; i++) particles.push(new Particle())

    // Circuit nodes
    const nodeCount = 12
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
      })
    }
    nodes.forEach((n, i) => {
      const others = nodes.filter((_, j) => j !== i)
        .sort((a, b) => {
          const da = Math.hypot(a.x - n.x, a.y - n.y)
          const db = Math.hypot(b.x - n.x, b.y - n.y)
          return da - db
        })
      n.connections = others.slice(0, 2)
    })

    const drawCircuit = () => {
      ctx.strokeStyle = '#3b82f6'
      ctx.lineWidth = 0.5
      nodes.forEach(n => {
        n.connections.forEach(c => {
          ctx.globalAlpha = 0.04
          ctx.beginPath()
          ctx.moveTo(n.x, n.y)
          const midX = (n.x + c.x) / 2
          ctx.lineTo(midX, n.y)
          ctx.lineTo(midX, c.y)
          ctx.lineTo(c.x, c.y)
          ctx.stroke()
        })
      })
      ctx.globalAlpha = 1
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.globalAlpha = (1 - dist / 120) * 0.08
            ctx.strokeStyle = '#6366f1'
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawCircuit()
      particles.forEach(p => { p.update(); p.draw() })
      drawConnections()
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}

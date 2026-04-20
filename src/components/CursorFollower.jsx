import { useEffect, useRef, useState } from 'react'

export default function CursorFollower() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const rippleRef = useRef(null)
  const [ripples, setRipples] = useState([])
  const mouse = useRef({ x: -100, y: -100 })
  const pos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice) return

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    const onClick = (e) => {
      const id = Date.now()
      setRipples(prev => [...prev, { id, x: e.clientX, y: e.clientY }])
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 700)
    }

    let raf
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.2
      pos.current.y += (mouse.current.y - pos.current.y) * 0.2
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.08
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.08

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('click', onClick)
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('click', onClick)
      cancelAnimationFrame(raf)
    }
  }, [])

  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window
  if (isTouchDevice) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      {ripples.map(r => (
        <div key={r.id} className="click-ripple" style={{ left: r.x, top: r.y }} />
      ))}
    </>
  )
}

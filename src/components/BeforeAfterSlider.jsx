import { useRef, useState, useCallback } from 'react'

export default function BeforeAfterSlider({ before, after, label }) {
  const containerRef = useRef(null)
  const [position, setPosition] = useState(50)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  const handlePointerDown = (e) => {
    dragging.current = true
    updateFromClientX(e.clientX)
  }
  const handlePointerMove = (e) => {
    if (!dragging.current) return
    updateFromClientX(e.clientX)
  }
  const stopDragging = () => {
    dragging.current = false
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 5))
    if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 5))
  }

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
        role="slider"
        tabIndex={0}
        aria-label={`Comparação antes e depois — ${label}`}
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={handleKeyDown}
        className="relative aspect-[4/5] w-full cursor-ew-resize select-none overflow-hidden rounded-[1.6rem] shadow-soft focus-visible:outline-gold-dark sm:aspect-[3/4]"
      >
        <img
          src={after}
          alt={`Depois — ${label}`}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <img
          src={before}
          alt={`Antes — ${label}`}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        <div
          className="absolute top-0 h-full w-[2px] bg-cream/90"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream shadow-gold">
            <div className="flex gap-0.5">
              <div className="h-3 w-[2px] bg-gold-dark" />
              <div className="h-3 w-[2px] bg-gold-dark" />
            </div>
          </div>
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-ink/60 px-3 py-1 font-body text-[0.65rem] uppercase tracking-widest2 text-cream backdrop-blur-sm">
          Antes
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-gold-dark/80 px-3 py-1 font-body text-[0.65rem] uppercase tracking-widest2 text-cream backdrop-blur-sm">
          Depois
        </span>
      </div>
      <p className="mt-3 text-center font-body text-[0.8rem] text-ink-soft">{label}</p>
    </div>
  )
}

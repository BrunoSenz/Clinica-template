// Elemento de assinatura da marca: uma borboleta em linha fina, ecoando o
// símbolo presente na logo oficial. Usado com moderação como divisor entre
// seções, nunca como decoração repetida em excesso.
export default function ButterflyMark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 64 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      aria-hidden="true"
    >
      <path d="M32 12 C 27 2, 12 2, 8 12 C 5 19, 12 25, 20 20 C 24 17.5, 26 14.5, 32 12 Z" />
      <path d="M32 12 C 37 2, 52 2, 56 12 C 59 19, 52 25, 44 20 C 40 17.5, 38 14.5, 32 12 Z" />
      <path d="M32 14 C 26 24, 14 27, 10 34 C 8 38.5, 13 41.5, 18 38 C 23 34.5, 27 25, 32 20 Z" />
      <path d="M32 14 C 38 24, 50 27, 54 34 C 56 38.5, 51 41.5, 46 38 C 41 34.5, 37 25, 32 20 Z" />
      <line x1="32" y1="10" x2="32" y2="34" strokeWidth="1.3" />
    </svg>
  )
}

import LegSection from './LegSection'

const items = [
  {
    icon: '/cara.png',
    bg: '#cba8d1',
    label: (
      <>
        APRENDEN
        <br />
        JUGANDO
      </>
    ),
  },
  {
    icon: '/buscar.png',
    bg: '#fabb27',
    label: (
      <>
        FOMENTAMOS
        <br />
        LA CURIOSIDAD
        <br />
        Y CONFIANZA
        <br />
        EN EQUIPO
      </>
    ),
    compact: true,
    dense: true,
  },
  {
    icon: '/solucion.png',
    bg: '#f99c9c',
    label: (
      <>
        CREATIVIDAD
        <br />
        SIN PANTALLAS
      </>
    ),
  },
  {
    icon: '/mano.png',
    bg: '#86ced2',
    label: (
      <>
        TRABAJO EN
        <br />
        EQUIPO Y
        <br />
        LIDERAZGO
      </>
    ),
    compact: true,
  },
  {
    icon: '/escudo.png',
    bg: '#32af5d',
    label: (
      <>
        AMBIENTE
        <br />
        SEGURO Y
        <br />
        GUIADO
      </>
    ),
    compact: true,
  },
]

/** Posición en grid 6 col (3+2) → 5 col (fila única); todas las celdas mismo ancho */
const gridCell = [
  'col-span-2 col-start-1 min-[1200px]:col-span-1 min-[1200px]:col-start-auto',
  'col-span-2 col-start-3 min-[1200px]:col-span-1 min-[1200px]:col-start-auto',
  'col-span-2 col-start-5 min-[1200px]:col-span-1 min-[1200px]:col-start-auto',
  'col-span-2 col-start-2 min-[1200px]:col-span-1 min-[1200px]:col-start-auto',
  'col-span-2 col-start-4 min-[1200px]:col-span-1 min-[1200px]:col-start-auto',
]

function BenefitCard({ icon, bg, label, compact, dense, className = '' }) {
  const textClass = dense
    ? 'text-[0.45rem] leading-[1.08] min-[400px]:text-[0.5rem] sm:text-[0.52rem] min-[1200px]:text-[0.58rem] lg:text-[0.62rem]'
    : compact
      ? 'text-[0.5rem] leading-[1.12] min-[400px]:text-[0.55rem] sm:text-[0.58rem] min-[1200px]:text-[0.65rem] lg:text-xs'
      : 'text-[0.55rem] leading-[1.12] min-[400px]:text-[0.6rem] sm:text-[0.62rem] min-[1200px]:text-xs lg:text-sm'

  return (
    <article
      className={`grid aspect-square w-full min-w-0 grid-rows-[minmax(0,1.2fr)_minmax(0,0.8fr)] overflow-hidden rounded-[1.75rem] p-2 shadow-[0_8px_24px_rgba(14,60,97,0.18)] sm:rounded-[2rem] sm:p-2.5 sm:shadow-[0_10px_28px_rgba(14,60,97,0.2)] min-[1200px]:rounded-[2.25rem] min-[1200px]:p-3 min-[1200px]:shadow-[0_12px_32px_rgba(14,60,97,0.22)] ${className}`}
      style={{ backgroundColor: bg }}
    >
      <div className="flex min-h-0 items-center justify-center">
        <img
          src={icon}
          alt=""
          className="max-h-full max-w-[70%] object-contain min-[1200px]:max-w-[76%] lg:max-w-[78%]"
          aria-hidden="true"
        />
      </div>
      <div className="flex min-h-0 items-center justify-center overflow-hidden px-0.5 pb-0.5 pt-1">
        <p
          className={`w-full text-center font-black uppercase text-white ${dense ? 'line-clamp-5' : 'line-clamp-4'} ${textClass}`}
        >
          {label}
        </p>
      </div>
    </article>
  )
}

export default function BenefitCards() {
  return (
    <LegSection bgColor="#ffffff" legOpacity={0.12} className="relative z-10 pt-8 pb-10 sm:pt-4 sm:pb-20 min-[1300px]:pb-24 min-[1420px]:pb-28 min-[1530px]:pb-32 lg:pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-[21rem] grid-cols-6 gap-2 min-[400px]:max-w-[23rem] sm:max-w-3xl sm:gap-3 min-[1200px]:max-w-none min-[1200px]:grid-cols-5 min-[1200px]:gap-4">
          {items.map((item, index) => (
            <BenefitCard key={item.icon} {...item} className={gridCell[index]} />
          ))}
        </div>
      </div>
    </LegSection>
  )
}

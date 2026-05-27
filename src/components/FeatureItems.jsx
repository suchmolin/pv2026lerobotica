import LegSection from './LegSection'

const items = [
  {
    icon: '/metodo.png',
    label: 'APRENDIZAJE ACTIVO',
    bg: 'bg-lero-green',
  },
  {
    icon: '/social.png',
    label: 'EDADES 3 A 16 AÑOS',
    bg: 'bg-lero-sky',
  },
  {
    icon: '/grupo.png',
    label: 'GRUPOS REDUCIDOS',
    bg: 'bg-lero-yellow',
  },
  {
    icon: '/bombillo.png',
    label: 'APRENDEN JUGANDO',
    bg: 'bg-lero-pink',
  },
  {
    icon: '/legos.png',
    label: 'BASADO EN EL SISTEMA DE APRENDIZAJE LEGO',
    bg: 'bg-lero-lavender',
    compact: true,
  },
]

/** Solo móvil: mismo ancho en fila de 3 y fila de 2 */
const mobileCardWidth =
  'w-[30%] max-w-[6.75rem] min-w-0 shrink-0 min-[400px]:max-w-[7.25rem]'

function FeatureCard({ icon, label, bg, className = '', compact, stacked = false }) {
  return (
    <article
      className={`flex h-full rounded-2xl px-2 py-3 sm:px-3 sm:py-4 ${bg} ${
        stacked
          ? 'min-h-[6.6rem] max-[359px]:min-h-[6.1rem] flex-col items-center justify-center gap-1.5 max-[359px]:gap-1 text-center'
          : 'min-h-[5.5rem] w-full flex-row items-center gap-2.5 sm:gap-3'
      } ${className}`}
    >
      <img
        src={icon}
        alt=""
        className={`shrink-0 object-contain ${
          stacked
            ? 'h-9 w-9 max-[359px]:h-8 max-[359px]:w-8'
            : 'h-10 w-10 sm:h-12 sm:w-12 min-[985px]:h-14 min-[985px]:w-14'
        }`}
        aria-hidden="true"
      />
      <p
        className={`min-w-0 font-extrabold uppercase leading-tight text-white ${
          stacked
            ? `text-center text-[0.56rem] leading-snug max-[359px]:text-[0.5rem] ${compact ? '' : ''}`
            : `text-left ${
                compact
                  ? 'text-[0.625rem] sm:text-xs'
                  : 'text-[0.65rem] sm:text-xs min-[985px]:text-sm lg:text-base'
              }`
        }`}
      >
        {label}
      </p>
    </article>
  )
}

export default function FeatureItems() {
  return (
    <LegSection
      bgColor="#ffffff"
      legOpacity={0.12}
      className="pt-10 pb-10 sm:pt-14 sm:pb-14 min-[1570px]:relative min-[1570px]:z-10 min-[1570px]:pt-24 min-[1570px]:pb-14"
    >
      <div className="mx-auto min-[1570px]:pt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <= 984px: layout 3 + 2 */}
        <div className="min-[985px]:hidden">
          {/* Móvil (< sm): anchos fijos %, icono arriba */}
          <div className="mx-auto flex w-[94%] max-w-[26rem] flex-col items-center gap-3 sm:hidden">
            <div className="flex w-full items-stretch justify-between gap-2">
              {items.slice(0, 3).map((item) => (
                <FeatureCard
                  key={item.label}
                  {...item}
                  stacked
                  className={mobileCardWidth}
                />
              ))}
            </div>
            <div className="flex w-full items-stretch justify-center gap-2">
              {items.slice(3, 5).map((item) => (
                <FeatureCard
                  key={item.label}
                  {...item}
                  stacked
                  compact={item.compact}
                  className={mobileCardWidth}
                />
              ))}
            </div>
          </div>

          {/* Tablet (sm – 984px): celdas al 100%, icono a la izquierda */}
          <div className="mx-auto hidden w-full max-w-3xl flex-col items-center gap-4 sm:flex">
            <div className="grid w-full grid-cols-3 items-stretch gap-3">
              {items.slice(0, 3).map((item) => (
                <FeatureCard key={item.label} {...item} className="w-full" />
              ))}
            </div>
            <div className="grid w-full max-w-xl grid-cols-2 items-stretch gap-3">
              {items.slice(3, 5).map((item) => (
                <FeatureCard key={item.label} {...item} compact={item.compact} className="w-full" />
              ))}
            </div>
          </div>
        </div>

        {/* >= 985px: 5 en fila */}
        <div className="hidden grid-cols-5 items-stretch justify-center gap-3 min-[985px]:grid lg:gap-4">
          {items.map((item) => (
            <FeatureCard key={item.label} {...item} compact={item.compact} />
          ))}
        </div>
      </div>
    </LegSection>
  )
}

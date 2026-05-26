/**
 * Sección con color de fondo + patrón leg.png en mosaico.
 * leg.png tiene fondo negro: usamos máscara para mostrar solo los relieves
 * del ladrillo sobre el color de la sección (el negro no tapa el fondo).
 */
const LEG_MASK_SIZE = '40px'

export function LegPattern({ opacity = 0.65 }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        maskImage: 'url(/leg.png)',
        WebkitMaskImage: 'url(/leg.png)',
        maskRepeat: 'repeat',
        WebkitMaskRepeat: 'repeat',
        maskSize: LEG_MASK_SIZE,
        WebkitMaskSize: LEG_MASK_SIZE,
        maskPosition: '0 0',
        WebkitMaskPosition: '0 0',
      }}
      aria-hidden="true"
    />
  )
}

export default function LegSection({
  id,
  bgColor,
  legOpacity = 0.65,
  className = '',
  children,
  ...props
}) {
  return (
    <section
      id={id}
      className={`relative ${className}`}
      style={{ backgroundColor: bgColor }}
      {...props}
    >
      <LegPattern opacity={legOpacity} />
      <div className="relative z-10 overflow-visible">{children}</div>
    </section>
  )
}

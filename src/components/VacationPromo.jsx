import LegSection from './LegSection'

const SECTION_BG = '#ceeae8'
const LESTEAM_COLORS = ['#1a4dc5', '#33aab8', '#4ac109', '#f59707', '#f79300', '#7624b3', '#f3d000']
const WHATSAPP_URL =
  'https://wa.me/584125652213?text=Hola%2C%20quiero%20mas%20informacion%20del%20Plan%20Vacacional%20de%20LeRobotica'

/** Altura franja: 65% en 1300px+; un poco más baja en pantallas menores */
const stripHeight =
  'h-[16rem] min-h-[16rem] min-[1200px]:h-[16.75rem] min-[1200px]:min-h-[16.75rem] min-[1300px]:h-[19.5rem] min-[1300px]:min-h-[19.5rem] min-[1420px]:h-[22.75rem] min-[1420px]:min-h-[22.75rem] min-[1530px]:h-[26rem] min-[1530px]:min-h-[26rem]'

/**
 * Escala desde 1530px (×1.2). 1420+ sin cambios; por debajo, reducción más suave.
 */
const desktopScale =
  'origin-top-left scale-[0.92] min-[1300px]:scale-[1] min-[1420px]:scale-[1.05] min-[1530px]:scale-[1.2]'

const stackedScale = 'origin-top scale-[1.02] min-[360px]:scale-[1.08]'

function LesteamWord() {
  return (
    <span className="inline-flex font-black">
      {'LESTEAM'.split('').map((letter, index) => (
        <span key={letter + index} style={{ color: LESTEAM_COLORS[index] }}>
          {letter}
        </span>
      ))}
    </span>
  )
}

function PromoContent({ desktop = false, scaleClass = '' }) {
  const headlineSize = desktop
    ? 'text-5xl'
    : 'text-3xl max-[359px]:text-[1.55rem] sm:text-4xl lg:text-5xl'
  const sublineSize = desktop ? 'text-lg' : 'text-sm max-[359px]:text-xs sm:text-base lg:text-lg'
  const pillTextSize = desktop ? 'text-4xl' : 'text-2xl max-[359px]:text-xl sm:text-3xl lg:text-4xl'
  const subtitleSize = desktop ? 'text-4xl' : 'text-2xl max-[359px]:text-xl sm:text-3xl lg:text-4xl'
  const ctaSize = desktop ? 'text-2xl' : 'text-lg max-[359px]:text-base sm:text-xl lg:text-2xl'
  const pillPad = desktop ? 'px-8 py-2.5' : 'px-5 py-2 sm:px-6 sm:py-2.5 lg:px-8'
  const ctaPad = desktop ? 'px-10 py-3' : 'px-8 py-2.5 sm:px-10 sm:py-3'
  const mlPlan = desktop ? 'ml-5' : ''
  const mlAventura = desktop ? 'ml-10' : ''
  const mlCta = desktop ? 'ml-15' : ''

  return (
    <div
      className={`flex w-full flex-col gap-0 ${desktop ? 'items-start' : 'items-center'} ${scaleClass}`}
    >
      <div className={`flex flex-col leading-[0.88] ${desktop ? '' : 'items-center'}`}>
        <p
          className={`whitespace-nowrap font-sans font-black uppercase text-[#33aabc] max-[359px]:whitespace-normal ${headlineSize}`}
        >
          ESTAS VACACIONES
        </p>
        <p
          className={`whitespace-nowrap font-sans font-black uppercase text-[#0e3c61] max-[359px]:whitespace-normal ${headlineSize}`}
        >
          SON DIFERENTES
        </p>
      </div>
      <p
        className={`mt-1.5 max-w-xl font-bold uppercase leading-tight text-[#0e3c61] ${desktop ? 'mt-2 text-left' : 'text-center'} ${sublineSize}`}
      >
        PORQUE CUENTAN CON <em className="font-bold italic">EL ENFOQUE</em>{' '}
        <LesteamWord />
      </p>
      <div
        className={`mt-2 inline-flex items-center self-center rounded-xl bg-[#33aabb] ${desktop ? 'mt-2.5 self-start' : ''} ${pillPad} ${mlPlan}`}
      >
        <span
          className={`whitespace-nowrap text-center font-sans font-black uppercase text-white max-[359px]:whitespace-normal ${pillTextSize}`}
        >
          PLAN VACACIONAL
        </span>
      </div>
      <p
        className={`mt-2 self-center whitespace-nowrap text-center font-sans font-black uppercase text-[#0e3c61] max-[359px]:whitespace-normal ${desktop ? 'mt-2.5 self-start' : ''} ${subtitleSize} ${mlAventura}`}
      >
        AVENTURA LEGO 2026
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className={`mt-3 inline-flex items-center justify-center self-center rounded-xl bg-[#fabb27] font-sans font-black uppercase text-white shadow-md transition hover:brightness-110 ${desktop ? 'mt-3.5 self-start' : ''} ${ctaPad} ${ctaSize} ${mlCta}`}
      >
        INSCRÍBETE AHORA
      </a>
    </div>
  )
}

export default function VacationPromo() {
  return (
    <LegSection
      bgColor={SECTION_BG}
      legOpacity={0.28}
      className="relative z-30 overflow-hidden pb-0 pt-4 min-[1100px]:overflow-visible min-[1100px]:pb-20 min-[1100px]:pt-20 min-[1300px]:pb-24 min-[1300px]:pt-24 min-[1420px]:pb-28 min-[1420px]:pt-28 min-[1530px]:pb-32 min-[1530px]:pt-32"
    >
      {/* ≤1099px: texto arriba + imagen abajo */}
      <div className="relative flex flex-col min-[1100px]:hidden">
        <div className="relative z-10 mx-auto flex w-full justify-center px-4 pt-2 pb-8 max-[359px]:px-3">
          <PromoContent scaleClass={stackedScale} />
        </div>
        <div className="relative z-0 leading-none">
          <img src="/bgh.png" alt="" className="block w-full max-w-none object-cover object-top" />
        </div>
      </div>

      {/* ≥1100px: franja + imagen derecha */}
      <div
        className={`relative z-30 hidden w-full overflow-x-clip overflow-y-visible min-[1100px]:flex ${stripHeight}`}
      >
        <div className="relative z-40 flex w-[min(100%,50%)] max-w-[38rem] shrink-0 items-center overflow-visible py-2 pl-4 pr-2 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-14">
          <PromoContent desktop scaleClass={desktopScale} />
        </div>

        <div className="relative z-30 min-h-0 flex-1">
          <img
            src="/bgh.png"
            alt=""
            className="pointer-events-none absolute right-0 top-1/2 z-40 h-[27rem] w-auto max-w-none -translate-y-1/2 rounded-l-[2rem] object-contain object-right min-[1200px]:h-[28rem] min-[1300px]:h-[30rem] min-[1420px]:h-[35rem] min-[1530px]:h-[40rem] min-[1530px]:rounded-l-[2.5rem]"
          />
        </div>
      </div>
    </LegSection>
  )
}

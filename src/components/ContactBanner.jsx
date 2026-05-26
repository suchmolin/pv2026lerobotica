import LegSection from './LegSection'

const SECTION_BG = '#ffffff'

export default function ContactBanner() {
  return (
    <LegSection
      id="contacto"
      bgColor={SECTION_BG}
      legOpacity={0.12}
      className="overflow-hidden rounded-b-4xl sm:overflow-visible sm:rounded-none"
    >
      {/* Móvil: info arriba + imagen abajo */}
      <div className="flex flex-col sm:hidden">
        <div className="relative z-30 mx-auto w-full px-3 py-6">
          <div className="mx-auto flex w-full max-w-[20rem] flex-col items-center gap-1 min-[400px]:max-w-[24rem]">
            <div className="flex max-w-full flex-wrap items-center justify-center gap-1.5">
              <div className="inline-flex items-center justify-center rounded-xl bg-[#33aabb] px-5 py-1 text-2xl font-black leading-none tracking-wide text-white min-[400px]:px-6 min-[400px]:text-3xl">
                VACACIONES
              </div>
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#86ced2] p-0 text-2xl font-black leading-none text-white min-[400px]:size-12 min-[400px]:text-3xl">
                =
              </span>
            </div>

            <div className="mt-1 inline-flex max-w-full items-center justify-center rounded-xl bg-[#0e3c61] px-7 py-1 min-[400px]:px-9">
              <h2 className="text-center text-4xl font-black leading-none text-white min-[400px]:text-5xl">
                LEROBOTICA
              </h2>
            </div>

            <a
              href="#contacto"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#f88800] px-7 py-2.5 text-base font-black text-white shadow-lg transition hover:brightness-110 min-[400px]:px-8 min-[400px]:text-lg"
            >
              INSCRÍBETE AHORA
            </a>
          </div>
        </div>

        <img
          src="/Sci_45620_Lifestyle_Models_on_table_4000x2400.webp"
          alt=""
          className="block h-auto w-full max-w-none object-contain"
        />
      </div>

      {/* Desktop: imagen izquierda + texto centrado verticalmente a la derecha */}
      <div className="relative hidden min-h-[clamp(24rem,46vw,52rem)] w-full items-center overflow-visible pt-8 pb-2 sm:flex lg:pt-10 lg:pb-3 2xl:min-h-[clamp(26rem,48vw,56rem)]">
        <img
          src="/Sci_45620_Lifestyle_Models_on_table_4000x2400.webp"
          alt=""
          className="pointer-events-none absolute left-0 top-1/2 z-10 h-auto w-[clamp(20rem,62vw,60rem)] max-h-[min(75vh,60rem)] -translate-y-1/2 rounded-tr-[clamp(2.5rem,5vw,4.5rem)] rounded-br-[clamp(2.5rem,5vw,4.5rem)] object-contain object-left 2xl:w-[clamp(20rem,66vw,68rem)] 2xl:max-h-[min(80vh,68rem)] 2xl:rounded-tr-[clamp(2.5rem,5vw,5rem)] 2xl:rounded-br-[clamp(2.5rem,5vw,5rem)]"
        />

        <div className="relative z-30 ml-auto box-border flex w-fit shrink-0 items-center justify-end self-center overflow-visible pl-2 pr-2 min-[950px]:mr-[10%] min-[1024px]:mr-[15%] min-[1080px]:mr-[5%] min-[1140px]:mr-[10%] min-[1200px]:mr-0 min-[1375px]:mr-[12%] min-[1570px]:mr-[0%] min-[1745px]:mr-[10%] sm:pl-4 md:pr-4 lg:pr-8 xl:pr-12 2xl:pr-14">
          <div className="flex shrink-0 flex-col justify-center gap-1 overflow-visible sm:gap-1.5">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="inline-flex text-nowrap items-center rounded-xl bg-[#33aabb] px-6 py-1 text-5xl font-black leading-none tracking-wide text-white sm:px-8 md:px-10 lg:px-11 min-[1200px]:py-1.5 min-[1200px]:text-7xl min-[1200px]:px-14">
                VACACIONES
              </div>
              <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-lg bg-[#86ced2] p-0 text-4xl font-black leading-none text-white sm:size-[4.25rem] sm:text-5xl min-[1200px]:size-[4.75rem] min-[1200px]:text-6xl">
                =
              </span>
            </div>

            <div className="inline-flex items-center rounded-xl bg-[#0e3c61] px-6 py-1 sm:px-8 md:px-10 lg:px-11 min-[1200px]:px-14 min-[1200px]:py-1.5">
              <h2 className="text-left text-6xl font-black leading-none text-white min-[1200px]:text-8xl">
                LEROBOTICA
              </h2>
            </div>

            <a
              href="#contacto"
              className="mx-auto mt-3 flex w-fit items-center justify-center rounded-xl bg-[#f88800] px-7 py-2.5 text-base font-black text-white shadow-lg transition hover:brightness-110 min-[1200px]:mt-4 min-[1200px]:px-10 min-[1200px]:py-3 min-[1200px]:text-2xl"
            >
              INSCRÍBETE AHORA
            </a>
          </div>
        </div>
      </div>
    </LegSection>
  )
}

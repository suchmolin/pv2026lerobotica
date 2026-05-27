import LegSection from './LegSection'

const HEADER_BG = '#86ced2'
const WHATSAPP_URL =
  'https://wa.me/584125652213?text=Hola%2C%20quiero%20mas%20informacion%20del%20Plan%20Vacacional%20de%20LeRobotica'

export default function Header() {
  return (
    <LegSection
      id="inicio"
      bgColor={HEADER_BG}
      legOpacity={0.7}
      className="overflow-hidden rounded-4xl sm:overflow-visible sm:rounded-none min-[1570px]:relative min-[1570px]:z-30 min-[1570px]:-mb-10"
    >
      {/* < sm (639px y menos): info centrada arriba + imagen abajo a ancho completo */}
      <div className="flex flex-col sm:hidden">
        <div className="relative z-30 mx-auto w-full px-4 py-8 text-center">
          <div className="mx-auto flex max-w-[720px] flex-col items-center">
            <div className="inline-flex items-center justify-center rounded-xl bg-lero-navy px-4 py-2 text-2xl font-extrabold leading-none tracking-wide text-white">
              PLAN VACACIONAL
            </div>

            <div className="mt-2 inline-flex items-center justify-center rounded-xl bg-lero-teal px-4 py-2.5">
              <h1 className="text-center text-4xl font-extrabold leading-none text-white">
                AVENTURA LEGO
              </h1>
            </div>

            <p className="mt-3 max-w-xl text-lg font-black uppercase leading-tight text-white/95">
              VACACIONES PARA CONSTRUIR,
              <br />
              CREAR Y APRENDER
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-lero-orange px-6 py-3 font-display text-base font-black text-white shadow-lg transition hover:brightness-110"
            >
              INSCRÍBETE AHORA
            </a>
          </div>
        </div>

        <img
          src="/fotoheader.png"
          alt=""
          className="h-auto w-full rounded-2xl object-contain"
        />
      </div>

      {/* >= sm (640px+): layout con texto encima de la imagen a la derecha */}
      <div className="relative mt-20 hidden h-[18rem] w-full overflow-x-clip overflow-y-visible min-[1080px]:h-[22rem] min-[1140px]:h-[24rem] min-[1200px]:h-[28rem] min-[1570px]:h-[600px] sm:block">
        <div className="relative z-30 ml-0 box-border flex h-full w-fit max-w-full min-w-0 items-center pl-0 pr-2 min-[950px]:ml-[10%] min-[1024px]:ml-[15%] min-[1080px]:ml-[5%] min-[1140px]:ml-[10%] min-[1200px]:ml-0 min-[1375px]:ml-[12%] min-[1570px]:ml-[0%] min-[1745px]:ml-[10%] sm:pl-2 sm:pr-4 md:pl-4 lg:pl-8 xl:pl-12 2xl:pl-14">
          <div className="min-w-0 max-w-[min(560px,calc(100vw-2rem))]">
            <div className="inline-flex text-nowrap items-center rounded-xl bg-lero-navy px-2 py-2 text-4xl font-extrabold leading-none tracking-wide text-white sm:px-3 md:px-4 lg:px-6 min-[1200px]:text-6xl">
              PLAN VACACIONAL
            </div>

            <div className="mt-2 inline-flex items-center rounded-xl bg-lero-teal px-2 py-2 sm:px-3 md:px-4 lg:px-6 min-[1200px]:py-4">
              <h1 className="text-left text-4xl font-extrabold leading-none text-white min-[1200px]:text-6xl">
                AVENTURA LEGO
              </h1>
            </div>

            <p className="mt-3 max-w-xl whitespace-nowrap text-xl font-black uppercase leading-tight text-white/95 min-[1200px]:text-2xl">
              VACACIONES PARA CONSTRUIR,
              <br />
              CREAR Y APRENDER
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-lero-orange px-5 py-2 font-display text-sm font-black text-white shadow-lg transition hover:brightness-110 min-[1200px]:px-8 min-[1200px]:py-2.5 min-[1200px]:text-xl"
            >
              INSCRÍBETE AHORA
            </a>
          </div>
        </div>

        <img
          src="/fotoheader.png"
          alt=""
          className="pointer-events-none absolute right-0 top-1/2 z-10 h-[20rem] w-auto max-w-none -translate-y-1/2 object-contain min-[1080px]:h-[24rem] min-[1140px]:h-[26rem] min-[1200px]:h-[30rem] min-[1570px]:h-[44rem]"
        />
      </div>
    </LegSection>
  )
}

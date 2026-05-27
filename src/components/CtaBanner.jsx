import LegSection from './LegSection'

const WHATSAPP_URL =
  'https://wa.me/584125652213?text=Hola%2C%20quiero%20mas%20informacion%20del%20Plan%20Vacacional%20de%20LeRobotica'

export default function CtaBanner() {
  return (
    <LegSection bgColor="#ffffff" legOpacity={0.12} className="pt-2 pb-10 sm:pt-4 sm:pb-14 lg:pt-6 lg:pb-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="flex flex-col items-center gap-0 text-center uppercase leading-none">
          <span className="font-sans text-2xl font-black text-[#0d3860] max-[359px]:text-[1.3rem] sm:text-3xl lg:text-4xl">
            EL FUTURO NO SE ESPERA,
          </span>
          <span className="font-sans text-3xl font-black text-[#f76c6e] max-[359px]:text-[1.8rem] sm:text-5xl lg:text-6xl">
            ¡SE CONSTRUYE PIEZA A PIEZA!
          </span>
        </h2>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#32af5d] px-6 py-1.5 font-sans text-2xl font-black uppercase tracking-wide text-white transition-transform duration-500 hover:scale-105 sm:mt-8 sm:px-7 sm:py-2 sm:text-3xl lg:px-8 lg:text-4xl"
        >
          ¡ASEGURA TU CUPO HOY!
        </a>

        <p className="mt-4 text-xs font-bold uppercase leading-snug text-[#4c1f20] sm:mt-5 sm:text-sm lg:text-base">
          CUPOS LIMITADOS. HAZ CLIC AQUÍ Y PREPÁRALOS PARA LA AVENTURA EN LEROBÓTICA
        </p>
      </div>
    </LegSection>
  )
}

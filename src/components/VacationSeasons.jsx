import LegSection from './LegSection'

const seasons = [
  {
    number: '1',
    label: (
      <>
        20 al 31
        <br />
        de julio
      </>
    ),
    numberColor: 'text-[#7c1a7d]',
    boxBg: 'bg-[#cba8d1]',
  },
  {
    number: '2',
    label: (
      <>
        03 al 14
        <br />
        de agosto
      </>
    ),
    numberColor: 'text-[#2b948f]',
    boxBg: 'bg-[#86ced2]',
  },
  {
    number: '3',
    label: (
      <>
        17 al 28
        <br />
        de agosto
      </>
    ),
    numberColor: 'text-[#f76a6e]',
    boxBg: 'bg-[#f99c9c]',
  },
  {
    number: '4',
    label: (
      <>
        31 de agosto al
        <br />
        11 de septiembre
      </>
    ),
    numberColor: 'text-[#f88800]',
    boxBg: 'bg-[#fabb27]',
    wide: true,
  },
]

function SeasonCard({ number, label, numberColor, boxBg, wide = false }) {
  return (
    <article
      className={`relative flex shrink-0 min-h-[5.5rem] items-center sm:min-h-[6rem] ${
        wide ? 'w-[19rem] sm:w-[20rem] lg:w-[22rem]' : 'w-[13rem] sm:w-[14rem] lg:w-[15rem]'
      }`}
    >
      <span
        className={`relative z-10 flex w-[4.25rem] shrink-0 items-center justify-center font-display text-8xl font-black leading-none sm:w-[4.5rem] lg:w-[5rem] lg:text-9xl ${numberColor}`}
        aria-hidden="true"
      >
        {number}
      </span>
      <div
        className={`-ml-6 flex min-h-[4.5rem] min-w-0 flex-1 items-center justify-center rounded-xl py-3 pl-8 pr-3 sm:min-h-[5rem] sm:py-4 lg:pl-10 ${boxBg}`}
      >
        <p className="text-nowrap text-center text-lg font-black leading-tight text-white sm:text-xl lg:text-2xl">
          {label}
        </p>
      </div>
    </article>
  )
}

export default function VacationSeasons() {
  return (
    <LegSection id="fechas" bgColor="#ffffff" legOpacity={0.12} className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <h2 className="rounded-xl bg-lero-navy px-8 py-3 text-center font-display text-lg font-black uppercase tracking-wide text-white sm:px-12 sm:py-3.5 sm:text-xl lg:text-2xl">
            TEMPORADAS DE VACACIONES
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 sm:mt-12 sm:gap-5 lg:mt-14 lg:gap-4 xl:gap-6">
          {seasons.map((season) => (
            <SeasonCard key={season.number} {...season} wide={season.wide} />
          ))}
        </div>
      </div>
    </LegSection>
  )
}

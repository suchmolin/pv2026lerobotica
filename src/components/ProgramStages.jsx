import LegSection from './LegSection'

const SECTION_BG = '#fdeed7'

const stages = [
  {
    title: 'Preescolar',
    ages: '3 - 5 años',
    image: '/Sci_45620_US_Lifestyle_Raising_hands_4000x2400.webp',
    paragraphs: [
      <>Exploran, crean y construyen jugando.</>,
      <>
        Primeros pasos con <strong className="font-black">LEGO EDUCATION</strong>, pensamiento lógico y
        creatividad.
      </>,
    ],
    cardBg: 'bg-[#cba8d1]',
    titleColor: 'text-[#7c1a7d]',
    buttonBg: 'bg-[#7c1a7d]',
  },
  {
    title: 'Primaria',
    ages: '6 - 11 años',
    image: '/Sci_45620_US_Lifestyle_Students_building_4000x2400.webp',
    paragraphs: [
      <>
        Construyen, experimentan y resuelven retos con{' '}
        <strong className="font-black">LEGO EDUCATION</strong>.
      </>,
      <>Ciencia, robótica, programación y pensamiento creativo.</>,
    ],
    cardBg: 'bg-[#86ced2]',
    titleColor: 'text-[#2b948f]',
    buttonBg: 'bg-[#2b948f]',
  },
  {
    title: 'Secundaria',
    ages: '12 - 16 años',
    image: '/CSAI_45522_Lifestyle_Students_collaborating_using_a_laptop_4000x2400-2.webp',
    paragraphs: [
      <>Aplican robótica, programación, diseño e innovación en desafíos de mayor nivel.</>,
    ],
    cardBg: 'bg-[#fabb27]',
    titleColor: 'text-[#f88800]',
    buttonBg: 'bg-[#f88800]',
  },
]

function StageCard({ title, ages, image, paragraphs, cardBg, titleColor, buttonBg }) {
  return (
    <article
      className={`relative mx-auto flex h-full w-full max-w-[17.5rem] flex-col overflow-visible rounded-2xl pb-10 pt-5 sm:max-w-xs sm:rounded-[2rem] sm:pb-12 sm:pt-7 md:max-w-sm lg:max-w-none lg:rounded-[2.5rem] lg:pt-8 ${cardBg}`}
    >
      <div className="mb-4 overflow-visible px-5 sm:mb-5 sm:px-6 lg:mb-6 lg:px-8">
        <img
          src={image}
          alt=""
          className="-ml-10 h-32 w-[calc(100%+2rem)] max-w-none rounded-2xl object-cover object-center sm:-ml-12 sm:h-36 sm:w-[calc(100%+2.25rem)] sm:rounded-3xl lg:-ml-14 lg:h-40 lg:w-[calc(100%+2.5rem)] xl:h-44"
        />
      </div>

      <div className="flex flex-1 flex-col items-center px-5 pb-4 sm:px-6 lg:px-8">
        <div className="flex w-full justify-center">
          <div className="inline-grid grid-cols-1 justify-items-center gap-0 leading-[0.95]">
            <h2
              className={`font-display text-3xl font-black sm:text-4xl lg:text-[1.75rem] lg:leading-none xl:text-4xl 2xl:text-5xl ${titleColor}`}
            >
              {title}
            </h2>
            <p className="-mt-0.5 justify-self-end text-xl font-black text-white sm:text-2xl lg:text-lg xl:text-2xl 2xl:text-3xl">
              {ages}
            </p>
          </div>
        </div>

        <div className="mt-3 w-full space-y-2 text-left text-base font-bold leading-snug text-white sm:mt-4 sm:text-lg lg:text-[0.95rem] lg:leading-snug xl:text-lg 2xl:text-xl">
          {paragraphs.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
        </div>
      </div>

      <a
        href="#contacto"
        className={`absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-xl px-8 py-1.5 font-display text-sm font-black uppercase tracking-wide text-white shadow-md transition hover:brightness-110 sm:px-10 sm:text-base lg:px-8 lg:py-1.5 lg:text-sm xl:px-10 xl:py-2 xl:text-base 2xl:text-lg ${buttonBg}`}
      >
        INSCRIBIR
      </a>
    </article>
  )
}

export default function ProgramStages() {
  return (
    <LegSection
      id="programas"
      bgColor={SECTION_BG}
      legOpacity={0.12}
      className="overflow-visible py-10 sm:py-14 lg:py-16 xl:py-20"
    >
      <div className="mx-auto max-w-7xl overflow-visible px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 sm:gap-10 lg:grid-cols-3 lg:gap-5 xl:gap-8">
          {stages.map((stage) => (
            <StageCard key={stage.title} {...stage} />
          ))}
        </div>
      </div>
    </LegSection>
  )
}

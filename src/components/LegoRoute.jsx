import LegSection from './LegSection'

const groups = [
  {
    title: 'PENSAMIENTO COMPUTACIONAL E IA',
    cards: [
      {
        image: '/caja2.png',
        label: (
          <>
            CONSTRUIMOS CON GUÍA
            <br />
            Y DAMOS VIDA A IDEAS.
          </>
        ),
      },
      {
        image: '/caja3.png',
        label: (
          <>
            CREAMOS, PROBAMOS
            <br />
            Y MEJORAMOS CON
            <br />
            PROYECTOS SIMPLES.
          </>
        ),
      },
      {
        image: '/caja1.png',
        label: (
          <>
            DESARROLLAMOS PROYECTOS
            <br />
            COMPLEJOS Y PENSAMOS
            <br />
            COMO INGENIEROS.
          </>
        ),
      },
    ],
  },
  {
    title: 'MEJORA LOS RESULTADOS EN CIENCIA',
    cards: [
      {
        image: '/caja5.png',
        label: (
          <>
            EXPLORAMOS Y
            <br />
            DEJAMOS VOLAR
            <br />
            LA IMAGINACIÓN.
          </>
        ),
      },
      {
        image: '/caja6.png',
        label: (
          <>
            APRENDEMOS CON JUEGO,
            <br />
            HISTORIAS, MODELOS FÍSICOS
            <br />
            Y RETOS DE LA VIDA.
          </>
        ),
      },
      {
        image: '/caja4.png',
        label: (
          <>
            PROGRAMAMOS, DISEÑAMOS
            <br />
            Y RESOLVEMOS
            <br />
            PROBLEMAS.
          </>
        ),
      },
    ],
  },
]

function RouteCard({ image, label }) {
  return (
    <article className="flex w-[19rem] shrink-0 flex-col bg-transparent min-[400px]:w-[21rem] sm:w-[25rem]">
      <img src={image} alt="" className="block h-auto w-[96%] self-center object-contain min-[400px]:w-[97%] sm:w-full" />
      <p className="px-2 pt-1.5 pb-4 text-center font-display text-[0.9rem] font-black uppercase leading-snug text-lero-navy min-[400px]:text-[0.95rem] sm:px-3 sm:pt-2 sm:pb-5 sm:text-base">
        {label}
      </p>
    </article>
  )
}

function RouteGroup({ title, cards }) {
  return (
    <div className="mt-10 sm:mt-12">
      <div className="flex justify-center">
        <h3 className="rounded-xl bg-lero-navy px-6 py-2.5 text-center font-display text-base font-black uppercase tracking-wide text-white min-[400px]:px-7 min-[400px]:text-lg sm:px-10 sm:py-4 sm:text-xl">
          {title}
        </h3>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-4 sm:mt-8 sm:gap-5">
        {cards.map((card) => (
          <RouteCard key={card.image} {...card} />
        ))}
      </div>
    </div>
  )
}

export default function LegoRoute() {
  return (
    <LegSection id="ruta" bgColor="#ffffff" legOpacity={0.12} className="pt-6 pb-12 sm:py-16 lg:py-20">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-lero-navy min-[400px]:text-[2.1rem] sm:text-4xl">
            RUTA LEGO EDUCATION POR CICLOS
          </h2>
          <p className="mt-3 font-display text-lg font-black uppercase leading-snug text-lero-teal min-[400px]:text-xl sm:mt-4">
            ELIGE EL QUE MEJOR SE ADAPTE
            <br />
            A TU EDAD Y COMBINA TU APRENDIZAJE.
          </p>
        </header>

        {groups.map((group) => (
          <RouteGroup key={group.title} {...group} />
        ))}
      </div>
    </LegSection>
  )
}

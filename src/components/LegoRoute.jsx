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
    <article className="flex w-[25rem] shrink-0 flex-col bg-transparent">
      <img src={image} alt="" className="block h-auto w-full max-w-none object-contain" />
      <p className="px-3 pt-2 pb-5 text-center font-display text-base font-black uppercase leading-snug text-lero-navy">
        {label}
      </p>
    </article>
  )
}

function RouteGroup({ title, cards }) {
  return (
    <div className="mt-12">
      <div className="flex justify-center">
        <h3 className="rounded-xl bg-lero-navy px-10 py-4 text-center font-display text-xl font-black uppercase tracking-wide text-white">
          {title}
        </h3>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-5">
        {cards.map((card) => (
          <RouteCard key={card.image} {...card} />
        ))}
      </div>
    </div>
  )
}

export default function LegoRoute() {
  return (
    <LegSection id="ruta" bgColor="#ffffff" legOpacity={0.12} className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="font-display text-4xl font-black uppercase leading-tight text-lero-navy">
            RUTA LEGO EDUCATION POR CICLOS
          </h2>
          <p className="mt-4 font-display text-xl font-black uppercase leading-snug text-lero-teal">
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

import LegSection from './LegSection'

const WHATSAPP_URL =
  'https://wa.me/584125652213?text=Hola%2C%20quiero%20mas%20informacion%20del%20Plan%20Vacacional%20de%20LeRobotica'

const locations = [
  {
    title: 'CCCT',
    address: 'NIVEL C2, SECTOR YAREY, MEZZANINA, OFICINA MZ-11A',
    image: '/c858f02ab5dbb888d4e7f67ad2f7f8f4.jpg',
    color: '#33aabb',
    buttonBg: 'bg-white/30 hover:bg-white/40',
  },
  {
    title: 'LA TRINIDAD',
    address: 'CALLE ALTAGRACIA, TORRE CARACAS CAMPUS, NIVEL CALLE.',
    image: '/IMG_5781.JPEG',
    color: '#7c1a7d',
    buttonBg: 'bg-white/30 hover:bg-white/40',
  },
  {
    title: 'SAN IGNACIO',
    address: 'AVENIDA BLANDÍN, LA CASTELLANA, PISO 1.',
    image: '/CC_SAN%20IGNACIO_2.jpeg',
    color: '#f88800',
    buttonBg: 'bg-white/30 hover:bg-white/40',
  },
  {
    title: 'PUERTO ORDAZ',
    address: 'CENTRO COMERCIAL NARAYA, PISO 1, LOCAL 123',
    image: '/Ccnaraya.jpeg',
    color: '#f76a6e',
    buttonBg: 'bg-white/30 hover:bg-white/40',
  },
]

function LocationCard({ title, address, image, color, buttonBg, className = '' }) {
  return (
    <article
      className={`flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[3.25rem] sm:rounded-[3.75rem] lg:rounded-[4.5rem] ${className}`}
      style={{ backgroundColor: color }}
    >
      <img
        src={image}
        alt=""
        className="block h-48 w-full shrink-0 object-cover object-center rounded-b-[3rem] sm:h-52 sm:rounded-b-[3.5rem] lg:h-60 lg:rounded-b-[4.25rem]"
      />
      <div className="flex flex-1 flex-col items-center gap-1.5 px-4 pb-3 pt-3 text-center text-white sm:gap-2 sm:px-5 sm:pb-3.5 sm:pt-3.5 lg:px-6 lg:pb-4">
        <div className="flex w-full flex-col items-center gap-1">
          <h3 className="text-nowrap font-display text-xl font-black uppercase leading-tight tracking-wide sm:text-2xl lg:text-[1.65rem]">
            {title}
          </h3>
          <p className="max-w-[16rem] text-[0.65rem] font-bold uppercase leading-snug sm:text-[0.7rem] lg:text-xs">
            {address}
          </p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center justify-center rounded-full px-8 py-1 font-display text-sm font-black uppercase tracking-wider text-white transition sm:px-10 sm:py-1.5 ${buttonBg}`}
        >
          INFO
        </a>
      </div>
    </article>
  )
}

export default function LocationsSection() {
  return (
    <LegSection
      id="sedes"
      bgColor="#ffffff"
      legOpacity={0.12}
      className="relative z-10 pt-16 pb-4 sm:pt-20 sm:pb-5 min-[1300px]:pt-24 min-[1420px]:pt-28 min-[1530px]:pt-32 lg:pb-6"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 justify-items-center gap-6 min-[640px]:grid-cols-2 min-[1200px]:grid-cols-4 min-[1200px]:justify-items-stretch min-[1200px]:gap-5 lg:gap-6">
          {locations.map((location) => (
            <LocationCard
              key={location.title}
              {...location}
              className="w-full max-w-[18rem] min-[1200px]:max-w-none"
            />
          ))}
        </div>
      </div>
    </LegSection>
  )
}

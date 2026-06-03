import { useState } from 'react'
import { Search, MapPin, Calendar, Users } from 'lucide-react'
import heroImg from '@/imports/pexels-eberhardgross-1366909.jpg'
import { SECTIONS, sectionHref } from '@/config/site'

const QUICK_FILTERS = ['Pet-friendly', 'Free cancellation', 'Small groups', 'Top rated']

export function Hero() {
  const [destination, setDestination] = useState('')
  const [dates, setDates] = useState('')
  const [travelers, setTravelers] = useState(2)

  return (
    <section className="relative pt-14 md:pt-16 min-h-[min(88vh,720px)] flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/92 via-[#0a1628]/75 to-[#0a1628]/40" />

      <div className="relative z-10 landing-container w-full pb-12 md:pb-16 pt-24 md:pt-28">
        <div className="max-w-2xl">
          <p className="text-white/90 text-sm font-medium mb-3">
            Secure booking · Verified hosts · Protected payments
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.15] tracking-tight mb-4">
            Book tours &amp; activities you&apos;ll love
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Discover curated experiences from trusted local operators. Plan, book, and travel with confidence—including pet-friendly options.
          </p>
        </div>

        <div className="max-w-4xl bg-white rounded-xl shadow-lg border border-black/5 p-2 md:p-3">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-2">
            <label className="flex-1 flex items-center gap-3 px-4 py-3 lg:border-r border-border min-h-[52px]">
              <MapPin size={18} className="text-accent shrink-0" />
              <span className="flex-1 min-w-0">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Where
                </span>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="City, region, or landmark"
                  className="w-full text-sm text-foreground placeholder:text-muted-foreground/70 bg-transparent outline-none mt-0.5"
                />
              </span>
            </label>

            <label className="flex-1 flex items-center gap-3 px-4 py-3 lg:border-r border-border min-h-[52px]">
              <Calendar size={18} className="text-accent shrink-0" />
              <span className="flex-1 min-w-0">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  When
                </span>
                <input
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  placeholder="Add dates"
                  className="w-full text-sm text-foreground placeholder:text-muted-foreground/70 bg-transparent outline-none mt-0.5"
                />
              </span>
            </label>

            <div className="flex items-center gap-3 px-4 py-3 lg:border-r border-border min-h-[52px]">
              <Users size={18} className="text-accent shrink-0" />
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Travelers
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <button
                    type="button"
                    onClick={() => setTravelers((t) => Math.max(1, t - 1))}
                    className="w-7 h-7 rounded-md border border-border text-muted-foreground hover:bg-muted text-sm"
                    aria-label="Decrease travelers"
                  >
                    −
                  </button>
                  <span className="text-sm font-medium w-4 text-center">{travelers}</span>
                  <button
                    type="button"
                    onClick={() => setTravelers((t) => t + 1)}
                    className="w-7 h-7 rounded-md border border-border text-muted-foreground hover:bg-muted text-sm"
                    aria-label="Increase travelers"
                  >
                    +
                  </button>
                </div>
              </span>
            </div>

            <a href={sectionHref(SECTIONS.explore)} className="btn-primary lg:px-8 min-h-[52px] rounded-lg">
              <Search size={18} />
              Search
            </a>
          </div>
        </div>

        <ul className="flex flex-wrap gap-2 mt-4 max-w-4xl">
          {QUICK_FILTERS.map((label) => (
            <li key={label}>
              <span className="inline-block text-xs font-medium text-white/90 bg-white/10 border border-white/20 rounded-md px-3 py-1.5">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

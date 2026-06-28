import { ArrowRight, Compass, Store, Sparkles, ShieldCheck } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { SECTIONS, appDownloadHref, sectionHref } from '@/config/site'

const PATHS = [
  {
    id: 'host',
    title: 'Host your service',
    subtitle: 'Reach travelers, manage bookings, and get paid through the TripTaptap operator app.',
    cta: 'Become a host',
    href: sectionHref(SECTIONS.download),
    icon: Store,
    accent: 'primary' as const,
    perks: ['Verified operator profile', 'Secure payouts', 'Listing tools'],
  },
  {
    id: 'book',
    title: 'Book your trip',
    subtitle: 'Discover curated experiences, compare prices upfront, and book with confidence.',
    cta: 'Explore experiences',
    href: sectionHref(SECTIONS.explore),
    icon: Compass,
    accent: 'cta' as const,
    perks: ['Transparent pricing', 'Trusted vendors', 'Easy cancellation'],
  },
] as const

const ACCENT = {
  primary: {
    card: 'hover:border-primary/40 hover:shadow-primary/10',
    iconWrap: 'bg-secondary text-primary',
    iconRing: 'ring-primary/15',
    cta: 'text-primary group-hover:text-brand-blue-dark',
    glow: 'from-primary/10 via-primary/5 to-transparent',
    dot: 'bg-primary',
  },
  cta: {
    card: 'hover:border-cta/45 hover:shadow-cta/10',
    iconWrap: 'bg-[#FFF4ED] text-cta',
    iconRing: 'ring-cta/20',
    cta: 'text-cta group-hover:text-[#E55300]',
    glow: 'from-cta/12 via-cta/5 to-transparent',
    dot: 'bg-cta',
  },
} as const

export function ConnectWithUs() {
  return (
    <section className="landing-section relative overflow-hidden bg-gradient-to-b from-card via-background to-secondary/40 border-b border-border">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 left-0 h-56 w-56 rounded-full bg-cta/8 blur-3xl"
        aria-hidden
      />

      <div className="landing-container relative max-w-5xl">
        <SectionHeading
          align="center"
          title="Connect with us"
          description="Whether you run tours or plan your next adventure — TripTaptap brings hosts and travelers together on one trusted platform."
          className="max-w-2xl mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {PATHS.map(({ id, title, subtitle, cta, href, icon: Icon, accent, perks }) => {
            const styles = ACCENT[accent]

            return (
              <a
                key={id}
                href={href}
                className={`group relative flex flex-col rounded-2xl border border-border bg-card p-7 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${styles.card}`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${styles.glow} rounded-t-2xl`}
                  aria-hidden
                />

                <div className="relative flex items-start justify-between gap-4 mb-5">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ring-4 ${styles.iconWrap} ${styles.iconRing}`}
                  >
                    <Icon size={22} strokeWidth={2} aria-hidden />
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    <Sparkles size={12} className={styles.cta} aria-hidden />
                    {id === 'host' ? 'For operators' : 'For travelers'}
                  </span>
                </div>

                <h3 className="relative text-xl md:text-[1.35rem] font-bold text-foreground tracking-tight">
                  {title}
                </h3>
                <p className="relative mt-2 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                  {subtitle}
                </p>

                <ul className="relative mt-5 space-y-2">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2.5 text-sm text-foreground/85">
                      <ShieldCheck size={15} className={`shrink-0 ${styles.cta}`} aria-hidden />
                      {perk}
                    </li>
                  ))}
                </ul>

                <span
                  className={`relative mt-7 inline-flex items-center gap-2 text-sm font-semibold ${styles.cta} transition-colors`}
                >
                  {cta}
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </a>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Ready to get started?{' '}
          <a href={appDownloadHref('ios')} className="text-link font-semibold">
            Download the TripTaptap app
          </a>
        </p>
      </div>
    </section>
  )
}

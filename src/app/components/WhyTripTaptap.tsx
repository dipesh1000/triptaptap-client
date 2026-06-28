import { Smartphone, Tags, MapPinned, CheckCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { SECTIONS, sectionHref } from '@/config/site'

const BENEFITS = [
  {
    id: 'book',
    step: '01',
    icon: Smartphone,
    title: 'Book your trip online',
    description:
      'Choose where you want to travel and book experiences from verified operators in a few taps.',
    highlights: ['Mobile-first booking', 'Verified hosts', 'Instant confirmation'],
    accent: 'primary' as const,
  },
  {
    id: 'price',
    step: '02',
    icon: Tags,
    title: 'See the price from the start',
    description:
      "You'll know the full price of your trip before you confirm—no hidden fees at checkout.",
    highlights: ['Upfront totals', 'Clear inclusions', 'No surprise charges'],
    accent: 'cta' as const,
  },
  {
    id: 'location',
    step: '03',
    icon: MapPinned,
    title: "See your trip's location",
    description:
      'Track where your experience takes place and when to expect pickup or meeting details.',
    highlights: ['Meeting point details', 'Day-by-day itinerary', 'Maps in the app'],
    accent: 'primary' as const,
  },
] as const

const ACCENT = {
  primary: {
    card: 'hover:border-primary/40 hover:shadow-primary/10',
    iconWrap: 'bg-secondary text-primary',
    iconRing: 'ring-primary/15',
    step: 'text-primary/25 group-hover:text-primary/40',
    check: 'text-primary',
    glow: 'from-primary/10 via-primary/5 to-transparent',
  },
  cta: {
    card: 'hover:border-cta/45 hover:shadow-cta/10',
    iconWrap: 'bg-[#FFF4ED] text-cta',
    iconRing: 'ring-cta/20',
    step: 'text-cta/25 group-hover:text-cta/40',
    check: 'text-cta',
    glow: 'from-cta/12 via-cta/5 to-transparent',
  },
} as const

export function WhyTripTaptap() {
  return (
    <section className="landing-section relative overflow-hidden bg-gradient-to-b from-background via-card/50 to-background border-b border-border">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 right-0 h-48 w-48 rounded-full bg-cta/6 blur-3xl"
        aria-hidden
      />

      <div className="landing-container relative">
        <SectionHeading
          align="center"
          title="Why is TripTaptap better for you"
          description="Plan smarter, book faster, and travel with clarity—from search to checkout and every step on the ground."
          className="max-w-2xl mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {BENEFITS.map(({ id, step, icon: Icon, title, description, highlights, accent }) => {
            const styles = ACCENT[accent]

            return (
              <article
                key={id}
                className={`group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${styles.card}`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${styles.glow} rounded-t-2xl`}
                  aria-hidden
                />

                <div className="relative mb-5 flex items-start justify-between gap-3">
                  <span
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-4 ${styles.iconWrap} ${styles.iconRing}`}
                  >
                    <Icon size={22} strokeWidth={2} aria-hidden />
                  </span>
                  <span
                    className={`text-3xl font-bold tabular-nums leading-none transition-colors ${styles.step}`}
                    aria-hidden
                  >
                    {step}
                  </span>
                </div>

                <h3 className="relative text-lg md:text-xl font-bold text-foreground tracking-tight leading-snug">
                  {title}
                </h3>
                <p className="relative mt-2 flex-1 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                  {description}
                </p>

                <ul className="relative mt-5 space-y-2 border-t border-border/80 pt-5">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/85">
                      <CheckCircle2 size={15} className={`shrink-0 ${styles.check}`} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <p className="relative mt-10 text-center text-sm text-muted-foreground">
          See it in action —{' '}
          <a href={sectionHref(SECTIONS.explore)} className="text-link font-semibold">
            browse experiences
          </a>{' '}
          or{' '}
          <a href={sectionHref(SECTIONS.download)} className="text-link font-semibold">
            get the app
          </a>
          .
        </p>
      </div>
    </section>
  )
}

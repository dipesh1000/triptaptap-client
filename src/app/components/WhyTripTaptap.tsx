import { Bell, Shield, Dog } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const FEATURES = [
  {
    icon: Shield,
    title: 'Book with confidence',
    description:
      'Payments are protected until your experience is complete. Clear cancellation terms before you confirm.',
  },
  {
    icon: Bell,
    title: 'Price & availability alerts',
    description:
      'Save trips you care about and get notified when dates open up or prices change.',
  },
  {
    icon: Dog,
    title: 'Pet-friendly options',
    description:
      'Filter experiences that welcome pets so the whole family can travel together.',
  },
]

export function WhyTripTaptap() {
  return (
    <section className="landing-section bg-background border-y border-border">
      <div className="landing-container">
        <SectionHeading
          title="Why book with TripTaptap"
          description="Built for travelers who want clarity, security, and quality—not surprises."
          align="center"
          className="mx-auto text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-border bg-card p-6 md:p-8"
            >
              <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center mb-5">
                <Icon size={22} className="text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

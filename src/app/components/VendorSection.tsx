import { ArrowRight, CheckCircle2, Megaphone, TrendingUp, Wallet, Headphones } from 'lucide-react'
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback'
import destinationImg from '@/imports/pexels-dinamaya-29572673.jpg'
import { SECTIONS, sectionHref } from '@/config/site'

const VENDOR_BENEFITS = [
  { icon: CheckCircle2, text: 'List experiences at no upfront cost' },
  { icon: Megaphone, text: 'Reach travelers actively searching' },
  { icon: TrendingUp, text: 'Manage availability from the app' },
  { icon: Wallet, text: 'Transparent payouts and reporting' },
  { icon: Headphones, text: 'Dedicated operator support' },
]

export function VendorSection() {
  return (
    <section id="vendors" className="landing-section bg-card scroll-mt-16">
      <div className="landing-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-border shadow-sm">
          <div className="relative min-h-[300px] lg:min-h-[420px]">
            <ImageWithFallback
              src={destinationImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/75" />
            <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
              <p className="text-white/80 text-xs font-semibold uppercase tracking-wide mb-2">
                For travelers
              </p>
              <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Plan and book in one place
              </h3>
              <p className="text-white/85 text-sm leading-relaxed mb-6 max-w-md">
                Search experiences, compare verified operators, and manage bookings securely from the TripTaptap app.
              </p>
              <a
                href={sectionHref(SECTIONS.download)}
                className="inline-flex items-center gap-2 self-start bg-white text-primary font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white/95 transition-colors"
              >
                Get the app
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="bg-primary p-8 md:p-10 flex flex-col justify-center">
            <p className="text-white/70 text-xs font-semibold uppercase tracking-wide mb-2">
              For experience operators
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-3">
              Grow your business on TripTaptap
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-8 max-w-md">
              Hosts list and manage tours from the mobile app—the same platform travelers use to book.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {VENDOR_BENEFITS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-white/90 text-sm">
                  <Icon size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={1.75} />
                  {text}
                </li>
              ))}
            </ul>

            <a
              href={sectionHref(SECTIONS.download)}
              className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors w-fit"
            >
              List on the app
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

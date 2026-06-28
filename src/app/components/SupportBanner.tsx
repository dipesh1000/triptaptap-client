import {
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  Scale,
  ArrowRight,
  Headphones,
  Mail,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { mailtoSupport, SITE } from '@/config/site'

const SUPPORT_ITEMS = [
  {
    id: 'support',
    icon: MessageCircle,
    title: 'Customer support',
    desc: 'Get help before you book, during your trip, and after you return home.',
    tag: 'Always on',
    accent: 'primary' as const,
  },
  {
    id: 'cancel',
    icon: RotateCcw,
    title: 'Cancellation policy',
    desc: 'Every experience shows its cancellation terms clearly before you pay.',
    tag: 'Upfront',
    accent: 'cta' as const,
  },
  {
    id: 'refunds',
    icon: ShieldCheck,
    title: 'Secure refunds',
    desc: 'Eligible refunds are processed according to the policy you agreed to at checkout.',
    tag: 'Protected',
    accent: 'primary' as const,
  },
  {
    id: 'disputes',
    icon: Scale,
    title: 'Fair disputes',
    desc: 'Issues are reviewed with documentation from both travelers and operators.',
    tag: 'Transparent',
    accent: 'cta' as const,
  },
] as const

const QUICK_LINKS = [
  { label: 'Help center', href: mailtoSupport('Help'), icon: Headphones },
  { label: 'Cancellations', href: mailtoSupport('Cancel a trip'), icon: RotateCcw },
  { label: 'Payments', href: mailtoSupport('Payment FAQ'), icon: ShieldCheck },
  { label: 'Contact us', href: mailtoSupport(), icon: Mail },
] as const

const ACCENT = {
  primary: {
    card: 'hover:border-primary/40 hover:shadow-primary/10',
    iconWrap: 'bg-secondary text-primary',
    iconRing: 'ring-primary/15',
    tag: 'bg-secondary text-primary',
    glow: 'from-primary/10 via-primary/5 to-transparent',
  },
  cta: {
    card: 'hover:border-cta/45 hover:shadow-cta/10',
    iconWrap: 'bg-[#FFF4ED] text-cta',
    iconRing: 'ring-cta/20',
    tag: 'bg-[#FFF4ED] text-cta',
    glow: 'from-cta/12 via-cta/5 to-transparent',
  },
} as const

export function SupportBanner() {
  return (
    <section className="landing-section relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-card border-t border-border">
      <div
        className="pointer-events-none absolute -top-16 left-1/4 h-56 w-56 rounded-full bg-primary/6 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-cta/8 blur-3xl"
        aria-hidden
      />

      <div className="landing-container relative max-w-5xl">
        <SectionHeading
          title="Support you can rely on"
          description="Clear policies, responsive help, and fair resolution—from your first search to post-trip follow-up."
          align="center"
          className="max-w-2xl mx-auto"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SUPPORT_ITEMS.map(({ id, icon: Icon, title, desc, tag, accent }) => {
            const styles = ACCENT[accent]

            return (
              <article
                key={id}
                className={`group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${styles.card}`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${styles.glow} rounded-t-2xl`}
                  aria-hidden
                />

                <div className="relative mb-4 flex items-start justify-between gap-2">
                  <span
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-4 ${styles.iconWrap} ${styles.iconRing}`}
                  >
                    <Icon size={20} strokeWidth={2} aria-hidden />
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${styles.tag}`}
                  >
                    {tag}
                  </span>
                </div>

                <h3 className="relative text-base font-bold text-foreground leading-snug">{title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            )
          })}
        </div>

        <div className="relative mt-10 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                Need help now?
              </p>
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                Our team is here for travelers and operators
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Reach {SITE.supportEmail} for booking questions, cancellations, or payment support.
              </p>
            </div>

            <a
              href={mailtoSupport()}
              className="btn-primary shrink-0 self-start md:self-center"
            >
              <Mail size={16} />
              Email support
              <ArrowRight size={16} />
            </a>
          </div>

          <nav
            className="mt-6 pt-6 border-t border-border flex flex-wrap gap-2"
            aria-label="Support quick links"
          >
            {QUICK_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground/85 hover:border-primary/30 hover:bg-secondary hover:text-primary transition-colors"
              >
                <Icon size={15} className="text-muted-foreground" aria-hidden />
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}

import { MessageCircle, RotateCcw, ShieldCheck, Scale } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { mailtoSupport } from '@/config/site'

const SUPPORT_ITEMS = [
  { icon: MessageCircle, title: 'Customer support', desc: 'Help before and after booking' },
  { icon: RotateCcw, title: 'Cancellation policy', desc: 'Shown before you pay' },
  { icon: ShieldCheck, title: 'Secure refunds', desc: 'Handled per policy' },
  { icon: Scale, title: 'Fair disputes', desc: 'Documented resolution process' },
]

export function SupportBanner() {
  return (
    <section className="landing-section bg-background border-t border-border">
      <div className="landing-container max-w-5xl">
        <SectionHeading
          title="Support you can rely on"
          description="Policies and help are clear from search to post-trip."
          align="center"
          className="mx-auto text-center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SUPPORT_ITEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-lg border border-border bg-card p-5 text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-3">
                <Icon size={20} className="text-primary" strokeWidth={1.75} />
              </div>
              <p className="text-sm font-semibold text-foreground">{title}</p>
              <p className="text-xs text-muted-foreground mt-1">{desc}</p>
            </div>
          ))}
        </div>

        <nav className="flex items-center justify-center flex-wrap gap-x-6 gap-y-2 mt-8 text-sm">
          {[
            { label: 'Help center', href: mailtoSupport('Help') },
            { label: 'Cancellations', href: mailtoSupport('Cancel a trip') },
            { label: 'Payments', href: mailtoSupport('Payment FAQ') },
            { label: 'Contact', href: mailtoSupport() },
          ].map(({ label, href }) => (
            <a key={label} href={href} className="font-medium text-primary hover:text-accent transition-colors">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}

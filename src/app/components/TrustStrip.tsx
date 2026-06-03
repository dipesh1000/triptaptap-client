import { ShieldCheck, BadgeCheck, RotateCcw, Lock } from 'lucide-react'

const TRUST_ITEMS = [
  { icon: ShieldCheck, title: 'Secure checkout', desc: 'Encrypted payments' },
  { icon: BadgeCheck, title: 'Verified experiences', desc: 'Reviewed operators' },
  { icon: RotateCcw, title: 'Flexible cancellation', desc: 'Clear refund policy' },
  { icon: Lock, title: 'Protected bookings', desc: 'Funds held until travel' },
]

export function TrustStrip() {
  return (
    <section className="bg-white border-b border-border py-6">
      <div className="landing-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <Icon size={20} className="text-primary" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

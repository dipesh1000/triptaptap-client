import { useEffect } from 'react'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { CONTACT_PATH, SITE } from '@/config/site'

const TIERS = [
  { when: '7 days or more before the experience starts', refund: 'Full refund' },
  { when: '3 to 6 days before the experience starts', refund: '50% refund' },
  { when: 'Within 48 hours of the start time, or a no-show', refund: 'Non-refundable' },
] as const

export default function CancellationsPage() {
  useEffect(() => {
    document.title = `Cancellations & refunds — ${SITE.name}`
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="landing-container pt-[calc(var(--header-height)+2.5rem)] pb-16 max-w-3xl">
        <p className="text-sm font-semibold text-primary mb-2">Bookings</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Cancellations & refunds</h1>
        <p className="text-sm leading-7 text-foreground/80 mb-8">
          This is the standard TripTaptap cancellation schedule. The refund is based on how far ahead
          of the experience start time you cancel. Approved refunds go back to the original payment method.
        </p>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Standard refund schedule</h2>
          <div className="overflow-hidden rounded-xl border border-border">
            {TIERS.map((tier) => (
              <div
                key={tier.refund}
                className="grid gap-1 border-b border-border px-4 py-4 last:border-b-0 sm:grid-cols-[1fr_10rem] sm:items-center"
              >
                <p className="text-sm leading-7 text-foreground/80">{tier.when}</p>
                <p className="text-sm font-semibold sm:text-right">{tier.refund}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Operator rules</h2>
          <p className="text-sm leading-7 text-foreground/80">
            Some experiences use a different cancellation window set by the operator. That rule is
            shown on the listing before you pay, and again on the booking. When an operator rule is
            disclosed, it applies to that booking instead of the standard schedule above.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Cancel in the app</h2>
          <ol className="list-decimal pl-5 flex flex-col gap-2 text-sm leading-7 text-foreground/80">
            <li>Open the TripTaptap app and sign in.</li>
            <li>Open your trips and select the booking.</li>
            <li>Choose Cancel and review the refund amount.</li>
            <li>Confirm the cancellation.</li>
          </ol>
          <p className="text-sm leading-7 text-foreground/80 mt-3">
            If you cannot use the app, contact {SITE.supportEmail} or call {SITE.phoneDisplay} during
            support hours ({SITE.supportHours}). See also our{' '}
            <a href={CONTACT_PATH} className="text-primary font-medium hover:underline">
              contact page
            </a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

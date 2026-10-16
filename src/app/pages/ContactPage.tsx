import { useEffect } from 'react'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { mailtoSupport, SITE } from '@/config/site'

const DETAILS = [
  { label: 'Email', value: SITE.supportEmail, href: mailtoSupport() },
  { label: 'Phone', value: SITE.phoneDisplay, href: SITE.phoneHref },
  { label: 'Office', value: `${SITE.legalName}, ${SITE.address}` },
  { label: 'Hours', value: SITE.supportHours },
] as const

export default function ContactPage() {
  useEffect(() => {
    document.title = `Contact — ${SITE.name}`
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="landing-container pt-[calc(var(--header-height)+2.5rem)] pb-16 max-w-3xl">
        <p className="text-sm font-semibold text-primary mb-2">Support</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Contact TripTaptap</h1>
        <p className="text-sm leading-7 text-muted-foreground mb-8">
          Write or call us for booking help, account questions, and payment issues. For a cancellation
          you can also start the request in the TripTaptap app.
        </p>

        <dl className="divide-y divide-border border-y border-border">
          {DETAILS.map((item) => (
            <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
              <dt className="text-sm font-semibold">{item.label}</dt>
              <dd className="text-sm leading-7 text-foreground/80">
                {'href' in item && item.href ? (
                  <a href={item.href} className="text-primary font-medium hover:underline">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </main>
      <Footer />
    </div>
  )
}

import { useEffect } from 'react'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { mailtoSupport, SITE } from '@/config/site'

export default function DeleteAccountPage() {
  useEffect(() => {
    document.title = `Delete your account — ${SITE.name}`
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="landing-container pt-[calc(var(--header-height)+2.5rem)] pb-16 max-w-3xl">
        <p className="text-sm font-semibold text-primary mb-2">Account</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Delete your TripTaptap account
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          This page explains how to request deletion of your TripTaptap (Trip Taptap) account and
          associated data.
        </p>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">How to delete your account in the app</h2>
          <ol className="list-decimal pl-5 flex flex-col gap-2 text-sm leading-7 text-foreground/80">
            <li>Open the TripTaptap app and sign in.</li>
            <li>Go to Account (or Profile).</li>
            <li>Choose Delete account and confirm twice.</li>
            <li>Your account is removed immediately after confirmation.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Request deletion by email</h2>
          <p className="text-sm leading-7 text-foreground/80 mb-3">
            If you cannot use the app, email us from the address on your account:
          </p>
          <p className="text-sm leading-7">
            <a href={mailtoSupport('Delete my TripTaptap account')} className="text-primary font-medium hover:underline">
              {SITE.supportEmail}
            </a>
          </p>
          <p className="text-sm leading-7 text-foreground/80 mt-3">
            Include your full name, registered email or phone, and the words “delete my account”.
            We will verify it is you, then delete the account. We aim to complete email requests
            within 7 days.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">What we delete</h2>
          <ul className="list-disc pl-5 flex flex-col gap-2 text-sm leading-7 text-foreground/80">
            <li>Account profile (name, email, phone, photo, saved trips, wallet in-app data)</li>
            <li>Login credentials and sign-in tokens</li>
            <li>In-app chat messages tied to your account</li>
            <li>Uploaded personal documents and profile images</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">What we may keep</h2>
          <p className="text-sm leading-7 text-foreground/80 mb-3">
            Booking and payment records may be kept in anonymized or limited form for tax, fraud
            prevention, dispute handling, and legal compliance. Operator listings you published must
            be unpublished before a host account can be deleted.
          </p>
          <p className="text-sm leading-7 text-foreground/80">
            Retained transaction records are typically kept only as long as required by law (often
            up to several years for accounting), then deleted or de-identified.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

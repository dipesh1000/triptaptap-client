import { useEffect, useState } from 'react'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { mailtoSupport, SITE } from '@/config/site'
import {
  PRIVACY_EFFECTIVE_DATE,
  PRIVACY_INTRO,
  PRIVACY_SECTIONS,
} from '@/content/privacyPolicy'
import { API_BASE_URL } from '@/config/api'

type RemotePolicy = {
  title?: string
  content?: string
  pdfUrl?: string
  updatedAt?: string
}

function formatRemoteDate(value?: string) {
  if (!value) return PRIVACY_EFFECTIVE_DATE
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return PRIVACY_EFFECTIVE_DATE
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function PrivacyPolicyPage() {
  const [remote, setRemote] = useState<RemotePolicy | null>(null)

  useEffect(() => {
    document.title = `Privacy Policy — ${SITE.name}`
    const controller = new AbortController()

    fetch(`${API_BASE_URL}/packages/privacy-policy`, {
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        const data = json?.data as RemotePolicy | undefined
        if (data?.content?.trim()) setRemote(data)
      })
      .catch(() => {})

    return () => controller.abort()
  }, [])

  const title = remote?.title?.trim() || 'Privacy Policy'
  const remoteContent = remote?.content?.trim()
  const effective = formatRemoteDate(remote?.updatedAt)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="landing-container pt-[calc(var(--header-height)+2.5rem)] pb-16 max-w-3xl">
        <p className="text-sm font-semibold text-primary mb-2">Legal</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h1>
        <p className="text-sm text-muted-foreground mb-8">Effective date: {effective}</p>
        <p className="text-foreground/80 leading-relaxed mb-10">{PRIVACY_INTRO}</p>

        {remoteContent ? (
          <div className="whitespace-pre-wrap text-sm leading-7 text-foreground/85">{remoteContent}</div>
        ) : (
          <div className="flex flex-col gap-9">
            {PRIVACY_SECTIONS.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-lg font-semibold mb-3">{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)} className="text-sm leading-7 text-foreground/80 mb-3">
                    {p}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="list-disc pl-5 flex flex-col gap-2 text-sm leading-7 text-foreground/80">
                    {section.bullets.map((item) => (
                      <li key={item.slice(0, 48)}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        )}

        {remote?.pdfUrl ? (
          <p className="mt-10 text-sm">
            <a href={remote.pdfUrl} className="text-primary font-medium hover:underline" target="_blank" rel="noreferrer">
              Download PDF
            </a>
          </p>
        ) : null}

        <p className="mt-12 text-sm text-muted-foreground">
          Questions?{' '}
          <a href={mailtoSupport('Privacy Policy')} className="text-primary hover:underline">
            {SITE.supportEmail}
          </a>
        </p>
      </main>
      <Footer />
    </div>
  )
}

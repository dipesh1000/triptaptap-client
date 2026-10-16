import { AppStoreBadge } from '@/app/components/AppStoreBadge'
import {
  mailtoSupport,
  PRIVACY_PATH,
  DELETE_ACCOUNT_PATH,
  CONTACT_PATH,
  CANCELLATIONS_PATH,
  SECTIONS,
  SITE,
} from '@/config/site'

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'Destinations', href: '/#explore' },
      { label: 'Experiences', href: '/#explore' },
      { label: 'Trip packages', href: '/#explore' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Become a host', href: '/#host' },
      { label: 'Privacy', href: PRIVACY_PATH },
      { label: 'Delete account', href: DELETE_ACCOUNT_PATH },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact', href: CONTACT_PATH },
      { label: 'Cancellations', href: CANCELLATIONS_PATH },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id={SECTIONS.download} className="scroll-mt-20 border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="landing-container py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3">
            <img
              src="/triptaptap-logo.png"
              alt="Trip Taptap"
              className="mb-5 h-10 w-auto object-contain"
            />
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">{SITE.tagline}</p>
            <p className="mt-6 text-xs font-medium tracking-wide text-slate-500">{SITE.legalName}</p>
            <p className="mt-1 max-w-xs text-xs leading-relaxed text-slate-500">{SITE.address}</p>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-white">Download the Trip Taptap App</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              Book on the go, manage trips, and unlock mobile-only offers.
            </p>
            <div className="mt-5 flex flex-col items-start gap-2.5">
              <AppStoreBadge store="ios" />
              <AppStoreBadge store="android" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 sm:col-span-2 lg:col-span-5">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="mb-4 text-sm font-semibold text-white">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800/60 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} {SITE.legalName}. All rights reserved.</p>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <a href={SITE.phoneHref} className="hover:text-white transition-colors">
              {SITE.phoneDisplay}
            </a>
            <span aria-hidden className="text-slate-700">
              ·
            </span>
            <a href={mailtoSupport()} className="hover:text-white transition-colors">
              {SITE.supportEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

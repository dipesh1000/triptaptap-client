import { Twitter, Instagram, Facebook, Youtube, Mail, Shield, Lock, CreditCard } from 'lucide-react'
import { AppStoreBadge } from '@/app/components/AppStoreBadge'
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback'
import { mailtoSupport, SECTIONS, SITE, sectionHref } from '@/config/site'
import logo from '@/imports/logo.png'

const FOOTER_LINKS = [
  {
    title: 'Explore',
    links: ['Experiences', 'Pet-friendly', 'Adventure', 'Cultural tours'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Partners'],
  },
  {
    title: 'Operators',
    links: ['List an experience', 'Operator app', 'Payouts', 'Guidelines'],
  },
  {
    title: 'Support',
    links: ['Help center', 'Cancellations', 'Refund policy', 'Safety'],
  },
]

const TRUST_ITEMS = [
  { icon: Lock, label: 'SSL encrypted' },
  { icon: CreditCard, label: 'Secure payments' },
  { icon: Shield, label: 'Protected bookings' },
]

export function Footer() {
  return (
    <footer id={SECTIONS.download} className="bg-primary text-primary-foreground scroll-mt-16">
      <div className="landing-container pt-14 pb-24 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          <div className="lg:col-span-2">
            <ImageWithFallback
              src={logo}
              alt="TripTaptap"
              className="h-7 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">{SITE.tagline}</p>
            <div className="flex flex-col gap-2 mb-6">
              <AppStoreBadge store="ios" />
              <AppStoreBadge store="android" />
            </div>
            <div className="flex items-center gap-2">
              {[Twitter, Instagram, Facebook, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href={i === 4 ? mailtoSupport('Newsletter') : sectionHref(SECTIONS.top)}
                  aria-label="Social"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_LINKS.map(({ title, links }) => (
            <div key={title}>
              <p className="text-sm font-semibold text-white mb-4">{title}</p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => {
                  const href =
                    link === 'List an experience' || link === 'Operator app'
                      ? sectionHref(SECTIONS.download)
                      : ['Help center', 'Cancellations', 'Refund policy'].includes(link)
                        ? mailtoSupport(link)
                        : sectionHref(SECTIONS.top)
                  return (
                    <li key={link}>
                      <a href={href} className="text-sm text-white/60 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-5">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 text-xs text-white/55">
                <Icon size={14} />
                {label}
              </span>
            ))}
          </div>
          <p className="text-xs text-white/45">© {new Date().getFullYear()} TripTaptap. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-6 mt-6">
          {['Privacy', 'Terms', 'Cookies', 'Contact'].map((link) => (
            <a
              key={link}
              href={link === 'Contact' ? mailtoSupport() : sectionHref(SECTIONS.top)}
              className="text-xs text-white/45 hover:text-white/70 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

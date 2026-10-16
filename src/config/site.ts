/**
 * Marketing site URLs and copy.
 */
export const SITE = {
  name: 'TripTaptap',
  legalName: 'TRIP TAPTAP PVT LTD',
  tagline:
    'Book tours and activities from verified local operators—with secure payments and clear policies.',
  domain: 'https://www.triptaptap.com',
  supportEmail: 'Info@triptaptap.com',
  phoneDisplay: '+977 9863542297',
  phoneHref: 'tel:+9779863542297',
  address: '3, Changunarayan Municipality, Bagmati, Nepal',
  supportHours: 'Sunday through Friday, 9:00 AM to 6:00 PM NPT',
} as const

export const PRIVACY_PATH = '/privacy'
export const PRIVACY_POLICY_PATH = '/privacy-policy'
export const PRIVACY_POLICY_URL = `${SITE.domain}${PRIVACY_POLICY_PATH}`
export const DELETE_ACCOUNT_PATH = '/delete-account'
export const DELETE_ACCOUNT_URL = `${SITE.domain}${DELETE_ACCOUNT_PATH}`
export const CONTACT_PATH = '/contact'
export const CANCELLATIONS_PATH = '/cancellations'

/** Override with VITE_APP_STORE_URL / VITE_PLAY_STORE_URL when needed. */
export const APP_STORE_URL =
  import.meta.env.VITE_APP_STORE_URL ||
  'https://apps.apple.com/us/app/triptaptap/id6755958719'
export const PLAY_STORE_URL =
  import.meta.env.VITE_PLAY_STORE_URL ||
  'https://play.google.com/store/apps/details?id=com.triptaptap.app&hl=en'

export const SECTIONS = {
  top: 'top',
  explore: 'explore',
  trips: 'trips',
  vendors: 'vendors',
  reviews: 'reviews',
  download: 'download',
} as const

export function sectionHref(id: string) {
  return `#${id}`
}

export function mailtoSupport(subject?: string) {
  const q = subject ? `?subject=${encodeURIComponent(subject)}` : ''
  return `mailto:${SITE.supportEmail}${q}`
}

/** App store link, or scroll to download section when URL not configured yet. */
export function appDownloadHref(store: 'ios' | 'android') {
  const url = store === 'ios' ? APP_STORE_URL : PLAY_STORE_URL
  return url || sectionHref(SECTIONS.download)
}

export function isExternalAppLink(href: string) {
  return href.startsWith('http')
}

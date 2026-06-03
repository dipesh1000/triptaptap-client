/**
 * Marketing site URLs and copy. Update store links when App Store / Play listings are live.
 */
export const SITE = {
  name: 'TripTaptap',
  tagline: 'Book tours and activities from verified local operators—with secure payments and clear policies.',
  domain: 'https://triptaptap.com',
  supportEmail: 'support@triptaptap.com',
} as const

/** Set in .env when store URLs are available (VITE_APP_STORE_URL, VITE_PLAY_STORE_URL). */
export const APP_STORE_URL = import.meta.env.VITE_APP_STORE_URL ?? ''
export const PLAY_STORE_URL = import.meta.env.VITE_PLAY_STORE_URL ?? ''

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

import type { TripData } from '@/app/components/TripCard'
import type { HomePackage } from '@/types/package'

function toDate(value?: string): Date | null {
  if (!value) return null
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? null : d
}

function formatDaysNights(days: number): string {
  if (days <= 1) return '1 day'
  return `${days} days`
}

export function computeDuration(pkg: HomePackage): string {
  const start = toDate(pkg.tripPlanner?.startDate)
  const end = toDate(pkg.tripPlanner?.endDate)

  if (start && end && end >= start) {
    const msPerDay = 1000 * 60 * 60 * 24
    const days = Math.floor((end.getTime() - start.getTime()) / msPerDay) + 1
    return formatDaysNights(Math.max(days, 1))
  }

  const plannerDuration = Number(pkg.tripPlanner?.duration)
  if (Number.isFinite(plannerDuration) && plannerDuration > 0) {
    return formatDaysNights(plannerDuration)
  }

  const dayCount = pkg.tripPlanner?.days?.length
  if (dayCount && dayCount > 0) return formatDaysNights(dayCount)

  return '1 day'
}

export function extractLocation(pkg: HomePackage): string {
  const firstDay = pkg.tripPlanner?.days?.[0]
  if (firstDay?.place?.trim()) return firstDay.place.trim()

  const country = firstDay?.country
  if (country && typeof country === 'object' && country.name) return country.name

  return 'Nepal'
}

function computeBadge(pkg: HomePackage): string | undefined {
  if (pkg.offerLabel?.trim()) return pkg.offerLabel.trim()

  const close = toDate(pkg.bookCloseDate)
  if (close) {
    const daysLeft = Math.ceil((close.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    if (daysLeft >= 0 && daysLeft <= 7) return 'Booking closes soon'
  }

  if ((pkg.views ?? 0) >= 30) return 'Popular'
  return undefined
}

export function formatPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString('en-NP')}`
}

export function mapPackageToTrip(pkg: HomePackage): TripData {
  const rating = Number(pkg.ratingAverage ?? 0)
  const reviews = Array.isArray(pkg.reviews) ? pkg.reviews.length : 0

  return {
    id: pkg._id,
    destination: pkg.title,
    country: extractLocation(pkg),
    duration: computeDuration(pkg),
    rating: rating > 0 ? rating : 0,
    reviews,
    price: Number(pkg.price ?? 0),
    image: pkg.coverImage || '',
    badge: computeBadge(pkg),
    verified: true,
  }
}

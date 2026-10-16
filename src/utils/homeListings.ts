import { computeDuration, extractLocation, formatPrice } from '@/utils/packageMapper'
import { categoryIdsOf } from '@/utils/packageAvailability'
import type { FeaturedDestination, HomePackage } from '@/types/package'

export type ListingCard = {
  id: string
  title: string
  location: string
  subtitle: string
  img: string
  rating: number
  reviews: number
  price: string
  priceLabel?: string
}

export function matchesCategory(pkg: HomePackage, categoryId: string) {
  if (!categoryId) return true
  return categoryIdsOf(pkg).includes(categoryId)
}

function operatorName(pkg: HomePackage) {
  const name =
    pkg.vendorName ||
    pkg.vendorDisplay?.name ||
    pkg.vendor?.vendorProfile?.company_name ||
    pkg.vendor?.username
  if (!name || name === 'Unknown vendor') return ''
  return name
}

export function mapPackageCard(pkg: HomePackage): ListingCard {
  const departs = pkg.tripStartsFrom || pkg.tripLocation || extractLocation(pkg)
  const subtitle = [computeDuration(pkg), departs, operatorName(pkg)].filter(Boolean).join(' · ')

  return {
    id: pkg._id,
    title: pkg.title,
    location: departs,
    subtitle,
    img: pkg.coverImage || '',
    rating: Number(pkg.ratingAverage ?? 0),
    reviews: Array.isArray(pkg.reviews) ? pkg.reviews.length : 0,
    price: formatPrice(Number(pkg.price ?? 0)),
    priceLabel: 'person',
  }
}

export function mapDestinationCard(dest: FeaturedDestination): ListingCard {
  const count = dest.totalPackages ?? 0
  return {
    id: dest._id,
    title: dest.name,
    location: dest.region || dest.name,
    subtitle: dest.region || 'Active trips',
    img: dest.image || '',
    rating: 0,
    reviews: 0,
    price: count === 1 ? '1 trip' : `${count} trips`,
  }
}

export function splitActivePackages(list: HomePackage[], categoryId: string) {
  const matched = list.filter((pkg) => matchesCategory(pkg, categoryId))
  const featured = matched.filter((pkg) => pkg.isFeatured)
  const experiences = (featured.length > 0 ? featured : matched).slice(0, 4)
  const used = new Set(experiences.map((pkg) => pkg._id))
  const trips = matched.filter((pkg) => !used.has(pkg._id))
  return {
    experiences: experiences.map(mapPackageCard),
    trips: trips.map(mapPackageCard),
  }
}

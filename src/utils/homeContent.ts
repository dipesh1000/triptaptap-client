import type { FeaturedDestination, HomePackage, HomeSectionsResponse } from '@/types/package'
import { computeDuration, extractLocation, formatPrice } from './packageMapper'

export interface FeaturedBannerContent {
  title: string
  image: string
  label: string
  description: string
  rating?: number
  meta?: string
}

function truncate(text: string, max = 140): string {
  const trimmed = text.trim()
  if (trimmed.length <= max) return trimmed
  return `${trimmed.slice(0, max - 1).trim()}…`
}

function packageDescription(pkg: HomePackage): string {
  const dayDetails = pkg.tripPlanner?.days?.[0]?.details
  if (dayDetails?.trim()) return truncate(dayDetails)

  if (pkg.description?.trim()) return truncate(pkg.description)

  const location = extractLocation(pkg)
  const duration = computeDuration(pkg)
  const price = pkg.price ? formatPrice(Number(pkg.price)) : null
  const parts = [duration, location, price ? `from ${price}` : null].filter(Boolean)
  return parts.join(' · ')
}

function destinationDescription(dest: FeaturedDestination): string {
  const count = dest.totalPackages ?? 0
  const packages =
    count === 1 ? '1 experience' : count > 0 ? `${count} experiences` : 'Curated trips'
  const region = dest.region ? `${dest.region}` : 'Explore with TripTaptap'
  return `${packages} · ${region}`
}

export function resolveFeaturedBanner(
  data: HomeSectionsResponse,
): FeaturedBannerContent | null {
  const pkg = data.featured.find((item) => item.coverImage && item.title)
  if (pkg) {
    return {
      title: pkg.title,
      image: pkg.coverImage!,
      label: pkg.offerLabel?.trim() || 'Featured experience',
      description: packageDescription(pkg),
      rating: pkg.ratingAverage && pkg.ratingAverage > 0 ? pkg.ratingAverage : undefined,
    }
  }

  const dest = data.featuredDestinations.find((item) => item.image && item.name)
  if (dest) {
    return {
      title: dest.name,
      image: dest.image!,
      label: 'Featured destination',
      description: destinationDescription(dest),
    }
  }

  const trending = data.trending.find((item) => item.coverImage && item.title)
  if (trending) {
    return {
      title: trending.title,
      image: trending.coverImage!,
      label: 'Popular right now',
      description: packageDescription(trending),
      rating:
        trending.ratingAverage && trending.ratingAverage > 0
          ? trending.ratingAverage
          : undefined,
    }
  }

  return null
}

export function resolveHeroSlides(data: HomeSectionsResponse) {
  if (data.hero.slides.length > 0) return data.hero.slides

  return data.trending
    .filter((pkg) => pkg.coverImage && pkg.title)
    .slice(0, 3)
    .map((pkg) => ({
      id: pkg._id,
      title: pkg.title,
      coverImage: pkg.coverImage!,
      offerLabel: pkg.offerLabel ?? null,
      location: extractLocation(pkg),
    }))
}

export interface HomePackage {
  _id: string
  title: string
  description?: string
  coverImage?: string
  price?: number
  originalPrice?: number
  offerLabel?: string
  views?: number
  ratingAverage?: number
  bookCloseDate?: string
  isFeatured?: boolean
  reviews?: Array<{ rating?: number }>
  tripPlanner?: {
    startDate?: string
    endDate?: string
    duration?: number
    days?: Array<{
      place?: string
      details?: string
      country?: string | { name?: string }
    }>
  }
}

export interface FeaturedDestination {
  _id: string
  name: string
  image?: string
  totalPackages?: number
  region?: string
  isFeatured?: boolean
}

export interface HeroSlide {
  id: string
  title: string
  coverImage: string
  offerLabel?: string | null
  location?: string | null
}

export interface HomeSectionsResponse {
  trending: HomePackage[]
  closingSoon: HomePackage[]
  featured: HomePackage[]
  featuredDestinations: FeaturedDestination[]
  hero: { slides: HeroSlide[] }
}

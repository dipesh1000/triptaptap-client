import type { HomeSectionsResponse } from '@/types/package'
import { apiGet } from './api'

interface HomeSectionsApiResponse {
  success?: boolean
  data?: Partial<HomeSectionsResponse>
}

const emptySections = (): HomeSectionsResponse => ({
  trending: [],
  closingSoon: [],
  featured: [],
  featuredDestinations: [],
  hero: { slides: [] },
})

export async function fetchHomeSections(signal?: AbortSignal): Promise<HomeSectionsResponse> {
  const json = await apiGet<HomeSectionsApiResponse>('/packages/home-sections', signal)
  const data = json.data ?? (json as unknown as Partial<HomeSectionsResponse>)

  return {
    trending: Array.isArray(data?.trending) ? data.trending : [],
    closingSoon: Array.isArray(data?.closingSoon) ? data.closingSoon : [],
    featured: Array.isArray(data?.featured) ? data.featured : [],
    featuredDestinations: Array.isArray(data?.featuredDestinations)
      ? data.featuredDestinations
      : [],
    hero: {
      slides: Array.isArray(data?.hero?.slides) ? data.hero.slides : [],
    },
  }
}

export { emptySections }

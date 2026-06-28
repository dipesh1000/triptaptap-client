import { useEffect, useState } from 'react'
import type { HomeSectionsResponse } from '@/types/package'
import { emptySections, fetchHomeSections } from '@/services/homeService'

let cached: HomeSectionsResponse | null = null
let inflight: Promise<HomeSectionsResponse> | null = null

function loadShared(): Promise<HomeSectionsResponse> {
  if (cached) return Promise.resolve(cached)
  if (!inflight) {
    inflight = fetchHomeSections()
      .then((data) => {
        cached = data
        return data
      })
      .catch((err) => {
        inflight = null
        throw err
      })
  }
  return inflight
}

export function useHomeSections() {
  const [data, setData] = useState<HomeSectionsResponse>(cached ?? emptySections())
  const [loading, setLoading] = useState(!cached)
  const [error, setError] = useState(false)

  useEffect(() => {
    let active = true

    loadShared()
      .then((sections) => {
        if (active) {
          setData(sections)
          setError(false)
        }
      })
      .catch(() => {
        if (active) setError(true)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  const hasLiveData =
    data.trending.length > 0 ||
    data.featured.length > 0 ||
    data.hero.slides.length > 0 ||
    data.featuredDestinations.length > 0

  return { data, loading, error, hasLiveData }
}

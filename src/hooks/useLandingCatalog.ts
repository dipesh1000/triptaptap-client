import { useEffect, useState } from 'react'
import { fetchCategories, type SiteCategory } from '@/services/categoryService'
import { emptySections, fetchActivePackages, fetchHomeSections } from '@/services/homeService'
import type { FeaturedDestination, HomePackage } from '@/types/package'
import { categoryIdsOf, dedupePackages } from '@/utils/packageAvailability'

export function useLandingCatalog() {
  const [packages, setPackages] = useState<HomePackage[]>([])
  const [destinations, setDestinations] = useState<FeaturedDestination[]>([])
  const [categories, setCategories] = useState<SiteCategory[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    Promise.all([
      fetchHomeSections(controller.signal).catch(() => emptySections()),
      fetchCategories(controller.signal).catch(() => [] as SiteCategory[]),
      fetchActivePackages(controller.signal).catch(() => [] as HomePackage[]),
    ])
      .then(([sections, categoryList, approved]) => {
        if (controller.signal.aborted) return
        const current = dedupePackages([
          ...approved,
          ...sections.featured,
          ...sections.trending,
          ...sections.closingSoon,
        ])
        const activeIds = new Set(current.flatMap(categoryIdsOf))
        const source = sections.categories.length > 0 ? sections.categories : categoryList

        setPackages(current)
        setDestinations(
          sections.featuredDestinations.filter(
            (dest) => Boolean(dest.image) && (dest.totalPackages ?? 0) > 0,
          ),
        )
        setCategories(source.filter((category) => activeIds.has(category._id)))
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [])

  return { packages, destinations, categories, loading }
}

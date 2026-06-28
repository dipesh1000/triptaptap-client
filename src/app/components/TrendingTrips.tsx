import { useMemo, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { TripCard, TripCardSkeleton, TripData } from './TripCard'
import { SECTIONS, sectionHref } from '@/config/site'
import { useHomeSections } from '@/hooks/useHomeSections'
import { mapPackageToTrip } from '@/utils/packageMapper'

const FALLBACK_TRIPS: TripData[] = [
  {
    id: 'fallback-1',
    destination: 'Santorini Sunset Cruise',
    country: 'Greece',
    duration: '4 hours',
    rating: 4.9,
    reviews: 2847,
    price: 149,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=450&fit=crop&auto=format',
    badge: 'Likely to sell out',
    verified: true,
  },
  {
    id: 'fallback-2',
    destination: 'Ubud Jungle Wellness Retreat',
    country: 'Indonesia',
    duration: '2 days',
    rating: 4.8,
    reviews: 1923,
    price: 89,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=450&fit=crop&auto=format',
    verified: true,
  },
  {
    id: 'fallback-3',
    destination: 'Ancient Kyoto Temple Walk',
    country: 'Japan',
    duration: '6 hours',
    rating: 4.9,
    reviews: 3104,
    price: 129,
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=450&fit=crop&auto=format',
    verified: true,
  },
  {
    id: 'fallback-4',
    destination: 'Machu Picchu Sunrise Hike',
    country: 'Peru',
    duration: '1 day',
    rating: 4.8,
    reviews: 2256,
    price: 199,
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&h=450&fit=crop&auto=format',
    badge: 'Popular choice',
    verified: true,
  },
]

const SKELETON_COUNT = 4

export function TrendingTrips() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { data, loading, error, hasLiveData } = useHomeSections()

  const { trips, usingFallback } = useMemo(() => {
    const mapped = data.trending
      .filter((pkg) => pkg.coverImage && pkg.title)
      .map(mapPackageToTrip)

    if (mapped.length > 0) {
      return { trips: mapped, usingFallback: false }
    }

    if (!loading && (error || !hasLiveData)) {
      return { trips: FALLBACK_TRIPS, usingFallback: true }
    }

    return { trips: [] as TripData[], usingFallback: false }
  }, [data.trending, loading, error, hasLiveData])

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' })
  }

  return (
    <section id="trips" className="landing-section bg-muted scroll-mt-[var(--header-height)]">
      <div className="landing-container">
        <div className="flex items-end justify-between gap-4 mb-0">
          <SectionHeading
            title="Popular experiences"
            description={
              usingFallback
                ? 'Highly rated tours and activities from verified operators.'
                : 'Top picks from TripTaptap — book in the app.'
            }
          />
          {!loading && trips.length > 0 && (
            <div className="hidden md:flex items-center gap-2 shrink-0 mb-8">
              <button
                type="button"
                onClick={() => scroll('left')}
                className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-2 md:overflow-visible scrollbar-hide snap-x snap-mandatory md:snap-none"
        >
          {loading
            ? Array.from({ length: SKELETON_COUNT }, (_, i) => (
                <div key={`skeleton-${i}`} className="snap-start md:snap-align-none">
                  <TripCardSkeleton />
                </div>
              ))
            : trips.map((trip) => (
                <div key={trip.id} className="snap-start md:snap-align-none">
                  <TripCard trip={trip} />
                </div>
              ))}
        </div>

        <div className="text-center mt-10">
          <a href={sectionHref(SECTIONS.download)} className="btn-outline">
            See all in the app
          </a>
        </div>
      </div>
    </section>
  )
}

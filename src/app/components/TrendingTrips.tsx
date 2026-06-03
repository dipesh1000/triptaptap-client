import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { TripCard, TripData } from './TripCard'
import { SECTIONS, sectionHref } from '@/config/site'

const TRIPS: TripData[] = [
  {
    id: '1',
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
    id: '2',
    destination: 'Ubud Jungle Wellness Retreat',
    country: 'Indonesia',
    duration: '2 days',
    rating: 4.8,
    reviews: 1923,
    price: 89,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=450&fit=crop&auto=format',
    petFriendly: true,
    verified: true,
  },
  {
    id: '3',
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
    id: '4',
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
  {
    id: '5',
    destination: 'Amalfi Coastal Sailing',
    country: 'Italy',
    duration: '8 hours',
    rating: 4.7,
    reviews: 1678,
    price: 179,
    image: 'https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?w=600&h=450&fit=crop&auto=format',
    petFriendly: true,
  },
  {
    id: '6',
    destination: 'Masai Mara Safari',
    country: 'Kenya',
    duration: '3 days',
    rating: 4.9,
    reviews: 987,
    price: 299,
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=450&fit=crop&auto=format',
    verified: true,
  },
  {
    id: '7',
    destination: 'Iceland Northern Lights Tour',
    country: 'Iceland',
    duration: '1 night',
    rating: 4.8,
    reviews: 1441,
    price: 259,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=450&fit=crop&auto=format',
    badge: 'Seasonal',
  },
  {
    id: '8',
    destination: 'Maldives Snorkel Adventure',
    country: 'Maldives',
    duration: '5 hours',
    rating: 4.9,
    reviews: 2103,
    price: 189,
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&h=450&fit=crop&auto=format',
    verified: true,
  },
]

export function TrendingTrips() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' })
  }

  return (
    <section id="trips" className="landing-section bg-muted scroll-mt-16">
      <div className="landing-container">
        <div className="flex items-end justify-between gap-4 mb-0">
          <SectionHeading
            title="Popular experiences"
            description="Highly rated tours and activities from verified operators."
          />
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
        </div>

        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-2 md:overflow-visible scrollbar-hide snap-x snap-mandatory md:snap-none"
        >
          {TRIPS.map((trip) => (
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

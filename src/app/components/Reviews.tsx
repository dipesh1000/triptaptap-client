import { Star } from 'lucide-react'
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback'
import { SectionHeading } from './SectionHeading'

const REVIEWS = [
  {
    id: '1',
    name: 'Priya Mehta',
    destination: 'Bali, Indonesia',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format',
    rating: 5,
    quote:
      'Booking was straightforward and the pet-friendly filter actually worked. We found a retreat that welcomed our dog without extra hassle.',
    trip: 'Ubud Jungle Wellness Retreat',
  },
  {
    id: '2',
    name: 'James Okafor',
    destination: 'Kyoto, Japan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
    rating: 5,
    quote:
      'Clear pricing, verified operator, and helpful support when we adjusted dates. Felt like a proper travel platform—not a side project.',
    trip: 'Ancient Kyoto Temple Walk',
  },
  {
    id: '3',
    name: 'Sofia Andersson',
    destination: 'Santorini, Greece',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format',
    rating: 5,
    quote:
      'Had to cancel for a family emergency. Refund process was explained upfront and handled professionally. That built real trust.',
    trip: 'Santorini Sunset Cruise',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-[#e8a317] fill-[#e8a317]" />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="landing-section bg-muted scroll-mt-16">
      <div className="landing-container max-w-6xl">
        <SectionHeading
          title="Traveler reviews"
          description="Real feedback from people who booked through TripTaptap."
          align="center"
          className="mx-auto text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {REVIEWS.map(({ id, name, destination, avatar, rating, quote, trip }) => (
            <article
              key={id}
              className="bg-card rounded-lg p-6 border border-border flex flex-col h-full"
            >
              <StarRating count={rating} />
              <blockquote className="mt-4 text-sm text-foreground/90 leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <p className="mt-4 text-xs font-medium text-primary bg-secondary inline-block self-start px-2.5 py-1 rounded">
                {trip}
              </p>
              <footer className="flex items-center gap-3 pt-5 mt-5 border-t border-border">
                <ImageWithFallback
                  src={avatar}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground">{destination}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

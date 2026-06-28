import { Star, CheckCircle2 } from 'lucide-react'
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback'
import { formatPrice } from '@/utils/packageMapper'
import { SECTIONS, sectionHref } from '@/config/site'

export interface TripData {
  id: string
  destination: string
  country: string
  duration: string
  rating: number
  reviews: number
  price: number
  image: string
  petFriendly?: boolean
  badge?: string
  verified?: boolean
}

interface TripCardProps {
  trip: TripData
}

export function TripCard({ trip }: TripCardProps) {
  const { destination, country, duration, rating, reviews, price, image, petFriendly, badge, verified } =
    trip

  const showRating = rating > 0

  return (
    <article className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/25 hover:shadow-lg transition-all duration-300 flex-shrink-0 w-[280px] md:w-auto">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <ImageWithFallback
          src={image}
          alt={destination}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[11px] font-semibold px-2 py-0.5 rounded">
            {badge}
          </span>
        )}
        {verified && (
          <span className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 text-foreground text-[11px] font-medium px-2 py-0.5 rounded shadow-sm">
            <CheckCircle2 size={12} className="text-primary" />
            Verified
          </span>
        )}
        <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white bg-black/55 px-2 py-0.5 rounded">
          {duration}
        </span>
      </div>

      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">
          {country}
          {petFriendly && <span className="text-primary font-medium"> · Pet-friendly</span>}
        </p>
        <h3 className="font-semibold text-foreground text-[15px] leading-snug line-clamp-2 mb-2">
          {destination}
        </h3>

        {showRating ? (
          <div className="flex items-center gap-1.5 mb-3">
            <Star size={14} className="text-star fill-star" />
            <span className="text-sm font-semibold text-foreground">{rating.toFixed(1)}</span>
            {reviews > 0 && (
              <span className="text-sm text-muted-foreground">({reviews.toLocaleString()})</span>
            )}
          </div>
        ) : (
          <p className="text-xs text-muted-foreground mb-3">New on TripTaptap</p>
        )}

        <div className="flex items-end justify-between gap-2 pt-3 border-t border-border">
          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wide">From</p>
            <p className="text-lg font-bold text-primary">
              {formatPrice(price)}
              <span className="text-sm font-normal text-muted-foreground"> / person</span>
            </p>
          </div>
          <a href={sectionHref(SECTIONS.download)} className="btn-outline text-xs py-2 px-3 shrink-0">
            View in app
          </a>
        </div>
      </div>
    </article>
  )
}

export function TripCardSkeleton() {
  return (
    <article className="bg-card rounded-lg overflow-hidden border border-border flex-shrink-0 w-[280px] md:w-auto animate-pulse">
      <div className="aspect-[4/3] bg-muted" />
      <div className="p-4 space-y-3">
        <div className="h-3 w-20 bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-3/4 bg-muted rounded" />
        <div className="h-3 w-24 bg-muted rounded" />
        <div className="flex justify-between pt-3 border-t border-border">
          <div className="h-8 w-24 bg-muted rounded" />
          <div className="h-8 w-20 bg-muted rounded" />
        </div>
      </div>
    </article>
  )
}

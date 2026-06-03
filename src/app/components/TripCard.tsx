import { Star, CheckCircle2 } from 'lucide-react'
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback'

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

  return (
    <article className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/20 hover:shadow-md transition-shadow flex-shrink-0 w-[280px] md:w-auto">
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
            <CheckCircle2 size={12} className="text-accent" />
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

        <div className="flex items-center gap-1.5 mb-3">
          <Star size={14} className="text-[#e8a317] fill-[#e8a317]" />
          <span className="text-sm font-semibold text-foreground">{rating.toFixed(1)}</span>
          <span className="text-sm text-muted-foreground">({reviews.toLocaleString()})</span>
        </div>

        <div className="flex items-end justify-between gap-2 pt-3 border-t border-border">
          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wide">From</p>
            <p className="text-lg font-bold text-primary">
              ${price}
              <span className="text-sm font-normal text-muted-foreground"> / person</span>
            </p>
          </div>
          <button type="button" className="btn-outline text-xs py-2 px-3 shrink-0">
            View details
          </button>
        </div>
      </div>
    </article>
  )
}

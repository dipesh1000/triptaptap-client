import { ArrowRight, Star } from 'lucide-react'
import adrienImg from '@/imports/pexels-adrien-olichon-1257089-32138450.jpg'
import { SECTIONS, sectionHref } from '@/config/site'
import { useHomeSections } from '@/hooks/useHomeSections'
import { resolveFeaturedBanner } from '@/utils/homeContent'

const FALLBACK = {
  title: 'Patagonia guided treks',
  image: adrienImg,
  label: 'Featured collection',
  description: 'Multi-day adventures with expert guides, small groups, and transparent inclusions.',
  rating: 4.9,
}

export function FeaturedBanner() {
  const { data, loading } = useHomeSections()
  const content = resolveFeaturedBanner(data)

  const title = content?.title ?? FALLBACK.title
  const image = content?.image ?? FALLBACK.image
  const label = content?.label ?? FALLBACK.label
  const description = content?.description ?? FALLBACK.description
  const rating = content?.rating

  return (
    <section className="py-10 md:py-12 bg-background">
      <div className="landing-container">
        <div className="relative rounded-2xl overflow-hidden min-h-[280px] md:min-h-[320px] flex items-end border border-border shadow-sm">
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue/75 to-brand-blue-dark/35" />

          <div className="relative z-10 p-8 md:p-10 max-w-xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-white/90 bg-white/15 rounded px-2 py-1 mb-4">
              {label}
            </span>
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-3 leading-tight">
              {title}
            </h2>
            <p className="text-white/85 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href={sectionHref(SECTIONS.download)} className="btn-primary">
                Book in app
                <ArrowRight size={16} />
              </a>
              {rating ? (
                <span className="flex items-center gap-1.5 text-white/90 text-sm">
                  <Star size={14} className="fill-star text-star" />
                  {rating.toFixed(1)} average rating
                </span>
              ) : loading ? (
                <span className="text-white/70 text-sm">Loading…</span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

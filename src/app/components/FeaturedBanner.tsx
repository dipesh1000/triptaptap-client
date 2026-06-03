import { ArrowRight, Star } from 'lucide-react'
import adrienImg from '@/imports/pexels-adrien-olichon-1257089-32138450.jpg'
import { SECTIONS, sectionHref } from '@/config/site'

export function FeaturedBanner() {
  return (
    <section className="py-10 md:py-12 bg-background">
      <div className="landing-container">
        <div className="relative rounded-xl overflow-hidden min-h-[280px] md:min-h-[320px] flex items-end border border-border">
          <img
            src={adrienImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue/75 to-brand-blue-dark/35" />

          <div className="relative z-10 p-8 md:p-10 max-w-xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-white/90 bg-white/15 rounded px-2 py-1 mb-4">
              Featured collection
            </span>
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-3 leading-tight">
              Patagonia guided treks
            </h2>
            <p className="text-white/85 text-sm md:text-base leading-relaxed mb-6">
              Multi-day adventures with expert guides, small groups, and transparent inclusions.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={sectionHref(SECTIONS.explore)}
                className="btn-primary"
              >
                Browse collection
                <ArrowRight size={16} />
              </a>
              <span className="flex items-center gap-1.5 text-white/90 text-sm">
                <Star size={14} className="fill-star text-star" />
                4.9 average rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

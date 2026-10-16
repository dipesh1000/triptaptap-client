import { useEffect, useState } from 'react'
import {
  Search,
  Heart,
  Globe,
  Menu,
  User,
  Star,
  ArrowRight,
} from 'lucide-react'
import { useAppDownloadGate } from '@/app/components/AppDownloadPrompt'
import { Footer } from '@/app/components/Footer'
import { SITE } from '@/config/site'
import { useLandingCatalog } from '@/hooks/useLandingCatalog'
import { mapDestinationCard, splitActivePackages, type ListingCard } from '@/utils/homeListings'

const HERO_BANNER =
  'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2400&q=80'


function SectionHeader({
  title,
  actionLabel = 'Show all',
}: {
  title: string
  actionLabel?: string
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4 md:mb-8">
      <h2 className="text-[22px] font-semibold leading-tight text-foreground md:text-[28px]">
        {title}
      </h2>
      <a
        href="#explore"
        className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-foreground transition-opacity duration-200 hover:opacity-70"
      >
        {actionLabel}
        <ArrowRight size={16} />
      </a>
    </div>
  )
}

function ListingCardView({
  item,
  liked,
  onToggleLike,
  onOpen,
  aspect = 'square',
}: {
  item: ListingCard
  liked: boolean
  onToggleLike: () => void
  onOpen: () => void
  aspect?: 'square' | 'landscape'
}) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.target !== e.currentTarget) return
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen()
        }
      }}
      className="group cursor-pointer"
    >
      <div
        className={`listing-card-img relative mb-3 border border-slate-100 bg-slate-100 shadow-xs transition-shadow hover:shadow-md ${
          aspect === 'square' ? 'aspect-square' : 'aspect-[4/3]'
        }`}
      >
        <img src={item.img} alt={item.title} loading="lazy" />
        <button
          type="button"
          aria-label={liked ? 'Remove from wishlist' : 'Save to wishlist'}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onToggleLike()
          }}
          className={`absolute right-3 top-3 rounded-full bg-white/80 p-2 backdrop-blur-xs transition-colors hover:text-sky-500 ${
            liked ? 'text-sky-500' : 'text-slate-700'
          }`}
        >
          <Heart size={18} className={liked ? 'fill-current' : ''} strokeWidth={1.75} />
        </button>
      </div>

      <div className="flex items-start justify-between gap-2">
        <h3 className="truncate font-semibold text-slate-900">{item.title}</h3>
        {item.rating > 0 ? (
          <span className="inline-flex shrink-0 items-center gap-1 text-sm text-slate-500">
            <Star size={12} className="fill-slate-900 text-slate-900" />
            {item.rating.toFixed(2)}
          </span>
        ) : null}
      </div>
      <p className="mt-0.5 truncate text-sm text-slate-500">{item.subtitle}</p>
      <p className="mt-1.5">
        <span className="font-semibold text-slate-900">{item.price}</span>
        {item.priceLabel ? <span className="text-xs text-slate-500"> {item.priceLabel}</span> : null}
      </p>
    </article>
  )
}

function ListingSkeletons({ count, aspect }: { count: number; aspect: 'square' | 'landscape' }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`animate-pulse rounded-2xl bg-slate-200/70 ${
            aspect === 'square' ? 'aspect-square' : 'aspect-[4/3]'
          }`}
        />
      ))}
    </>
  )
}

export default function Home() {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set())
  const [activeCategory, setActiveCategory] = useState('')
  const [where, setWhere] = useState('')
  const [when, setWhen] = useState('')
  const [who, setWho] = useState(2)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavSearch, setShowNavSearch] = useState(false)
  const { requestDownload, dialog: downloadDialog } = useAppDownloadGate()
  const { packages, destinations, categories, loading } = useLandingCatalog()
  const destinationCards = destinations.map(mapDestinationCard)
  const { experiences, trips } = splitActivePackages(packages, activeCategory)

  useEffect(() => {
    const el = document.getElementById('hero-search')
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setShowNavSearch(!entry.isIntersecting),
      { rootMargin: '-80px 0px 0px 0px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-[12px]">
        <div className="landing-container relative flex h-20 items-center justify-between gap-4">
          <a href="/" className="shrink-0">
            <img
              src="/triptaptap-logo.png"
              alt="Trip Taptap"
              className="h-10 w-auto object-contain md:h-11"
            />
          </a>

          <button
            type="button"
            onClick={requestDownload}
            className={`search-pill absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-border bg-white py-2 pl-2 pr-2 text-sm transition-all duration-200 md:flex ${
              showNavSearch
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-95 opacity-0'
            }`}
            aria-hidden={!showNavSearch}
            tabIndex={showNavSearch ? 0 : -1}
          >
            <span className="border-r border-border px-4 font-semibold text-foreground">
              {where.trim() || 'Anywhere'}
            </span>
            <span className="border-r border-border px-4 font-semibold text-foreground">
              {when || 'Any week'}
            </span>
            <span className="px-4 text-muted-foreground">
              {who} guest{who === 1 ? '' : 's'}
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white">
              <Search size={14} strokeWidth={2.5} />
            </span>
          </button>

          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href="#host"
              className="hidden rounded-full px-3 py-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-secondary lg:inline-flex"
            >
              Become a host
            </a>
            <button
              type="button"
              className="rounded-full p-2.5 text-foreground transition-colors duration-200 hover:bg-secondary"
              aria-label="Language and currency"
            >
              <Globe size={18} />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full border border-border py-1.5 pl-3 pr-1.5 transition-shadow duration-200 hover:shadow-md"
              aria-label="Account menu"
            >
              <Menu size={16} />
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <User size={16} />
              </span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="landing-container absolute right-6 top-[4.75rem] z-50 w-60 overflow-hidden rounded-xl border border-border bg-white py-2 shadow-xl md:right-10 lg:right-20">
            <a href="#explore" className="block px-4 py-3 text-sm font-semibold hover:bg-secondary">
              Explore trips
            </a>
            <a href="#host" className="block px-4 py-3 text-sm hover:bg-secondary">
              Become a host
            </a>
            <a href="/privacy" className="block px-4 py-3 text-sm hover:bg-secondary">
              Privacy
            </a>
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="block border-t border-border px-4 py-3 text-sm hover:bg-secondary"
            >
              Help & support
            </a>
          </div>
        ) : null}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-stone-50">
        <div className="pointer-events-none relative h-56 sm:h-64 md:absolute md:inset-0 md:h-auto">
          <img
            src={HERO_BANNER}
            alt=""
            className="h-full w-full object-cover object-[center_45%] md:object-[78%_center]"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-stone-50 to-transparent md:hidden" />
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#fafaf9_0%,#fafaf9_30%,rgba(250,250,249,0.92)_42%,rgba(250,250,249,0.28)_58%,rgba(250,250,249,0)_74%)] md:block" />
        </div>

        <div className="landing-container relative pb-8 pt-7 md:flex md:min-h-[460px] md:flex-col md:justify-center md:py-16">
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Find your next trip
            </h1>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-600 md:text-base">
              Book curated experiences and multi-day packages from verified local operators.
            </p>
          </div>

          <div
            id="hero-search"
            className="hero-search mt-8 max-w-2xl xl:max-w-3xl"
            onMouseDownCapture={(e) => e.preventDefault()}
            onClickCapture={(e) => {
              e.preventDefault()
              requestDownload()
            }}
          >
            <label className="hero-search-field cursor-text">
              <span className="text-[11px] font-medium text-slate-500">Where</span>
              <input
                value={where}
                onChange={(e) => setWhere(e.target.value)}
                placeholder="Search destinations"
                className="mt-0.5 w-full min-w-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </label>

            <span className="mx-0.5 h-8 w-px shrink-0 bg-slate-200" aria-hidden />

            <label className="hero-search-field cursor-text">
              <span className="text-[11px] font-medium text-slate-500">When</span>
              <input
                type="date"
                value={when}
                onChange={(e) => setWhen(e.target.value)}
                className="mt-0.5 w-full min-w-0 bg-transparent text-sm text-slate-900 outline-none [color-scheme:light]"
              />
            </label>

            <span className="mx-0.5 hidden h-8 w-px shrink-0 bg-slate-200 sm:block" aria-hidden />

            <div className="hidden min-w-0 flex-1 items-center gap-2 rounded-full px-4 py-2 transition-colors duration-200 hover:bg-slate-50 sm:flex">
              <div className="min-w-0">
                <span className="block text-[11px] font-medium text-slate-500">Who</span>
                <span className="mt-0.5 block truncate text-sm text-slate-900">
                  {who} guest{who === 1 ? '' : 's'}
                </span>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Decrease guests"
                  onClick={() => setWho((n) => Math.max(1, n - 1))}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-sm text-slate-600 transition-colors hover:border-slate-300 hover:bg-white"
                >
                  −
                </button>
                <button
                  type="button"
                  aria-label="Increase guests"
                  onClick={() => setWho((n) => n + 1)}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-sm text-slate-600 transition-colors hover:border-slate-300 hover:bg-white"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              className="ml-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white transition-colors duration-200 hover:bg-sky-600 sm:w-auto sm:gap-2 sm:px-5"
              aria-label="Search"
            >
              <Search size={16} strokeWidth={2.25} />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>
      </section>

      {/* Category tabs — live API categories */}
      {(loading || categories.length > 0) && (
        <div className="sticky top-20 z-40 border-b border-slate-200/80 bg-stone-50/90 backdrop-blur-md">
          <div className="landing-container">
            <div className="scrollbar-hide -mx-1 flex gap-2 overflow-x-auto px-1 py-3">
              {loading && categories.length === 0 ? (
                <div className="flex gap-2 py-0.5">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-8 w-24 shrink-0 animate-pulse rounded-full bg-slate-200/70" />
                  ))}
                </div>
              ) : (
                categories.map((cat) => {
                  const active = activeCategory === cat._id
                  return (
                    <button
                      key={cat._id}
                      type="button"
                      onClick={() => setActiveCategory((current) => (current === cat._id ? '' : cat._id))}
                      className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                        active
                          ? 'bg-sky-500 text-white'
                          : 'text-slate-600 hover:bg-white hover:text-sky-600'
                      }`}
                    >
                      {cat.name}
                    </button>
                  )
                })
              )}
            </div>
          </div>
        </div>
      )}

      <main>
        {/* Popular destinations */}
        <section id="explore" className="landing-section scroll-mt-40">
          <div className="landing-container">
            <SectionHeader title="Popular destinations" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {loading ? (
                <ListingSkeletons count={4} aspect="square" />
              ) : (
                destinationCards.map((item) => (
                  <ListingCardView
                    key={item.id}
                    item={item}
                    liked={wishlist.has(item.id)}
                    onToggleLike={() => toggleWishlist(item.id)}
                    onOpen={requestDownload}
                    aspect="square"
                  />
                ))
              )}
            </div>
            {!loading && destinationCards.length === 0 ? (
              <p className="text-sm text-slate-500">No active destinations right now.</p>
            ) : null}
          </div>
        </section>

        {/* Featured experiences */}
        <section className="landing-section border-t border-border bg-secondary/40">
          <div className="landing-container">
            <SectionHeader title="Featured experiences" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {loading ? (
                <ListingSkeletons count={4} aspect="landscape" />
              ) : (
                experiences.map((item) => (
                  <ListingCardView
                    key={item.id}
                    item={item}
                    liked={wishlist.has(item.id)}
                    onToggleLike={() => toggleWishlist(item.id)}
                    onOpen={requestDownload}
                    aspect="landscape"
                  />
                ))
              )}
            </div>
            {!loading && experiences.length === 0 ? (
              <p className="text-sm text-slate-500">
                {activeCategory ? 'No active trips in this category right now.' : 'No active trips right now.'}
              </p>
            ) : null}
          </div>
        </section>

        {(loading || trips.length > 0) && (
        <section className="landing-section">
          <div className="landing-container">
            <SectionHeader title="Curated trip packages" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {loading ? (
                <ListingSkeletons count={3} aspect="landscape" />
              ) : (
                trips.map((item) => (
                  <ListingCardView
                    key={item.id}
                    item={item}
                    liked={wishlist.has(item.id)}
                    onToggleLike={() => toggleWishlist(item.id)}
                    onOpen={requestDownload}
                    aspect="landscape"
                  />
                ))
              )}
            </div>
          </div>
        </section>
        )}

        {/* Host CTA */}
        <section id="host" className="landing-section border-t border-border bg-secondary">
          <div className="landing-container grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-[28px] font-semibold leading-tight text-foreground md:text-[32px]">
                Host experiences on Trip Taptap
              </h2>
              <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted-foreground">
                List tours and packages, reach travelers across Nepal and beyond, and manage bookings
                from the Trip Taptap app.
              </p>
              <a href={`mailto:${SITE.supportEmail}?subject=Become%20a%20host`} className="btn-primary mt-8">
                Get started
              </a>
            </div>
            <div className="listing-card-img aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1000&h=750&fit=crop&auto=format"
                alt="Host travelers"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {downloadDialog}
    </div>
  )
}

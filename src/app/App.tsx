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
import { Footer } from '@/app/components/Footer'
import { SITE } from '@/config/site'
import { fetchCategories, type SiteCategory } from '@/services/categoryService'

type ListingCard = {
  id: string
  title: string
  location: string
  subtitle: string
  img: string
  rating: number
  reviews: number
  price: string
  priceLabel?: string
}

const HERO_BANNER =
  'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2400&q=80'

const DESTINATIONS: ListingCard[] = [
  {
    id: 'paris',
    title: 'Paris, France',
    location: 'Paris',
    subtitle: 'City walks & local food',
    img: 'https://images.unsplash.com/photo-1583265266785-aab9e443ee68?w=800&h=800&fit=crop&auto=format',
    rating: 4.92,
    reviews: 1840,
    price: '$299',
    priceLabel: 'from',
  },
  {
    id: 'bali',
    title: 'Bali, Indonesia',
    location: 'Bali',
    subtitle: 'Temples & rice terraces',
    img: 'https://images.unsplash.com/photo-1651108066220-f61c22fc281f?w=800&h=800&fit=crop&auto=format',
    rating: 4.88,
    reviews: 2104,
    price: '$349',
    priceLabel: 'from',
  },
  {
    id: 'santorini',
    title: 'Santorini, Greece',
    location: 'Santorini',
    subtitle: 'Sunset viewpoints',
    img: 'https://images.unsplash.com/photo-1656013082096-2ba1c0c0bc10?w=800&h=800&fit=crop&auto=format',
    rating: 4.95,
    reviews: 980,
    price: '$419',
    priceLabel: 'from',
  },
  {
    id: 'tokyo',
    title: 'Tokyo, Japan',
    location: 'Tokyo',
    subtitle: 'Culture & neighborhoods',
    img: 'https://images.unsplash.com/photo-1636311838630-f38d42915aac?w=800&h=800&fit=crop&auto=format',
    rating: 4.9,
    reviews: 1562,
    price: '$389',
    priceLabel: 'from',
  },
]

const EXPERIENCES: ListingCard[] = [
  {
    id: 'santorini-cruise',
    title: 'Santorini sunset sail',
    location: 'Santorini, Greece',
    subtitle: '3 hours · Small group',
    img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop&auto=format',
    rating: 4.9,
    reviews: 2341,
    price: '$149',
    priceLabel: 'person',
  },
  {
    id: 'machu',
    title: 'Machu Picchu sunrise hike',
    location: 'Cusco, Peru',
    subtitle: 'Full day · Guided',
    img: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&h=600&fit=crop&auto=format',
    rating: 4.93,
    reviews: 1876,
    price: '$199',
    priceLabel: 'person',
  },
  {
    id: 'ubud',
    title: 'Ubud jungle wellness',
    location: 'Bali, Indonesia',
    subtitle: 'Half day · Wellness',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop&auto=format',
    rating: 4.85,
    reviews: 1204,
    price: '$89',
    priceLabel: 'person',
  },
  {
    id: 'kyoto',
    title: 'Kyoto temple walk',
    location: 'Kyoto, Japan',
    subtitle: '4 hours · Cultural',
    img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop&auto=format',
    rating: 4.87,
    reviews: 3102,
    price: '$129',
    priceLabel: 'person',
  },
]

const TRIPS: ListingCard[] = [
  {
    id: 'india',
    title: 'Golden Triangle',
    location: 'India',
    subtitle: '8 days · Flights & hotels',
    img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop&auto=format',
    rating: 4.8,
    reviews: 512,
    price: '$1,299',
    priceLabel: 'trip',
  },
  {
    id: 'greece',
    title: 'Greek Islands Odyssey',
    location: 'Greece',
    subtitle: '10 days · Ferry included',
    img: 'https://images.unsplash.com/photo-1598821144367-db395349afa3?w=800&h=600&fit=crop&auto=format',
    rating: 4.9,
    reviews: 744,
    price: '$2,450',
    priceLabel: 'trip',
  },
  {
    id: 'japan',
    title: 'Cherry Blossom Trail',
    location: 'Japan',
    subtitle: '12 days · Rail pass',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop&auto=format',
    rating: 4.91,
    reviews: 388,
    price: '$3,199',
    priceLabel: 'trip',
  },
]

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
  aspect = 'square',
}: {
  item: ListingCard
  liked: boolean
  onToggleLike: () => void
  aspect?: 'square' | 'landscape'
}) {
  return (
    <article className="group cursor-pointer">
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
        <span className="inline-flex shrink-0 items-center gap-1 text-sm text-slate-500">
          <Star size={12} className="fill-slate-900 text-slate-900" />
          {item.rating.toFixed(2)}
        </span>
      </div>
      <p className="mt-0.5 truncate text-sm text-slate-500">{item.subtitle}</p>
      <p className="mt-1.5">
        <span className="font-semibold text-slate-900">{item.price}</span>
        {item.priceLabel ? <span className="text-xs text-slate-500"> {item.priceLabel}</span> : null}
      </p>
    </article>
  )
}

export default function Home() {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set())
  const [categories, setCategories] = useState<SiteCategory[]>([])
  const [categoriesLoading, setCategoriesLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('')
  const [where, setWhere] = useState('')
  const [when, setWhen] = useState('')
  const [who, setWho] = useState(2)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavSearch, setShowNavSearch] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setCategoriesLoading(true)
    fetchCategories(controller.signal)
      .then((list) => {
        setCategories(list)
        if (list[0]?._id) setActiveCategory(list[0]._id)
      })
      .catch(() => setCategories([]))
      .finally(() => setCategoriesLoading(false))
    return () => controller.abort()
  }, [])

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
            onClick={() => document.getElementById('hero-search')?.scrollIntoView({ behavior: 'smooth' })}
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
            <a href="/privacy-policy" className="block px-4 py-3 text-sm hover:bg-secondary">
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

          <div id="hero-search" className="hero-search mt-8 max-w-2xl xl:max-w-3xl">
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

            <a
              href="#explore"
              className="ml-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white transition-colors duration-200 hover:bg-sky-600 sm:w-auto sm:gap-2 sm:px-5"
              aria-label="Search"
            >
              <Search size={16} strokeWidth={2.25} />
              <span className="hidden sm:inline">Search</span>
            </a>
          </div>
        </div>
      </section>

      {/* Category tabs — live API categories */}
      {(categoriesLoading || categories.length > 0) && (
        <div className="sticky top-20 z-40 border-b border-slate-200/80 bg-stone-50/90 backdrop-blur-md">
          <div className="landing-container">
            <div className="scrollbar-hide -mx-1 flex gap-2 overflow-x-auto px-1 py-3">
              {categoriesLoading && categories.length === 0 ? (
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
                      onClick={() => setActiveCategory(cat._id)}
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
              {DESTINATIONS.map((item) => (
                <ListingCardView
                  key={item.id}
                  item={item}
                  liked={wishlist.has(item.id)}
                  onToggleLike={() => toggleWishlist(item.id)}
                  aspect="square"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured experiences */}
        <section className="landing-section border-t border-border bg-secondary/40">
          <div className="landing-container">
            <SectionHeader title="Featured experiences" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {EXPERIENCES.map((item) => (
                <ListingCardView
                  key={item.id}
                  item={item}
                  liked={wishlist.has(item.id)}
                  onToggleLike={() => toggleWishlist(item.id)}
                  aspect="landscape"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Curated trips */}
        <section className="landing-section">
          <div className="landing-container">
            <SectionHeader title="Curated trip packages" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {TRIPS.map((item) => (
                <ListingCardView
                  key={item.id}
                  item={item}
                  liked={wishlist.has(item.id)}
                  onToggleLike={() => toggleWishlist(item.id)}
                  aspect="landscape"
                />
              ))}
            </div>
          </div>
        </section>

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
    </div>
  )
}

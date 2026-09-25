import { useState } from "react";
import {
  Search, MapPin, Users, Heart, ShoppingCart,
  Globe, User, Star, ArrowRight, ChevronDown,
  Phone, Mail, Instagram, Twitter,
  Facebook, Youtube, Shield, Clock, Award, ChevronRight
} from "lucide-react";

import { LiaMobileAltSolid } from "react-icons/lia";
const destinations = [
  {
    city: "Paris",
    country: "France",
    img: "https://images.unsplash.com/photo-1583265266785-aab9e443ee68?w=500&h=380&fit=crop&auto=format",
    tag: "Most Popular",
    price: "$299",
  },
  {
    city: "Bali",
    country: "Indonesia",
    img: "https://images.unsplash.com/photo-1651108066220-f61c22fc281f?w=500&h=380&fit=crop&auto=format",
    tag: "Trending",
    price: "$349",
  },
  {
    city: "New York",
    country: "USA",
    img: "https://images.unsplash.com/photo-1623784373624-26fb62d3076d?w=500&h=380&fit=crop&auto=format",
    tag: "City Break",
    price: "$259",
  },
  {
    city: "Santorini",
    country: "Greece",
    img: "https://images.unsplash.com/photo-1656013082096-2ba1c0c0bc10?w=500&h=380&fit=crop&auto=format",
    tag: "Romantic",
    price: "$419",
  },
  {
    city: "Tokyo",
    country: "Japan",
    img: "https://images.unsplash.com/photo-1636311838630-f38d42915aac?w=500&h=380&fit=crop&auto=format",
    tag: "Cultural",
    price: "$389",
  },
  {
    city: "Maldives",
    country: "Indian Ocean",
    img: "https://images.unsplash.com/photo-1594661745200-810105bcf054?w=500&h=380&fit=crop&auto=format",
    tag: "Luxury",
    price: "$599",
  },
];

const hotels = [
  {
    name: "Santorini Sunset Cruise'",
    location: "Maldives",
    img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=450&fit=crop&auto=format",
    rating: 4.9,
    reviews: 2341,
    price: "149",
    perNight: true,
    tags: ["Infinity Pool", "Private Beach", "Spa"],
  },
  {
    name: "Machu Picchu Sunrise Hike'",
    location: "Peru",
    img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&h=450&fit=crop&auto=format",
    rating: 4.9,
    reviews: 2341,
    price: "199",
    perNight: true,
    tags: ["Infinity Pool", "Private Beach", "Spa"],
  },
  {
    name: "Ubud Jungle Wellness Retreat",
    location: "Indonesia",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=450&fit=crop&auto=format",
    rating: 4.8,
    reviews: 1876,
    price: "89",
    perNight: true,
    tags: ["City View", "Breakfast", "Concierge"],
  },
  {
    name: "Ancient Kyoto Temple Walk",
    location: "Japan",
    img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=450&fit=crop&auto=format",
    rating: 4.7,
    reviews: 3102,
    price: "129",
    perNight: true,
    tags: ["Ocean View", "Yoga", "Farm-to-Table"],
  },
];

const experiences = [
  { icon: "🚢", label: "Cruises", count: "840+" },
  { icon: "🏔️", label: "Adventures", count: "1,200+" },
  { icon: "🍷", label: "Food & Wine", count: "650+" },
  { icon: "🎭", label: "Culture", count: "920+" },
  { icon: "🧘", label: "Wellness", count: "430+" },
  { icon: "🤿", label: "Watersports", count: "560+" },
];

const trips = [
  {
    title: "Golden Triangle India",
    duration: "8 Days / 7 Nights",
    img: "https://images.unsplash.com/photo-1779074470138-2b2911875007?w=600&h=380&fit=crop&auto=format",
    rating: 4.8,
    reviews: 512,
    includes: ["Flights", "Hotels", "Tours"],
    price: "$1,299",
    originalPrice: "$1,650",
    discount: "21% OFF",
  },
  {
    title: "Golden Triangle Indias",
    duration: "8 Days / 7 Nights",
    img: "https://images.unsplash.com/photo-1779074470138-2b2911875007?w=600&h=380&fit=crop&auto=format",
    rating: 4.8,
    reviews: 512,
    includes: ["Flights", "Hotels", "Tours"],
    price: "$1,299",
    originalPrice: "$1,650",
    discount: "21% OFF",
  },
  {
    title: "Greek Islands Odyssey",
    duration: "10 Days / 9 Nights",
    img: "https://images.unsplash.com/photo-1598821144367-db395349afa3?w=600&h=380&fit=crop&auto=format",
    rating: 4.9,
    reviews: 744,
    includes: ["Flights", "Hotels", "Ferry"],
    price: "$2,450",
    originalPrice: "$2,990",
    discount: "18% OFF",
  },
  {
    title: "Japan Cherry Blossom Trail",
    duration: "12 Days / 11 Nights",
    img: "https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?w=600&h=380&fit=crop&auto=format",
    rating: 4.9,
    reviews: 388,
    includes: ["Flights", "Hotels", "Rail Pass"],
    price: "$3,199",
    originalPrice: "$3,800",
    discount: "16% OFF",
  },
];

const navLinks = ["Hotels", "Flights", "Trips", "Experiences", "Deals"];

export default function Home() {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleWishlist = (name: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ── Navbar ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <img
              src="/triptaptap-logo.png"
              alt="TripTaptap"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-secondary rounded-lg transition-all"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-secondary rounded-lg transition-all">
              <Globe className="w-4 h-4" />
              <span className="hidden md:inline">EN / USD</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <button className="relative p-2 text-foreground/70 hover:text-primary hover:bg-secondary rounded-lg transition-all">
              <Heart className="w-5 h-5" />
              {wishlist.size > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.size}
                </span>
              )}
            </button>
            <button className="p-2 text-foreground/70 hover:text-primary hover:bg-secondary rounded-lg transition-all">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-all">
              <LiaMobileAltSolid className="w-4 h-4" />
              Get app
            </button>
            <button
              className="lg:hidden p-2 text-foreground/70"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className="h-0.5 bg-current rounded" />
                <span className="h-0.5 bg-current rounded w-3/4" />
                <span className="h-0.5 bg-current rounded" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="px-3 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-secondary rounded-lg transition-all"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center pt-16">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1732808460864-b8e5eb489a52?w=1920&h=1080&fit=crop&auto=format"
            alt="Beautiful travel destination at sunset"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="w-full max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a3a6b]/60 backdrop-blur-sm border border-[#4a7abf]/40 rounded-full text-blue-100 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#f26522] rounded-full animate-pulse" />
              Over 50,000 experiences worldwide
            </div>

            {/* Heading */}
            <h1
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Discover &amp; book<br />
              <span className="italic" style={{ color: "#f9a87a" }}>things to do</span>
            </h1>
            <p className="text-blue-100/80 text-lg mb-10">
              Hotels, flights, and curated trips to the world&apos;s most breathtaking destinations.
            </p>

            {/* Unified pill search bar */}
            <div className="flex items-center bg-white/95 backdrop-blur-md rounded-full shadow-2xl shadow-[#1a3a6b]/30 border border-[#4a7abf]/20 overflow-hidden px-2 py-2 gap-1">
              {/* Location */}
              <div className="flex items-center gap-2 flex-1 min-w-0 px-4">
                <Search className="w-4 h-4 text-[#1a3a6b]/50 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search places or activities"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="flex-1 min-w-0 bg-transparent text-sm text-[#1a3a6b] font-medium placeholder:text-[#1a3a6b]/40 outline-none"
                />
              </div>

              {/* Divider */}
              <div className="w-px h-7 bg-[#1a3a6b]/15 flex-shrink-0" />

              {/* Date */}
              <div className="relative flex items-center gap-1.5 px-4 cursor-pointer">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="text-sm font-medium text-[#1a3a6b] bg-transparent outline-none cursor-pointer w-32"
                  style={{ colorScheme: "light" }}
                />
              </div>

              {/* Divider */}
              <div className="w-px h-7 bg-[#1a3a6b]/15 flex-shrink-0" />

              {/* Guests */}
              <div className="relative flex items-center gap-1.5 px-4">
                <Users className="w-4 h-4 text-[#1a3a6b]/50 flex-shrink-0" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-[#1a3a6b] font-medium outline-none pr-5 cursor-pointer whitespace-nowrap"
                >
                  <option>1 participant</option>
                  <option>2 participants</option>
                  <option>3 participants</option>
                  <option>4+ participants</option>
                </select>
                <ChevronDown className="absolute right-3 w-4 h-4 text-[#1a3a6b]/40 pointer-events-none" />
              </div>

              {/* Search button */}
              <button className="flex-shrink-0 px-7 py-3 bg-[#f26522] text-white text-sm font-bold rounded-full hover:bg-[#d4551a] transition-colors active:scale-95 shadow-lg shadow-[#f26522]/40">
                Search
              </button>
            </div>

            {/* Suggestion chip */}
            <div className="mt-6 flex flex-col items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#1a3a6b]/50 backdrop-blur-sm rounded-full border border-[#4a7abf]/35 text-blue-100 text-sm font-semibold">
                <MapPin className="w-4 h-4 text-[#f26522]" />
                Explore top sights and local spots
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-1.5 rounded-full bg-[#f26522]" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex items-center justify-center gap-6 text-blue-100/70 text-sm flex-wrap">
              <div className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-[#f26522]" /> Free cancellation</div>
              <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#f26522]" /> 24/7 support</div>
              <div className="flex items-center gap-1.5"><Award className="w-4 h-4 text-[#f26522]" /> Best price guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "2M+", label: "Happy Travelers" },
              { value: "190+", label: "Countries Covered" },
              { value: "50K+", label: "Hotels & Resorts" },
              { value: "4.9★", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-bold text-orange-200 mb-1"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Destinations ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              Explore the World
            </p>
            <h2
              className="text-4xl font-bold text-foreground"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Popular Destinations
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            View all <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {destinations.map((dest) => (
            <a
              key={dest.city}
              href="#"
              className="group relative rounded-2xl overflow-hidden cursor-pointer block"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={dest.img}
                alt={`${dest.city}, ${dest.country}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-accent/90 text-accent-foreground text-[10px] font-semibold rounded-full">
                  {dest.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="text-white font-semibold text-sm leading-tight">{dest.city}</div>
                <div className="text-white/70 text-xs">{dest.country}</div>
                <div className="text-orange-400 text-xs font-medium mt-1">From {dest.price}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Explore by Type ── */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2 text-center">
            What moves you?
          </p>
          <h2
            className="text-4xl font-bold text-center text-foreground mb-10"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Browse by Experience
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {experiences.map((exp) => (
              <button
                key={exp.label}
                className="group flex flex-col items-center gap-3 p-5 bg-white rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-sm hover:shadow-lg"
              >
                <span className="text-3xl">{exp.icon}</span>
                <span className="font-semibold text-sm text-foreground group-hover:text-primary-foreground transition-colors">
                  {exp.label}
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">
                  {exp.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Hotels ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              Where to Stay
            </p>
            <h2
              className="text-4xl font-bold text-foreground"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Featured Destinations
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            All hotels <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="relative overflow-hidden" style={{ height: 220 }}>
                <img
                  src={hotel.img}
                  alt={hotel.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => toggleWishlist(hotel.name)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      wishlist.has(hotel.name) ? "fill-accent text-accent" : "text-foreground/60"
                    }`}
                  />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground leading-tight text-[15px]">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1 text-muted-foreground text-sm">
                      <MapPin className="w-3 h-3" />
                      {hotel.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(hotel.rating) ? "fill-orange-400 text-orange-400" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{hotel.rating}</span>
                  <span className="text-sm text-muted-foreground">({hotel.reviews.toLocaleString()})</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {hotel.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span
                      className="text-xl font-bold text-foreground"
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      {hotel.price}
                    </span>
                    <span className="text-sm text-muted-foreground"> / night</span>
                  </div>
                  <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:bg-primary/90 transition-all">
                    View in app
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Trip Packages ── */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
                All-Inclusive
              </p>
              <h2
                className="text-4xl font-bold text-foreground"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Curated Trip Packages
              </h2>
            </div>
            <a
              href="#"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              All packages <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {trips.map((trip) => (
              <div
                key={trip.title}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="relative overflow-hidden" style={{ height: 200 }}>
                  <img
                    src={trip.img}
                    alt={trip.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                      {trip.discount}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleWishlist(trip.title)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow hover:scale-110 transition-transform"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        wishlist.has(trip.title) ? "fill-accent text-accent" : "text-foreground/60"
                      }`}
                    />
                  </button>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1 text-muted-foreground text-xs mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    {trip.duration}
                  </div>
                  <h3 className="font-semibold text-foreground text-[15px] mb-2">{trip.title}</h3>

                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(trip.rating) ? "fill-orange-400 text-orange-400" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-foreground">{trip.rating}</span>
                    <span className="text-xs text-muted-foreground">({trip.reviews})</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {trip.includes.map((inc) => (
                      <span key={inc} className="px-2.5 py-1 bg-primary/8 text-primary text-xs rounded-full font-medium border border-primary/15">
                        ✓ {inc}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span
                        className="text-xl font-bold text-foreground"
                        style={{ fontFamily: "'Fraunces', serif" }}
                      >
                        {trip.price}
                      </span>
                      <span className="ml-2 text-sm text-muted-foreground line-through">
                        {trip.originalPrice}
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-xl hover:bg-accent/90 transition-all">
                      View Trip in app
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Why TripTaptap
            </p>
            <h2
              className="text-4xl font-bold text-foreground mb-6 leading-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Travel smarter,<br />
              <span className="italic">not harder.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We curate only the finest hotels, most seamless flights, and unforgettable experiences — backed by real travelers and expert recommendations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Shield, title: "Secure Booking", desc: "256-bit SSL encryption on every transaction." },
                { icon: Award, title: "Best Price Guarantee", desc: "Find it cheaper? We'll match and refund the difference." },
                { icon: Clock, title: "24/7 Human Support", desc: "Real travel experts available any hour of the day." },
                { icon: Heart, title: "Handpicked Quality", desc: "Every property verified by our team personally." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm mb-1">{title}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all">
              Start Planning <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/3" }}>
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop&auto=format"
                alt="Luxury resort experience with overwater bungalows"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Floating review card */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-xl border border-border max-w-[200px]">
              <div className="flex items-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-xs text-foreground/80 leading-relaxed">
                &quot;Absolutely seamless experience. Booked our honeymoon in minutes!&quot;
              </p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                  S
                </div>
                <span className="text-xs font-medium text-foreground">Sofia M.</span>
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-2xl p-4 shadow-xl text-center">
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                4.9
              </div>
              <div className="text-xs opacity-80">App Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1609971757431-439cf7b4141b?w=1200&h=400&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Stay Inspired
          </p>
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Get deals before<br />
            <span className="italic">everyone else.</span>
          </h2>
          <p className="text-white/70 mb-8">
            Join 500,000+ travelers who get exclusive offers, destination guides, and early-bird deals straight to their inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white text-foreground placeholder:text-muted-foreground outline-none text-sm"
              />
            </div>
            <button className="px-6 py-3.5 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent/90 transition-all whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
          <p className="text-white/40 text-xs mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4">
                <img
                  src="/triptaptap-logo.png"
                  alt="TripTaptap"
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Your passport to the world&apos;s most extraordinary travel experiences.
              </p>
              <div className="flex gap-3">
                {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent transition-colors flex items-center justify-center"
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              {
                title: "Explore",
                links: ["Hotels", "Flights", "Car Rentals", "Cruises", "Airport Transfers"],
              },
              {
                title: "Destinations",
                links: ["Europe", "Asia Pacific", "Americas", "Middle East", "Africa"],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Press", "Blog", "Affiliates"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact Us", "Cancellations", "Privacy Policy", "Terms"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wide">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href={link === "Privacy Policy" ? "/privacy-policy" : "#"}
                        className="text-white/50 text-sm hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-white/40">
              <a href="tel:+9779863542297" className="flex items-center gap-2 hover:text-white/70 transition-colors">
                <Phone className="w-4 h-4" />
                +977 9863542297
              </a>
              <a href="mailto:Info@triptaptap.com" className="flex items-center gap-2 hover:text-white/70 transition-colors">
                <Mail className="w-4 h-4" />
                Info@triptaptap.com
              </a>
              <span className="text-white/35 text-xs sm:text-sm">
                3, Changunarayan Municipality, Bagmati, Nepal
              </span>
            </div>
            <p className="text-white/30 text-xs text-center sm:text-right">
              © {new Date().getFullYear()} TRIP TAPTAP PVT LTD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

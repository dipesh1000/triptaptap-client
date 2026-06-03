import { useState } from 'react'
import { Menu, X, Compass, Map, Star } from 'lucide-react'
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback'
import logo from '@/imports/logo.png'
import { SECTIONS, sectionHref } from '@/config/site'

const NAV_LINKS = [
  { label: 'Explore', href: sectionHref(SECTIONS.explore), icon: Compass },
  { label: 'Experiences', href: sectionHref(SECTIONS.trips), icon: Map },
  { label: 'Reviews', href: sectionHref(SECTIONS.reviews), icon: Star },
] as const

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="landing-container h-14 md:h-16 flex items-center justify-between gap-4">
          <a href={sectionHref(SECTIONS.top)} className="flex-shrink-0">
            <ImageWithFallback src={logo} alt="TripTaptap" className="h-7 md:h-8 w-auto object-contain" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus-visible:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 -mr-1 text-foreground"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[min(300px,85vw)] bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <ImageWithFallback src={logo} alt="TripTaptap" className="h-7 w-auto" />
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 p-3 flex flex-col gap-0.5">
              {NAV_LINKS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors"
                >
                  <Icon size={18} className="text-muted-foreground" />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

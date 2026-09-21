import { useState } from 'react'
import { Menu, X, Compass, Map, Star, Smartphone } from 'lucide-react'
import { Logo } from '@/app/components/Logo'
import { SECTIONS, appDownloadHref } from '@/config/site'

const NAV_LINKS = [
  { label: 'Explore', href: `/#${SECTIONS.explore}`, icon: Compass },
  { label: 'Experiences', href: `/#${SECTIONS.trips}`, icon: Map },
  { label: 'Reviews', href: `/#${SECTIONS.reviews}`, icon: Star },
] as const

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="landing-header fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="landing-container h-full flex items-center justify-between gap-4">
          <a
            href="/"
            className="flex-shrink-0 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <Logo size="lg" />
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="landing-nav-link px-3 py-2 text-sm font-semibold text-foreground/75 hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
            <a href={appDownloadHref('ios')} className="btn-primary ml-3 text-sm py-2 px-4">
              <Smartphone size={16} />
              Get the app
            </a>
          </nav>

          <button
            className="md:hidden p-2 -mr-1 text-foreground rounded-lg hover:bg-muted"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[min(300px,85vw)] bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Logo size="md" />
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
              <a
                href={appDownloadHref('ios')}
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-3 mx-1 justify-center"
              >
                <Smartphone size={16} />
                Get the app
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

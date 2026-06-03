import { useState } from 'react'
import { Compass, Map, Star, Smartphone } from 'lucide-react'
import { SECTIONS, sectionHref } from '@/config/site'

const TABS = [
  { id: SECTIONS.explore, label: 'Explore', icon: Compass, href: sectionHref(SECTIONS.explore) },
  { id: SECTIONS.trips, label: 'Trips', icon: Map, href: sectionHref(SECTIONS.trips) },
  { id: SECTIONS.reviews, label: 'Reviews', icon: Star, href: sectionHref(SECTIONS.reviews) },
  { id: SECTIONS.download, label: 'App', icon: Smartphone, href: sectionHref(SECTIONS.download) },
]

export function MobileBottomNav() {
  const [active, setActive] = useState(SECTIONS.explore)

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-card border-t border-border"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      aria-label="Sections"
    >
      <div className="flex items-stretch justify-around">
        {TABS.map(({ id, label, icon: Icon, href }) => {
          const isActive = active === id
          return (
            <a
              key={id}
              href={href}
              onClick={() => setActive(id)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 transition-colors ${
                isActive ? 'text-cta' : 'text-muted-foreground'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon size={20} strokeWidth={isActive ? 2.25 : 1.75} />
              <span className="text-[10px] font-medium">{label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}

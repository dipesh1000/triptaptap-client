import {
  Waves,
  Mountain,
  Landmark,
  Building2,
  Compass,
  Dog,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const CATEGORIES: { id: string; label: string; count: string; icon: LucideIcon }[] = [
  { id: 'beach', label: 'Beach & coast', count: 'Day trips & cruises', icon: Waves },
  { id: 'mountain', label: 'Mountains', count: 'Hikes & treks', icon: Mountain },
  { id: 'cultural', label: 'Culture & history', count: 'Guided tours', icon: Landmark },
  { id: 'city', label: 'City experiences', count: 'Food & sights', icon: Building2 },
  { id: 'adventure', label: 'Adventure', count: 'Outdoor activities', icon: Compass },
  { id: 'pet', label: 'Pet-friendly', count: 'Travel with pets', icon: Dog },
]

export function Categories() {
  return (
    <section id="explore" className="landing-section bg-card scroll-mt-16">
      <div className="landing-container">
        <SectionHeading
          title="Explore by interest"
          description="Browse categories to find the right experience for your trip."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {CATEGORIES.map(({ id, label, count, icon: Icon }) => (
            <button
              key={id}
              type="button"
              className="flex flex-col items-start gap-3 p-4 md:p-5 rounded-lg border border-border bg-background text-left hover:border-primary/25 hover:shadow-sm transition-all"
            >
              <span className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Icon size={20} className="text-primary" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">{label}</span>
                <span className="block text-xs text-muted-foreground mt-1">{count}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

import { appDownloadHref, isExternalAppLink } from '@/config/site'

type Store = 'ios' | 'android'

const BADGES: Record<Store, { label: string; sub: string }> = {
  ios: { label: 'App Store', sub: 'Download on the' },
  android: { label: 'Google Play', sub: 'Get it on' },
}

interface AppStoreBadgeProps {
  store: Store
  className?: string
}

export function AppStoreBadge({ store, className = '' }: AppStoreBadgeProps) {
  const { label, sub } = BADGES[store]
  const href = appDownloadHref(store)
  const external = isExternalAppLink(href)

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg px-4 py-2.5 transition-colors w-44 ${className}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded bg-white/15 text-lg font-semibold text-white">
        {store === 'ios' ? '' : '▶'}
      </span>
      <span className="text-left">
        <span className="block text-[10px] text-white/55 leading-none">{sub}</span>
        <span className="block text-sm font-semibold text-white leading-tight mt-0.5">{label}</span>
      </span>
    </a>
  )
}

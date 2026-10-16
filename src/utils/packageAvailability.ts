import type { HomePackage } from '@/types/package'

function isPast(value?: string) {
  if (!value) return false
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return false
  const end = new Date(date)
  end.setHours(23, 59, 59, 999)
  return Date.now() > end.getTime()
}

export function categoryIdsOf(pkg: HomePackage) {
  return (pkg.category ?? [])
    .map((entry) => (typeof entry === 'string' ? entry : entry?._id))
    .filter((id): id is string => Boolean(id))
}

/** Drop closed, ended, sold-out, or out-of-season packages. */
export function isCurrentOffering(pkg: HomePackage) {
  if (!pkg._id || !pkg.title || !pkg.coverImage) return false
  if (isPast(pkg.bookCloseDate) || isPast(pkg.tripPlanner?.endDate)) return false

  const capacity = Number(pkg.availability?.capacity ?? 0)
  const booked = Number(pkg.availability?.booked ?? 0)
  if (capacity > 0 && booked >= capacity) return false

  const seasonStart = pkg.availability?.date
  if (seasonStart && isPast(seasonStart) && !pkg.tripPlanner?.endDate && !pkg.bookCloseDate) {
    return false
  }

  return true
}

export function dedupePackages(list: HomePackage[]) {
  const seen = new Set<string>()
  return list.filter((pkg) => {
    if (!isCurrentOffering(pkg) || seen.has(pkg._id)) return false
    seen.add(pkg._id)
    return true
  })
}

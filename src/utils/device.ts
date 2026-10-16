export type DeviceKind = 'ios' | 'android' | 'desktop'

export function detectDevice(): DeviceKind {
  if (typeof navigator === 'undefined') return 'desktop'

  const ua = navigator.userAgent || ''
  const iPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1

  if (/iPad|iPhone|iPod/.test(ua) || iPadOS) return 'ios'
  if (/Android/i.test(ua)) return 'android'
  return 'desktop'
}

import { useCallback, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog'
import { APP_STORE_URL, PLAY_STORE_URL } from '@/config/site'
import { detectDevice } from '@/utils/device'

const STORES = [
  {
    id: 'ios',
    name: 'App Store',
    sub: 'Download on the',
    href: APP_STORE_URL,
    qr: '/app-store-qr.svg',
    icon: '/app-store.png',
  },
  {
    id: 'android',
    name: 'Google Play',
    sub: 'Get it on',
    href: PLAY_STORE_URL,
    qr: '/play-store-qr.svg',
    icon: '/play-store.png',
  },
] as const

export function useAppDownloadGate() {
  const [open, setOpen] = useState(false)

  const requestDownload = useCallback(() => {
    const device = detectDevice()
    if (device === 'ios') {
      window.location.assign(APP_STORE_URL)
      return
    }
    if (device === 'android') {
      window.location.assign(PLAY_STORE_URL)
      return
    }
    setOpen(true)
  }, [])

  const dialog = (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="gap-6 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get the Trip Taptap app</DialogTitle>
          <DialogDescription>
            Browse packages, search trips, and book from the app. Scan a code or pick your store.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4">
          {STORES.map((store) => (
            <div key={store.id} className="flex flex-col items-center gap-3 text-center">
              <img
                src={store.qr}
                alt={`QR code for the ${store.name}`}
                width={140}
                height={140}
                className="h-[140px] w-[140px] rounded-xl border border-border bg-white p-2"
              />
              <a
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center gap-2.5 rounded-lg border border-border bg-slate-900 px-3 py-2 text-left text-white transition-colors hover:bg-slate-800"
              >
                <img src={store.icon} alt="" width={28} height={28} className="h-7 w-7 shrink-0 rounded-md" />
                <span>
                  <span className="block text-[10px] leading-none text-white/60">{store.sub}</span>
                  <span className="mt-0.5 block text-xs font-semibold leading-tight">{store.name}</span>
                </span>
              </a>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )

  return { requestDownload, dialog }
}

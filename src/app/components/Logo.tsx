const LOGO_SRC = '/triptaptap-logo.png'

type LogoSize = 'sm' | 'md' | 'lg'

const HEIGHT: Record<LogoSize, string> = {
  sm: 'h-9',
  md: 'h-11',
  lg: 'h-12 md:h-14',
}

interface LogoProps {
  size?: LogoSize
  className?: string
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  return (
    <img
      src={LOGO_SRC}
      alt="TripTaptap"
      className={`${HEIGHT[size]} w-auto object-contain object-left ${className}`}
      width={195}
      height={160}
      decoding="async"
    />
  )
}

export const LOGO_PATH = LOGO_SRC

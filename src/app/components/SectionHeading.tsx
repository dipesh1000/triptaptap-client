interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  title,
  description,
  className = '',
  align = 'left',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const accentClass = align === 'center' ? 'mx-auto' : ''

  return (
    <div className={`max-w-2xl mb-8 md:mb-10 ${alignClass} ${className}`}>
      <span className={`block w-10 h-1 rounded-full bg-cta mb-4 ${accentClass}`} aria-hidden />
      <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{title}</h2>
      {description && (
        <p className="mt-2 text-muted-foreground text-base leading-relaxed">{description}</p>
      )}
    </div>
  )
}

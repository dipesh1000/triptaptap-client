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

  return (
    <div className={`max-w-2xl mb-8 md:mb-10 ${alignClass} ${className}`}>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">{title}</h2>
      {description && (
        <p className="mt-2 text-muted-foreground text-base leading-relaxed">{description}</p>
      )}
    </div>
  )
}

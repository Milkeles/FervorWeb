interface LogoProps {
  className?: string
  imageClassName?: string
  textClassName?: string
}

export function Logo({ className, imageClassName, textClassName }: Readonly<LogoProps>) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className ?? ''}`}>
      <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="" aria-hidden="true" className={`h-8 w-8 ${imageClassName ?? ''}`} />
      <span className={`text-sm font-bold tracking-[0.2em] uppercase text-foreground font-body ${textClassName ?? ''}`}>
        FervorWeb
      </span>
    </div>
  )
}
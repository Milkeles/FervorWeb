import { type ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  children?: ReactNode
}

export function Section({ id, eyebrow, title, description, children }: Readonly<SectionProps>) {
  return (
    <section id={id} className="py-32 px-12 md:px-18 lg:px-26 border-t border-border">
      <p className="text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground mb-6">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8">
        {title}
      </h2>
      {description && (
        <p className="pb-16 text-lg text-muted-foreground">
          {description}
        </p>
      )}
      {children}
    </section>
  )
}
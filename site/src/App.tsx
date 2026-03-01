import { useState, useEffect } from 'react'

function App() {
  const [dark, setDark] = useState(true)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`min-h-screen bg-background text-foreground font-sans transition-colors duration-500`}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-md bg-background/80 border-b border-border">
        <span className="text-sm font-bold tracking-[0.3em] uppercase text-primary">
          Hristo's site
        </span>

        <button
          onClick={() => setDark(!dark)}
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-200"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 pb-16 relative overflow-hidden">

        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Accent blob */}
        <div className="absolute top-1/3 right-0 w-125 h-125 rounded-full opacity-10 dark:opacity-[0.07] blur-[120px] bg-primary pointer-events-none" />

        <div
          className="relative max-w-5xl transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground mb-8">
            Performance . Conversion . Speed
          </p>

          <h1
            className="text-[clamp(3rem,9vw,8rem)] font-black leading-[0.95] tracking-tight mb-10"
            style={{ fontFamily: "'Arial', sans-serif" }}
          >
            Hello world!
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed transition-all duration-700 delay-100"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', fontFamily: "'Exo 2', sans-serif" }}
          >
            A website for Web Design Class made with Vite, shadcn, tailwind, and typescript.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)' }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold tracking-wide text-sm uppercase rounded-sm hover:opacity-90 transition-opacity"
            >
              Primary CTA
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#hero"
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-bold tracking-wide text-sm uppercase rounded-sm hover:bg-muted transition-colors"
            >
              Secondary CTA
            </a>
          </div>
        </div>

        {/* Stat bar */}
<div
  className="relative mt-24 overflow-hidden transition-all duration-700 delay-300"
  style={{ opacity: visible ? 1 : 0 }}
>
  {/* Header for metrics - now inside the container, above the grid */}
  <div className=" px-6 py-4">
    <p
      className="text-lg md:text-xl text-muted-foreground leading-relaxed"
      style={{ fontFamily: "'Exo 2', sans-serif" }}
    >
      Some metrics:
    </p>
  </div>
  
  <div className="grid grid-cols-3 gap-px bg-border max-w-2xl border border-border rounded-sm">
    {[
      { value: '< 1s', label: 'Load time' },
      { value: '98+', label: 'Lighthouse score' },
      { value: '3×', label: 'Avg. conversion lift' },
    ].map(({ value, label }) => (
      <div key={label} className="flex flex-col items-center justify-center py-6 bg-background text-center px-4">
        <span className="text-2xl font-black tracking-tight" style={{ fontFamily: "'Russo One', 'Arial Black', sans-serif" }}>{value}</span>
        <span className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{label}</span>
      </div>
    ))}
  </div>
</div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 md:px-16 lg:px-24 py-32 border-t border-border">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground mb-6">Contact</p>
          <h2
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
            style={{ fontFamily: "'Russo One', 'Arial Black', sans-serif" }}
          >
            I don't know
          </h2>
          <p className="text-muted-foreground mb-12 text-lg" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            I answer within 10 business years. I promise.
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <textarea
              rows={5}
              placeholder="Say something here..."
              className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-primary text-primary-foreground font-bold tracking-wide text-sm uppercase rounded-sm hover:opacity-90 transition-opacity"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-16 lg:px-24 py-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Hristo's site</span>
        <p className="text-xs text-muted-foreground">
          &copy; 2026 Hristo Hristov. All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default App
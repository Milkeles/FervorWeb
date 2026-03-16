import { useTranslation } from 'react-i18next'

import { HeroSection } from '@/components/HeroSection'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Helmet } from 'react-helmet-async'

export default function Privacy() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500">
      <Helmet>
        <title>Privacy Notice — Fervor Web</title>
        <meta name="description" content="Privacy policy of Fervor Web" />
        <meta property="og:title" content="Privacy Notice — Fervor Web" />
        <meta property="og:description" content="Privacy policy of Fervor Web" />
      </Helmet>

      <Navbar />

      <HeroSection
        eyebrow={t('privacy.eyebrow')}
        title={t('privacy.title')}
        description={t('privacy.description')} />

      <article className="mx-auto px-8 md:px-16 lg:px-24 py-16 max-w-3xl flex justify-center flex-col gap-12">

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-black tracking-tight">{t('privacy.section1.title')}</h2>
          <p className="text-muted-foreground leading-relaxed">{t('privacy.section1.description')}</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-black tracking-tight">{t('privacy.section2.title')}</h2>
          <p className="text-muted-foreground leading-relaxed">{t('privacy.section2.description')}</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-black tracking-tight">{t('privacy.section3.title')}</h2>
          <p className="text-muted-foreground leading-relaxed">{t('privacy.section3.description')}</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-black tracking-tight">{t('privacy.section4.title')}</h2>
          <p className="text-muted-foreground leading-relaxed">{t('privacy.section4.description')}</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-black tracking-tight">{t('privacy.section5.title')}</h2>
          <p className="text-muted-foreground leading-relaxed">{t('privacy.section5.description')}</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-black tracking-tight">{t('privacy.section6.title')}</h2>
          <div className="flex flex-col gap-3 text-muted-foreground leading-relaxed">
            <p><span className="text-foreground font-medium">{t('privacy.section6.description.access.title')}</span> — {t('privacy.section6.description.access.definition')}</p>
            <p><span className="text-foreground font-medium">{t('privacy.section6.description.rectification.title')}</span> — {t('privacy.section6.description.rectification.definition')}</p>
            <p><span className="text-foreground font-medium">{t('privacy.section6.description.erasure.title')}</span> — {t('privacy.section6.description.erasure.definition')}</p>
            <p><span className="text-foreground font-medium">{t('privacy.section6.description.restrict-processing.title')}</span> — {t('privacy.section6.description.restrict-processing.definition')}</p>
            <p><span className="text-foreground font-medium">{t('privacy.section6.description.object-processing.title')}</span> — {t('privacy.section6.description.object-processing.definition')}</p>
            <p><span className="text-foreground font-medium">{t('privacy.section6.description.portability.title')}</span> — {t('privacy.section6.description.portability.definition')}</p>
            <p>{t('privacy.section6.contact')} <a href="mailto:hristo@fervorgames.com" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors">hristo@fervorgames.com</a>.</p>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-black tracking-tight">{t('privacy.section7.title')}</h2>
          <p className="text-muted-foreground leading-relaxed">{t('privacy.section7.description')}</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-black tracking-tight">{t('privacy.section8.title')}</h2>
          <p className="text-muted-foreground leading-relaxed">{t('privacy.section8.description')}</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-black tracking-tight">{t('privacy.section9.title')}</h2>
          <p className="text-muted-foreground leading-relaxed">{t('privacy.section9.description')}</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-black tracking-tight">{t('privacy.section10.title')}</h2>
          <div className="flex flex-col gap-2 text-muted-foreground leading-relaxed">
            <p>{t('privacy.section10.email')}<a href="mailto:hristochristov2004@gmail.com" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors">hristo@fervorgames.com</a></p>
            <p>{t('privacy.section10.address')}</p>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-black tracking-tight">{t('privacy.section11.title')}</h2>
          <div className="flex flex-col gap-2 text-muted-foreground leading-relaxed">
            <p>{t('privacy.section11.description')}</p>
            <p>{t('privacy.section11.site')}<a href="https://cpdp.bg" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors">cpdp.bg</a></p>
            <p>{t('privacy.section11.address')}</p>
          </div>
        </section>

      </article>

      <Footer />
    </div>
  )
}
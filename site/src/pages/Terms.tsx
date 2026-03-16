import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'

export default function TermsOfService() {
  const { t } = useTranslation()

  const sections = [
    'agreement', 'services', 'ip', 'client-work',
    'liability', 'links', 'law', 'changes'
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500">
      <Helmet>
        <title>Terms of Service — Fervor Web</title>
        <meta name="description" content="Terms of Fervor Web" />
        <meta property="og:title" content="Terms of Service — Fervor Web" />
        <meta property="og:description" content="Terms of Fervor Web" />
      </Helmet>

      <Navbar />

      <HeroSection
        eyebrow={t('terms.eyebrow')}
        title={t('terms.title')}
        description={t('terms.last-updated')}
      />

      <article className="mx-auto px-8 md:px-16 lg:px-24 py-16 max-w-3xl justify-center flex flex-col gap-12">

        {sections.map((key) => (
          <section key={key} className="flex flex-col gap-4">
            <h2 className="text-3xl font-black tracking-tight">{t(`terms.sections.${key}.title`)}</h2>
            <p className="text-muted-foreground leading-relaxed">{t(`terms.sections.${key}.body`)}</p>
          </section>
        ))}

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-black tracking-tight">{t('terms.sections.contact.title')}</h2>
          <div className="flex flex-col gap-2 text-muted-foreground leading-relaxed">
            <p>{t('terms.sections.contact.intro')}</p>
            <p>Email: <a href={`mailto:${t('terms.sections.contact.email')}`} className="text-foreground underline underline-offset-4 hover:text-accent transition-colors">{t('terms.sections.contact.email')}</a></p>
            <p>{t('terms.sections.contact.address')}</p>
          </div>
        </section>

      </article>

      <Footer />
    </div>
  )
}
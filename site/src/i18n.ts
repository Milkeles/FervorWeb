// src/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'
import bg from './locales/bg/translation.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    bg: { translation: bg }
  },
  lng: localStorage.getItem('fw-language') ?? 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

document.documentElement.lang = i18n.language;
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n
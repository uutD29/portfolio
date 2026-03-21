import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// EN
import enHero from "./locales/en/hero.json"
import enAbout from "./locales/en/about.json"
import enExperience from "./locales/en/experience.json"
import enCertification from "./locales/en/certification.json"
import enProjects from "./locales/en/projects.json"
import enContact from "./locales/en/contact.json"
import enFooter from "./locales/en/footer.json"

// ID
import idHero from "./locales/id/hero.json"
import idAbout from "./locales/id/about.json"
import idExperience from "./locales/id/experience.json"
import idCertification from "./locales/id/certification.json"
import idProjects from "./locales/id/projects.json"
import idContact from "./locales/id/contact.json"
import idFooter from "./locales/id/footer.json"

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...enHero,
        ...enAbout,
        ...enExperience,
        ...enCertification,
        ...enProjects,
        ...enContact,
        ...enFooter
      }
    },
    id: {
      translation: {
        ...idHero,
        ...idAbout,
        ...idExperience,
        ...idCertification,
        ...idProjects,
        ...idContact,
        ...idFooter
      }
    }
  },
  fallbackLng: "en",
  lng: localStorage.getItem("lang") || "en",
  interpolation: {
    escapeValue: false
  }
})

export default i18n
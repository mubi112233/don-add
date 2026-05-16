import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import de from "./locales/de.json";

const STORAGE_KEY = "lang";
const saved = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    lng: saved || "de",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    returnEmptyString: false,
  });

export default i18n;

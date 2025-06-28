import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "../../lang/ru.json";
import uz from "../../lang/uz.json";
import en from "../../lang/en.json";

const savedLanguage = localStorage.getItem("language") || "ru";

i18n.use(initReactI18next).init({
  resources: {
    uz,
    ru,
    en,
  },
  lng: savedLanguage,
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

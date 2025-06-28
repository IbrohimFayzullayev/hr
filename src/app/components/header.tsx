import { useState } from "react";
import { useTranslation } from "react-i18next";
import { authAxios } from "../../utils/axios";

const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "uz", label: "O'zbekcha" },
];

const Header = () => {
  const [activeLang, setActiveLang] = useState("ru");
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    setActiveLang(lang);
    i18n.changeLanguage(lang);
    authAxios.defaults.headers.common["Accept-Language"] = lang;
    localStorage.setItem("language", lang);
  };

  return (
    <div className="flex justify-end px-5 py-2.5 bg-white/90">
      {languages.map((lang) => {
        const isActive = activeLang === lang.code;

        return (
          <button
            key={lang.code}
            data-lang={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`px-2.5 py-1 text-sm ml-2.5 cursor-pointer transition-all duration-300 ease-in-out
              ${
                isActive
                  ? "text-[#4a6bff] font-bold border-b-2 border-primary"
                  : "text-[#343a40]"
              }
            `}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
};

export default Header;

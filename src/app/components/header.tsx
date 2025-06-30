import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { authAxios } from "../../utils/axios";
import { Menu } from "lucide-react";

const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
];

const Header: React.FC = () => {
  const [activeLang, setActiveLang] = useState("en");
  const { i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      setActiveLang(storedLang);
      i18n.changeLanguage(storedLang);
      authAxios.defaults.headers.common["Accept-Language"] = storedLang;
    }
  }, []);

  const changeLanguage = (lang: string) => {
    setActiveLang(lang);
    i18n.changeLanguage(lang);
    authAxios.defaults.headers.common["Accept-Language"] = lang;
    localStorage.setItem("language", lang);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="max-w-[1200px] mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">TALAI</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Pricing
          </a>
          <a
            href="#demo"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Demo
          </a>
          <a
            href="#faq"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            FAQ
          </a>

          {/* Language Selector */}
          <div className="ml-4 flex items-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-2 py-1 rounded text-sm cursor-pointer transition ${
                  activeLang === lang.code
                    ? "bg-blue-100 text-blue-600 font-bold"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile nav menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-5 pb-4">
          <nav className="flex flex-col gap-3 text-sm">
            <a href="#features" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600">
              Pricing
            </a>
            <a href="#demo" className="text-gray-700 hover:text-blue-600">
              Demo
            </a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600">
              FAQ
            </a>
            <div className="flex gap-2 mt-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-2 py-1 rounded text-sm cursor-pointer transition ${
                    activeLang === lang.code
                      ? "bg-blue-100 text-blue-600 font-bold"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

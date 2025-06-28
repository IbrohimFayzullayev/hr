import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="text-white bg-[#343a40] pt-12 pb-4 px-[5%]">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-2" data-i18n="appName">
            {t("career_start")}
          </h3>
          <p>{t("career_start_description")}</p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-2">{t("quick_links")}</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="index.html"
                data-i18n="home"
                className="hover:text-primary transition"
              >
                {t("home")}
              </a>
            </li>
            <li>
              <a
                href="#"
                data-i18n="jobs"
                className="hover:text-primary transition"
              >
                {t("jobs")}
              </a>
            </li>
            <li>
              <a
                href="#"
                data-i18n="companies"
                className="hover:text-primary transition"
              >
                {t("companies")}
              </a>
            </li>
            <li>
              <a
                href="#"
                data-i18n="resources"
                className="hover:text-primary transition"
              >
                {t("resources")}
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-2">{t("contact")}</h3>
          <p>{t("email")}: info@careerstart.com</p>
          <p>{t("phone")}: (123) 456-7890</p>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4 text-center text-sm ">
        <p data-i18n="footerText">{t("all_rights_reserved")}</p>
      </div>
    </footer>
  );
};

export default Footer;

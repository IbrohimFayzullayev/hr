import React from "react";
import { useTranslation } from "react-i18next";
import { Linkedin, Twitter, Mail } from "lucide-react"; // yoki react-icons

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white px-[5%] py-12">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <h3 className="text-xl font-bold mb-4">TALAI</h3>
          <p className="text-sm text-gray-300">
            {t(
              "footer_about",
              "AI yordamida yollashni soddalashtiring va kompaniyangiz uchun eng mos nomzodlarni toping."
            )}
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">
            {t("footer_links", "Quick Links")}
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#demo" className="hover:underline">
                Try Demo
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold text-lg mb-4">
            {t("footer_follow", "Follow us")}
          </h4>
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-blue-400"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@yaxshiishchi.uz"
              className="hover:text-blue-400"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TALAI.{" "}
        {t("footer_rights", "All rights reserved.")}
      </div>
    </footer>
  );
};

export default Footer;

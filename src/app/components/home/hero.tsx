import React from "react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-[5%] pt-10 pb-16 md:pt-20 md:pb-20 max-w-[1200px] mx-auto min-h-[auto] md:min-h-[80vh]">
      <div className="flex-1 text-center sm:text-left md:pr-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          {t(
            "ai_hr_hero_title",
            "Hire Smarter with AI-Powered Talent Matching"
          )}
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-8">
          {t(
            "ai_hr_hero_subtitle",
            "Find the right candidates in seconds using intelligent filtering, smart suggestions and seamless automation."
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium px-6 py-3 rounded-xl transition">
            {t("ai_hr_hero_cta_primary", "Get Started")}
          </button>
          <button className="border border-blue-600 text-blue-600 cursor-pointer hover:bg-blue-50 font-medium px-6 py-3 rounded-xl transition">
            {t("ai_hr_hero_cta_secondary", "Try AI Demo")}
          </button>
        </div>
      </div>

      {/* O'ng tomon - illustratsiya (faqat md: va undan katta ekranlarda) */}
      <div className="hidden md:flex flex-1 mb-12 md:mb-0 justify-center items-center">
        <div className="relative w-full h-[320px] max-w-[400px] overflow-hidden rounded-lg">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#eef1ff] to-[#dce4ff] rounded-lg"></div>

          {/* Building / Candidate Block */}
          <div className="absolute w-[120px] h-[180px] bg-[#4a6bff] rounded bottom-5 right-[30%] before:content-[''] before:absolute before:top-5 before:left-5 before:w-[80px] before:h-[140px] before:bg-[repeating-linear-gradient(0deg,transparent,transparent_30px,rgba(255,255,255,0.5)_30px,rgba(255,255,255,0.5)_60px)] before:bg-[length:40px_60px] after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.2)_20px,rgba(255,255,255,0.2)_40px)]"></div>

          {/* AI Brain Icon (symbolic) */}
          <div className="absolute w-[60px] h-[60px] bg-[#ff7b54] rounded-full top-[25%] left-[10%] shadow-lg after:content-['🤖'] after:absolute after:inset-0 after:flex after:items-center after:justify-center after:text-2xl after:text-white"></div>

          {/* Document stack */}
          <div className="absolute w-[60px] h-[80px] bg-white border-2 border-gray-500 top-[30%] left-[40%] rotate-[-5deg] before:content-[''] before:absolute before:w-[60px] before:h-[80px] before:bg-white before:border-2 before:border-gray-500 before:top-[-5px] before:left-[-10px] before:-z-[1] before:rotate-[-8deg] after:content-[''] after:absolute after:w-[40px] after:h-[4px] after:bg-gray-500 after:top-[20px] after:left-[10px] after:shadow-[0_15px_0_0_#6c757d,0_30px_0_0_#6c757d]"></div>

          {/* Magnifier */}
          <div className="absolute w-[40px] h-[40px] border-[8px] border-[#ff7b54] rounded-full top-[60%] right-[10%] after:content-[''] after:absolute after:w-[8px] after:h-[30px] after:bg-[#ff7b54] after:bottom-[-25px] after:right-[-5px] after:rotate-45"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { useTranslation } from "react-i18next";

const HomeHero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="flex items-center justify-between px-[5%] py-16 max-w-[1200px] mx-auto min-h-[80vh]">
      {/* Chap tomon - kontent */}
      <div className="flex-1 pr-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {t("employer_page_title")}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          {t("employer_page_subtitle")}
        </p>
      </div>

      {/* O'ng tomon - illustratsiya */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-[#f0f3ff] rounded-lg"></div>

          {/* Building */}
          <div className="absolute w-[120px] h-[180px] bg-[#4a6bff] rounded bottom-5 right-[30%] before:content-[''] before:absolute before:top-5 before:left-5 before:w-[80px] before:h-[140px] before:bg-[repeating-linear-gradient(0deg,transparent,transparent_30px,rgba(255,255,255,0.5)_30px,rgba(255,255,255,0.5)_60px)] before:bg-[length:40px_60px] after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.2)_20px,rgba(255,255,255,0.2)_40px)]"></div>

          {/* People */}
          <div className="absolute bottom-5 left-[20%] w-[120px] h-[40px] before:content-[''] before:absolute before:w-[20px] before:h-[20px] before:bg-[#343a40] before:rounded-full before:bottom-[40px] before:left-[10px] before:shadow-[40px_5px_0_-2px_#343a40,80px_-5px_0_-2px_#343a40] after:content-[''] after:absolute after:w-[10px] after:h-[40px] after:bg-[#343a40] after:bottom-0 after:left-[15px] after:shadow-[40px_5px_0_0_#343a40,80px_-5px_0_0_#343a40]"></div>

          {/* Document stack */}
          <div className="absolute w-[60px] h-[80px] bg-white border-2 border-gray-500 top-[30%] left-[20%] rotate-[-5deg] before:content-[''] before:absolute before:w-[60px] before:h-[80px] before:bg-white before:border-2 before:border-gray-500 before:top-[-5px] before:left-[-10px] before:-z-[1] before:rotate-[-8deg] after:content-[''] after:absolute after:w-[40px] after:h-[4px] after:bg-gray-500 after:top-[20px] after:left-[10px] after:shadow-[0_15px_0_0_#6c757d,0_30px_0_0_#6c757d]"></div>

          {/* Magnifier */}
          <div className="absolute w-[40px] h-[40px] border-[8px] border-[#ff7b54] rounded-full top-[40%] right-[20%] after:content-[''] after:absolute after:w-[8px] after:h-[30px] after:bg-[#ff7b54] after:bottom-[-25px] after:right-[-5px] after:rotate-45"></div>

          {/* Star 1 */}
          <div className="absolute w-[20px] h-[20px] bg-[#ffd43b] clip-star top-[20%] right-[15%] rotate-[15deg]"></div>

          {/* Star 2 */}
          <div className="absolute w-[15px] h-[15px] bg-[#ffd43b] clip-star top-[30%] left-[40%] rotate-[-10deg]"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

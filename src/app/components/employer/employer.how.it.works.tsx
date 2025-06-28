import React from "react";
import { useTranslation } from "react-i18next";

const EmployerHowItWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-[5%] bg-[#f8f9fa] text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-12">
        {t("how_it_works")}
      </h2>

      <div className="flex flex-wrap justify-between gap-6 max-w-[1200px] mx-auto">
        {/* Step 1 */}
        <div className="flex-1 min-w-[200px] bg-white rounded-lg p-6 shadow-md transition-all">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4">
            1
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {t("step_1")}
          </h3>
          <p className="text-gray-600">{t("step_1_description")}</p>
        </div>

        {/* Step 2 */}
        <div className="flex-1 min-w-[200px] bg-white rounded-lg p-6 shadow-md transition-all">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4">
            2
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {t("step_2")}
          </h3>
          <p className="text-gray-600">{t("step_2_description")}</p>
        </div>

        {/* Step 3 */}
        <div className="flex-1 min-w-[200px] bg-white rounded-lg p-6 shadow-md transition-all">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4">
            3
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {t("step_3")}
          </h3>
          <p className="text-gray-600">{t("step_3_description")}</p>
        </div>

        {/* Step 4 */}
        <div className="flex-1 min-w-[200px] bg-white rounded-lg p-6 shadow-md transition-all">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4">
            4
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {t("step_4")}
          </h3>
          <p className="text-gray-600">{t("step_4_description")}</p>
        </div>
      </div>
    </section>
  );
};

export default EmployerHowItWorks;

import React from "react";
import { useTranslation } from "react-i18next";
import { FaChartLine, FaFilter, FaUsers } from "react-icons/fa";

const EmployerFeatures: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 px-[5%] bg-white text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-12">
        {t("why_choose_yaxshiishchi")}
      </h2>

      <div className="flex justify-center flex-wrap gap-8 max-w-[1200px] mx-auto">
        <div className="bg-[#f8f9fa] rounded-lg p-8 shadow-md flex items-center flex-col flex-1 min-w-[250px] max-w-[350px] transition-all">
          <FaUsers className="text-[2.5rem] text-blue-600 mb-4 block" />
          <h3 className="text-xl font-semibold mb-4">{t("talent_pool")}</h3>
          <p className="text-gray-600">{t("talent_pool_description")}</p>
        </div>

        <div className="bg-[#f8f9fa] rounded-lg p-8 shadow-md flex items-center flex-col flex-1 min-w-[250px] max-w-[350px] transition-all">
          <FaFilter className="text-[2.5rem] text-blue-600 mb-4 block" />
          <h3 className="text-xl font-semibold mb-4">
            {t("advanced_filtering")}
          </h3>
          <p className="text-gray-600">{t("advanced_filtering_description")}</p>
        </div>

        <div className="bg-[#f8f9fa] rounded-lg p-8 shadow-md flex items-center flex-col flex-1 min-w-[250px] max-w-[350px] transition-all">
          <FaChartLine className="text-[2.5rem] text-blue-600 mb-4 block" />
          <h3 className="text-xl font-semibold mb-4">{t("analytics")}</h3>
          <p className="text-gray-600">{t("analytics_description")}</p>
        </div>
      </div>
    </section>
  );
};

export default EmployerFeatures;

import React from "react";
import { useTranslation } from "react-i18next";
import { FaBriefcase, FaListUl, FaUsers } from "react-icons/fa";

type Props = {
  setSelectedSection: (section: string) => void;
  selectedSection: string;
};
const DashboardSidebar: React.FC<Props> = ({
  selectedSection,
  setSelectedSection,
}) => {
  const { t } = useTranslation();
  const navItems = [
    {
      key: "vacancies",
      icon: <FaListUl />,
      label: t("vacancies"),
    },
    {
      key: "candidates",
      icon: <FaUsers />,
      label: t("candidates"),
    },
  ];

  return (
    <div className="w-full max-w-xs bg-white border-r border-gray-200">
      <div className="px-6 py-8 text-center border-b border-gray-200">
        <div className="w-20 h-20 mx-auto mb-4 bg-[#4a6bff] rounded-full flex items-center justify-center">
          <FaBriefcase className="text-white text-4xl" />
        </div>
        <h2
          className="mb-2 text-dark text-xl font-semibold"
          data-i18n="dashboardHeading"
        >
          {t("dashboard")}
        </h2>
        <p className="text-secondary mb-2" data-i18n="dashboardSubtitle">
          {t("manage_your_listings")}
        </p>
      </div>

      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.key}>
            <div
              onClick={() => setSelectedSection(item.key)}
              className={`flex items-center px-4 py-2 transition cursor-pointer
                ${
                  selectedSection === item.key
                    ? "bg-[#f0f3ff] text-[#4a6bff] border-l-[3px] border-l-[#4a6bff]"
                    : "text-[#343a40] hover:bg-[#f0f3ff]"
                }`}
            >
              <div className="mr-2">{item.icon}</div>
              <span data-i18n={item.key}>{item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;

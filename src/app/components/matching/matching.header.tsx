import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBuilding, FaCog, FaSignOutAlt } from "react-icons/fa";

const MatchingHeader: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-2">
      {/* Logo */}
      <div className="flex items-center font-bold text-xl text-[#0078d4]">
        <div className="flex items-center justify-center h-10 w-10 bg-[#0078d4] text-white font-bold text-2xl rounded-md mr-2">
          Y
        </div>
        <span>Yaxshiishchi</span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex list-none m-0 p-0">
          <li className="mx-4">
            <a
              href="dashboard.html"
              className="no-underline text-gray-800 font-medium py-2 relative"
              data-i18n="vacancies"
            >
              {t("vacancies")}
            </a>
          </li>
          <li className="mx-4">
            <a
              href="dashboard.html#candidates"
              className="no-underline text-gray-800 font-medium py-2 relative"
              data-i18n="candidates"
            >
              {t("candidates")}
            </a>
          </li>
        </ul>
      </nav>

      {/* Profile Menu */}
      <div className="relative">
        <div
          className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border-2 border-[#0078d4] hover:border-[#005a9e] transition-colors duration-200"
          onClick={toggleDropdown}
        >
          <div className="w-full h-full flex items-center justify-center bg-gray-600 text-white font-bold text-sm">
            TS
          </div>
        </div>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute top-full right-0 w-64 bg-white rounded-lg shadow-lg p-4 mt-2 z-[101]">
            <div className="pb-2 border-b border-gray-200 mb-2">
              <h3 className="m-0 mb-1 text-lg">TechSolutions LLC</h3>
              <p className="m-0 text-sm text-gray-500">IT &amp; Software</p>
            </div>
            <ul className="list-none p-0 m-0">
              <li className="my-2">
                <a
                  href="#"
                  id="company-profile-btn"
                  className="flex items-center text-gray-800 p-2 rounded hover:bg-gray-100 transition"
                >
                  {/* <i className="fas fa-building mr-2 w-5 text-center"></i> */}
                  <FaBuilding className="mr-2 w-5 text-center" />
                  <span data-i18n="companyProfile">Company Profile</span>
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="flex items-center text-gray-800 p-2 rounded hover:bg-gray-100 transition"
                >
                  {/* <i className="fas fa-cog mr-2 w-5 text-center"></i> */}
                  <FaCog className="mr-2 w-5 text-center" />
                  <span data-i18n="settings">{t("settings")}</span>
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="flex items-center text-gray-800 p-2 rounded hover:bg-gray-100 transition"
                >
                  {/* <i className="fas fa-sign-out-alt mr-2 w-5 text-center"></i> */}
                  <FaSignOutAlt className="mr-2 w-5 text-center" />
                  <span data-i18n="logout">{t("logout")}</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchingHeader;

import { useTranslation } from "react-i18next";
import { FaEdit, FaMapMarkerAlt, FaPlus, FaTrash } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const DashboardVacanciesSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="vacancies"
      className={`bg-white rounded-lg shadow-md mb-8 overflow-hidden`}
    >
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-dark" data-i18n="vacancies">
          {t("vacancies")}
        </h2>
        <button
          className="inline-block px-6 py-3 rounded font-semibold cursor-pointer transition-all border-none text-white bg-[#4a6bff] hover:bg-[#3b5cd9]"
          id="add-vacancy-btn"
        >
          <FaPlus className="inline-block mr-2" />
          <span data-i18n="addVacancy">{t("add_vacancy")}</span>
        </button>
      </div>
      <div className="px-6 py-4">
        <div className="flex flex-col gap-4">
          {Vacancies.map((vacancy, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-6 py-4 border-b border-gray-200 transition-all cursor-pointer"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#343a40] mb-2">
                  {vacancy.title}
                </h3>
                <p className="flex gap-4 text-secondary mb-2 text-[#6c757d]">
                  <span className="flex items-center">
                    <FaMapMarkerAlt className="mr-1" />
                    {vacancy.location}
                  </span>
                  <span className="flex items-center">
                    <FaClock className="mr-1" />
                    {vacancy.type}
                  </span>
                </p>
                <p className="text-[#343a40] mb-2 leading-relaxed">
                  {vacancy.description}
                </p>
                <div className="flex gap-4 text-[#6c757d] text-sm">
                  <span className="flex items-center">
                    <i className="fas fa-user mr-1"></i>
                    {vacancy.applicants} {t("applicants")}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center px-4 py-2 rounded font-semibold cursor-pointer transition-all text-[#4a6bff] bg-white border-2 border-[#4a6bff]">
                  <FaEdit className="mr-1" />
                  <span data-i18n="edit">{t("edit")}</span>
                </button>
                <button className="flex items-center px-4 py-2 rounded font-semibold cursor-pointer transition-all text-red-500 border border-red-500 bg-transparent">
                  <FaTrash className="mr-1" />
                  <span data-i18n="delete">{t("delete")}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardVacanciesSection;

const Vacancies = [
  {
    title: "Junior Web Developer",
    location: "Tashkent",
    type: "Full-time",
    description:
      "Looking for a talented junior web developer to join our growing team...",
    applicants: 18,
  },
  {
    title: "Marketing Assistant",
    location: "Samarkand",
    type: "Part-time",
    description:
      "We are seeking a creative marketing assistant to help with our campaigns...",
    applicants: 12,
  },
  {
    title: "Data Entry Specialist",
    location: "Tashkent",
    type: "Remote",
    description:
      "Data entry specialist needed for organizing and maintaining our database...",
    applicants: 8,
  },
];

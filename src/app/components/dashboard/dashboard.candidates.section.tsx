import { useTranslation } from "react-i18next";
import {
  FaFileAlt,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaSearch,
  FaTimes,
  FaUserCheck,
} from "react-icons/fa";

const DashboardCandidatesSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="candidates"
      className={` bg-white rounded-lg shadow-md mb-8 overflow-hidden`}
    >
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-dark" data-i18n="candidates">
          {t("candidates")}
        </h2>
        <div className="flex gap-2">
          <div className="hidden" id="vacancy-filter">
            <span>Showing candidates for: </span>
            <strong id="current-vacancy">All Vacancies</strong>
            <button
              id="clear-vacancy-filter"
              className="inline-block px-2 py-1 rounded text-sm border border-red-500 text-red-500 ml-2"
            >
              {/* <i className="fas fa-times"></i> */}
              <FaTimes className="inline-block" />
              Clear
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder={t("search_candidates")}
              className="border px-3 py-2 rounded text-sm"
            />
            <button className="px-3 py-2 bg-primary text-white rounded">
              {/* <i className="fas fa-search"></i> */}
              <FaSearch className="inline-block" />
            </button>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label className="block mb-1" data-i18n="filterBy">
              {t("filter_by")}:
            </label>
            <select className="border rounded px-3 py-2">
              <option value="all" data-i18n="allCandidates">
                {t("all_candidates")}
              </option>
              <option value="new" data-i18n="newApplications">
                {t("new_applicants")}
              </option>
              <option value="shortlisted" data-i18n="shortlisted">
                {t("shortlisted")}
              </option>
              <option value="interviewed" data-i18n="interviewed">
                {t("interviewed")}
              </option>
              <option value="rejected" data-i18n="rejected">
                {t("rejected")}
              </option>
            </select>
          </div>
          <div>
            <label className="block mb-1" data-i18n="sortBy">
              {t("sort_by")}:
            </label>
            <select className="border rounded px-3 py-2">
              <option value="recent" data-i18n="mostRecent">
                {t("most_recent")}
              </option>
              <option value="relevance" data-i18n="relevance">
                {t("relevance")}
              </option>
              <option value="experience" data-i18n="experience">
                {t("experience")}
              </option>
            </select>
          </div>
        </div>
        {/* <div className="text-gray-500">Candidates content coming soon...</div> */}
        <div className="flex flex-col gap-1">
          {Candidates.map((candidate, index) => (
            <div
              key={index}
              className="flex items-center p-6 border border-[#e9ecef] rounded-lg transition-all gap-4"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img src="images/default-avatar.png" alt="Candidate Avatar" />
              </div>

              <div className="flex-1">
                <h3 className="text-[#343a40] mb-1">{candidate.name}</h3>
                <p className="text-[#4a6bff] font-medium mb-2">
                  {candidate.position}
                </p>
                <div className="flex gap-4 text-[#6c757d] mb-2">
                  <span className="flex items-center">
                    {/* <i className="fas fa-graduation-cap mr-1"></i>{" "} */}
                    <FaGraduationCap className="mr-1" />
                    {candidate.education}
                  </span>
                  <span className="flex items-center">
                    {/* <i className="fas fa-map-marker-alt mr-1"></i>{" "} */}
                    <FaMapMarkerAlt className="mr-1" />
                    {candidate.location}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-[#f0f3ff] text-[#4a6bff] px-2 py-[0.15rem] rounded-2xl text-sm mr-2 mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#e3f2fd] text-[#0d6efd] px-4 py-2 rounded-full text-sm font-medium min-w-[100px] text-center">
                <span>{candidate.status}</span>
              </div>

              <div className="flex flex-col gap-2 ml-4">
                <button className="flex items-center px-6 py-3 rounded font-semibold cursor-pointer transition-all text-[#4a6bff] border-2 border-[#4a6bff] bg-white">
                  {/* <i className="fas fa-file-alt mr-2"></i> */}
                  <FaFileAlt className="mr-2" />
                  <span>{t("view_resume")}</span>
                </button>
                <button className="flex items-center px-6 py-3 rounded font-semibold cursor-pointer transition-all text-white bg-[#4a6bff]">
                  {/* <i className="fas fa-user-check mr-2"></i> */}
                  <FaUserCheck className="mr-2" />
                  <span>{t("shortlist")}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardCandidatesSection;

const Candidates = [
  {
    name: "Alisher Karimov",
    position: "Junior Web Developer",
    education: "Bachelor's in Computer Science",
    location: "Tashkent",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    status: "New",
  },
  {
    name: "Nilufar Azimova",
    position: "Marketing Assistant",
    education: "Bachelor's in Marketing",
    location: "Samarkand",
    skills: ["Social Media", "Content Creation", "Adobe Photoshop"],
    status: "Shortlisted",
  },
  {
    name: "Rustam Umarov",
    position: "Data Entry Specialist",
    education: "Associate's in Business Administration",
    location: "Tashkent",
    skills: ["MS Excel", "Data Management", "Fast Typing"],
    status: "Interviewed",
  },
];

import { type FC } from "react";
import DashboardVacanciesSection from "./dashboard.vacancies.section";
import DashboardCandidatesSection from "./dashboard.candidates.section";

interface Props {
  selectedSection: string;
}

const DashboardContent: FC<Props> = ({ selectedSection }) => {
  const renderSection = () => {
    switch (selectedSection) {
      case "vacancies":
        return <DashboardVacanciesSection />;
      case "candidates":
        return <DashboardCandidatesSection />;
      default:
        return (
          <div className="p-6 text-gray-500">Please select a section.</div>
        );
    }
  };

  return <div className="flex-1 min-w-0">{renderSection()}</div>;
};

export default DashboardContent;

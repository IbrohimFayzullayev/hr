import React, { type FC } from "react";
import DashboardSidebar from "./dashboard.sidebar";
import DashboardContent from "./dashboard.content";

const DashboardContainer: FC = () => {
  const [selectedSection, setSelectedSection] = React.useState("vacancies");

  return (
    <div className="flex max-w-[1200px] mx-auto my-8 gap-8 px-4 ">
      <DashboardSidebar
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <DashboardContent selectedSection={selectedSection} />
    </div>
  );
};

export default DashboardContainer;

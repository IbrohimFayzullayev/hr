import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const TryAIDemo: React.FC = () => {
  const { t } = useTranslation();
  const [jobTitle, setJobTitle] = useState("");
  const [candidates, setCandidates] = useState<string[]>([]);

  const handleSearch = () => {
    if (!jobTitle.trim()) return;

    // Fake response based on job title
    const dummyData = [
      `${jobTitle} — Alisher Karimov, 3 yillik tajriba, React + Node.js`,
      `${jobTitle} — Dildora Xamidova, 2 yillik tajriba, TypeScript + Next.js`,
      `${jobTitle} — Kamron Siddiqov, 4 yillik tajriba, Vue + Laravel`,
    ];
    setCandidates(dummyData);
  };

  return (
    <section className="bg-blue-50 py-20 px-[5%]">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {t("demo_title", "Try Our AI in Action")}
        </h2>
        <p className="text-gray-600 mb-8">
          {t(
            "demo_subtitle",
            "Enter a job title and instantly get top 3 AI-recommended candidates."
          )}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-8">
          <input
            type="text"
            placeholder={t("demo_input_placeholder", "e.g. Frontend Developer")}
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-300 w-full sm:w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white cursor-pointer px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {t("demo_search_button", "Find Candidates")}
          </button>
        </div>

        {candidates.length > 0 && (
          <div className="bg-white shadow rounded-lg p-6 text-left space-y-4 max-w-[600px] mx-auto">
            {candidates.map((candidate, idx) => (
              <div
                key={idx}
                className="border-b pb-2 last:border-b-0 last:pb-0"
              >
                <p className="text-gray-700">{candidate}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TryAIDemo;

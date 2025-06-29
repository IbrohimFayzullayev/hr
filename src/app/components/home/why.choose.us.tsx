import React from "react";
import { useTranslation } from "react-i18next";

const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: "🤖",
      title: t("ai_feature_resume_analysis", "AI Resume Analysis"),
      description: t(
        "ai_feature_resume_analysis_desc",
        "Quickly scan and rank thousands of resumes using smart algorithms."
      ),
    },
    {
      icon: "🧠",
      title: t("ai_feature_intelligent_matching", "Intelligent Matching"),
      description: t(
        "ai_feature_intelligent_matching_desc",
        "AI recommends top candidates based on skill, experience, and culture fit."
      ),
    },
    {
      icon: "📊",
      title: t("ai_feature_analytics", "Hiring Analytics"),
      description: t(
        "ai_feature_analytics_desc",
        "Track recruitment efficiency with powerful dashboards and insights."
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-[5%]">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {t("ai_why_choose_title", "Why choose our AI-driven HR platform?")}
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          {t(
            "ai_why_choose_subtitle",
            "We use AI to eliminate guesswork and help you hire the right people faster than ever."
          )}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

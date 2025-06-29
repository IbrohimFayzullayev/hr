import React from "react";
import { useTranslation } from "react-i18next";

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      step: 1,
      title: t("how_it_works_step1_title", "Register Your Company"),
      description: t(
        "how_it_works_step1_desc",
        "Create your company profile and provide basic hiring preferences."
      ),
    },
    {
      step: 2,
      title: t("how_it_works_step2_title", "Post Job Openings"),
      description: t(
        "how_it_works_step2_desc",
        "Use our AI assistant to write clear and effective job descriptions."
      ),
    },
    {
      step: 3,
      title: t("how_it_works_step3_title", "Review Candidates"),
      description: t(
        "how_it_works_step3_desc",
        "Receive AI-ranked candidates that match your requirements."
      ),
    },
    {
      step: 4,
      title: t("how_it_works_step4_title", "Hire Smarter"),
      description: t(
        "how_it_works_step4_desc",
        "Connect with the most suitable candidates and streamline interviews."
      ),
    },
  ];

  return (
    <section className="bg-white py-20 px-[5%]">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {t("how_it_works_title", "How it works")}
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          {t(
            "how_it_works_subtitle",
            "A step-by-step process to hire smarter and faster with AI assistance."
          )}
        </p>

        <div className="grid md:grid-cols-4 gap-8 text-left">
          {steps.map((step) => (
            <div
              key={step.step}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="text-blue-600 text-2xl font-bold mb-4">
                {step.step < 10 ? `0${step.step}` : step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const { t } = useTranslation();

  const faqs: FAQItem[] = [
    {
      question: t("faq_q1", "What is AI hiring and how does it work?"),
      answer: t(
        "faq_a1",
        "AI hiring uses intelligent algorithms to match candidates to job roles based on their skills, experience, and profile. It reduces manual screening time and improves accuracy."
      ),
    },
    {
      question: t("faq_q2", "Is the AI reliable for all job types?"),
      answer: t(
        "faq_a2",
        "Our AI is trained on diverse job data and works well across tech, design, marketing, and more. For niche roles, human input still plays a key role."
      ),
    },
    {
      question: t("faq_q3", "Can I test the platform before paying?"),
      answer: t(
        "faq_a3",
        "Yes! You can use the Starter plan for free and try our AI demo to see how it works before upgrading."
      ),
    },
    {
      question: t("faq_q4", "How secure is my data?"),
      answer: t(
        "faq_a4",
        "We use end-to-end encryption and follow industry best practices to ensure your company and candidate data is protected at all times."
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-[5%]">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {t("faq_title", "Frequently Asked Questions")}
        </h2>
        <p className="text-gray-600 mb-12">
          {t(
            "faq_subtitle",
            "Have questions? We’ve got answers to the most common queries about our platform."
          )}
        </p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 transition hover:shadow"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between w-full items-center text-gray-800 font-medium text-lg"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-3 text-gray-600 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

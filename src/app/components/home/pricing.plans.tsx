import React from "react";
import { useTranslation } from "react-i18next";

const PricingPlans: React.FC = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t("pricing_starter", "Starter"),
      price: t("pricing_starter_price", "Free"),
      description: t(
        "pricing_starter_desc",
        "Ideal for small teams testing AI hiring."
      ),
      features: [
        t("pricing_feature1", "Post up to 3 job openings"),
        t("pricing_feature2", "10 AI candidate matches"),
        t("pricing_feature3", "Basic analytics"),
      ],
      isPopular: false,
    },
    {
      name: t("pricing_pro", "Pro"),
      price: t("pricing_pro_price", "$49/month"),
      description: t(
        "pricing_pro_desc",
        "Perfect for growing companies hiring regularly."
      ),
      features: [
        t("pricing_feature1", "Unlimited job posts"),
        t("pricing_feature2", "Unlimited AI matches"),
        t("pricing_feature4", "Advanced analytics"),
        t("pricing_feature5", "Priority support"),
      ],
      isPopular: true,
    },
    {
      name: t("pricing_enterprise", "Enterprise"),
      price: t("pricing_enterprise_price", "Custom"),
      description: t(
        "pricing_enterprise_desc",
        "Tailored solutions for large-scale recruitment needs."
      ),
      features: [
        t("pricing_feature6", "Custom integrations"),
        t("pricing_feature4", "Advanced analytics"),
        t("pricing_feature7", "Dedicated account manager"),
        t("pricing_feature5", "Priority support"),
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="bg-blue-50 py-20 px-[5%]">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {t("pricing_title", "Choose Your Plan")}
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          {t(
            "pricing_subtitle",
            "Flexible pricing for teams of all sizes. Start free and upgrade as you grow."
          )}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 bg-white shadow-lg border transition hover:scale-[1.02] ${
                plan.isPopular
                  ? "border-blue-600 ring-2 ring-blue-100"
                  : "border-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {plan.name}
              </h3>
              <p className="text-gray-500 mb-4">{plan.description}</p>
              <div className="text-3xl font-bold text-blue-600 mb-6">
                {plan.price}
              </div>
              <ul className="text-left mb-6 space-y-2 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 cursor-pointer text-white py-3 rounded-lg hover:bg-blue-700 transition">
                {t("pricing_button", "Get Started")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;

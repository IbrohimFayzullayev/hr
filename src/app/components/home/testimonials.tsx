import React from "react";
import { useTranslation } from "react-i18next";

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const feedbacks = [
    {
      name: "Dilbar Abdurahmonova",
      role: "HR Manager",
      company: "SoftDreams LLC",
      quote: t(
        "testimonial_1",
        "Yaxshiishchi orqali topgan oxirgi 5 xodimimiz hali ham ishlamoqda. Bu platforma vaqtni va bosh og‘rig‘ini 50% ga kamaytirdi."
      ),
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Sanjar To‘xtasinov",
      role: "CTO",
      company: "Finexa",
      quote: t(
        "testimonial_2",
        "AI filtratsiyasi fantastik. Oldin 3 kun olgan jarayon, endi 2 soat ichida bajariladi. Ko‘p vaqtni tejadik."
      ),
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
      name: "Madina Sharipova",
      role: "Recruitment Lead",
      company: "NextStep HR",
      quote: t(
        "testimonial_3",
        "Bizning yollash strategiyamiz to‘liq o‘zgardi. AI tavsiyalari juda aniq va mos keluvchi nomzodlar darrov topiladi."
      ),
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="bg-white py-20 px-[5%]">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {t("testimonial_title", "What Our Clients Say")}
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          {t(
            "testimonial_subtitle",
            "Trusted by modern HR teams who value speed, precision and innovation."
          )}
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <p className="text-gray-700 italic mb-4">“{feedback.quote}”</p>
              <div className="flex items-center gap-4">
                <img
                  src={feedback.avatar}
                  alt={feedback.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{feedback.name}</p>
                  <p className="text-sm text-gray-500">
                    {feedback.role}, {feedback.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

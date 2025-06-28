import MatchingCandidateCard from "./matching.candidate.card";
import MatchingConHeader from "./matching.con.header";

const MatchingContainer = () => {
  return (
    <div>
      <MatchingConHeader />
      <div className="bg-white rounded-lg p-8 shadow-md">
        <div className="flex flex-col gap-6 mb-8">
          {candidates.map((candidate, index) => (
            <MatchingCandidateCard
              key={index}
              name={candidate.name}
              position={candidate.position}
              education={candidate.education}
              location={candidate.location}
              score={candidate.score}
              phone={candidate.phone}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchingContainer;

const candidates = [
  {
    name: "Malika Ismoilova",
    position: "Junior Web Developer",
    education: "Kompyuter fanlari bo‘yicha bakalavr",
    location: "Farg‘ona",
    score: 240,
    phone: "+998 90 890 1234",
  },
  {
    name: "Javohir Tursunov",
    position: "Frontend Dasturchi",
    education: "Axborot texnologiyalari bakalavri",
    location: "Toshkent",
    score: 195,
    phone: "+998 99 123 4567",
  },
  {
    name: "Dilshoda Karimova",
    position: "Marketing Assistent",
    education: "Biznes boshqaruvi yo‘nalishi",
    location: "Andijon",
    score: 210,
    phone: "+998 93 456 7890",
  },
  {
    name: "Shahzod Toirov",
    position: "Data Entry Mutaxassisi",
    education: "Iqtisodiyot bakalavri",
    location: "Namangan",
    score: 180,
    phone: "+998 97 321 0001",
  },
  {
    name: "Feruza Abdullayeva",
    position: "Grafik Dizayner",
    education: "San’at akademiyasi bitiruvchisi",
    location: "Samarqand",
    score: 225,
    phone: "+998 91 654 3210",
  },
  {
    name: "Jasur Abdumannopov",
    position: "Backend Dasturchi",
    education: "Kompyuter injiniringi",
    location: "Buxoro",
    score: 275,
    phone: "+998 93 998 7766",
  },
];

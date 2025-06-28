import EmployerHero from "../components/employer/employer.hero";
import EmployerFeatures from "../components/employer/employer.features";
import EmployerHowItWorks from "../components/employer/employer.how.it.works";
import Header from "../components/header";
import Footer from "../components/footer";

const EmployerScreen = () => {
  return (
    <div className="bg-[#f5f7fa]">
      <Header />
      <EmployerHero />
      <EmployerFeatures />
      <EmployerHowItWorks />
      <Footer />
    </div>
  );
};

export default EmployerScreen;

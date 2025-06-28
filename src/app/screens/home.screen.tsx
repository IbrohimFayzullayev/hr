import Header from "../components/header";
import Footer from "../components/footer";
import HomeHero from "../components/home/home.hero";
import HomeFeatures from "../components/home/home.features";
import HomeHowItWorks from "../components/home/home.how.it.works";

const HomeScreen = () => {
  return (
    <div className="bg-[#f5f7fa]">
      <Header />
      <HomeHero />
      <HomeFeatures />
      <HomeHowItWorks />
      <Footer />
    </div>
  );
};

export default HomeScreen;

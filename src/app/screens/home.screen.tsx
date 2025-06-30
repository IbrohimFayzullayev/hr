import Header from "../components/header";
import Footer from "../components/footer";
import WhyChooseUs from "../components/home/why.choose.us";
import HowItWorks from "../components/home/how.it.works";
import TryAIDemo from "../components/home/try.ai.demo";
import Testimonials from "../components/home/testimonials";
// import PricingPlans from "../components/home/pricing.plans";
import FAQSection from "../components/home/faq";
import Hero from "../components/home/hero";

const HomeScreen = () => {
  return (
    <div className="bg-[#f5f7fa]">
      <Header />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <TryAIDemo />
      <Testimonials />
      {/* <PricingPlans /> */}
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomeScreen;

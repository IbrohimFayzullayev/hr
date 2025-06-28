import DashboardContainer from "../components/dashboard/dashboard.container";
import Footer from "../components/footer";
import Header from "../components/header";

const DashboardScreen = () => {
  return (
    <div className="bg-[#f5f7fa]">
      <Header />
      <DashboardContainer />
      <Footer />
    </div>
  );
};

export default DashboardScreen;

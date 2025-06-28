import Header from "../components/header";
import MatchingContainer from "../components/matching/matching.container";
import MatchingHeader from "../components/matching/matching.header";

const MatchingScreen = () => {
  return (
    <div className="bg-[#f5f7fa] pb-3">
      <Header />
      <MatchingHeader />
      <div className="max-w-[1200px] mx-auto my-8 px-4">
        <MatchingContainer />
      </div>
    </div>
  );
};

export default MatchingScreen;

import { Route, Routes } from "react-router-dom";
import NotFoundScreen from "../app/screens/not.found.screen";
import HomeScreen from "../app/screens/home.screen";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};

export default Navigation;

import { Route, Routes } from "react-router-dom";
import EmployerScreen from "../app/screens/employer.screen";
import NotFoundScreen from "../app/screens/not.found.screen";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployerScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};

export default Navigation;

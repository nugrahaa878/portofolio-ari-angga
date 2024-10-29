import { Route, Routes } from "react-router-dom";
import Homepage from "./HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default MainRoutes;

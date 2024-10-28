import { Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import Homepage from "./HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default MainRoutes;

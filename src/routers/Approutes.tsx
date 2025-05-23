import { Routes, Route } from "react-router-dom";
import HomePage from "../components/Hompage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="*"
        element={<div className="p-4">Không tìm thấy trang</div>}
      />
    </Routes>
  );
};

export default AppRoutes;

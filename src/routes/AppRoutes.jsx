import { Route, Routes } from "react-router-dom";
import { DetailVideo, HomePage } from "./../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<HomePage />} />
        <Route path="detail-video/:id" element={<DetailVideo />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

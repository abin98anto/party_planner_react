import { Route, Routes } from "react-router-dom";
import UserLayout from "../components/user/UserLayout/UserLayout";
import HomePage from "../pages/user/HomePage/HomePage";
import NotFound from "../components/common/NotFound/NotFound";

const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default UserRoutes;

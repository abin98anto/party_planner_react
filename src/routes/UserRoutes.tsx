import { Route, Routes } from "react-router-dom";
import UserLayout from "../components/user/UserLayout/UserLayout";

const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" />
        </Route>
      </Routes>
    </>
  );
};

export default UserRoutes;

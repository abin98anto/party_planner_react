import { Outlet } from "react-router-dom";
import "./UserLayout.scss";
import Header from "../Header/Header";

const UserLayout = () => {
  return (
    <div className="user-layout">
      <Header />
      <main className="user-content" style={{ flex: "1" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;

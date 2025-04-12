import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/user/UserLayout/UserLayout";
import NotFound from "./components/common/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

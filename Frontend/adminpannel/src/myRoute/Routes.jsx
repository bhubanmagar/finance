import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "../components/LoginPage";
import AdminPage from "../pages/adminPage";
const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin-login" element={<LogInPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;

import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";
import LoadingPage from "./LoadingPage";

const AuthorizedPages = () => {
  const auth = useAuthContext();

  return auth.loading ? (
    <LoadingPage />
  ) : auth.clientPrincipal ? (
    <main className="h-screen">
      <Navbar />
      <Outlet />
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default AuthorizedPages;

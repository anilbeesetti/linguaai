import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuthContext";
import LoadingPage from "./LoadingPage";

const PublicPages = () => {
  const auth = useAuth();

  return auth.loading ? (
    <LoadingPage />
  ) : auth.clientPrincipal ? (
    <Navigate to="/home" />
  ) : (
    <main className="h-screen">
      <Outlet />
    </main>
  );
};

export default PublicPages;

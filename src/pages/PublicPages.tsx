import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import LoadingPage from "./LoadingPage";

const PublicPages = () => {
  const auth = useAuthContext();

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

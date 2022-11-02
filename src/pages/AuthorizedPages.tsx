import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuthContext";
import LoadingPage from "./LoadingPage";

const AuthorizedPages = () => {
  const auth = useAuth();

  return auth.loading ? (
    <LoadingPage />
  ) : auth.clientPrincipal ? (
    <main className="h-screen">
      <Outlet />
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default AuthorizedPages;

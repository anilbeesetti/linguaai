import { createContext, useContext } from "react";
import { ClientPrincipal, useAuthData } from "./useAuthData";

type AuthContextProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  clientPrincipal: ClientPrincipal | undefined;
  loading: boolean;
  login: (provider: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const { isLoading, data } = useAuthData();

  const login = (loginProvider: string) => {
    window.location.replace(
      `/login/${loginProvider}?post_login_redirect_uri=/home`
    );
  };

  const logout = () => {
    window.location.replace(`/.auth/logout?post_logout_redirect_uri=/`);
  };
  return (
    <AuthContext.Provider
      value={{
        clientPrincipal: data?.clientPrincipal,
        loading: isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

import axios from "axios";
import { useQuery } from "react-query";

export interface IAuth {
  clientPrincipal?: ClientPrincipal;
}

export interface ClientPrincipal {
  userId: string;
  userRoles: string[];
  claims?: any[];
  identityProvider: string;
  userDetails: string;
}

const checkAuthenticationState = async () => {
  const res = await axios.get<IAuth>("/.auth/me");
  return res.data;
};

export const useAuthData = () => {
  return useQuery<IAuth, Error>("authentication", checkAuthenticationState);
};

import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export function useAuth() {
    // console.log(useContext(AuthContext))
  return useContext(AuthContext);
}
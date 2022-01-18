import { createContext } from 'react';

export const AuthContenxt = createContext({
  isLoggedIn: false,
  userId: null,
  login: () => {},
  logout: () => {},
});

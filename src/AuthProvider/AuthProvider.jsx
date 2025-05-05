import React from "react";
import { createContext } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const user = {
    name: "imran",
    email: "imran@gmail.com",
  };
  return <AuthContext value={user}>{children}</AuthContext>;
};

export default AuthProvider;

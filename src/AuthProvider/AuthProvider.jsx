import React from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth=getAuth(app)
const AuthProvider = ({ children }) => {
  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const user = {
    createUser,
    name: "imran",
    email: "imran@gmail.com",
  };
  return <AuthContext value={user}>{children}</AuthContext>;
};

export default AuthProvider;

import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { toast } from "react-toastify";
export const AuthContext = createContext(null);
const auth=getAuth(app)
const AuthProvider = ({ children }) => {
  // hero email
  const [heroemail,setHeroEmail]=useState(null)
  console.log(heroemail)
  // user state
  const [user,setUser]=useState(null)
  // console.log(user)
  // Register user
  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  // Login user
  const signInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  // logout user
  const signOutUser=()=>{
    return signOut(auth)
    .then(res=>{
      res&& toast.dismiss("Logout Successfully!!")
    })
  }
  //Reset password Forgot password
  const resetPassword=(email)=>{
    return sendPasswordResetEmail(auth,email)
  }
  // Updated user profile
  const updatedProfile=(displayName,photoURL)=>{
    return updateProfile(auth.currentUser,{displayName,photoURL})
  }
  // Observer onAuthStateChange
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
    return ()=>{
      unsubscribe()
    }
  },[])
  const userProfile = {
    createUser,
    signInUser,
    signOutUser,
    updatedProfile,
    resetPassword,
    user,
    heroemail,
    setHeroEmail,
    name: "imran",
    email: "imran@gmail.com",
  };
  return <AuthContext value={userProfile}>{children}</AuthContext>;
};

export default AuthProvider;

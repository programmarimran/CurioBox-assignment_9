import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { toast } from "react-toastify";
export const AuthContext = createContext(null);
const auth=getAuth(app)
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [loading,setLoading]=useState(true)
  // hero email
  const [heroemail,setHeroEmail]=useState(null);
  // ForgotPassword Email
  const [forgotEmail,setForgotEmail]=useState(null)
  // user state
  const [user,setUser]=useState(null)
  console.log(user)
  // Register user
  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  // Google Login user
  const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
  }
  // Login user
  const signInUser=(email,password)=>{
    setLoading(true)
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
      setLoading(false)
    })
    return ()=>{
      unsubscribe()
    }
  },[])
  const userProfile = {
    createUser,
    googleLogin,
    signInUser,
    signOutUser,
    updatedProfile,
    resetPassword,
    loading,
    user,
    heroemail,
    setHeroEmail,
   forgotEmail,
   setForgotEmail
  };
  return <AuthContext value={userProfile}>{children}</AuthContext>;
};

export default AuthProvider;

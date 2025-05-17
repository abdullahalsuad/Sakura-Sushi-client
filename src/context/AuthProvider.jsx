import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);
  // User create
  let createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User login
  let signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // User signUp
  let signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    let unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);
  //
  const userInfo = {
    createUser,
    signIn,
    user,
    setUser,
    signOutUser,
    loading,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;

import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from "react";


export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  }
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUser = (userInfo) => {
    return updateProfile(user, userInfo);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('user observing');
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [])
  const authInfo = {
    createUser,
    signIn,
    providerLogin,
    updateUser,
    logOut,
    user,
    loading
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
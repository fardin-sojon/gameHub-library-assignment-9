import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import Loading from "../Components/Loading";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(""); 

  const authInfo = {
    user,
    setUser,
    error,
    setError,
    loading,
    email,
    setEmail,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, [user]);

  
  if (loading) {
    return <Loading />;
  }

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

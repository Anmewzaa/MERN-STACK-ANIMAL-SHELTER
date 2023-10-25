import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/firebase-config";
import { useRouter } from "next/router";

const userAuthContext = createContext([[], () => null]);

export const UserAuthContextProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<any | null>({});
  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password).then(() =>
      router.push("/")
    );
  };
  const signUp = (username: string, email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        updateProfile(user.user, {
          displayName: username,
          photoURL: "https://cdn-icons-png.flaticon.com/512/9408/9408175.png",
        }).then(() => router.push("/"));
      })
      .catch((err) => console.log(err));
  };
  const signInWithGoogle = async () => {
    const GoogleProvider = await new GoogleAuthProvider();
    return signInWithPopup(auth, GoogleProvider).then(() => router.push("/"));
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
        logOut,
        signInWithGoogle,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userAuthContext);
};

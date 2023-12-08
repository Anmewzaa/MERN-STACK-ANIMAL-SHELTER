import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import Swal from "sweetalert2";

const userAuthContext = createContext([[], () => null]);

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Login success!",
          icon: "success",
        }).then(() => window.location.replace("/"));
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Email or password is incorrect",
          text: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
        });
      });
  };
  const signUp = (username, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        updateProfile(user.user, {
          displayName: username,
          photoURL: "https://cdn-icons-png.flaticon.com/512/9408/9408175.png",
        }).then(() => {
          Swal.fire({
            title: "Good job!",
            text: "Register & login success!",
            icon: "success",
          }).then(() => window.location.replace("/"));
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "มีบางอย่างผิดพลาด>",
        });
      });
  };
  const signInWithGoogle = async () => {
    const GoogleProvider = await new GoogleAuthProvider();
    return signInWithPopup(auth, GoogleProvider).then(() => {
      window.location.replace("/");
    });
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

// eslint-disable-next-line react-refresh/only-export-components
export const useUserAuth = () => {
  return useContext(userAuthContext);
};

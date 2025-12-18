import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./UseGlobalContext";
import { toast } from "sonner";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext();
  const register = ({ displayName, email, photoURL, password, phone }) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName, photoURL, phone })
          .then(() => {
            const updatedUser = { ...user, displayName, photoURL, phone };
            dispatch({ type: "LOGREG", payload: updatedUser });
            toast.success(`Welcome to our site, ${displayName} !`);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err.message);
          });
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setLoading(false);
      });
  };
  const login = ({ displayName, email, password }) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGREG", payload: user });
        setLoading(false);
        toast.success("Welcome back!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
      });
  };
  const logout = ({ password }) => {
    signOut(auth)
      .then(() => {
        toast.success("See you later!")
        // dispatch({ type: "LOGOUT", payload: null });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return { register, login, logout, loading, setLoading, error, setError };
};

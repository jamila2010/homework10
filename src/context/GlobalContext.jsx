import { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const changeState = (state, { type, payload }) => {
    switch (type) {
      case "LOGREG":
        return {
          ...state,
          user: payload,
        };
      case "ISUSER":
        return { ...state, isAuthChange: true };
    }
  };
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    isAuthChange: false,
  });
  const context = createContext(GlobalContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGREG", payload: user });
      dispatch({ type: "ISUSER" });
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const changeState = (state, { type, payload }) => {
    switch (type) {
      case "LOGREG":
        return {
          ...state,
          user: payload,
        };
      case "LOGOUT":
        return { ...state, user: null };
    }
  };
  const [state, dispatch] = useReducer(changeState, {
    user: null,
  });
  const context = createContext(GlobalContext);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

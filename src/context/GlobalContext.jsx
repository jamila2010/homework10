import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
  });
  const context = createContext(GlobalContext);

  return (
    <GlovalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlovalContext.Provider>
  );
}

export default GlobalContext;

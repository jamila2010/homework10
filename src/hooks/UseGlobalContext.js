import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "GlobalContext should be used within GlobalContextProvider() "
    );
  }

  return context;
};

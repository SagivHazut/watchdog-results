import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [environment, setEnvironment] = useState("crowncoins");

  return (
    <GlobalContext.Provider value={{ environment, setEnvironment }}>
      {children}
    </GlobalContext.Provider>
  );
};

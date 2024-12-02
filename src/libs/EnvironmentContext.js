import React, { createContext, useContext, useState, useEffect } from "react";

const EnvironmentContext = createContext();

export const useEnvironment = () => {
  const context = useContext(EnvironmentContext);
  if (!context) {
    throw new Error(
      "useEnvironment must be used within an EnvironmentProvider"
    );
  }
  return context;
};

export const EnvironmentProvider = ({ children }) => {
  const [environment, setEnvironment] = useState("crowncoins");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${environment}.json`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      }
    };

    fetchData();
  }, [environment]); // Re-fetch when environment changes

  return (
    <EnvironmentContext.Provider value={{ environment, setEnvironment, data }}>
      {children}
    </EnvironmentContext.Provider>
  );
};

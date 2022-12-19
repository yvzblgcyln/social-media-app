import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const swapDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const value = { darkMode, swapDarkMode };

  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
};
export default DarkModeContext;

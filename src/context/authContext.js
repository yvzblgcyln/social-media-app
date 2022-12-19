import { createContext, useEffect, useState } from "react";

const CurrentUserContext = createContext();

export const CurrentUserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "Yavuz Bilge",
      profilePic:
        "https://images.pexels.com/photos/1822608/pexels-photo-1822608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const value = { currentUser, login };

  return <CurrentUserContext.Provider value={value}>{children}</CurrentUserContext.Provider>;
};
export default CurrentUserContext;

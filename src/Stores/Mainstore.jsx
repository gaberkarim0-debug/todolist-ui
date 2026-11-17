import { createContext, useState } from "react";

export const globalStore = createContext();
const base_url = "http://localhost:1337";
export default function Mainstore({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")));
  let values = {
    base_url,
    token,
    setToken,
    userData,
    setUserData,
  };
  return <globalStore.Provider value={values}>{children}</globalStore.Provider>;
}

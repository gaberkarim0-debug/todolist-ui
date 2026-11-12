import { createContext } from "react";

export const globalStore = createContext()

export default function Mainstore({children}) {
     values = {}
  return (
    <globalStore.Provider value={values}>{children}</globalStore.Provider>
  )
}

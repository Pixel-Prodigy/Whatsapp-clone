import React, { useState } from "react";
import { Context } from "./Context";
export function ContextProvider({ children }) {
  const [names, setNames] = useState(null);
  const [searchClick, setSearchClick] = useState(false);
  const [personClick , setPersonClick] = useState(false)
  return (
    <Context.Provider value={{ names, setNames, searchClick, setSearchClick , personClick , setPersonClick }}>
      {children}
    </Context.Provider>
  );
}

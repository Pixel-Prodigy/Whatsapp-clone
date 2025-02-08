import React, { useState } from "react";
import { Context } from "./Context";
export function ContextProvider({ children }) {
  const [names, setNames] = useState(null);
  const [searchClick, setSearchClick] = useState(false);
  return (
    <Context.Provider value={{ names, setNames, searchClick, setSearchClick }}>
      {children}
    </Context.Provider>
  );
}

import { useState } from "react";

import "./App.css";
import { Header } from "./components/layout/Header";
import { Right } from "./components/layout/Right";
import { Left } from "./components/layout/Left";
import { ContextProvider } from "./components/ui/context/ContextProvider";

function App() {
  const [count, setCount] = useState(0);
  return (
    <ContextProvider>
    <div className="bg-black h-full py-2  grid max-w-[1440px] mx-auto grid-cols-[0.5fr_5.3fr_9fr]">
<Header />  
<Left />
<Right />
    </div>
    </ContextProvider>
  );
}

export default App;

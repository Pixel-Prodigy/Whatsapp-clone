import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import { Header } from "./components/layout/Header";
import { Right } from "./components/layout/Right";
import { Left } from "./components/layout/Left";
import { ContextProvider } from "./components/ui/context/ContextProvider";
import { Mobile } from "./components/layout/formobile/Mobile";

const DesktopView = () => {
  return (
    <div className=" h-full 2xl:py-2 grid max-w-[1485px] bg-[#262524] mx-auto grid-cols-[0.5fr_5.6fr_9fr]">
      <Header />
      <Left />
      <Right />
    </div>
  );
};
const MobileView = () => {
  return (
    <Mobile />
  )
} 

function App() {
  const isMobile = useMediaQuery({ maxWidth: 840 });

  return (
    <ContextProvider>
      {isMobile ? <MobileView /> : <DesktopView />}
    </ContextProvider>
  );
}

export default App;

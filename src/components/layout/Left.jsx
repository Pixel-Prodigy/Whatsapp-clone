import React from "react";
import { LeftHeader } from "../ui/left/LeftHeader";
import { Persons } from "../ui/left/Persons";

export function Left({ children,}) {
  const  chatCount = 50 
  return (
    <div className="h-full bg-[#111b21] flex flex-col">
      <LeftHeader name="Chats" />
      <div className="scrollbar  flex flex-col  overflow-y-auto flex-1 max-h-[calc(100vh-153px)] ">
        {Array.from({length: chatCount}).map((_, index) => (
          <Persons key={index} />
        ))}
      </div>
      {children}
    </div>
  );
}

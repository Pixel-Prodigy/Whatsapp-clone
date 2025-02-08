import React from "react";
import { LeftHeader } from "../../ui/left/LeftHeader";
import { Persons } from "../../ui/left/Persons";
import { MobileFooter } from "./MobileFooter";

export function MobileLeft() {
  const chatCount = 80; 

  return (
    <div className="h-full bg-[#172128] pl-4 flex flex-col">
      <LeftHeader name={'Whatsapp'} />
      <div className=" flex flex-col overflow-scroll max-h-[83vh]  ">
        {Array.from({ length: chatCount }).map((_, index) => (
          <Persons key={index} />
        ))}
      </div>
     <MobileFooter />
    </div>
  );
}

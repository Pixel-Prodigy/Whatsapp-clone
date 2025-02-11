import React from "react";
export function ClickBoxItem({children}){
  return (
    <div className=" flex items-center w-full text-white/70 px-4 py-2 hover:bg-[#162229]">
   {children}
  </div>
  )
}
export function ClickBox({className, children}) {
  return (
    <div className={`bg-[#233138] transition-all duration-300  origin-top-right z-100 grid grid-cols-1 gap-1  py-3 h-fit w-50 absolute top-12 right-0 ${className}`}>
    {children}
    </div>
  );
}

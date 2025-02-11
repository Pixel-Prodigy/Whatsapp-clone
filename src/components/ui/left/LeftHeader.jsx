import React from "react";
import { HeaderBottom } from "./LeftHeaderBottom";
import { useState } from "react";
import { LeftHeaderTop } from "./LeftHeaderTop";
export function LeftHeader({name}) {
  return (
    <div className=" pl-4  flex flex-col gap-[7px]">
      <LeftHeaderTop name={name} />
      <div>
        <HeaderBottom />
      </div>
    </div>
  );
}

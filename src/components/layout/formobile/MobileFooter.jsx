import React from "react";
import { FaComments, FaRegCircle, FaUsers, FaPhone } from "react-icons/fa";

export function MobileFooter() {
  return (
    <div className="w-full flex justify-between px-8 pr-10 py-2 border-t-[1px] border-white/20 bg-[#080c0f] backdrop-blur-lg text-white text-center">
      <div className="flex flex-col justify-center items-center gap-1">
        <FaComments size={24} color="white" />
        <p>Chat</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <FaRegCircle size={24} color="white" />
        <p>Status</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <FaUsers size={24} color="white" />
        <p>Community</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <FaPhone size={24} color="white" />
        <p>Call</p>
      </div>
    </div>
  );
}

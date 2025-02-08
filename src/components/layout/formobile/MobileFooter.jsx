import React from "react";
import { FaComments, FaRegCircle, FaUsers, FaPhone } from "react-icons/fa";

export function MobileFooter() {
  return (
    <div className="w-full flex justify-between px-4 py-4 bg-[#212431] backdrop-blur-lg text-white text-center">
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

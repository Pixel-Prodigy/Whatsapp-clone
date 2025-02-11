import React, { useContext } from 'react'
import {useState} from "react"
import { Context } from '../context/Context';
import { FaSearch } from 'react-icons/fa';
import { ClickBox } from '../ClickBox';
export function RightHeader() {
  const [openBox, setOpenBox] = useState(false);
const {names} = useContext(Context)
  return (
    <div className="px-4 pb-3 bg-[#202c33] text-white flex items-center gap-4 rounded-t-lg shadow-md">
                <img
                  src={names.image}
                  alt={names.name}
                  className="w-13 h-13 rounded-full"
                />
                <span className="text-lg font-semibold flex flex-col">
                  {" "}
                  <span> {names.name}</span>
                  <span className="text-sm text-white/40">{`${names.name} ${names.name} ${names.name}`}</span>
                </span>
                <span className="ml-auto flex gap-3 items-center mr-4">
                  <span className="p-2">
                    <FaSearch className="    text-white/60  text-xl" />
                  </span>
                  <span
                    className={`relative transition-all flex items-center justify-center p-2 ${
                      openBox ? "bg-[#293238] rounded-full   absolute" : ""
                    }`}
                  >
                    <svg
                      onClick={() => setOpenBox(true)}
                      onBlur={() => setOpenBox(false)}
                      tabIndex={0}
                      viewBox="0 0 24 24"
                      height="27"
                      width="27"
                      preserveAspectRatio="xMidYMid meet"
                      className="text-white/70"
                      version="1.1"
                      x="0px"
                      y="0px"
                    >
                      <title>menu</title>
                      <path
                        fill="currentColor"
                        d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
                      ></path>
                    </svg>
    
                    {openBox && (
                     <ClickBox />
                    )}
                  </span>
                </span>
              </div>
  )
}

import React, { useState, useEffect, useContext } from "react";
import { faker } from "@faker-js/faker";
import { FiChevronDown } from "react-icons/fi";
import { Context } from "../context/Context";

export function Persons() {
  const [user, setUser] = useState(null);
const {personClick ,setPersonClick, setNames} = useContext(Context)
  useEffect(() => {
    const randomName = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const randomImage = faker.image.avatar();
    const randomDay = faker.date.recent().toLocaleDateString();

    setUser({
      name: randomName,
      image: randomImage,
      day: randomDay,
    });
  }, []);

  return (
    <div className="w-full items-center justify-between hover:bg-[#1f2d36] flex bg-transparent relative group" onClick={() => { setPersonClick(true); setNames({name: user.name , image:user.image})}}>
      <div className="flex gap-4 items-center w-full h-full">
        <img className="rounded-full h-14" src={user?.image} alt="User Avatar" />
        <div className="flex flex-col py-5 justify-center h-full border-t-[1px] border-white/10 w-full relative">
          <div className="flex overflow-hidden justify-between items-center pr-3">
            <h2 className="text-white/80 text-lg font-semibold">{user?.name}</h2>
            <p className="text-white/20 text-sm">{user?.day}</p>
          </div>
          <div className="flex items-center justify-between  w-full">
            <p className="text-white/50 text-sm ">
              {user?.name}: {`${user?.name} ${user?.name}`}
            </p>
            <FiChevronDown className="  text-white/50 transform  group-hover:-translate-x-4 stroke-3 text-2xl opacity-0 group-hover:opacity-100  transition-transform duration-100 ease-in-out" />
          </div>
        </div>
      </div>
    </div>
  );
}

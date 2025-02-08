import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { FiChevronDown} from "react-icons/fi"

export function Persons() {
  const [user, setUser] = useState(null);
const [show , setShow] = useState(false)
  useEffect(() => {
    const randomName = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const randomImage = faker.image.avatar();

    setUser({
      name: randomName,
      image: randomImage,
    });
  }, []);

  return (
    <div className={`w-full h-30 items-center justify-between hover:bg-[#1f2d36]  flex bg-transparent  relative`}>
      <div className="flex gap-4 items-center w-full h-full">
        <img
          className="rounded-full h-14"
          src={user?.image}
          alt="User Avatar"
        />
        <div className="flex flex-col py-5 justify-center h-full border-t-[1px] border-white/10 w-full relative">
          <h2 className="text-white/80 ">{user?.name}</h2>
          <p className="text-white/50 text-sm">{user?.name}</p>
        </div>
      </div>
    </div>
  );
}

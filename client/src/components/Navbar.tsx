import React from "react";
import { navType } from "@/types/navType";
import Link from "next/link";

const navItem: navType[] = [
  {
    displayName: "Home",
    href: "/",
  },
  {
    displayName: "Adopt",
    href: "/adopt",
  },
  {
    displayName: "Board",
    href: "/board",
  },
  {
    displayName: "About us",
    href: "/aboutus",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="mx-auto max-w-[960px] h-[60px]">
        <div className="flex justify-between items-center h-[60px]">
          <h2>Help me!</h2>
          <ul className="flex">
            {navItem.map((item, idx) => (
              <div key={idx} className="mr-8">
                <li>
                  <Link href={item?.href}>{item?.displayName}</Link>
                </li>
              </div>
            ))}
          </ul>
          <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

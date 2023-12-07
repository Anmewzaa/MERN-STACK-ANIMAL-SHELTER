import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { navType } from "../types/globalType";

const navItem: navType[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Adopt",
    href: "/adopt",
  },
  {
    name: "About",
    href: "/about",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useUserAuth();

  const handleSignout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="shadow-md w-full">
        <div className="md:flex items-center justify-between bg-white py-4 md:py-2 md:px-12 px-7 relative">
          <div className="font-bold text-3xl cursor-pointer flex items-center gap-1">
            <span className="font-amctic">Animal Shelter</span>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>
          <ul
            className={`absolute md:flex md:items-center md:pb-0 md:static md:z-auto bg-white pb-8 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "left-0" : "left-[-1000px]"
            }`}
          >
            {navItem.map((link) => (
              <li className="md:ml-8 md:my-0 my-7 font-semibold">
                <Link
                  to={link.href}
                  className="text-gray-800 hover:text-blue-400 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Link
              to={"/login"}
              className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static"
            >
              Login
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

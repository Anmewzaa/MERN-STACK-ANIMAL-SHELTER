import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const navItem = [
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
      <div className="shadow-sm w-full">
        <div className="md:flex items-center justify-between bg-white py-4 md:py-2 md:px-12 px-7 relative">
          <div className="font-bold text-3xl cursor-pointer flex items-center gap-1">
            <Link to={"/"} className="font-amctic">
              Animal Shelter
            </Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>
          <ul
            className={`absolute md:flex md:items-center md:pb-0 md:static md:z-auto bg-white pb-8 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in z-10 left-0 ${
              open ? "top-18" : "top-[-1000px]"
            }`}
          >
            {navItem.map((link) => (
              <li className="md:ml-8 md:my-0 my-7 font-semibold uppercase">
                <Link
                  to={link.href}
                  className="text-gray-800 hover:text-[#B562A8] duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {!user ? (
              <>
                <Link
                  to={"/login"}
                  className="btn bg-[#B562A8] hover:text-[#B562A8] hover:bg-white border hover:border-[#B562A8] text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static uppercase"
                >
                  Sign in
                </Link>
              </>
            ) : (
              <>
                <div className="dropdown dropdown-end md:ml-8">
                  <label tabIndex={0} className="btn">
                    {user.displayName}
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 "
                  >
                    <li>
                      <button onClick={handleSignout} className="uppercase">
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

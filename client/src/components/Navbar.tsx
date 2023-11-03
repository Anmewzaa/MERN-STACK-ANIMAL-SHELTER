import { navType } from "../types/globalType";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";

const navItem: navType[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Adopt",
    href: "/adopt",
  },
  // {
  //   name: "Board",
  //   href: "/board",
  // },
  {
    name: "About us",
    href: "/aboutus",
  },
];

const Navbar = () => {
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
      <div className="mx-auto max-w-[960px] h-[60px]">
        <div className="flex justify-between items-center h-[60px]">
          <h2>Animal Shelter</h2>
          <ul className="flex">
            {navItem.map((item, idx) => (
              <div key={idx} className="mr-8">
                <li>
                  <Link to={item?.href}>{item?.name}</Link>
                </li>
              </div>
            ))}
          </ul>
          {user && (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn m-1">
                  {user.displayName}
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/">Profile</Link>
                  </li>
                  <li>
                    <button onClick={handleSignout}>Sign out</button>
                  </li>
                </ul>
              </div>
            </>
          )}
          {!user && (
            <>
              <Link to={"/login"}>Sign in</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

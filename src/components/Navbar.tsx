import { useAuthContext } from "../hooks/useAuthContext";
import logo from "../assets/logo.svg";
import { useState } from "react";

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const auth = useAuthContext();

  return (
    <nav className="px-2 sm:px-4 py-2.5 bg-white shadow-md">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-6xl">
        <a href="/" className="flex items-center">
          <img src={logo} className="mr-3 h-7 sm:h-9" alt="Lingoline Logo" />
        </a>
        <div className="flex items-center">
          <span>{auth.clientPrincipal?.userDetails}</span>
          <button
            className=" inline-flex items-center p-2 ml-2 text-sm text-black rounded-full hover:scale-[1.1] hover:bg-slate-300 focus:outline-none transition"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
        <div className={`${showMenu ? "" : "hidden"} relative w-full z-10`}>
          <ul className="flex flex-col rounded-lg mt-1 bg-slate-100 border border-gray-300 absolute right-0 w md:text-sm md:font-medium">
            <li>
              <button
                className="block py-2 px-4 text-center rounded hover:bg-gray-200"
                onClick={auth.logout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";
import LogoLink from "./LogoLink";

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const auth = useAuthContext();

  return (
    <nav className="px-2 sm:px-4 py-2 sm:py-4 bg-white border border-b-gray-200">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-6xl">
        <LogoLink to="/home" />
        <div className="flex items-center">
          <button
            className=" inline-flex items-center p-1 text-sm text-black rounded-full hover:scale-[1.05] focus:outline-none transition"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="font-medium mr-1">My profile</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
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
          <ul className="flex flex-col rounded-lg p-1 bg-white shadow-md border border-gray-300 absolute right-0 top-0 md:text-sm md:font-medium">
            <li className="py-2 px-4 rounded hover:bg-gray-200 flex space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span>{auth.clientPrincipal?.userDetails}</span>
            </li>
            <button
              className="py-2 px-4 rounded hover:bg-gray-200 flex space-x-3"
              onClick={auth.logout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              <span>Logout</span>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

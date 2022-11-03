import { useState } from "react";
import { Link } from "react-router-dom";
import LogoLink from "./LogoLink";

type Props = {};

const navItems = ["one", "two", "three", "four"];

const LandingNavbar = (props: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((menuState) => !menuState);
  };

  return (
    <nav className="px-2 sm:px-4 py-2.5 bg-white">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <LogoLink />
        <button
          className=" inline-flex items-center p-2 ml-2 text-sm text-black rounded-lg md:hidden hover:bg-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="sr-only">
            {openMenu ? "close menu" : "open menu"}
          </span>
          {openMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
          <span className="sr-only">Open main menu</span>
        </button>
        <div
          className={`${
            openMenu ? "" : "hidden"
          } relative w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col p-4 rounded-lg mt-2 bg-slate-100 border border-gray-300 absolute left-0 right-0 md:static md:flex-row md:items-center md:space-x-8 md:mt-0 md:text-sm md:font-medium md:bg-transparent md:m-0 md:border-0">
            {navItems.map((navString) => (
              <li key={navString} className="md:hover:scale-110 transition">
                <a
                  href="#"
                  className="block py-2 px-4 text-center rounded hover:bg-slate-200 md:hover:bg-transparent md:border-0 md:hover:text-primary_hover md:p-0"
                >
                  {navString}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                onClick={() => setOpenMenu(false)}
                className="block py-2 px-4 text-center rounded mt-2 bg-primary hover:bg-primary_hover transition text-white md:mt-0"
              >
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;

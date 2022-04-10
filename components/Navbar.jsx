import React from "react";
import Image from "next/image";
import Link from "next/link";
import { colors } from "constants/colors";

const Navbar = ({ isSticky }) => {
  return (
    <nav className={`flex items-center bg-slate-700 w-full`}>
      {/* Logo */}
      <div className=" pr-6 lg:pr-10">
        <Image
          src={"/images/logo.png"}
          alt="TheBlackkeyArchitects"
          width={"230px"}
          height={"90px"}
        />
      </div>
      {/* Nav items container */}
      <div className="justify-around md:w-5/12 m-2 p-2 hidden md:flex text-gray-200">
        {/* Nav items */}
        <Link href={"/"}>
          <span
            className={`font-semibold hover:${colors?.textAction} cursor-pointer `}
          >
            Home
          </span>
        </Link>
        <Link href={"/"}>
          <span
            className={`font-semibold hover:${colors?.textAction} cursor-pointer `}
          >
            Projects
          </span>
        </Link>
        <Link href={"/"}>
          <span
            className={`font-semibold hover:${colors?.textAction} cursor-pointer `}
          >
            Team
          </span>
        </Link>
        <Link href={"/"}>
          <span
            className={`font-semibold hover:${colors?.textAction} cursor-pointer `}
          >
            About us
          </span>
        </Link>
        <Link href={"/"}>
          <span
            className={`font-semibold hover:${colors?.textAction} cursor-pointer `}
          >
            Contact us
          </span>
        </Link>
      </div>
      {/* <div className="space-y-1.5 ml-auto mr-6 hover:animate-pulse cursor-pointer md:hidden">
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </div> */}
    </nav>
  );
};

export default Navbar;

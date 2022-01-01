import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ isSticky }) => {
  return (
    <nav className={`flex items-center bg-gray-100 w-full`}>
      {/* Logo */}
      <div className=" px-6 pt-1.5 lg:px-16 bg-indigo-200">
        <Image
          src={"/images/logo.png"}
          alt="TheBlackkeyArchitects"
          width={"150px"}
          height={"70px"}
        />
      </div>
      {/* Nav items container */}
      <div className="justify-around md:w-5/12 m-2 p-2 hidden md:flex">
        {/* Nav items */}
        <Link href={"/"}>
          <span className="font-semibold hover:text-orange-500 cursor-pointer ">
            Home
          </span>
        </Link>
        <Link href={"/"}>
          <span className="font-semibold hover:text-orange-500 cursor-pointer ">
            Projects
          </span>
        </Link>
        <Link href={"/"}>
          <span className="font-semibold hover:text-orange-500 cursor-pointer ">
            Team
          </span>
        </Link>
        <Link href={"/"}>
          <span className="font-semibold hover:text-orange-500 cursor-pointer ">
            About us
          </span>
        </Link>
        <Link href={"/"}>
          <span className="font-semibold hover:text-orange-500 cursor-pointer ">
            Contact us
          </span>
        </Link>
      </div>
      <div className="space-y-1.5 ml-auto mr-6 hover:animate-pulse cursor-pointer md:hidden">
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10  bg-opacity-100 backdrop-blur-sm">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="text-2xl md:text-5xl font-bold">
          <div className="flex gap-2">
            <span className="">𝘴𝘢𝘪𝘧</span>
            <img
              src="/ball.png"
              className="w-8 h-8 sm:w-12 sm:h-12 animate-bounce"
            />
          </div>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded "
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 justify-center items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <ThemeToggle />
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      <div className="absolute  right-[95px] top-[8px] sm:top-[12px] sm:right-[135px] md:hidden flex">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

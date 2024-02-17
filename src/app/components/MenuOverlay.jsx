import React from "react";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center z-50 opacity-100 backdrop-blur-lg font-semibold">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
      <ThemeToggle />
    </ul>
  );
};

export default MenuOverlay;

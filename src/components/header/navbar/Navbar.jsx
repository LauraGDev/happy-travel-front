import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isLogged }) => {
  return (
    <nav className="flex justify-between px-4 items-center rounded-full bg-yellow w-[80%] h-12 shadow-[0_0_60px_20px_rgba(230,252,246,1)] z-[999] border-[rgba(230,252,246,1)] border-2 lg:bg-transparent lg:shadow-none lg:border-none lg:w-auto lg:h-auto lg:static lg:space-x-3 ">
      <NavLink to={"/"} className="">
        <img src="/Assets/Home-icon.svg" alt="icono-inicio" className="w-8" />
      </NavLink>

      {isLogged && (
        <NavLink to={"/create"} className="">
          <img
            src="/Assets/Create-icon.svg"
            alt="icono-crear"
            className="w-8"
          />
        </NavLink>
      )}

      {isLogged ? (
        <NavLink
          to={"/profile"}
          className="flex flex-col items-center justify-center"
        >
          <img
            src="/Assets/Logout-icon.svg"
            alt="icono-salir"
            className="w-8"
          />
        </NavLink>
      ) : (
        <NavLink
          to={"/login"}
          className="flex flex-col items-center justify-center"
        >
          <img
            src="/Assets/Avatar-icon.svg"
            alt="icono-avatar"
            className="w-8"
          />
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;

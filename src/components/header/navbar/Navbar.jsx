import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({isLogged}) =>
{
  

  return (
    <nav className="flex justify-between px-4 items-center rounded-full bg-yellow  w-[80%] h-12 shadow-[0_0_60px_20px_rgba(230,252,246,1)] z-[999]  border-[rgba(230,252,246,1)] border-2 sticky">
      <NavLink to={"/"} className=" ">
        <img src="/Assets/Home-icon.svg" alt="home-icon" className="w-8" />
      </NavLink>
      <NavLink to={"/create"} className="hidden">
        <img src="/Assets/Create-icon.svg" alt="create-icon" className="w-8" />
      </NavLink>

      {isLogged ? (
        <NavLink
          to={"/profile"}
          className="flex flex-col items-center justify-center"
        >
          <img
            src="/Assets/Logout-icon.svg"
            alt="profile-icon"
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
            alt="avatar-icon"
            className="w-8"
          />
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;

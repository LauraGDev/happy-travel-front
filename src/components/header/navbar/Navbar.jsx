import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="flex justify-between px-4 items-center rounded-full bg-yellow w-[80%] h-12 shadow-[0_0_60px_20px_rgba(230,252,246,0.5)] z-[99999] border-[rgba(230,252,246,1)] border-2 lg:bg-transparent lg:shadow-none lg:border-none lg:w-auto  lg:static lg:space-x-3 pointer-events-auto">
      <NavLink to={"/"} className="">
        <img src="/Assets/Home-icon.svg" alt="icono-inicio" className="w-8" />
      </NavLink>

      {isAuthenticated && (
        <NavLink to={"/create"}>
          <img
            src="/Assets/Create-icon.svg"
            alt="icono-crear"
            className="w-8"
          />
        </NavLink>
      )}

      {isAuthenticated ? (
        <NavLink
          onClick={handleLogout}
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
          to={"/sign-in"}
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

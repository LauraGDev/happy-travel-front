import React from "react";
import Navbar from "./navbar/Navbar";

const Header = ({ isLogged }) => {
  return (
    <div className="flex flex-col min-h-screen justify-start">
      <header className="w-full bg-white py-4 flex justify-center lg:justify-between lg:items-center px-8">
        <div className="flex items-center justify-center">
          <img src="/Assets/Logo.svg" alt="logo" className="h-16" />
        </div>
        <div className="hidden lg:flex mt-7">
          <Navbar isLogged={isLogged} />
        </div>
      </header>
      <div className="w-full flex justify-center">
        <div className=" lg:w-[95%] lg:border-b-2 lg:border-blue "></div>
      </div>

      <div className="lg:hidden fixed bottom-4 w-full h-10 flex justify-center items-center">
        <Navbar isLogged={isLogged} />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <header className="w-full bg-white py-4  flex justify-center">
          <div className="container mx-auto flex justify-center items-center">
            <img src="/Assets/Logo.svg" alt="Logo" className="h-16" />
          </div>
        </header>
        <div className="lg:hidden fixed bottom-4 w-full h-10 flex justify-center items-center">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Header;

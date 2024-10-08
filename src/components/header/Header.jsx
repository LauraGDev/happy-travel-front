import SearchBar from "./search/SearchBar";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import ResultsList from "./search/ResultsList";

const Header = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);

  return (
    <div className="">
      <header className="relative w-full px-8 justify-center item-center py-3 flex flex-col lg:flex-row lg:justify-between  lg:items-end">
        <div className="flex justify-center items-center mb-4 lg:mb-0">
          <img src="/Assets/Logo.svg" alt="logo" className="h-16" />
        </div>

        <div className="flex items-center justify-center lg:space-x-4">
          {location.pathname === "/" && (
            <div className="flex flex-col justify-center">
              <SearchBar setResults={setResults} />
              <ResultsList results={results} />
            </div>
          )}

          <div className="hidden lg:flex items-center">
            <Navbar  />
          </div>
        </div>
      </header>
      <div className="hidden lg:flex justify-center w-full">
        <div className="w-[95%] border-b-2 border-blue"></div>
      </div>
      <div className="fixed bottom-2 w-full h-14 flex justify-center items-center z-[9999] pointer-events-auto lg:hidden right-0">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;

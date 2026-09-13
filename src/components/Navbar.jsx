import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-[#0f141c] w-full px-6 py-3 flex items-center justify-between ">
      <Link
        onClick={() => setIsOpen(false)}
        className="text-green-500 text-2xl font-bold"
        to="/"
      >
        MakeADay
      </Link>
      {/* Navbar */}
      <div
        className={` absolute top-16 left-0 z-40 bg-gray-950 p-5 w-full  flex flex-col
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
         md:translate-x-0
         md:static md:bg-transparent md:flex-row md:w-[80%] md:items-center md:justify-end gap-6`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="rounded-xl font-semibold text-white hover:text-green-500 transition-colors"
        >
          Counter
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          to="/age-calculate"
          className="rounded-xl text-white font-semibold hover:text-green-500 transition-colors"
        >
          Age Calculator
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          to="/temperature-calculate"
          className="rounded-xl text-white font-semibold hover:text-green-500 transition-colors"
        >
          Temperature
        </Link>
        
      </div>

      {/* Mobile Toggler */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-10 w-10 items-center justify-center cursor-pointer md:hidden "
      >
        <div className="space-y-1.5">
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></span>

          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </div>
      </button>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
        ></div>
      )}
    </div>
  );
}

export default Navbar;

"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const menuItems = [
    { label: "About" },
    { label: "Qualification" },
    { label: "Blogs" },
    { label: "Contact" },
  ];
  const [selected, setSelected] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative w-full max-w-[1200px] h-[50px] bg-[#171717] text-white px-10 lg:px-2.5 rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] backdrop-blur-[15px] border border-white mx-auto flex items-center justify-between z-50">
      {/* Left Menu (Desktop) */}
      <div className="hidden lg:flex flex-1 justify-start gap-2.5">
        {menuItems.slice(0, 2).map((item) => (
          <div
            key={item.label}
            className="flex w-[45%] items-center justify-around"
          >
            <button
              className={`w-[139px] h-[40px] flex items-center justify-center rounded-[60px] text-base font-medium transition duration-300 ${selected === item.label ? "bg-[#FD853A] font-bold" : "bg-transparent hover:bg-[#232323]"}`}
              onClick={() => setSelected(item.label)}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>

      {/* Logo */}
      <div
        onClick={() => setSelected("Home")}
        className={`flex flex-col items-center flex-shrink-0 cursor-pointer border-x-2 px-12  rounded-full ${selected === "Home" ? "border-[#fd853a]" : " border-transparent hover:bg-[#232323]"} transition duration-300`}
      >
        <div className=" translate-y-2 text-[#fd853a] rounded-full flex items-center justify-center mb-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <text x="4" y="18" fontSize="16" fontWeight="bold" fill="#fd853a">
              JR
            </text>
          </svg>
        </div>
        <span className="font-bold -translate-y-2 text-sm sm:text-base lg:text-lg tracking-wide">
          Jastan Ric
        </span>
      </div>

      {/* Right Menu (Desktop) */}
      <div className="hidden lg:flex flex-1 justify-end gap-4">
        {menuItems.slice(2).map((item) => (
          <div
            key={item.label}
            className="flex w-[45%] items-center justify-around"
          >
            <button
              className={`w-[139px] h-[40px] flex items-center justify-center rounded-[60px] text-base font-medium transition duration-300 ${selected === item.label ? "bg-[#FD853A] font-bold" : "bg-transparent hover:bg-[#232323]"}`}
              onClick={() => setSelected(item.label)}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#FD853A] hover:bg-[#e67a2e] transition-colors"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className=" absolute top-[100%] left-0 right-0 mt-2 bg-[#171717] rounded-[25px] border border-white backdrop-blur-[15px] lg:hidden z-40">
          <div className="flex flex-col p-4 gap-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className={`w-full h-[50px] flex items-center justify-center rounded-[25px] text-base font-medium transition duration-300 ${selected === item.label ? "bg-[#FD853A] font-bold" : "bg-transparent hover:bg-[#232323]"}`}
                onClick={() => {
                  setSelected(item.label);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

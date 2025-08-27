import React, { useState } from "react";
import { navItems } from "../data/data";
import { Link } from "react-router";

const SearchIcon = () => (
  <svg
    className="absolute left-3 top-2.5 text-[#9CA3AF]"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FFFFFF] shadow-md px-4 py-3 max-w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-normal text-[#2094F3] font-Inter">
          <Link to="/">Dawglass</Link>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {/* {navItems.map((navItem) => (
            <li
              key={navItem.name}
              className={`${
                navItem.active && "border-b-3 border-[#2094F3]"
              } px-2 pb-1`}
            >
              <a
                href={navItem.href}
                className={`font-normal font-Inter ${
                  navItem.active ? "text-[#2094F3]" : "text-[#374151]"
                } `}
              >
                {navItem.name}
              </a>
            </li>
          ))} */}

          {navItems.map((item) => (
            <li
              key={item.name}
              className={item.active && "border-b-3 border-[#2094F3]"}
            >
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
        {/* Search + Auth (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search auctions..."
              className="border-none rounded pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E7E5E4]"
            />
            <SearchIcon />
          </div>
          <button className="bg-white border border-[#E7E5E4] text-[#374151] cursor-pointer py-2 px-4 rounded-md font-Inter">
            Login
          </button>
          <button className="bg-[#EF4444] text-white px-4 py-2 rounded-md font-Inter cursor-pointer">
            Register
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* Hamburger and Close icons using SVG */}
          {menuOpen ? (
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-2 pb-4">
          <ul className="flex flex-col space-y-2">
            {navItems.map((navItem) => (
              <li
                key={navItem.name}
                className={`${
                  navItem.active
                    ? "border-b-blue-800 border-4"
                    : "text-[#374151]"
                }`}
              >
                <a
                  href={navItem.href}
                  className={`block py-2 px-4 rounded font-Inter ${
                    navItem.active ? "text-white" : "text-[#374151]"
                  } `}
                >
                  {navItem.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col space-y-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search auctions..."
                className="w-full border-none rounded pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <SearchIcon />
            </div>
            <button className="bg-white border border-[#E7E5E4] text-[#374151] cursor-pointer py-2 px-4 rounded-md font-Inter hover:bg-blue-50">
              Login
            </button>
            <button className="bg-[#EF4444] text-white cursor-pointer px-4 py-2 rounded-md font-Inter ">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

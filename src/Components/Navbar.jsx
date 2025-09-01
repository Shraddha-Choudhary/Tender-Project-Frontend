import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#101010] py-4">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6">
        <div className="flex items-center">
          <img
            src="src/Assets/Images/logo.jpg"
            alt="Logo"
            className="w-28  h-12 drop-shadow-lg"
          />
        </div>

        <div
          className="hidden md:flex items-center px-12 py-3 gap-8 
            bg-gradient-to-r from-[#202020] to-[#272727] 
            rounded-full shadow-lg border border-[#373737]"
        >
          <ul className="flex space-x-10 text-gray-200 font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-red-400 transition cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#about"
                className="hover:text-red-400 transition cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/#services"
                className="hover:text-red-400 transition cursor-pointer"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/#achievements"
                className="hover:text-red-400 transition cursor-pointer"
              >
                Our Achievement
              </Link>
            </li>
            <li>
              <Link
                to="/tenderlist"
                className="hover:text-red-400 transition cursor-pointer"
              >
                Live Tender
              </Link>
            </li>
            <li>
              <Link
                to="/#download"
                className="hover:text-red-400 transition cursor-pointer"
              >
                Download
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:text-red-400 transition cursor-pointer"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-red-400 transition cursor-pointer"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Admin + Language (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/admindashboard"> 
          <button
            className="bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-2 rounded-full font-semibold 
              shadow-sm hover:shadow-md hover:from-orange-600 hover:to-yellow-600  
              border border-transparent hover:border-white
              transition transform hover:scale-105 duration-300"
          >
            Admin
          </button>
          </Link>

          <select className="bg-white text-black  px-3 py-2 rounded-full border border-gray-300 shadow-sm">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#202020] border-t border-[#373737] shadow-lg px-6 py-4">
          <ul className="flex flex-col space-y-4 text-gray-200 font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-red-400 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#about"
                className="hover:text-red-400 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/#services"
                className="hover:text-red-400 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/#achievements"
                className="hover:text-red-400 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Our Achievement
              </Link>
            </li>
            <li>
              <Link
                to="/#live-tender"
                className="hover:text-red-400 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Live Tender
              </Link>
            </li>
            <li>
              <Link
                to="/#download"
                className="hover:text-red-400 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Download
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:text-red-400 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-red-400 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile - Admin + Language */}

          <div className="mt-6 flex flex-col gap-3 items-start">
            <button
              className="bg-gradient-to-r from-orange-500 to-yellow-500 px-5 py-1.5 rounded-full font-medium 
      shadow-sm hover:shadow-md hover:from-orange-600 hover:to-yellow-600  
      border border-transparent hover:border-white
      transition transform hover:scale-105 duration-300 text-sm"
            >
              Admin
            </button>

            <select className="bg-white text-black px-2 py-1 rounded-full border border-gray-300 shadow-sm text-sm">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

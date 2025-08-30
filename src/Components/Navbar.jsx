import React from "react";

function Navbar() {
    return (
        <nav className="bg-[#101010] py-4">
            <div className="max-w-8xl mx-auto flex items-center justify-between px-6">

                {/* Logo - Left Side */}
                <div className="flex items-center">
                    <img
                        src="src/Assets/Images/logo.jpg"
                        alt="Logo"
                        className="w-14 h-auto drop-shadow-lg"
                    />
                </div>

                {/* Capsule Container - Center */}
                <div className="hidden md:flex items-center px-14 py-3 gap-8 
                    bg-gradient-to-r from-[#202020] to-[#272727] 
                    rounded-full shadow-lg border border-[#373737]">
                    <ul className="flex space-x-10 text-gray-200 font-medium">
                        <li className="hover:text-red-400 transition cursor-pointer">Home</li>
                        <li className="hover:text-red-400 transition cursor-pointer">About</li>
                        <li className="hover:text-red-400 transition cursor-pointer">Our Services</li>
                        <li className="hover:text-red-400 transition cursor-pointer">Our Achievement</li>
                        <li className="hover:text-red-400 transition cursor-pointer">Live Tender</li>
                        <li className="hover:text-red-400 transition cursor-pointer">Download</li>
                        <li className="hover:text-red-400 transition cursor-pointer">FAQ</li>
                        <li className="hover:text-red-400 transition cursor-pointer">Contact Us</li>
                    </ul>
                </div>

                {/* Right Section - Admin + Language */}
                <div className="flex items-center gap-4">


                    <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-2 rounded-full font-semibold 
                                 shadow-sm hover:shadow-md hover:from-orange-600 hover:to-yellow-600  border border-transparent hover:border-white
                                 transition transform hover:scale-105 duration-300">
                        Admin
                    </button>



                    <select className="bg-white text-black px-3 py-1 rounded-full border border-gray-300 shadow-sm">
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

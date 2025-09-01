// import React from "react";
// import { FcGoogle } from "react-icons/fc";

// function Login() {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-200 " >
//             <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md ">
//                 {/* Title */}
//                 <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//                     Pragya Associates, <br /> Madhya Pradesh, India
//                 </h1>

//                 {/* Login Form */}
//                 <form className="space-y-4">
//                     <div>
//                         <label className="block text-gray-800 font-semibold mb-1">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             placeholder="Enter your email"
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 hover:border-gray-400 transition"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-gray-800 font-semibold mb-1">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             placeholder="Enter your password"
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 hover:border-gray-400 transition"
//                         />
//                     </div>


//                     <button
//                         type="submit"
//                         className="px-16 py-2 text-sm font-semibold text-white rounded-lg shadow-md 
//              bg-gradient-to-r from-orange-500 to-yellow-500 
//              hover:opacity-90 transition duration-300 mx-auto block"
//                     >
//                         Login
//                     </button>

//                 </form>

//                 {/* Divider */}
//                 <div className="flex items-center my-4">
//                     <div className="flex-grow h-px bg-gray-300"></div>
//                     <span className="px-3 text-gray-500 text-sm">OR</span>
//                     <div className="flex-grow h-px bg-gray-300"></div>
//                 </div>

//                 {/* Google Login */}
//                 <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 shadow-sm hover:shadow-md transition">
//                     <FcGoogle className="text-xl mr-2" />
//                     <span className="text-gray-700 font-medium">Login with Google</span>
//                 </button>

//                 {/* Footer */}
//                 <p className="text-sm text-gray-500 text-center mt-6">
//                     © 2025 Pragya Associates. All rights reserved.
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default Login;

import React from "react";
import { FcGoogle } from "react-icons/fc";

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="flex bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-5xl">
                
                {/* Left Side - Card Style Section */}
                <div
                    className="hidden md:flex flex-col items-center justify-center 
                    bg-[#333] text-white w-1/2 p-10 relative overflow-hidden
                    rounded-l-2xl shadow-xl"
                >
                    {/* Decorative Gray Circle Overlays */}
                    <div className="absolute -top-16 -left-20 w-72 h-72 bg-gray-600 rounded-full opacity-30 blur-3xl"></div>
                    <div className="absolute -bottom-16 -right-20 w-80 h-80 bg-gray-700 rounded-full opacity-20 blur-3xl"></div>

                    {/* Logo */}
                    <img
                        src="src/Assets/Images/logo.jpg" // 👈 apna logo path daalna
                        alt="Pragya Solutions Logo"
                        className="w-32 h-32 mb-6 rounded-full shadow-lg border-4 border-gray-500 hover:scale-105 transition-transform duration-300 z-10"
                    />

                    <h2 className="text-3xl font-extrabold tracking-wide z-10">
                        Pragya Solutions
                    </h2>

                    <p className="text-sm text-gray-300 mt-3 text-center px-6 leading-relaxed z-10">
                        Empowering Businesses with{" "}
                        <span className="text-gray-100 font-semibold">Smart IT Solutions</span>  
                        that drive innovation, efficiency, and growth.
                    </p>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-10">
                    {/* Title */}
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Pragya Associates, <br /> Madhya Pradesh, India
                    </h1>

                    {/* Login Form */}
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-800 font-semibold mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 hover:border-gray-400 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-800 font-semibold mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 hover:border-gray-400 transition"
                            />
                        </div>

                        <button
                            type="submit"
                            className="px-16 py-2 text-sm font-semibold text-white rounded-lg shadow-md 
                            bg-gradient-to-r from-orange-500 to-yellow-500 
                            hover:opacity-90 transition duration-300 mx-auto block"
                        >
                            Login
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-4">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-3 text-gray-500 text-sm">OR</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>

                    {/* Google Login */}
                    <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 shadow-sm hover:shadow-md transition">
                        <FcGoogle className="text-xl mr-2" />
                        <span className="text-gray-700 font-medium">Login with Google</span>
                    </button>

                    {/* Footer */}
                    <p className="text-sm text-gray-500 text-center mt-6">
                        © 2025 Pragya Associates. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;

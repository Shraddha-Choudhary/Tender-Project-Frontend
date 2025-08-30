import React from "react";

function Subscription() {
  return (
    <nav className="bg-[#0f2c53] text-white flex items-center justify-between shadow-md">
      {/* Gradient Background Section */}
      <div className="flex items-center px-6 py-2 gap-6 w-full bg-gradient-to-r from-[#ffcc00] via-[#ff9900] to-[#ff6600]">
        {/* Subscribe Button - Left Side */}
        <button
          className="bg-white text-[#0f2c53] px-10 py-2 rounded-full font-semibold shadow-md 
                     hover:bg-blue-400 hover:text-black transition-all duration-300 
                     animate-[moveLeftRight_2s_ease-in-out_infinite]"
        >
          Subscribe →
        </button>

        {/* Text - Right Side (Scroll just after button) */}
        <div className="relative overflow-hidden flex-1">
          <p
            className="whitespace-nowrap text-[#272727]  font-bold text-lg sm:text-lg md:text-lg
                       animate-[scrollText_20s_linear_infinite]"
          >
            Welcome to Tender Management System • Smart Way to Handle Your
            Tenders • Secure & Transparent Bidding • Manage. Monitor. Win
            Tenders.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes scrollText {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          @keyframes moveLeftRight {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(15px); }
          }
        `}
      </style>
    </nav>
  );
}

export default Subscription;



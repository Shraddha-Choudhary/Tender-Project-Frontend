

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#202020] to-[#272727] text-white shadow-lg border-t border-[#373737]">
            <div className="max-w-7xl mx-auto px-6 pt-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">PRAGYA ASSOCIATES</h2>
                    <p className="text-gray-300 leading-relaxed">
                        "Empowering Your e-Tender Success: Expert Guidance, Seamless Process, Trusted Results."
                    </p>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>› Digital Signature</li>
                        <li>› Firm Registration</li>
                        <li>› Company Registration</li>
                        <li>› PWD License Registration</li>
                        <li>› PAN Card Registration</li>
                        <li>› GST Registration</li>
                        <li>› MSME Registration</li>
                        <li>› EPF & ESIC Registration</li>
                        <li>› FSSAI Registration</li>
                        <li>› MP PWD Contractor License</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>› Home</li>
                        <li>› About Us</li>
                        <li>› Our Service</li>
                        <li>› Our Achievement</li>
                        <li>› Live Tender</li>
                        <li>› Download</li>
                        <li>› FAQ</li>
                        <li>› Contact Us</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                    <p className="flex items-start space-x-3 text-gray-300">
                        <FaMapMarkerAlt className="mt-1 text-orange-500" />
                        <span>
                            Pragya Associates, Off. No. 22, Stadium Campus, Panna Road, <br />
                            Chhatarpur, Dist. Chhatarpur, Madhya Pradesh, PIN 471001
                        </span>
                    </p>
                    <p className="flex items-center mt-3 space-x-3 text-gray-300">
                        <FaPhoneAlt className="text-orange-500" />
                        <span>7566989873</span>
                    </p>
                    <p className="flex items-center mt-3 space-x-3 text-gray-300">
                        <FaEnvelope className="text-orange-500" />
                        <span>info@pragyasolution.com</span>
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}

            <div className="border-t border-[#373737] mt-8 py-4 flex items-center justify-between px-6 text-gray-400 text-sm relative">

                {/* Centered Text */}
                <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
                    <p>
                        © Copyright <span className="text-white font-semibold">Pragya Associates</span> All Rights Reserved.
                        <br/>  Designed by Arvis IT Solutions.
                    </p>
                </div>

                {/* Scroll To Top (Right Side) */}
                <a
                    href="#top"
                    className="bg-orange-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 ml-auto"
                >
                    <FaArrowUp className="text-white" />
                </a>
            </div>

        </footer>
    );
}

export default Footer;

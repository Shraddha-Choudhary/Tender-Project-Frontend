import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#202020] to-[#272727] text-white">
      {/* Top Contact Info Section */}
      <div className="max-w-6xl mx-auto py-12 px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Any Questions?</h2>
        <p className="text-center text-gray-300 mb-12">
          If you have any <span className=" font-semibold">QUESTIONS</span> or <span className=" font-semibold">ENQUIRIES</span>, feel free to <span className=" font-semibold">CONTACT US</span>. We're here to <span className=" font-semibold">ASSIST</span> you!
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Address */}
          <div className="bg-[#1e1e1e] p-8 rounded-lg shadow-md border border-[#373737] flex flex-col items-center">
            <div className="flex items-center justify-center text-red-500 text-4xl mb-4">
              <FaMapMarkerAlt />
            </div>
            <p className="text-center">
              Pragya Associates,<br />
              Off. No 20, Stadium Campus,<br />
              Panna Road, Chhatarpur,<br />
              Dist. Chhatarpur, Madhya Pradesh,<br />
              PIN 471001
            </p>
          </div>

          {/* Phone */}
          <div className="bg-[#1e1e1e] p-8 rounded-lg shadow-md border border-[#373737] flex flex-col items-center">
            <div className="flex items-center justify-center text-red-500 text-4xl mb-4">
              <FaPhoneAlt />
            </div>
            <p className="text-center">+91 76960 - 89873</p>
          </div>

          {/* Email */}
          <div className="bg-[#1e1e1e] p-8 rounded-lg shadow-md border border-[#373737] flex flex-col items-center">
            <div className="flex items-center justify-center text-red-500 text-4xl mb-4">
              <FaEnvelope />
            </div>
            <p className="text-center">info@pragyasolution.co.in</p>
          </div>
        </div>
      </div>

      {/* Contact Form + Map Side by Side */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <div className="bg-[#1e1e1e] rounded-lg shadow-md border border-[#373737] p-10 w-full">
          <h3 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h3>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-md border border-[#444] focus:ring-2 focus:ring-[#555]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-md border border-[#444] focus:ring-2 focus:ring-[#555]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-md border border-[#444] focus:ring-2 focus:ring-[#555]"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-md border border-[#444] focus:ring-2 focus:ring-[#555]"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="rounded-lg overflow-hidden shadow-lg border border-[#373737] w-full">
          <h3 className="text-3xl font-bold mb-6 text-center">Our Location</h3>
          <iframe
            title="Pragya Associates Location"
            src="https://www.google.com/maps?q=Pragya+Associates,+Stadium+Campus,+Panna+Road,+Chhatarpur,+Madhya+Pradesh+471001&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;

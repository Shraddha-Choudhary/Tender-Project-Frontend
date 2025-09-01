// import React from "react";
// import { motion } from "framer-motion"; 
// const About = () => {
//     const cardVariants = {
//       hidden: { x: -200, opacity: 0 },
//       visible: (i) => ({
//         x: 0,
//         opacity: 1,
//         transition: { duration: 0.8, delay: i * 0.3 },
//       }),
//     };
//   return (
//     <section className="bg-gray-100  py-12 px-6">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-5xl font-bold text-black mb-6 font-poppins">
//           About Us
//         </h2>

//         <p className="text-lg text-black mb-8 font-poppins">
//           Tender Management System helps you manage, monitor, and win tenders
//           easily.
//         </p>

//         <div className="grid md:grid-cols-3 gap-6">
//           {/* Card 1 */}
//           <motion.div
//             custom={0}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             className="bg-gradient-to-r from-[#eed78e] via-[#f5cf97] to-[#ffd54f] rounded-2xl shadow p-6"
//           >
//             <h3 className="text-xl font-semibold text-gray-700 mb-3">
//               ✔ Secure & Transparent Bidding
//             </h3>
//             <p className="text-black">
//               Ensures every tender process is fair, clear, and secure.
//             </p>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div
//             custom={1}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             className="bg-gradient-to-r from-[#eed78e] via-[#f5cf97] to-[#ffd54f] rounded-2xl shadow p-6"
//           >
//             <h3 className="text-xl font-semibold text-gray-700 mb-3">
//               ✔ Easy Tender Monitoring
//             </h3>
//             <p className="text-black">
//               Track all your tenders in one place with real-time updates.
//             </p>
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div
//             custom={2}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             className="bg-gradient-to-r from-[#eed78e] via-[#f5cf97] to-[#ffd54f] rounded-2xl shadow p-6"
//           >
//             <h3 className="text-xl font-semibold text-gray-700 mb-3">
//               ✔ Real-time Notifications
//             </h3>
//             <p className="text-black">
//               Never miss an opportunity with instant alerts & updates.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";

// Word animation
const WordScroll = ({ text }) => {
  const words = text.split(" ");
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="text-blue-600 font-bold text-xl md:text-2xl"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

function About() {
  return (
    <section className="bg-[#eaf4ff] py-16 px-6 md:px-20">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Images */}
        <div className="space-y-6">
          <motion.img
            src="src/Assets/Images/about.webp"
            alt="About 1"
            className="rounded-xl shadow-lg"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

        </div>

        {/* Right Side - Content */}
        <div>
          <WordScroll text="ABOUT COMPANY" />
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
            Welcome to <span className="text-blue-600">E-Tender</span>
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            E-tender process is the process of managing tenders in an electronic
            manner and their selection through committees. In this, tenderers
            submit information, documents, and proposals on an online platform,
            which are examined by committees that assess their qualifications
            and proposals. The committees open the tenders and select the
            tenderers who then go on to work on awarded projects.
          </p>

          {/* Icons Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center">
            <div className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition">
              <span className="text-3xl">👨‍💼</span>
              <p className="mt-2 font-semibold text-sm">Qualified Team</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition">
              <span className="text-3xl">👍</span>
              <p className="mt-2 font-semibold text-sm">Individual Approach</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition">
              <span className="text-3xl">✅</span>
              <p className="mt-2 font-semibold text-sm">100% Success</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition">
              <span className="text-3xl">💡</span>
              <p className="mt-2 font-semibold text-sm">Free Consulting</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features Section */}
      <div className="mt-20 text-center">
        <p className="text-lg text-gray-700 mb-8">
          Tender Management System helps you manage, monitor, and win tenders
          easily.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
                ✅ Secure & Transparent Bidding
              </h3>
              <p className="mt-3 text-gray-600 group-hover:text-gray-900">
                Ensures every tender process is fair, clear, and secure.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
                📊 Easy Tender Monitoring
              </h3>
              <p className="mt-3 text-gray-600 group-hover:text-gray-900">
                Track all your tenders in one place with real-time updates.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
                🔔 Real-time Notifications
              </h3>
              <p className="mt-3 text-gray-600 group-hover:text-gray-900">
                Never miss an opportunity with instant alerts & updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


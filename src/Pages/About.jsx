import React from "react";
import { motion } from "framer-motion"; 
const About = () => {
    const cardVariants = {
      hidden: { x: -200, opacity: 0 },
      visible: (i) => ({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, delay: i * 0.3 },
      }),
    };
  return (
    <section className="bg-gray-100  py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-black mb-6 font-poppins">
          About Us
        </h2>

        <p className="text-lg text-black mb-8 font-poppins">
          Tender Management System helps you manage, monitor, and win tenders
          easily.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gradient-to-r from-[#eed78e] via-[#f5cf97] to-[#ffd54f] rounded-2xl shadow p-6"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              ✔ Secure & Transparent Bidding
            </h3>
            <p className="text-black">
              Ensures every tender process is fair, clear, and secure.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gradient-to-r from-[#eed78e] via-[#f5cf97] to-[#ffd54f] rounded-2xl shadow p-6"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              ✔ Easy Tender Monitoring
            </h3>
            <p className="text-black">
              Track all your tenders in one place with real-time updates.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gradient-to-r from-[#eed78e] via-[#f5cf97] to-[#ffd54f] rounded-2xl shadow p-6"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              ✔ Real-time Notifications
            </h3>
            <p className="text-black">
              Never miss an opportunity with instant alerts & updates.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;






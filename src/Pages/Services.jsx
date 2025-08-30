





import {
  FaBuilding,
  FaFileSignature,
  FaIndustry,
  FaBalanceScale,
  FaArrowRight,
} from "react-icons/fa";
import { MdOutlineWork, MdOutlineBusinessCenter } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { motion } from "framer-motion";

// Services Data
const services = [
  { title: "Digital Signature", icon: FaFileSignature },
  { title: "Firm Registration", icon: FaBuilding },
  { title: "Company Registration", icon: MdOutlineBusinessCenter },
  { title: "Online Tender Information", icon: HiOutlineDocumentReport },
  { title: "PAN/TAN Registration", icon: FaIndustry },
  { title: "PWD License Registration", icon: FaBalanceScale },
  { title: "GST Registration", icon: MdOutlineWork },
  { title: "MSME Registration", icon: FaIndustry },
  { title: "EPF & ESIC Registration", icon: FaIndustry },
  { title: "GeM Registration", icon: FaIndustry },
  { title: "Import Export Registration", icon: FaIndustry },
  { title: "FSSAI Registration", icon: FaIndustry },
];

const Services = () => {
  const cardVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: i * 0.1 },
    }),
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-black mb-6 font-poppins">
          Our Services
        </h2>

        <p className="text-lg text-black mt-3 font-poppins">
          Empowering Your Business with Smart Solutions.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-gradient-to-r from-[#eed78e] via-[#f5cf97] to-[#ffd54f] border border-gray-200 shadow-sm rounded-xl p-6 flex flex-col items-center justify-between h-56
                           hover:shadow-md hover:border-orange-400 hover:scale-105 transition duration-300"
              >
                {/* Icon Circle */}
                <div className="mb-4 bg-orange-100 p-4 rounded-full">
                  <Icon size={32} className="text-orange-500" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-700 text-lg">
                  {service.title}
                </h3>

                {/* Arrow button */}
                <button className="mt-4 bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 transition">
                  <FaArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

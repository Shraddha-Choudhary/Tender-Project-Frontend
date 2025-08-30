import { useEffect, useState } from "react";
import certificate1 from "../Assets/Images/Certificate1.png";
import certificate2 from "../Assets/Images/Certificate2.png";
import certificate3 from "../Assets/Images/Certificate3.png";

const Achievements = () => {
  const [counts, setCounts] = useState({
    tenders: 0,
    users: 0,
    projects: 0,
    years: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        tenders: prev.tenders < 1200 ? prev.tenders + 10 : 1200,
        users: prev.users < 850 ? prev.users + 5 : 850,
        projects: prev.projects < 500 ? prev.projects + 5 : 500,
        years: prev.years < 10 ? prev.years + 1 : 10,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Single Heading */}
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-12 tracking-wide">
          Our Achievements & Milestones
        </h2>

        {/* Certificates First */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-r from-yellow-100 via-white to-yellow-50 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
            <img
              src={certificate1}
              alt="Certificate 1"
              className="w-full h-[400px] object-contain p-4"
            />
          </div>
          <div className="bg-gradient-to-r from-yellow-100 via-white to-yellow-50 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
            <img
              src={certificate2}
              alt="Certificate 2"
              className="w-full h-[400px] object-contain p-4"
            />
          </div>
          <div className="bg-gradient-to-r from-yellow-100 via-white to-yellow-50 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
            <img
              src={certificate3}
              alt="Certificate 3"
              className="w-full h-[400px] object-contain p-4"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Total Tenders */}
          <div className="bg-yellow-200 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-4xl font-extrabold text-orange-500">
              {counts.tenders}+
            </h3>
            <p className="mt-2 text-gray-600">Total Tenders Posted</p>
          </div>

          {/* Active Users */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-4xl font-extrabold text-orange-500">
              {counts.users}+
            </h3>
            <p className="mt-2 text-gray-600">Active Users</p>
          </div>

          {/* Completed Projects */}
          <div className="bg-yellow-200 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-4xl font-extrabold text-orange-500">
              {counts.projects}+
            </h3>
            <p className="mt-2 text-gray-600">Completed Projects</p>
          </div>

          {/* Years of Experience */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-4xl font-extrabold text-orange-500">
              {counts.years}+
            </h3>
            <p className="mt-2 text-gray-600">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

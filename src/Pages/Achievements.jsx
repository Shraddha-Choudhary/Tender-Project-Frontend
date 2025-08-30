import { useEffect, useRef, useState } from "react";
import certificate1 from "../Assets/Images/Certificate1.png";
import certificate2 from "../Assets/Images/Certificate2.png";
import certificate3 from "../Assets/Images/Certificate3.png";

const StatsLoop = ({ counts }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = 1; // pixels per frame
    const interval = setInterval(() => {
      if (!scrollContainer) return;

      scrollAmount += scrollStep;

      // Reset scroll to create infinite loop
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden py-4">
      <div
        ref={scrollRef}
        className="flex gap-6 w-max min-w-max"
        style={{ width: "max-content" }}
      >
        {[...Array(2)].map((_, copy) => (
          <div className="flex gap-6" key={copy}>
            <div className="bg-gradient-to-r from-[#eed78e] via-[#f5cf97] to-[#ffd54f] shadow-md rounded-2xl p-6 flex-shrink-0 w-64 hover:shadow-lg transition text-center">
              <h3 className="text-4xl font-extrabold text-orange-500">
                {counts.tenders}+
              </h3>
              <p className="mt-2 text-gray-600">Total Tenders Posted</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 flex-shrink-0 w-64 hover:shadow-lg transition text-center">
              <h3 className="text-4xl font-extrabold text-orange-500">
                {counts.users}+
              </h3>
              <p className="mt-2 text-gray-600">Active Users</p>
            </div>
            <div className="bg-gradient-to-r from-[#eed78e] via-[#f5cf97] to-[#ffd54f] shadow-md rounded-2xl p-6 flex-shrink-0 w-64 hover:shadow-lg transition text-center">
              <h3 className="text-4xl font-extrabold text-orange-500">
                {counts.projects}+
              </h3>
              <p className="mt-2 text-gray-600">Completed Projects</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 flex-shrink-0 w-64 hover:shadow-lg transition text-center">
              <h3 className="text-4xl font-extrabold text-orange-500">
                {counts.years}+
              </h3>
              <p className="mt-2 text-gray-600">Years of Experience</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-black mb-6 font-poppins">
          Our Achievements & Milestones
        </h2>
        <p className="text-lg text-black mb-8 font-poppins">
          Celebrating success stories and milestones achieved with dedication
          and excellence.
        </p>

        {/* Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[certificate1, certificate2, certificate3].map((cert, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-yellow-100 via-white to-yellow-50 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={cert}
                alt={`Certificate ${idx + 1}`}
                className="w-full h-[400px] object-contain p-4"
              />
            </div>
          ))}
        </div>

        {/* Stats cards loop */}
        <StatsLoop counts={counts} />
      </div>
    </section>
  );
};

export default Achievements;

import React, { useState } from "react";

const plans = [
  {
    name: "Starter Plan",
    description:
      "Rs.1 for the next 7 days Free Trial. After trial, it will subscribe for 1 month at a cost of Rs.200.",
    price: "₹200",
    trial: "₹1 / 7 Days Trial",
    period: "/month",
  },
  {
    name: "Six-Month Membership",
    description:
      "Rs.1 for the next 7 days Free Trial. After trial, it will subscribe for 6 months at a cost of Rs.1100.",
    price: "₹1100",
    trial: "₹1 / 7 Days Trial",
    period: "/6 months",
  },
  {
    name: "Full Year Membership",
    description:
      "Rs.1 for the next 7 days Free Trial. After trial, it will subscribe for 1 year at a cost of Rs.2000.",
    price: "₹2000",
    trial: "₹1 / 7 Days Trial",
    period: "/year",
  },
];

const Plans = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        

        <h2 className="text-5xl font-bold text-black mb-6 font-poppins">
          Choose the plan that’s right for you
        </h2>

        <p className="text-lg text-black mb-8 font-poppins">
          Subscribe to our Tender Management platform and select from flexible
          plans tailored for your business needs.
        </p>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#eed78e] via-[#f5cf97] to-[#ffd54f] shadow-lg rounded-2xl p-8 flex flex-col justify-between hover:shadow-2xl transition"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <p className="text-lg font-medium text-green-600 mb-2">
                  {plan.trial}
                </p>
                <p className="text-2xl font-bold text-gray-800">
                  {plan.price}
                  <span className="text-lg font-medium text-gray-500">
                    {plan.period}
                  </span>
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex space-x-4">
                <button className="flex-1 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition">
                  Start Free Trial
                </button>
                <button className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;

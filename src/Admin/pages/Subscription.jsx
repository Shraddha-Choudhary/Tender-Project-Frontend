import React, { useEffect, useState } from "react";

// Subscription form + list (admin view)
// User fills details (Name, Mobile, Email, Amount, Passcode)
// After submission, entry is added to the subscription list.

const STORAGE_KEY = "tender_subscriptions_demo";

export default function Subscription() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    amount: "",
    passcode: "",
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSubscriptions(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to load subscriptions:", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(subscriptions));
    } catch (e) {
      console.error("Failed to save subscriptions:", e);
    }
  }, [subscriptions]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.email || !form.amount || !form.passcode) {
      alert("Please fill all fields");
      return;
    }
    const newSub = {
      id: Date.now(),
      ...form,
      status: "active",
    };
    setSubscriptions((s) => [newSub, ...s]);
    setForm({ name: "", mobile: "", email: "", amount: "", passcode: "" });
  }

  function cancelSubscription(id) {
    setSubscriptions((s) => s.map((sub) => (sub.id === id ? { ...sub, status: "cancelled" } : sub)));
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Subscription Form</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Enter Amount"
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Pass Code</label>
          <input
            type="password"
            name="passcode"
            value={form.passcode}
            onChange={handleChange}
            placeholder="Create your Pass Code"
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div className="md:col-span-2 text-right">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>

      {/* List */}
      <h2 className="text-xl font-semibold mb-4">Subscriptions List</h2>
      <div className="overflow-auto bg-white rounded-xl shadow">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium">Name</th>
              <th className="px-4 py-2 text-left text-xs font-medium">Mobile</th>
              <th className="px-4 py-2 text-left text-xs font-medium">Email</th>
              <th className="px-4 py-2 text-left text-xs font-medium">Amount</th>
              <th className="px-4 py-2 text-left text-xs font-medium">Status</th>
              <th className="px-4 py-2 text-xs font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-sm text-gray-500">
                  No subscriptions yet. Fill the form above.
                </td>
              </tr>
            ) : (
              subscriptions.map((sub) => (
                <tr key={sub.id} className="border-b last:border-b-0">
                  <td className="px-4 py-3 text-sm">{sub.name}</td>
                  <td className="px-4 py-3 text-sm">{sub.mobile}</td>
                  <td className="px-4 py-3 text-sm">{sub.email}</td>
                  <td className="px-4 py-3 text-sm">₹{sub.amount}</td>
                  <td className="px-4 py-3 text-sm">{sub.status}</td>
                  <td className="px-4 py-3 text-sm">
                    {sub.status !== "cancelled" ? (
                      <button
                        onClick={() => cancelSubscription(sub.id)}
                        className="px-3 py-1 rounded bg-red-500 text-white text-xs hover:bg-red-600"
                      >
                        Cancel
                      </button>
                    ) : (
                      <span className="text-xs text-gray-500">Cancelled</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import bgImage from "../assets/bannerImg.jpg"; // Import your background image

const ScheduleAndForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, query });
    // You can add your API call or other logic here
  };

  return (
    <section
      className="py-16 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>{" "}
      {/* Overlay for better text readability */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-md mx-auto bg-gray-800 bg-opacity-90 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Appointment Schedule
          </h2>
          <div className="mb-4">
            <p className="text-lg">SAT-TUE 8:00-15:30</p>
            <p className="text-lg">WED-FRI 10:00-16:30</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="query" className="block text-sm font-medium mb-1">
                Query
              </label>
              <textarea
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring focus:border-blue-300"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-md"
              >
                Submit Query
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ScheduleAndForm;

import React from "react";
const AppointmentSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Appointment Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-[#0cb8b6] mb-2 uppercase">
            Online Appointment
          </h2>
          <h3 className="text-2xl font-medium mb-6">Make An Appointment</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-md p-2 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                className="border rounded-md p-2 w-full"
              />
              <input
                type="date"
                placeholder="Appointment Date"
                className="border rounded-md p-2 w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="border rounded-md p-2 w-full">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <select className="border rounded-md p-2 w-full">
                <option>Department</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
              </select>
            </div>
            <div>
              <textarea
                placeholder="Tell Us About Your Disease *"
                className="border rounded-md p-2 w-full h-32 resize-none"
              ></textarea>
            </div>
            <button className="bg-[#0cb8b6] text-white py-3 px-6 rounded-md transition-colors flex items-center">
              Submit Query
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;

import React, { useState } from "react";

export default function BirthdayPartyForm() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    dob: "",
    mobile: "",
    address: "",
    pincode: "",
    restaurant: "",
    bookingDate: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen w-full m-0 p-0">
     
      {submitted ? (
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-2xl mt-10 mb-10 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            🎉 Thank You for Booking!
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Your birthday party booking has been received successfully! <br />
            Our team will contact you soon to confirm your celebration. 🍕🎈
          </p>
        </div>
      ) : (
      
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl mt-10 mb-10">
          <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
            Birthday Party Booking Form
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Please fill in your details or contact your nearest Domino’s manager at{" "}
            <span className="font-semibold text-black">12345678098</span>.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {[
              { label: "Full Name", name: "name", type: "text" },
              { label: "City", name: "city", type: "text" },
              { label: "Date of Birth", name: "dob", type: "date" },
              { label: "Mobile Number", name: "mobile", type: "text" },
              { label: "Address", name: "address", type: "text" },
              { label: "Pin Code", name: "pincode", type: "text" },
              { label: "Preferred Restaurant", name: "restaurant", type: "text" },
              { label: "Booking Date", name: "bookingDate", type: "date" },
            ].map((field) => (
              <div key={field.name} className="flex flex-col md:flex-row items-center">
                <label
                  htmlFor={field.name}
                  className="w-full md:w-1/3 text-gray-700 font-semibold mb-2 md:mb-0"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  className="border border-gray-300 rounded-lg p-2 w-full md:w-2/3 focus:ring-2 focus:ring-red-400"
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-all"
            >
              Submit
            </button>
          </form>

          <p className="text-sm text-left text-gray-600 mt-6">
          We will contact you within 2 working days. Domino's conduct Birthday Parties in select Restaurant and Times. T&C Apply
          </p>
        </div>
      )}
    </div>
  );
}

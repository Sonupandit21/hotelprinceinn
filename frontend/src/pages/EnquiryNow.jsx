import React, { useState } from "react";
import gallery1 from "../assets/gallery_img_1.jpg"; // Make sure this path is correct

const EnquiryNow = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    rooms: "",
    email: "",
    message: "",
  });

  const API_BASE_URL = '/api/bookings';
  console.log("API_BASE_URL",API_BASE_URL)


  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, phone, rooms, email, message } = formData;

    if (!fullName || !phone || !rooms || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          phoneNumber: phone,
          rooms, // 🟢 keep as string now (not Number)
          email,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Booking successful!");
        setFormData({
          fullName: "",
          phone: "",
          rooms: "",
          email: "",
          message: "",
        });
        setSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });

        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: `url(${gallery1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">Enquiry Now</h1>
          <p className="text-sm md:text-base">Home / Enquiry Now</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex items-center justify-center bg-gray-100 px-4 py-20">
        <div className="max-w-5xl w-full p-6 bg-gray-50 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>

          {success && (
            <div className="mb-4 px-4 py-2 bg-green-100 text-green-800 rounded transition-all duration-300 ease-in-out">
              ✅ Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone no*"
                value={formData.phone}
                pattern="^\d{10}$"
                maxLength={10}
                               onChange={handleChange}
                required
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                
              />
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
  id="rooms"
  name="rooms"
  value={formData.rooms}
  onChange={handleChange}
  required
  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
>
  <option value="">Select a Room</option>
  <option value="Deluxe Room">Deluxe Room</option>
  <option value="Single Room">Single Room</option>
  <option value="Luxury Room">Luxury Room</option>
</select>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Message Field */}
            <textarea
              name="message"
              rows="5"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow hover:bg-blue-700 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EnquiryNow;

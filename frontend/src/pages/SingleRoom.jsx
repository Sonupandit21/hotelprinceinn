import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSwimmer, FaSnowflake, FaShuttleVan, FaConciergeBell,
  FaWifi, FaTshirt, FaTv, FaShieldAlt
} from "react-icons/fa";

import gallery1 from "../assets/gallery_img_1.jpg";
import single from "../assets/room/single.jpg";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SingleRoom = () => {
  const images = [gallery1, single, single, single];
  const [mainImage, setMainImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setMainImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({ checkIn: "", checkOut: "", adults: 1, children: 0 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_BASE_URL}/single`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    alert(result.message || "Booking submitted!");
  };

  const navigate = useNavigate();
  const handleCheckNow = () => {
    if (!formData.checkIn || !formData.checkOut) {
      alert("Please select both Check-in and Check-out dates.");
      return;
    }
    if (formData.checkOut <= formData.checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }
    navigate("/SingleFrom");
  };

  const amenities = [
    { icon: <FaSwimmer size={32} />, label: "4 private pools" },
    { icon: <FaSnowflake size={32} />, label: "Air-conditioned" },
    { icon: <FaShuttleVan size={32} />, label: "Airport transfer" },
    { icon: <FaConciergeBell size={32} />, label: "All inclusive" },
    { icon: <FaWifi size={32} />, label: "Free wi-fi" },
    { icon: <FaTshirt size={32} />, label: "Laundry" },
    { icon: <FaTv size={32} />, label: "Smart TV" },
    { icon: <FaShieldAlt size={32} />, label: "Under protection" },
  ];

  return (
    <>
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: `url(${gallery1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">Single Room</h1>
          <p className="text-sm">Home / Single Room</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-4 sm:p-6 bg-[#f0fdfa] min-h-[60vh]">
        <div className="md:w-2/3 w-full space-y-10 md:pr-6">
          <img
            src={mainImage}
            alt="Main Room"
            className="rounded-2xl w-full max-h-[400px] sm:max-h-[500px] object-cover shadow-md"
          />

          <div className="flex gap-4 flex-wrap">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => { setMainImage(img); setCurrentIndex(idx); }}
                className={`w-24 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${mainImage === img ? "border-orange-400" : "border-transparent"}`}
              >
                <img
                  src={img}
                  alt={`Room ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>

          <section>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Hotel Princeinn Noida is waiting for you!</h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Relax in our Standard Room, a perfect blend of simplicity and comfort for travelers seeking convenience at a great value.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {amenities.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md flex flex-col items-center p-4 sm:p-6 text-center hover:shadow-lg transition"
                >
                  <div className="text-blue-600 mb-2">{item.icon}</div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Location</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9119696060466!2d77.55363867494903!3d28.421912993615006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc18e1f0cbe63%3A0xd943dca1ee7d1b9f!2sHotel%20Prince%20Stay!5e0!3m2!1sen!2sin!4v1747631904076!5m2!1sen!2sin"
                width="100%"
                height="450"
                loading="lazy"
                allowFullScreen=""
                className="w-full h-96 border-0"
              ></iframe>
            </div>
          </section>
        </div>

        <div className="md:w-1/3 w-full md:sticky md:top-24 mt-10 md:mt-0 bg-gray-100 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md"
          >
            <div className="bg-blue-100 p-2 rounded-md flex justify-between mb-4 text-sm">
              <span>🛏️ Adults: 4</span>
              <span>📏 Size: 95ft²</span>
            </div>

            <p className="text-sm font-semibold">Prices start at:</p>
            <h2 className="text-green-600 text-2xl font-bold mb-2">₹1000</h2>
            <p className="text-xs mb-4 text-gray-500">per night</p>

            <label className="text-sm">Check-in</label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              min={today}
              className="mb-3 w-full border rounded p-2 bg-blue-50"
            />

            <label className="text-sm">Check-out</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              min={formData.checkIn || today}
              className="mb-3 w-full border rounded p-2 bg-blue-50"
            />

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="text-sm">Adults</label>
                <select
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="w-1/2">
                <label className="text-sm">Children</label>
                <select
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                >
                  {[0, 1, 2, 3].map((num) => (
                    <option key={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleCheckNow}
              type="button"
              className="w-full mt-6 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition"
            >
              Booking Details Your Information
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SingleRoom;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RoomBooking from "./RoomBooking";
import Feedback from "./Feedback";
import Gallery from "./Gallery";

import gallery1 from "../assets/gallery_img_1.jpg";
import gallery2 from "../assets/gallery_img_6.jpg";
import gallery3 from "../assets/gallery_img_8.jpg";
import About from "../assets/About.jpg";
// import DeluxeRoom from "../assets/room/DeluxeRoom.jpg";
// import SingleRoom from "../assets/room/SingleRoom.jpg";
// import LuxuryRoom from "../assets/room/LuxuryRoom.jpg";
import luxury from "../assets/room/luxury.jpg";
import single from "../assets/room/single.jpg";
import deluxe from "../assets/room/deluxe.jpg";
import Restaurant from "../assets/amenities/Restaurant.jpeg";
import Cleaning from "../assets/amenities/Cleaning.jpg";
import Service from "../assets/amenities/Service.jpg";
import Parking from "../assets/amenities/Parking.jpg";

const HotelBooking = () => {
  const navigate = useNavigate();

  // Get today's date as yyyy-mm-dd for min attribute on date inputs
  const today = new Date().toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState("Deluxe Room");

  const images = [gallery1, gallery2, gallery3];

  const rooms = [
    {
      title: "Deluxe Room",
      price: "₹1600/Per night",
      description:
        "A Deluxe Room represents an elevated standard of accommodation, designed to provide guests with enhanced comfort, stylish décor, and premium amenities.",
      features: [
        "42 Inch flat screen TV",
        "In-room Safe",
        "Mini-refrigerator",
        "High-speed Wi-Fi for work or leisure",
        "Breakfast",
        "Complimentary bottled water",
      ],
      image: deluxe,
    },
    {
      title: "Single Room",
      price: "₹1500/Per night",
      description:
        "A Single Room is perfect for solo travelers. It’s cozy, functional, and equipped with all essential amenities.",
      features: [
        "42 Inch flat screen TV",
        "In-room Safe",
        "High-speed Wi-Fi",
        "Mini-refrigerator",
        "Breakfast",
        "Complimentary bottled water",
      ],
      image: single,
    },
    {
      title: "Luxury Room",
      price: "₹1500/Per night",
      description:
        "A Luxury Room offers an extraordinary experience with premium decor, spacious layout, and elegant style.",
      features: [
        "42 Inch flat screen TV",
        "In-room Safe",
        "Mini-refrigerator",
        "High-speed Wi-Fi",
        "Breakfast",
        "Complimentary bottled water",
      ],
      image: luxury,
    },
  ];

  const amenities = [
    {
      id: "01",
      title: "Our Restaurant",
      icon: "🍽️",
      description:
        "Enjoy delightful meals crafted to satisfy your taste buds.",
      image: Restaurant,
    },
    {
      id: "02",
      title: "Our Cleaning",
      icon: "🧼",
      description:
        "We ensure spotless rooms and a clean, hygienic stay every time.",
      image: Cleaning,
    },
    {
      id: "03",
      title: "24*7 Service",
      icon: "📞",
      description:
        "Our staff is available around the clock for your convenience.",
      image: Service,
    },
    {
      id: "04",
      title: "Parking",
      icon: "🚗",
      description:
        "Secure and free parking for all our guests, 24/7.",
      image: Parking,
    },
  ];

  const handleCheckNow = () => {
    if (!checkIn || !checkOut) {
      alert("Please select both Check-in and Check-out dates.");
      return;
    }
    navigate("/room-booking");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Hero Banner */}
      <div
  className="relative text-white bg-no-repeat bg-center bg-cover min-h-[500px]"
  style={{
    backgroundImage: `url(${images[currentImage]})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }}
>

  <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
  <div className="relative z-20 flex flex-col items-center justify-center min-h-[78vh] text-center px-4">
    {/* Heading Section */}
    <div className="mb-4 md:mb-6">
      <h2 className="text-sm sm:text-base tracking-wide md:tracking-widest uppercase mb-2">
        Hotel Prince Inn By Dsy Hospitality
      </h2>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight px-2">
        A Symphony of Comfort <br className="hidden sm:block" /> & Convenience
      </h1>
    </div>

    {/* Book Room Button */}
    <button
      onClick={() => navigate("/room-booking")}
      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full shadow-lg transition text-sm sm:text-base"
    >
      Book a room
    </button>

    {/* Booking Form */}
    <div className="mt-6 md:mt-10 bg-white text-gray-900 rounded-xl md:rounded-2xl shadow-xl p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
      {/* Check-in Date */}
      <div className="md:col-span-1">
        <label htmlFor="checkIn" className="text-xs sm:text-sm font-semibold">
          Check in
        </label>
        <input
          id="checkIn"
          type="date"
          className="w-full border rounded p-2 mt-1 text-xs sm:text-sm"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          min={today}
        />
      </div>

      {/* Check-out Date */}
      <div className="md:col-span-1">
        <label htmlFor="checkOut" className="text-xs sm:text-sm font-semibold">
          Check Out
        </label>
        <input
          id="checkOut"
          type="date"
          className="w-full border rounded p-2 mt-1 text-xs sm:text-sm"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          min={checkIn || today}
        />
      </div>

      {/* Adults */}
      <div className="md:col-span-1">
        <label htmlFor="adults" className="text-xs sm:text-sm font-semibold">
          Adults
        </label>
        <select 
          id="adults" 
          className="w-full border rounded p-2 mt-1 text-xs sm:text-sm"
          defaultValue="1"
        >
          <option>1</option>
          <option>2</option>
          <option>3+</option>
        </select>
      </div>

      {/* Children */}
      <div className="md:col-span-1">
        <label htmlFor="children" className="text-xs sm:text-sm font-semibold">
          Children
        </label>
        <select 
          id="children" 
          className="w-full border rounded p-2 mt-1 text-xs sm:text-sm"
          defaultValue="0"
        >
          <option>0</option>
          <option>1</option>
          <option>2+</option>
        </select>
      </div>

      {/* Check Now Button */}
      <div className="md:col-span-1 flex items-end">
        <button
          onClick={handleCheckNow}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition text-sm sm:text-base"
        >
          Check Now
        </button>
      </div>
    </div>
  </div>
</div>

      {/* Room Selection */}
      <div className="max-w-8x2 mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">
          Choose Your Luxurious Room
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {rooms.map((room) => (
            <button
              key={room.title}
              onClick={() => setSelectedRoom(room.title)}
              className={`px-4 py-2 rounded ${
                selectedRoom === room.title
                  ? "bg-amber-600 text-white"
                  : "bg-gray-200 hover:bg-amber-500 hover:text-white"
              }`}
            >
              {room.title}
            </button>
          ))}
        </div>
        {rooms.map(
          (room) =>
            room.title === selectedRoom && (
              <div key={room.title} className="grid md:grid-cols-2 gap-6">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-96 object-cover rounded-lg shadow"
                />
                <div>
                  <h2 className="text-2xl font-bold mb-2">{room.title}</h2>
                  <p className="text-lg text-amber-600 mb-4">{room.price}</p>
                  <p className="text-gray-700 mb-4">{room.description}</p>
                  <h3 className="text-lg font-semibold mb-2">Room Features:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-amber-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
        )}
      </div>

      {/* About Us */}
      <div className="flex flex-col lg:flex-row bg-[#f9f7f4] p-8">
        <div className="w-full lg:w-1/2 p-4">
          <img
            src={About}
            alt="About Hotel Prince Inn"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-700 mb-2">
            Welcome to Hotel Prince Inn by DSY Hospitality, your trusted 3-star hotel in Greater Noida, where exceptional service meets unforgettable experiences. With a portfolio of 20+ hotels across India, we specialize in mid-segment and boutique properties designed for comfort, style, and personalized hospitality.
          </p>
          <p className="text-gray-700 mb-2">
            We proudly collaborate with over 500 prestigious corporate clients, including Amazon, Kimbal, Oppo, Honda Cars, Honda Bikes, Newgen Software, HCL, and many more. Our expertise also extends to managing hospitality for large-scale expos and events, ensuring seamless experiences every time.
          </p>
          <p className="text-gray-700 mb-4">
            Prince Inn is a preferred choice for guests searching for a hotel near Knowledge Park 2 and Ansal Golf Link, or those visiting renowned institutions like Sharda University, Galgotias University, Bennett University, and Gautam Buddha University. Our strategic location makes us ideal for families, students, and business travelers alike.
          </p>
          <Link
            to="/about-us"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            View More
          </Link>
        </div>
      </div>

      {/* Amenities */}
      <div className="bg-white py-16 px-4 md:px-12">
        <h2 className="text-4xl font-serif text-center mb-10">
          Amenities At <span className="text-blue-600">Hotel</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {amenities.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden"
            >
              <div className="md:w-1/2 h-64 md:h-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 relative">
                <div className="text-orange-500 text-2xl mb-2">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="absolute top-4 right-6 text-gray-200 text-5xl font-bold">
                  {item.id}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Sections */}
      <RoomBooking />
      <Gallery />
      <Feedback />
    </>
  );
};

export default HotelBooking;





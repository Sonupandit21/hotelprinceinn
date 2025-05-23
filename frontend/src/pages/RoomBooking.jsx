import React from 'react';
import { Link } from 'react-router-dom';
import luxury from "../assets/room/luxury.jpg";
import single from "../assets/room/single.jpg";
import deluxe from "../assets/room/deluxe.jpg";

const RoomBooking = () => {
  return (
    <div className=" rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl sm:text-4xl font-serif text-center mb-10">
        Our <span className="text-blue-600">Rooms</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Single Room Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img 
            src={single} 
            alt="Single Room" 
            className="w-full h-48 sm:h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Single Room</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Relax in our Standard Room, a perfect blend of simplicity and comfort for travelers seeking convenience at a great value.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-blue-600">₹1000 / night</span>
              <Link 
                to="/single-room" 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Deluxe Room Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img 
            src={deluxe} 
            alt="Deluxe Room" 
            className="w-full h-48 sm:h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Deluxe Room</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Experience luxury in our deluxe room featuring plush interiors, smart TV, mini fridge, premium toiletries, and high-speed Wi-Fi.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-blue-600">₹1500 / night</span>
              <Link 
                to="/book/deluxe" 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Luxury Room Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img 
            src={luxury} 
            alt="Luxury Room" 
            className="w-full h-48 sm:h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Luxury Room</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Unwind in our luxury room with a king-sized bed, modern decor, air conditioning, high-end toiletries, and complimentary breakfast.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-blue-600">₹1900 / night</span>
              <Link 
                to="/Luxury-Room" 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomBooking;

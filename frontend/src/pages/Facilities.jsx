import React from "react";
import gallery1 from "../assets/gallery_img_1.jpg";

// Images (Make sure these paths are correct relative to this file)
import foodImg from "../assets/facilities/1.jpg";
import housekeepingImg from "../assets/facilities/2.jpg";
import acImg from "../assets/facilities/3.jpg";
import parkingImg from "../assets/facilities/4.jpg";
import geyserImg from "../assets/facilities/5.jpg";
import cctvImg from "../assets/facilities/6.jpg";

const facilities = [
  { name: "Food", image: foodImg },
  { name: "Housekeeping", image: housekeepingImg },
  { name: "Air conditioner", image: acImg },
  { name: "Parking", image: parkingImg },
  { name: "Geyser", image: geyserImg },
  { name: "CCTV", image: cctvImg },
];

const FacilityCard = ({ name, image }) => (
  <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition">
    <img
      src={image}
      alt={name}
      className="w-full h-40  rounded-lg "
    />
    <p className="text-center font-semibold text-black">{name}</p>
  </div>
);

const FacilitiesPage = () => {
  return (
    <> 
        <div
      className="relative bg-cover bg-center h-64 flex items-center justify-center"
      style={{
        backgroundImage: `url(${gallery1})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Text Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Facilities</h1>
        <p className="text-sm">Home / Facilities</p>
      </div>
    </div>
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Enjoy Our Best <span className="text-blue-600">Facilities</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {facilities.map((facility, idx) => (
            <FacilityCard key={idx} name={facility.name} image={facility.image} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FacilitiesPage;

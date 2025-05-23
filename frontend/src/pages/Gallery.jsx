import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; // Make sure to install @heroicons/react
import gallery1 from "../assets/gallery_img_1.jpg";

// Image imports
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/g1.jpg";
import img5 from "../assets/gallery/g2.jpg";
import img6 from "../assets/gallery/g3.jpg";
import img7 from "../assets/gallery/g4.jpg";
import img8 from "../assets/gallery/g5.jpg";
import img9 from "../assets/gallery/g6.jpg";
import img10 from "../assets/gallery/g7.jpg";
import img11 from "../assets/gallery/g8.jpg";

const images = [
  img1, img2, img3,
  img4, img5, img6,
  img7, img8, img9,
  img10, img11,
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Header */}
      {/* <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: `url(${gallery1})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">Gallery</h1>
          <p className="text-sm">Home / Gallery</p>
        </div>
      </div> */}

      {/* Image Grid */}
      <div className="px-4 py-8">
        <h2 className="text-3xl text-center font-semibold mb-6">
          Latest <span className="text-blue-500">Gallery</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative cursor-pointer group overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="transition-transform duration-300 transform group-hover:scale-105 w-full h-full object-cover"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <MagnifyingGlassIcon className="h-10 w-10 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-[80vh] max-w-[90vw] rounded shadow-lg"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;

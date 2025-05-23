import React from 'react';
import gallery1 from "../assets/gallery_img_1.jpg";

const Contact = () => {
  return (
    <div className="bg-gray-50"> {/* Unified background color */}
      {/* Hero Section */}
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
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">Contact Us</h1>
          <p className="text-sm">Home / Contact Us</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="px-4 py-10">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-center mb-10">
          {/* Phone */}
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white">
            <div className="text-orange-500 text-3xl mb-2">📞</div>
            <h3 className="font-semibold text-lg mb-1">Make A Call</h3>
            <a href="tel:+918130622279" className="block text-blue-600 hover:underline">+91-8130622279</a>
            <a href="tel:+919521415948" className="block text-blue-600 hover:underline">+91-9521415948</a>
          </div>

          {/* Email */}
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white">
            <div className="text-orange-500 text-3xl mb-2">📧</div>
            <h3 className="font-semibold text-lg mb-1">Send A Email</h3>
            <a
              href="mailto:reservations.dsyhotels@gmail.com"
              className="text-blue-600 hover:underline"
            >
              reservations.dsyhotels@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white">
            <div className="text-orange-500 text-3xl mb-2">📍</div>
            <h3 className="font-semibold text-lg mb-1">Address</h3>
            <p className="text-sm text-gray-700">Cd 44 Ansal Golf Link 1<br />Greater Noida 201306</p>
            <p className="text-sm text-gray-700 mt-2">Plot No-38C/1, Knowledge Park-3,<br />Greater Noida 201310</p>
          </div>
        </div>

        {/* Google Maps */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Map 1 */}
          <div className="border rounded-lg overflow-hidden shadow bg-white">
            <iframe
              title="Map Location 1"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9119696060466!2d77.55363867494903!3d28.421912993615006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc18e1f0cbe63%3A0xd943dca1ee7d1b9f!2sHotel%20Prince%20Stay!5e0!3m2!1sen!2sin!4v1747631904076!5m2!1sen!2sin"
              className="w-full h-64"
              allowFullScreen=""
              loading="lazy"
            />
            <p className="text-center p-2 text-sm">Plot No-38C/1, Knowledge Park-2, Greater Noida 201310</p>
          </div>

          {/* Map 2 */}
          <div className="border rounded-lg overflow-hidden shadow bg-white">
            <iframe
              title="Map Location 2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36046.23402707006!2d77.46941842298496!3d28.4566631190276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1c9dba0187b%3A0x56942e116eb0c1d1!2sPrince%20Inn%20Hotel!5e0!3m2!1sen!2sin!4v1747632103406!5m2!1sen!2sin"
              className="w-full h-64"
              allowFullScreen=""
              loading="lazy"
            />
            <p className="text-center p-2 text-sm">Cd 44 Ansal Golf Link 1, Greater Noida 201306</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

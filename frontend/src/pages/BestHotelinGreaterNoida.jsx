import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import gallery1 from "../assets/gallery_img_1.jpg";
import gallery2 from "../assets/gallery_img_6.jpg";
import gallery3 from "../assets/gallery_img_7.jpg";


const BestHotelinGreaterNoida = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
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
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Best Hotel in Greater Noida</h1>
        <p className="text-sm">Home / Best Hotel in Greater Noida</p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row bg-white p-6 md:p-10 gap-8">
            {/* Left Side - Image and Description */}
      <div className="flex-1">
        <img 
          src={gallery1} 
          alt="Hotel Room" 
          className="w-full rounded-md"
        />
        <h2 className="text-lg text-blue-700 font-semibold mt-4">
          Best Hotel in Greater Noida : Delhi NCR – Hotel Prince Inn
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Greater Noida, a rapidly developing region in the National Capital Region (NCR) of India, is known for its modern
          infrastructure, international exhibitions, educational institutions, and growing business hubs. Whether you are a
          business traveler attending an expo at the India Expo Mart, a family visiting the city, or a tourist exploring nearby
          attractions like Buddh International Circuit or Surajpur Bird Sanctuary, finding the right accommodation is essential.
          Among the many lodging options, Hotel Prince Inn stands out as one of the best hotels in Greater Noida for its
          unbeatable blend of comfort, service, and affordability.
        </p>

        <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      
      {/* Section 1: Prime Location */}
      <div data-aos="fade-up">
        <h2 className="text-xl font-semibold text-gray-800">
          Prime Location in Greater Noida
        </h2>
        <p className="mt-2 text-gray-700 text-sm leading-relaxed">
          Hotel Prince Inn is situated in a prime location within the Greater Noida area, making it a highly sought-after accommodation option for tourists. It is conveniently situated near major landmarks such as the India Expo Mart, Pari Chowk, Knowledge Park, and prominent educational institutions like Sharda University and Galgotias University.
          The hotel also offers easy access to the Yamuna Expressway and Noida-Greater Noida Expressway, ensuring hassle-free travel to Delhi, Noida, and Agra. Business travelers benefit from proximity to industrial sectors and corporate offices, while tourists enjoy quick access to malls, markets, and attractions like The Grand Venice Mall.
        </p>
      </div>

      {/* Section 2: Comfortable Rooms */}
      <div data-aos="fade-up">
        <h2 className="text-xl font-semibold text-gray-800">
          Comfortable and Well-Appointed Rooms
        </h2>
        <p className="mt-2 text-gray-700 text-sm leading-relaxed">
          At Hotel Prince Inn, comfort is a priority. The hotel features a range of rooms that cater to various types of guests—whether you're traveling solo, as a couple, or with family. The rooms are designed with simplicity, elegance, and functionality in mind.
        </p>
      </div>

      {/* Section 3: Room Categories */}
      <div data-aos="fade-up">
        <h3 className="text-lg font-semibold text-gray-800 mt-4">Room Categories:</h3>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1 mt-2">
          <li>
            <strong>Deluxe</strong> - Ideal for business travelers or short stays. Equipped with all modern amenities.
          </li>
          <li>
            <strong>Executive</strong> - Slightly more spacious, perfect for couples or long-stay guests.
          </li>
          <li>
            <strong>Family</strong> - Designed for families or small groups looking for comfort and convenience.
          </li>
        </ul>
      </div>

      {/* Section 4: Amenities */}
      <div data-aos="fade-up">
        <h3 className="text-lg font-semibold text-gray-800 mt-4">
          Each room is well–furnished and includes amenities like:
        </h3>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1 mt-2">
          <li>Air Conditioning</li>
          <li>Comfortable Bedding</li>
          <li>Free Wi-Fi</li>
          <li>Flat-Screen TV with Satellite Channels</li>
          <li>Work desk</li>
          <li>24-Hour Room Service</li>
          <li>Attached Modern Bathrooms with Toiletries and Hot/Cold Water</li>
        </ul>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          The rooms are cleaned regularly, and attention to detail is evident in the way they are maintained.
          Visitors frequently praise the immaculate cleanliness of the rooms and the serene atmosphere.
        </p>
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-10 bg-white text-gray-800">

{/* Exceptional Hospitality and Service */}
<div data-aos="fade-up">
  <h2 className="text-2xl font-semibold">Exceptional Hospitality and Service</h2>
  <p className="mt-2 text-sm leading-relaxed">
    One of the defining qualities of Hotel Prince Inn is its exceptional hospitality. The hotel staff is known for being polite, helpful, and responsive to guest needs. From the front desk team to housekeeping and room service, everyone goes the extra mile to ensure a perfect stay.
  </p>
  <p className="mt-2 text-sm leading-relaxed">
    Whether it’s helping with travel arrangements, providing directions, arranging cabs, or offering food recommendations, the staff makes guests feel at home. For international guests, the English-speaking staff adds to the comfort and ease of communication.
  </p>
</div>

{/* Dining Options */}
<div data-aos="fade-up">
  <h2 className="text-2xl font-semibold">Dining Options</h2>
  <p className="mt-2 text-sm leading-relaxed">
    Hotel Prince Inn offers an on-site multi-cuisine restaurant that serves a variety of delicious dishes. From North Indian favorites to Chinese and Continental options, there’s something to satisfy every palate. The food is made using fresh ingredients and served in a clean and sanitary setting.
  </p>
  <p className="mt-2 text-sm leading-relaxed">
    Guests who prefer to dine in the comfort of their room can opt for room service, which is prompt and efficient. Breakfast is often included in the room package, with a variety of options including bread, eggs, parathas, tea, and juice.
  </p>
</div>

{/* Facilities and Amenities */}
<div data-aos="fade-up">
  <h2 className="text-2xl font-semibold">Facilities and Amenities</h2>
  <p className="mt-2 text-sm leading-relaxed">
    Hotel Prince Inn ensures a well-rounded experience for its guests by offering several amenities that enhance convenience and comfort:
  </p>
  <ul className="list-disc ml-6 mt-3 text-sm space-y-1">
    <li>Free Wi-Fi throughout the property</li>
    <li>24-hour front desk for check-in/check-out flexibility</li>
    <li>Power backup to ensure uninterrupted services</li>
    <li>Laundry service</li>
    <li>Parking facility for guests traveling by car</li>
    <li>Travel assistance and cab services</li>
    <li>Daily housekeeping</li>
  </ul>
  <p className="mt-2 text-sm leading-relaxed">
    The hotel is also known for its safe and secure environment, with CCTV surveillance and proper safety protocols in place—especially important for solo female travelers and families.
  </p>
  <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Ideal for Business and Leisure Travelers</h2>
        <p className="mb-4">
          The balance between affordability and quality makes Hotel Prince Inn a popular choice for both business and leisure
          travelers. Business travelers appreciate the work-friendly environment, fast internet, and close proximity to industrial hubs.
        </p>
        <p>
          The hotel’s calm and peaceful surroundings also make it ideal for those looking to relax after a hectic day. For tourists and
          families, the location near malls, restaurants, and local attractions makes it easy to explore Greater Noida without traveling
          too far. The hotel can also assist with booking tours or providing local guides upon request.
        </p>
      </section>

      {/* Guest Reviews */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Guest Reviews and Ratings</h3>
        <p className="mb-4">
          Hotel Prince Inn enjoys positive reviews across various travel and hotel booking platforms. Guests frequently mention:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Cleanliness of rooms</li>
          <li>Friendly and courteous staff</li>
          <li>Great value for money</li>
          <li>Convenient location</li>
          <li>Comfortable stay with all essentials</li>
        </ul>
        <p className="mt-4">
          Many visitors become repeat guests, a strong sign of the hotel’s commitment to guest satisfaction.
        </p>
      </section>

      {/* Guest Testimonials */}
      <section>
        <h3 className="text-xl font-semibold mb-6">Here’s what some guests have said:</h3>

        <div className="border-t border-gray-300 pt-6 mb-6">
          <p className="font-semibold">Rajiv S., Business Traveler</p>
          <p className="italic mt-2">
            “A hidden gem in Greater Noida. The staff was courteous, rooms were clean, and the food was delicious. Highly recommend!”
          </p>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <p className="font-semibold">Neha K., Family Guest</p>
          <p className="italic mt-2">
            “Stayed here during a family function. The hotel was clean, safe, and staff were always ready to help. Will stay again.”
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Affordable Luxury</h2>
        <p>
          One of the biggest advantages of Hotel Prince Inn is its affordability. While Greater Noida has a mix of budget and luxury
          hotels, Hotel Prince Inn manages to strike a perfect balance. Whether you're booking through a travel site or directly with the
          hotel, the rates are competitive, and discounts are often available for longer stays or group bookings.
        </p>
      </section>

      {/* COVID-19 Safety Measures */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">COVID-19 Safety Measures</h2>
        <p className="mb-4">
          Post-pandemic, the hotel has taken additional safety steps to ensure a hygienic and safe environment. These include:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Regular sanitization of rooms and common areas</li>
          <li>Staff health checks and use of masks</li>
          <li>Contactless check-in and payment options</li>
          <li>Hand sanitizers available in public areas</li>
        </ul>
        <p className="mt-4">
          These measures provide peace of mind to guests traveling during sensitive times.
        </p>
      </section>

      {/* Final Verdict */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Final Verdict</h2>
        <p>
          If you are looking for the best hotel in Greater Noida that offers comfort, affordability, great service, and a prime location,
          look no further than Hotel Prince Inn. Whether you are visiting for business, attending an event, or simply exploring the city,
          this hotel has everything you need for a memorable and relaxing stay.
        </p>
      </section>
  
</div>


</div>

      </div>

    </div>
      </div>
     

      {/* Right Side - Blog List */}
      <div className="w-full md:w-1/3 bg-gray-50 p-4 rounded-md">
        <h3 className="text-gray-800 font-semibold border-b pb-2 mb-4">Our Blogs</h3>

        {/* Blog Item 1 */}
        <div className="flex items-start gap-4 mb-4">
  <img src={gallery2} alt="blog1" className="w-16 h-16 rounded" />
  <div>
    <p className="text-xs text-gray-500">May 05, 2025</p>
    <Link to="/blog/best-hotel-greater-noida">
      <p className="text-sm font-medium text-gray-800 hover:text-blue-700 cursor-pointer">
        Best Hotel in Greater Noida…
      </p>
    </Link>
  </div>
</div>

        {/* Blog Item 2 */}
        <div className="flex items-start gap-4">
  <img src={gallery3} alt="blog2" className="w-16 h-16 rounded" />
  <div>
    <p className="text-xs text-gray-500">May 05, 2025</p>
    <Link to="/blog/hotel-near-knowledge-park-2">
      <p className="text-sm font-medium text-gray-800 hover:text-blue-700 cursor-pointer">
        Hotel Near Knowledge Park 2…
      </p>
    </Link>
  </div>
</div>
      </div>

      
    </div>
    </>
  );
};

export default BestHotelinGreaterNoida;

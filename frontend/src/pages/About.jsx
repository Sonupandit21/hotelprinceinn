import React from 'react';
import gallery1 from '../assets/gallery_img_1.jpg';
import about from "../assets/about/about.jpg";

const AboutUsHeader = () => {
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
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">About Us</h1>
        <p className="text-sm">Home / About Us</p>
      </div>
    </div>
    <div className="px-6 md:px-20 py-12 space-y-16">
      {/* Top Section: Image + Text */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Image */}
        <div className="md:w-1/2">
          <img src={about} alt="Room" className="rounded shadow-md" />
        </div>

        {/* Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="text-gray-700">
          Welcome to Hotel Prince Inn Greater Noida by DSY Hospitality, your trusted 3-star hotel in Greater Noida, where exceptional service meets unforgettable experiences. With a portfolio of 20+ hotels across India, we specialize in mid-segment and boutique properties designed for comfort, style, and personalized hospitality.
          </p>
          <p className="text-gray-700">
          Hotel Prince Inn is known as a couple-friendly hotel in Greater Noida, offering a safe, discreet, and welcoming Strategically located near major educational institutions like Sharda University, Galgotias University, and Bennett University, we are recognized as a family-friendly hotel in Greater Noida, as well as a couple-friendly hotel near Sharda University. Our serene and secure environment makes us a safe hotel for couples in Ansal Golf Link and a preferred couple hotel near Galgotias University.
          </p>
          <p className="text-gray-700">
          For business travelers, we are an ideal business-friendly hotel in Knowledge Park 2 and India Expo Mart, offering high-speed Wi-Fi, meeting facilities, and a professional setting to stay productive. Whether you need a budget stay hotel near India Expo Mart or a fully equipped event & conference hotel in Greater Noida, Hotel Prince Inn ensures a seamless experience.
          </p>
          <p className="text-gray-700">At Hotel Prince Inn, our mission is to deliver excellent service, clean and cozy accommodations, and a memorable stay – all within your budget.</p>

                 </div>
      </div>

      {/* Section: Culinary Experience */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          A Culinary Experience Like No Other
        </h2>
        <p className="text-gray-700">
          At DSY Hospitality, we believe great stays are incomplete without exceptional dining. Our
          culinary philosophy blends tradition with innovation, delivering flavors that leave a
          lasting impression. From local delicacies to global favorites, every dish is crafted with
          passion, precision, and the freshest ingredients.
        </p>
        <p className="text-gray-700 mt-2">
          We proudly collaborate with over 500 prestigious corporate clients, including Amazon,
          Kimbal, Oppo, Honda Cars, Honda Bikes, Newgen Software, HCL, and many more. Our expertise
          also extends to managing hospitality for large-scale expos and events, ensuring seamless
          experiences every time.
        </p>
      </div>

      {/* Section: Presence */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Our Presence in Noida & Greater Noida
        </h2>
        <p className="text-gray-700">
          With 6 properties strategically located in Noida and Greater Noida, we cater to business
          and leisure travelers alike. Whether you’re attending a corporate event, an industry
          expo, or seeking a relaxing getaway, DSY Hospitality promises a perfect blend of comfort,
          convenience, and bespoke service.
        </p>
      </div>
    </div>
    </>
  );
};

export default AboutUsHeader;

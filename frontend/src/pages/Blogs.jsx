import { Link } from "react-router-dom";
import gallery1 from "../assets/gallery_img_1.jpg";
import gallery2 from "../assets/gallery_img_6.jpg";
import gallery3 from "../assets/gallery_img_7.jpg";

const hotels = [
  {
    id: 1,
    title: "Best Hotel in Greater Noida",
    subtitle: "Delhi NCR – Hotel Prince Inn",
    description:
      "Greater Noida, a rapidly developing region in the National Capital Region (NCR) of India, is known for its modern infrastructure, international exhibitions, educational institutions, and growing business hubs.",
    image: gallery2,
    link: "/blog/best-hotel-greater-noida",
  },
  {
    id: 2,
    title: "Best Hotel in Greater Noida",
    subtitle: "Hotel Near Knowledge Park 2",
    description:
      "Whether you're a student, a working professional, a traveler, or a businessperson visiting Greater Noida, choosing the right accommodation can make all the difference.",
    image: gallery3,
    link: "/blog/hotel-near-knowledge-park-2",
  },
];

const Blogs = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: `url(${gallery1})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">Blogs</h1>
          <p className="text-sm">Home / Blogs</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={hotel.image}
              alt={hotel.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-1">{hotel.title}</h2>
              <h3 className="text-sm text-gray-600 mb-4">{hotel.subtitle}</h3>
              <p className="text-gray-700 text-sm border-b border-gray-300 pb-4 mb-4">
                {hotel.description}
              </p>
              <Link
                to={hotel.link}
                className="inline-block bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700 transition"
              >
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;

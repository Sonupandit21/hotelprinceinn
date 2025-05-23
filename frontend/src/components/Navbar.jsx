import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SigninPage from "../pages/SigninPage.jsx";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [showModal, setShowModal] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  const locations = ["Ghaziabad", "Noida", "Delhi", "Jaipur"];

  return (
    <>
      <header className="w-full shadow-sm border-b border-gray-200 z-50 relative">
        <div className="bg-gray-900 text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button className="text-white text-2xl sm:text-3xl" onClick={toggleSidebar}>
              ☰
            </button>
            <Link to="/home">
  <span className="uppercase tracking-widest font-semibold text-xs sm:text-sm md:text-base lg:inline hidden">
    HOTEL PRINCEINN NOIDA
  </span>
</Link>
            <img
              src={logo}
              alt="Hotel Logo"
              className="mx-auto sm:mx-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 h-8 sm:h-10"
            />
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* <div className="hidden md:block relative">
              <button
                className="uppercase tracking-wider text-xs sm:text-sm hover:opacity-80"
                onClick={toggleDropdown}
              >
                {selectedLocation} ▾
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-gray-900 shadow-md mt-2 rounded-sm min-w-[160px]">
                  <ul className="text-sm">
                    {locations.map((location) => (
                      <li key={location}>
                        <Link
                          to={`/location/${location.toLowerCase()}`}
                          className="block px-4 py-2 hover:bg-gray-800"
                          onClick={() => handleLocationClick(location)}
                        >
                          {location}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div> */}
            <button
              onClick={() => setShowModal(true)}
              className="hidden sm:inline-block bg-white text-[#1b0c48] px-4 sm:px-6 py-2 font-bold rounded-full 
                shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-50 
                text-xs sm:text-sm tracking-wide border-2 border-[#1b0c48]"
            >
              Sign in
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#1b0c48] text-white z-40 transform transition-transform duration-300 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white">
          <button onClick={toggleSidebar} className="text-2xl sm:text-3xl">✕</button>
          <img src={logo} alt="HOTEL PRINCEINN" className="h-6 sm:h-8" />
        </div>
        <nav className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-3 p-4 sm:px-6 text-sm sm:text-base md:text-lg font-medium">
  <Link to="/" className="hover:text-blue-700 transition" onClick={toggleSidebar}>Home</Link>
  <Link to="/about-us" className="hover:text-blue-700 transition" onClick={toggleSidebar}>About Us</Link>
  <Link to="/hotel-prince" className="hover:text-blue-700 transition" onClick={toggleSidebar}>Hotel Prince Inn</Link>
  <Link to="/hotel-prince-residency" className="hover:text-blue-700 transition" onClick={toggleSidebar}>Prince Residency</Link>
  <Link to="/hotel-prince-stay" className="hover:text-blue-700 transition" onClick={toggleSidebar}>Prince Stay</Link>
  <Link to="/facilities" className="hover:text-blue-700 transition" onClick={toggleSidebar}>Facilities</Link>
  <Link to="/gallery" className="hover:text-blue-700 transition" onClick={toggleSidebar}>Gallery</Link>
  <Link to="/blogs" className="hover:text-blue-700 transition" onClick={toggleSidebar}>Blogs</Link>
  <Link to="/contact-us" className="hover:text-blue-700 transition" onClick={toggleSidebar}>Contact</Link>
  <Link to="/enquiry-now" className="hover:text-blue-700 transition" onClick={toggleSidebar}>Enquiry</Link>
</nav>

<div className="bg-[#d6e1ed] text-[#1b0c48] p-13 sm:p-16 text-xs sm:text-sm font-medium mt-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-between gap-6 text-center md:text-left">
    
    {/* Hotel Princeinn Noida */}
    <div className="flex-1">
      <div className="uppercase font-bold tracking-widest mb-4 text-sm sm:text-base">
        HOTEL PRINCEINN NOIDA
      </div>
      <div className="leading-relaxed mb-2">
        Cd 44 Ansal Golf Link 1<br />
        Greater Noida 201306
      </div>
      <div className="flex flex-col items-center md:items-start space-y-2">
        <div className="flex items-center space-x-1">
          <span>📞</span>
          <span>+91-8130622279</span>
        </div>
        <div className="flex items-center space-x-1">
          <span>⭐</span>
          <span>4.5 (1728 Reviews)</span>
        </div>
        <div className="flex items-center space-x-1">
          <span>📧</span>
          <span>reservations.dsyhotels@gmail.com</span>
        </div>
      </div>
    </div>

    {/* Hotel Prince Stay */}
    <div className="flex-1">
      <div className="uppercase font-bold tracking-widest mb-4 text-sm sm:text-base">
        Hotel Prince Stay <br />
        By Dsy hospitality
      </div>
      <div className="leading-relaxed mb-2">
        Add-B94, Kasna 6%, Ecotech 6,<br />
        Greater Noida, Uttar Pradesh 
      </div>
      <div className="flex flex-col items-center md:items-start space-y-2">
        <div className="flex items-center space-x-1">
          <span>📞</span>
          <span>+91-8130622279</span>
        </div>
        <div className="flex items-center space-x-1">
          <span>🕒</span>
          <span>24/7 Service</span>
        </div>
      </div>
    </div>

  </div>
</div>


      </div>

      <SigninPage isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;
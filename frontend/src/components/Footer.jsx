import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
const exploreLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

const contactInfo = [
    {
      icon: <MapPinIcon className="w-5 h-5" />,
      text: `Add-Cd 44 Ansal Golf Link 1 Greater Noida 201310\n Plot No-38C/1, Knowledge Park-2, Greater Noida 201310`
    },
    
     {
      icon: <EnvelopeIcon className="w-5 h-5" />,
      text: <a href="mailto:reservations.dsyhotels@gmail.com" className="hover:text-amber-500">reservations.dsyhotels@gmail.com</a>
    },
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      text: <a href="tel:+918136622279" className="hover:text-amber-500">+91 8136622279</a>
    },
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      text: <a href="tel:+919521415948" className="hover:text-amber-500">+91 9521415948</a>
    }
  ]

  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Explore Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            {exploreLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-amber-500 transition duration-300 text-sm sm:text-base"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand Section */}
        <div>
          <img
            src={logo}
            alt="Hotel Logo"
            className="w-32 mb-4 mx-auto sm:mx-0"
            loading="lazy"
          />
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto sm:mx-0">
            Committed to exceptional guest experiences, we pride ourselves on delivering
            distinguished hospitality, cozy accommodations, and modern amenities tailored
            to meet the needs of every traveler.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-amber-500 mt-0.5">{item.icon}</span>
                <p className="text-gray-300 text-sm sm:text-base whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex space-x-5">
            <a href="https://www.facebook.com/dsy.hospitality/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-5 h-5 sm:w-6 sm:h-6 text-[#1877F2] hover:text-amber-500 transition" />
            </a>
            <a href="https://x.com/Dsy_hospitality" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6 text-[#1DA1F2] hover:text-amber-500 transition" />
            </a>
            <a href="https://www.instagram.com/dsy_hospitality/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 text-[#E1306C] hover:text-amber-500 transition" />
            </a>
            <a href="/#" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A66C2] hover:text-amber-500 transition" />
            </a>
          </div>

          <p className="text-gray-300 text-center sm:text-right text-xs sm:text-sm mt-4 sm:mt-0">
            © {new Date().getFullYear()} All Rights Reserved<br className="sm:hidden" />
            Website Design by Sonu Pandit
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

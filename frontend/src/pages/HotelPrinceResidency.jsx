import React, { Component } from 'react';
import gallery1 from "../assets/gallery_img_1.jpg";
import hotel from "../assets/hotel/hotel.jpg";
import hotel1 from "../assets/hotel/hotel1.jpg";
import hotel2 from "../assets/hotel/hotel2.jpg";
import hotel3 from "../assets/hotel/hotel3.jpg";
import hotel4 from "../assets/hotel/hotel4.jpg";

const hotelImages = [
  gallery1,
  hotel,
  hotel1,
  hotel2,
  hotel3,
  hotel4,
  gallery1,

 
];
const API_BASE_URL = '/api/bookings';
console.log("API_BASE_URL",API_BASE_URL)

class HotelPageClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      fullName: '',
      phone: '',
      rooms: '',
      message: '',
    };
  }

  handleImageClick = (src) => {
    this.setState({ selectedImage: src });
  };

  closeImage = () => {
    this.setState({ selectedImage: null });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { fullName, phone, rooms, message } = this.state;

  //   // Simple validation
  //   if (!fullName || !phone || !rooms) {
  //     alert('Please fill in all required fields.');
  //     return;
  //   }

  //   console.log('Booking Details:', {
  //     fullName,
  //     phone,
  //     rooms,
  //     message,
  //   });

  //   alert('Booking submitted!');
  //   this.setState({
  //     fullName: '',
  //     phone: '',
  //     rooms: '',
  //     message: '',
  //   });
  // };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, phone, rooms, email, message } = this.state;
  
    if (!fullName || !phone || !rooms || !email  ) {
      alert('Please fill in all required fields.');
      return;
    }
  
    try {
      const response = await fetch(`${API_BASE_URL}/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          phoneNumber: phone,
          rooms, // 🟢 keep as string now (not Number)
          email,
          message,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Booking successful!');
        this.setState({
          fullName: '',
          phone: '',
          rooms: '',
          email: '',
          message: '',
        });
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Something went wrong. Please try again.');
    }
  };
    render() {
    const {
      selectedImage,
      fullName,
      phone,
      rooms,
      message
    } = this.state;

    return (
      <div className="p-6 max-w-7xl mx-auto font-sans">
        {/* Hero Image */}
        <div className="mb-6">
          <img
            src={gallery1}
            alt="Hotel Front View"
            className="w-full h-[300px] object-cover rounded-lg shadow-md"
          />
        </div>

        <h1 className="text-3xl font-bold mb-4">Hotel Prince Residency By Dsy Hospitality
</h1>

        <p className="mb-4 text-gray-700">
        Welcome to DSY Hospitality ( 25 ROOMS ), where exceptional service meets unforgettable experiences. With a portfolio of 20+ hotels across India, we specialize in mid-segment and boutique properties designed for comfort, style, and personalized hospitality. Our extended venture, Gen G Hotels, reflects our commitment to redefining modern hospitality by offering thoughtfully curated stays and world-class services.

We proudly collaborate with over 500 prestigious corporate clients, including Amazon, Kimbal, Oppo, Honda Cars, Honda Bikes, Newgen Software, HCL, and many more. Our expertise also extends to managing hospitality for large-scale expos and events, ensuring seamless experiences every time.

Facilities
        </p>

        {/* Facilities */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">Facilities</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 list-disc pl-5">
          <li>24 inch flat-screen TV</li>
          <li>In-room Safe</li>
          <li>Mini-refrigerator</li>
          <li>Breakfast</li>
          <li>Complimentary bottled water</li>
        </ul>

        {/* Image Gallery */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">Hotel Images</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {hotelImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Hotel Image ${index + 1}`}
              className="rounded shadow cursor-pointer hover:scale-105 transition duration-300"
              onClick={() => this.handleImageClick(src)}
            />
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={this.closeImage}
          >
            <img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-full max-h-full rounded shadow-lg"
            />
          </div>
        )}

        {/* Map */}
        <h2 className="text-2xl font-semibold mt-10 mb-2">Location</h2>
        <div className="w-full h-[400px] rounded shadow overflow-hidden mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9119696060466!2d77.55363867494903!3d28.421912993615006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc18e1f0cbe63%3A0xd943dca1ee7d1b9f!2sHotel%20Prince%20Stay!5e0!3m2!1sen!2sin!4v1747631904076!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Map"
          ></iframe>
        </div>

        {/* Booking Form */}
        <h2 className="text-2xl font-semibold mb-4">For Booking</h2>
        <form onSubmit={this.handleSubmit} className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="font-medium">Full Name*</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={this.handleChange}
              required
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
  <label htmlFor="phone" className="font-medium">Phone No*</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    value={phone}
    onChange={this.handleChange}
    required
    pattern="^\d{10}$"
    maxLength={10}
    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Enter 10-digit phone number"
  />
</div>

<div className="flex flex-col">
  <label htmlFor="rooms" className="font-medium">Rooms*</label>
  <select
    id="rooms"
    name="rooms"
    value={rooms}
    onChange={this.handleChange}
    required
    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="">Select a Room</option>
    <option value="Deluxe Room">Deluxe Room</option>
    <option value="Single Room">Single Room</option>
    <option value="Luxury Room">Luxury Room</option>
  </select>
</div> 

          <div className="flex flex-col">
  <label htmlFor="email" className="font-medium">Email*</label>
  <input
    type="email"
    id="email"
    name="email"
    value={this.state.email}
    onChange={this.handleChange}
    required
    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
</div>


          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={this.handleChange}
              rows="4"
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Additional requests or notes..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
    );
  }
}

export default HotelPageClass;

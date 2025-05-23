import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./pages/AdminDashboard/layouts/AdminLayout";

// Public Pages
import DeluxePage from "./pages/DeluxePage";
import Feedback from "./pages/Feedback";
import HotelBooking from "./pages/HotelBooking";
import LocationCity from "./pages/LocationCity";
import RoomBooking from "./pages/RoomBooking";
import SigninPage from "./pages/SigninPage";
import About from "./pages/About";
import HotelPrince from "./pages/HotelPrince";
import HotelPrinceResidency from "./pages/HotelPrinceResidency";
import HotelPrinceStay from "./pages/HotelPrinceStay";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import EnquiryNow from "./pages/EnquiryNow";
import BestHotelinGreaterNoida from "./pages/BestHotelinGreaterNoida";
import HoteNearKnowledgePark from "./pages/HoteNearKnowledgePark";
import SingleRoom from "./pages/SingleRoom";
import LuxuryRoom  from "./pages/LuxuryRoom";
// import BookingForm from "./pages/BookingForm";
import OrderHistory from "./pages/OrderHistory";
// import LuxuryFrom from "./pages/LuxuryFrom";
// import SingleFrom from "./pages/SingleFrom";

// Admin Pages
import Login from "./pages/AdminDashboard/Login";
import Register from "./pages/AdminDashboard/Register";
import Dashboard from "./pages/AdminDashboard/page/Dashboard";
import UserTable from "./pages/AdminDashboard/page/UserTable"; 
import Client_messages from "./pages/AdminDashboard/page/Client_messages";
import BookingHistory from "./pages/AdminDashboard/page/BookingHistory";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <Routes>
      {/* 🌐 Public Website Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HotelBooking />} />
        <Route path="/home" element={<HotelBooking />} />
        <Route path="/room-booking" element={<RoomBooking />} />
        <Route path="/location" element={<h2>Location</h2>} />
        <Route path="/location/:city" element={<LocationCity />} />
        <Route path="/Book/:id" element={<DeluxePage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/hotel-prince" element={<HotelPrince />} />
        <Route path="/hotel-prince-residency" element={<HotelPrinceResidency />} />
        <Route path="/hotel-prince-stay" element={<HotelPrinceStay />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/enquiry-now" element={<EnquiryNow />} />
        <Route path="/blog/best-hotel-greater-noida" element={<BestHotelinGreaterNoida />} />
        <Route path="/blog/hotel-near-knowledge-park-2" element={<HoteNearKnowledgePark />} />
        <Route path="/single-room" element={<SingleRoom />} />
        <Route path="/Luxury-Room" element={<LuxuryRoom/>}/>
        <Route path="/signin" element={<SigninPage />} />

{/*         <Route path="/booking-form" element={<BookingForm />} /> */}
        <Route path="/Order-History" element={<OrderHistory/>}/>
{/*         <Route path="/LuxuryFrom" element={<LuxuryFrom/>}/> */}
{/*         <Route path="/SingleFrom"  element={<SingleFrom/>}/> */}
      </Route>

      {/* 🔒 Admin Routes */}
      <Route element={<AdminLayout />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/users_all" element={<UserTable />} />
        <Route path="/client_messages" element={<Client_messages/>}/>
        <Route path="/BookingHistory" element={<BookingHistory/>}/>
 
              </Route>

      {/* 🔐 Auth Routes */}
      
      <Route path="/Login-AdminDashboard" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/signin" element={<SigninPage />} />

      {/* ❌ 404 Page */}
      <Route path="*" element={<h1 className="text-center text-red-500 mt-10 text-2xl">404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default App;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HotelBooking from '../pages/HotelBooking';
// import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="">
      {/* <HotelBooking /> */}
      
        <Outlet />
              </main>
              <Footer/>
             
         {/* <Footer/> */}
              
    </div>
  );
};

export default MainLayout;

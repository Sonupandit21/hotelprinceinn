import React, { useEffect, useState } from "react";

const API_URL = "/api/paymentbookings";

const BookingHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;

  if (!orders.length) return <div className="p-6">No bookings found.</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {orders.map((order, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 max-w-5xl mx-auto mb-6"
        >
          <h3 className="font-semibold text-lg mb-4">Booking Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            {/* <div><strong>Order ID:</strong> {order._id}</div>
            <div><strong>Payment Mode:</strong> {order.paymentMode}</div>
            <div><strong>Total Amount:</strong> ₹{order.total}</div>
            <div><strong>Name:</strong> {order.bookingDetails?.firstName}</div>
            <div><strong>Phone:</strong> {order.bookingDetails?.phone}</div>
            <div><strong>Email:</strong> {order.bookingDetails?.email}</div>
            <div><strong>Room:</strong> {order.bookingDetails?.room}</div>
            <div><strong>Check-In:</strong> {order.bookingDetails?.checkIn}</div>
            <div><strong>Check-Out:</strong> {order.bookingDetails?.checkOut}</div>
            <div><strong>Adults:</strong> {order.bookingDetails?.adults}</div>
            <div><strong>Children:</strong> {order.bookingDetails?.children}</div>
            <div><strong>Country:</strong> {order.bookingDetails?.country}</div>
            <div><strong>City:</strong> {order.bookingDetails?.city}</div>
            <div><strong>Address:</strong> {order.bookingDetails?.address}</div>
            <div><strong>Postcode:</strong> {order.bookingDetails?.postcode}</div>
            <div><strong>State:</strong> {order.bookingDetails?.state}</div>
            <div><strong>Notes:</strong> {order.bookingDetails?.notes}</div> */}

            <div><strong>CheckIn:</strong>{order.bookingDetails?.checkIn}</div>
            <div><strong>CheckOut:</strong>{order.bookingDetails?.checkOut}</div>
            <div><strong>Adults:</strong>{order.bookingDetails?.adults}</div> 
            <div><strong>Children:</strong>{order.bookingDetails?.children}</div>
            <div><strong>FirstName:</strong>{order.bookingDetails?.firstName}</div>
            <div><strong>Phone:</strong>{order.bookingDetails?.phone}</div>
            <div><strong>Email:</strong>{order.bookingDetails?.email}</div>
            <div><strong>Room</strong>{order.bookingDetails?.room}</div>
            <div><strong>Country:</strong> {order.bookingDetails?.country}</div>
            <div><strong>City:</strong> {order.bookingDetails?.city}</div>
            <div><strong>Address:</strong> {order.bookingDetails?.address}</div>
            <div><strong>Postcode:</strong> {order.bookingDetails?.postcode}</div>
            <div><strong>State:</strong> {order.bookingDetails?.state}</div>
            <div><strong>Notes:</strong> {order.bookingDetails?.notes}</div>
            <div><strong>payment_method:</strong>{order.bookingDetails?.payment_method}</div>
            <div><strong>Total_price:</strong>{order.bookingDetails?.Total_price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingHistory;

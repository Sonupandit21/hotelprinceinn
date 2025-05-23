import React, { useEffect, useState } from "react";

const OrderHistory = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await fetch("/api/paymentbookings");
        const data = await response.json();

        // If it's an array and you want to show the first order
        setOrder(Array.isArray(data) ? data[0] : data);
      } catch (error) {
        console.error("Error fetching booking:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, []);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (!order || !order.bookingDetails) {
    return <div className="p-6">No booking data available.</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-5xl mx-auto">
        <div className="text-sm text-gray-700">
          <h3 className="font-semibold text-lg mb-4">Booking Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><strong>CheckIn:</strong> {order.bookingDetails.checkIn}</div>
            <div><strong>CheckOut:</strong> {order.bookingDetails.checkOut}</div>
            <div><strong>Adults:</strong> {order.bookingDetails.adults}</div>
            <div><strong>Children:</strong> {order.bookingDetails.children}</div>
            <div><strong>FirstName:</strong> {order.bookingDetails.firstName}</div>
            <div><strong>Phone:</strong> {order.bookingDetails.phone}</div>
            <div><strong>Email:</strong> {order.bookingDetails.email}</div>
            <div><strong>Room:</strong> {order.bookingDetails.room}</div>
            <div><strong>Country:</strong> {order.bookingDetails.country}</div>
            <div><strong>City:</strong> {order.bookingDetails.city}</div>
            <div><strong>Address:</strong> {order.bookingDetails.address}</div>
            <div><strong>Postcode:</strong> {order.bookingDetails.postcode}</div>
            <div><strong>State:</strong> {order.bookingDetails.state}</div>
            <div><strong>Notes:</strong> {order.bookingDetails.notes}</div>
            <div><strong>Payment Method:</strong> {order.paymentMode || order.bookingDetails.payment_method}</div>
            <div><strong>Total Price:</strong> ₹{order.total || order.bookingDetails.Total_price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;

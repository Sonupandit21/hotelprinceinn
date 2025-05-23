import React, { useState, useEffect } from "react";

const BookingPage = () => {
  const today = new Date().toISOString().split("T")[0];
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    room: "",
    country: "",
    city: "",
    address: "",
    postcode: "",
    state: "",
    notes: "",
    paymentMethod: "",
  });

  // Load Razorpay script once
  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const calculateAmount = (room) => {
    switch (room) {
      case "Deluxe Room":
        return 2500;
      case "Luxury Room":
        return 3500;
      case "Single Room":
        return 1500;
      default:
        return 1500;
    }
  };

  const amount = calculateAmount(formData.room);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.room) {
      alert("Please select a room.");
      return;
    }
    if (!formData.paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    setLoading(true);

    try {
      // Create order on backend (amount in paise)
      const orderRes = await fetch("http://localhost:5000/api/payments/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount * 100 }),
      });
      const orderData = await orderRes.json();

      if (!orderData.id) throw new Error("Order creation failed");

      const options = {
        key: "rzp_test_1234567890abcdef", // Use test key here!
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Hotel Booking",
        description: "Room Booking Payment",
        order_id: orderData.id,
        handler: async (response) => {
          try {
            // Verify payment
            const verifyRes = await fetch("http://localhost:5000/api/payments/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
            const verifyData = await verifyRes.json();

            if (!verifyData.success) throw new Error("Payment verification failed");

            // Save booking
            const bookingPayload = {
              ...formData,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              payment_method: formData.paymentMethod,
              totalAmount: amount,
            };

            const bookingRes = await fetch("http://localhost:5000/api/payments/bookings", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(bookingPayload),
            });

            if (!bookingRes.ok) {
              alert("Booking failed.");
              throw new Error("Booking failed");
            }

            alert("Booking successful!");
            setFormData({
              checkIn: "",
              checkOut: "",
              adults: 1,
              children: 0,
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              room: "",
              country: "",
              city: "",
              address: "",
              postcode: "",
              state: "",
              notes: "",
              paymentMethod: "",
            });
          } catch (err) {
            console.error(err);
            alert("Payment verification or booking failed.");
          }
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
        alert(`Payment failed: ${response.error.description || "Try again"}`);
      });

      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white shadow rounded"
    >
      <h2 className="text-xl font-bold mb-4">Hotel Booking</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          required
          min={today}
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          required
          min={formData.checkIn || today}
          className="border p-2 rounded"
        />
        <select
          name="room"
          value={formData.room}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        >
          <option value="">Select Room</option>
          <option>Deluxe Room</option>
          <option>Single Room</option>
          <option>Luxury Room</option>
        </select>
        <input
          type="number"
          name="adults"
          min="1"
          value={formData.adults}
          onChange={handleChange}
          className="border p-2 rounded"
          placeholder="Adults"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {[
          ["First Name", "firstName"],
          ["Last Name", "lastName"],
          ["Email", "email", "email"],
          ["Phone", "phone"],
          ["City", "city"],
          ["State", "state"],
          ["Country", "country"],
          ["Address", "address"],
          ["Postcode", "postcode"],
        ].map(([label, name, type]) => (
          <input
            key={name}
            type={type || "text"}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            required
            placeholder={label}
            className="border p-2 rounded"
            {...(name === "phone" && {
              pattern: "[0-9]{10}",
              maxLength: 10,
              title: "Please enter a 10-digit phone number",
            })}
          />
        ))}
      </div>

      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Notes"
        className="w-full mt-4 border p-2 rounded"
        rows={3}
      />

      <div className="mt-4">
        <label className="block mb-2 font-medium">Payment Method</label>
        {["Google pay", "Paytm pay", "Phonepe"].map((method) => (
          <label key={method} className="block mb-1">
            <input
              type="radio"
              name="paymentMethod"
              value={method}
              checked={formData.paymentMethod === method}
              onChange={handleChange}
              className="mr-2"
              required
            />
            {method}
          </label>
        ))}
      </div>

      <div className="mt-6 font-semibold text-lg">Total: ₹{amount}</div>

      {loading && (
        <p className="text-blue-600 mt-2">Processing payment, please wait...</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Processing..." : "Book Now & Pay"}
      </button>
    </form>
  );
};

export default BookingPage;
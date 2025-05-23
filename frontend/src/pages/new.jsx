// import React, { useState } from "react";

// const BookingForm = () => {
//   const [formData, setFormData] = useState({
//     checkIn: "",
//     checkOut: "",
//     adults: 1,
//     children: 0,
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     room: "",
//     country: "",
//     city: "",
//     address: "",
//     postcode: "",
//     state: "",
//     notes: "",
//     paymentMethod: "",
//   });
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const payload = {
//       ...formData,
//       payment_method: formData.paymentMethod, // match API naming
//     };
  
//     delete payload.paymentMethod; // remove redundant key
  
//     try {
//       const res = await fetch("http://localhost:5000/api/paymentbookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });
  
//       if (!res.ok) throw new Error("Failed to submit booking");
  
//       const result = await res.json();
//       console.log("Booking successful:", result);
//       alert("Booking confirmed!");
//     } catch (err) {
//       console.error("Error:", err);
//       alert("Failed to book. Please try again.");
//     }
//   };
  

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-blue-50 p-6 rounded shadow-md max-w-4xl mx-auto"
//     >
//       <h2 className="text-lg font-semibold mb-4">
//         Booking Details & Your Information
//       </h2>

//       <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium">Check-in</label>
//           <input
//             type="date"
//             name="checkIn"
//             value={formData.checkIn}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Check-out</label>
//           <input
//             type="date"
//             name="checkOut"
//             value={formData.checkOut}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Adults</label>
//           <select
//             name="adults"
//             value={formData.adults}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           >
//             {[...Array(10)].map((_, i) => (
//               <option key={i}>{i + 1}</option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Children</label>
//           <select
//             name="children"
//             value={formData.children}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           >
//             {[...Array(10)].map((_, i) => (
//               <option key={i}>{i}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//         <div>
//           <label className="block text-sm font-medium">First Name *</label>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Last Name *</label>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Email *</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Phone *</label>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//             placeholder="Enter your phone number"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Room *</label>
//           <select
//             name="room"
//             value={formData.room}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           >
//             <option value="">Select a Room</option>
//             <option value="Deluxe Room">Deluxe Room</option>
//             <option value="Single Room">Single Room</option>
//             <option value="Luxury Room">Luxury Room</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">
//             Country of Residence *
//           </label>
//           <select
//   name="country"
//   value={formData.country}
//   onChange={handleChange}
//   className="w-full p-2 border rounded"
//   required
// >
//   <option value="">Select a country</option>
//   <option value="India">India</option>
//   <option value="USA">USA</option>
//   <option value="UK">UK</option>
// </select>

//         </div>

//         <div>
//           <label className="block text-sm font-medium">City *</label>
//           <input
//             type="text"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Address *</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Postcode *</label>
//           <input
//             type="text"
//             name="postcode"
//             value={formData.postcode}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">State *</label>
//           <input
//             type="text"
//             name="state"
//             value={formData.state}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       </div>

//       <div className="mt-4">
//         <label className="block text-sm font-medium">Notes</label>
//         <textarea
//           name="notes"
//           value={formData.notes}
//           onChange={handleChange}
//           rows="4"
//           className="w-full p-2 border rounded"
//         ></textarea>
//       </div>

//       <div className="mt-6 border p-4 rounded bg-white">
//         <p className="font-semibold mb-2">Payment Method</p>
//         <div className="space-y-2">
//           {["Google pay", "Paytm pay", "Phonepe"].map((method) => (
//             <label key={method} className="inline-flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value={method}
//                 checked={formData.paymentMethod === method}
//                 onChange={handleChange}
//               />
//               <span>{method}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="mt-4 text-lg font-semibold">
//         Total Price: <span className="text-green-600">₹1500</span>
//       </div>

//       <div className="mt-6">
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
//         >
//           Book Now
//         </button>
//       </div>
//     </form>
//   );
// };

// export default BookingForm;
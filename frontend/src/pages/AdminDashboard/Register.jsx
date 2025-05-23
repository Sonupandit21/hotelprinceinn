import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registered successfully!");
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center px-10">
        <form onSubmit={handleRegister} className="w-full max-w-md">
          <span onClick={() => navigate("/Login-AdminDashboard")} className="text-blue-600 cursor-pointer mb-4 inline-block">← Back to Home</span>
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <input name="name" placeholder="Enter your name" className="p-3 border rounded" required />
            <input name="phone" placeholder="Enter your phone number" className="p-3 border rounded" required />
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <input name="email" placeholder="Enter your email" className="p-3 border rounded" required />
            <input name="password" placeholder="Enter your password" type="password" className="p-3 border rounded" required />
          </div>
          <div className="mb-3">
            <label className="block mb-1">Profile Picture</label>
            <input type="file" className="border w-full p-2 rounded" required />
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full">Register</button>
        </form>
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center bg-purple-50">
        <div className="max-w-md text-center">
        <img src={logo} alt="Logo" className="mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Join Us Today!</h1>
          <p>By registering, you will unlock exclusive features and access to powerful tools. Just a few steps to get started!</p>
        </div>
      </div>
    </div>
  );
}

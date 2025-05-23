import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy validation logic
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email !== "test@example.com" || password !== "password") {
      setError("Invalid email or password.");
    } else {
      setError("");
      alert("Login successful!");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center px-10">
        <form onSubmit={handleLogin} className="w-full max-w-sm">
          <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
          <input name="email" type="email" placeholder="Enter your email"
            className="mb-3 p-3 w-full border rounded" required />
          <input name="password" type="password" placeholder="Enter your password"
            className="mb-3 p-3 w-full border rounded" required />
          {error && <p className="text-red-500 mb-3">{error}</p>}
          <button type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded w-full">Sign In</button>
          <p className="mt-3 text-center">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")} className="text-blue-600 cursor-pointer">Sign Up</span>
          </p>
        </form>
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center bg-purple-50">
        <div className="max-w-md text-center">
          <img src={logo} alt="Logo" className="mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
          <p>Please sign in to your account by completing the necessary fields below</p>
        </div>
      </div>
    </div>
  );
}

import React, { Component } from "react";

class SigninPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistering: false,
      showPassword: false,
      name: "",
      email: "",
      password: "",
      phone: "",
      errors: {},
      loading: false,
    };
  }

  toggleForm = () => {
    this.setState({ isRegistering: !this.state.isRegistering, errors: {} });
  };

  togglePasswordVisibility = () => {
    this.setState((prev) => ({ showPassword: !prev.showPassword }));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { isRegistering, name, email, password, phone } = this.state;
    const errors = {};

    if (!email.trim()) errors.email = "Email is required";
    if (!password.trim()) errors.password = "Password is required";
    if (isRegistering) {
      if (!name.trim()) errors.name = "Name is required";
      if (!phone.trim()) errors.phone = "Phone is required";
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    this.setState({ loading: true });

    try {
      const url = isRegistering
        ? "http://localhost:5000/api/users/register"
        : "http://localhost:5000/api/auth/signin";

      const payload = isRegistering
        ? { name, email, password, phone }
        : { email, password };

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Request failed");
      }

      const data = await res.json();

      alert(isRegistering ? "Registered successfully" : "Logged in successfully");

      this.setState({
        isRegistering: false,
        name: "",
        email: "",
        password: "",
        phone: "",
        errors: {},
      });

      // Optional: localStorage.setItem("token", data.token);
    } catch (error) {
      alert(`${isRegistering ? "Registration" : "Login"} error: ${error.message}`);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      isRegistering,
      showPassword,
      name,
      email,
      password,
      phone,
      errors,
      loading,
    } = this.state;

    const { isOpen, onClose } = this.props;
    if (!isOpen) return null;

    return (
      <div
        className="min-h-screen bg-gray-100 flex items-center justify-center"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      >
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-500 text-xl font-bold"
              aria-label="Close modal"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">
              {isRegistering ? "Register" : "Sign In"}
            </h2>

            <form className="space-y-4" onSubmit={this.handleSubmit} noValidate>
              {isRegistering && (
                <>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Enter your name"
                    className="w-full p-2 border rounded"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </>
              )}

              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Enter your email"
                className="w-full p-2 border rounded"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  placeholder="Enter password"
                  className="w-full p-2 border rounded pr-10"
                />
                <button
                  type="button"
                  onClick={this.togglePasswordVisibility}
                  className="absolute right-2 top-2 text-gray-500"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  👁️
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

              {isRegistering && (
                <>
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={this.handleChange}
                    placeholder="Enter phone number"
                    className="w-full p-2 border rounded"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </>
              )}

              <button
                type="submit"
                className={`w-full p-2 text-white rounded ${
                  isRegistering ? "bg-gray-500" : "bg-blue-600"
                }`}
                disabled={loading}
              >
                {loading ? "Please wait..." : isRegistering ? "Register" : "Log in"}
              </button>
            </form>

            <p className="text-center mt-4 text-sm">
              {isRegistering ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={this.toggleForm}
                    className="text-blue-600 font-semibold"
                    type="button"
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  Don’t have an account?{" "}
                  <button
                    onClick={this.toggleForm}
                    className="text-blue-600 font-semibold"
                    type="button"
                  >
                    Register here
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SigninPage;

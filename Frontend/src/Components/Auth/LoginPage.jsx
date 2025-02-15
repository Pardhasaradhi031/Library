import React from "react";
import { useState } from "react";

const LoginPage = function () {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login Successful");
        setFormData({ email: "", password: "" }); //clear form
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-neutral-950 mb-6 text-center">Login to Your Account</h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email-login"
              className="block text-sm font-medium text-neutral-950 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email-login"
              name="email"
              className="w-full border border-neutral-300 rounded-md p-3 text-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="password-login"
              className="block text-sm font-medium text-neutral-950 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password-login"
              name="password"
              className="w-full border border-neutral-300 rounded-md p-3 text-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:text-blue-700">
              Register here
            </a>
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Forgot password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

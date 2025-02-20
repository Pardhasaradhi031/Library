import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const RegisterPage = function () {

  const navigate = useNavigate();
  const [token, setToken] = useState('');

  console.log(token)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setToken(data);

      if (response.ok) {
        setMessage("Registration Successfully");
        localStorage.setItem("token", data.token);
        setFormData({ name: "", email: "", password: "" }); //clear form
        navigate('/dashboard');
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error: ", error);
      setMessage("Something went wrong.");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-neutral-950 mb-6 text-center">Create an Account</h2>
        {message && <p className="text-center text-red 500">{message}</p>}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="full-name"
              className="block text-sm font-medium text-neutral-950 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="name"
              className="w-full border border-neutral-300 rounded-md p-3 text-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="email-register"
              className="block text-sm font-medium text-neutral-950 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email-register"
              name="email"
              className="w-full border border-neutral-300 rounded-md p-3 text-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="password-register"
              className="block text-sm font-medium text-neutral-950 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password-register"
              name="password"
              className="w-full border border-neutral-300 rounded-md p-3 text-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white rounded-md py-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-600">
            Already have an account?{" "}
            <Link  to="/auth/login" className="text-blue-500 hover:text-blue-700">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

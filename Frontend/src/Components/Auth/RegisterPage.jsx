import React from "react";

const RegisterPage = function () {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-neutral-950 mb-6 text-center">Create an Account</h2>
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
              name="full-name"
              className="w-full border border-neutral-300 rounded-md p-3 text-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
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
              name="email-register"
              className="w-full border border-neutral-300 rounded-md p-3 text-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
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
              name="password-register"
              className="w-full border border-neutral-300 rounded-md p-3 text-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create a password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:text-blue-700">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

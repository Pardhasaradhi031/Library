import React from "react";

const LoginPage = function () {
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
              name="email-login"
              className="w-full border border-neutral-300 rounded-md p-3 text-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
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
              name="password-login"
              className="w-full border border-neutral-300 rounded-md p-3 text-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

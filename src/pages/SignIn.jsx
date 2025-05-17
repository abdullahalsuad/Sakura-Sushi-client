import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const SignIn = () => {
  const { signIn } = use(AuthContext);
  const navigate = useNavigate();

  //handling signin
  const handleSignin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn(email, password);
      console.log(result.user);
      toast.success(" Login successful. Welcome back!");
      e.target.reset();

      navigate("/dashboard");
    } catch (error) {
      // Map Firebase error codes to user-friendly messages
      const errorMessages = {
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "Incorrect password. Please try again.",
        "auth/invalid-credential": "Invalid email or password.",
        default: error.message,
      };
      const errorMessage = errorMessages[error.code] || errorMessages.default;
      toast.error(errorMessage);
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-teal-50 px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">
            Admin Login
          </h2>

          <form className="space-y-4" onSubmit={handleSignin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;

"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/assets/registration.json";
import toast from "daisyui/components/toast";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setMessage(data.message || data.error);

      if (res.ok) {
        reset();
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      toast.success('registration successful')
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="min-h-[80vh] flex flex-col md:flex-row max-w-7xl px-8 lg:px-16 mx-auto">
        
        {/* Left Column - Form */}
        <div className="md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Create an Account
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", { required: "Password is required" })}
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>

            {/* Message */}
            {message && (
              <p
                className={`mt-4 text-sm ${
                  message.includes("success") ? "text-green-600" : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Right Column - Lottie Animation */}
        <div className="md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-lg">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

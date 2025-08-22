"use client";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {

    await signIn("credentials", {
      redirect: true,
      email: data.email,
      password: data.password,
      callbackUrl: "/", // redirect after login
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 ">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4 "
      >
        <h2 className="text-2xl font-bold text-gray-800">Login</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 ">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="mt-1 block w-full rounded-lg border-gray-300 px-4 py-2 focus:ring focus:border-blue-500 border-1 "
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="mt-1 block w-full rounded-lg border-gray-300 px-4 py-2 focus:ring focus:border-blue-500 border-1 "
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
        

        
      </form>
    </div>
  );
}

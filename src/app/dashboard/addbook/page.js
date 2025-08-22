"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AddBookPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/books/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        setMessage("Book added successfully!");
        reset();
      } else {
        setMessage(result.error || "Something went wrong.");
      }
    } catch (err) {
      setMessage("Failed to add book.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Book</h1>

      {message && <p className="text-center mb-4 text-green-600">{message}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">Book Name</label>
          <input
            type="text"
            {...register("name", { required: "Book name is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            {...register("author", { required: "Author name is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
          {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Pages</label>
            <input
              type="number"
              {...register("pages", { required: "Pages are required" })}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
            />
            {errors.pages && <p className="text-red-500 text-sm">{errors.pages.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Published Year</label>
            <input
              type="number"
              {...register("publishedYear")}
              className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Genre</label>
          <input
            type="text"
            {...register("genre")}
            className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cover Image URL</label>
          <input
            type="text"
            {...register("cover")}
            className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Summary</label>
          <textarea
            {...register("summary")}
            rows={3}
            className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Availability</label>
          <select
            {...register("available", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

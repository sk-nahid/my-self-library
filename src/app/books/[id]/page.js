"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!book || book.error) return <p className="text-center mt-10">Book not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 md:flex gap-8">
      {/* Cover Image */}
      <div className="md:w-1/3 flex justify-center">
        <Image
          src={book.cover}
          width={250}
          height={350}
          alt={book.name}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Book Info */}
      <div className="md:w-2/3 mt-4 md:mt-0">
        <h1 className="text-3xl font-bold mb-2">{book.name}</h1>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Author:</span> {book.author}
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Pages:</span> {book.pages}
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Genre:</span> {book.genre}
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Published:</span> {book.publishedYear}
        </p>
        <p className={`mb-3 font-semibold ${book.available ? "text-green-600" : "text-red-600"}`}>
          {book.available ? "Available" : "Not Available"}
        </p>

        {/* Summary */}
        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-1">Summary</h2>
          <p className="text-gray-600">{book.summary || "N/A"}</p>
        </div>

        {/* Request Button */}
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          onClick={() => alert("Request to rent feature coming soon!")}
        >
          Request to Rent
        </button>
      </div>
    </div>
  );
}

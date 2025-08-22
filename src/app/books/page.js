"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">All Books</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <div key={book._id} className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col">
            <Image
              src={book.cover || "/placeholder.png"}
              width={300}
              height={300}
              alt={book.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold">{book.name}</h2>
                <p className="text-gray-600">by {book.author}</p>
                <p className={`mt-2 font-medium ${book.available ? "text-green-600" : "text-red-600"}`}>
                  {book.available ? "Available" : "Not Available"}
                </p>
              </div>
              <button
                className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => router.push(`/books/${book._id}`)}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

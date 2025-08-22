"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession(); // get session data

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BookShare
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-black">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/books" className="hover:text-blue-500">Books</Link>
            {session && (
              <Link href="/dashboard/addbook" className="hover:text-blue-500">
                Add Book
              </Link>
            )}

            {/* Right Side */}
            {session ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">{session.user.email}</span>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href="/login" className="hover:text-blue-500">Login</Link>
                <Link href="/registration" className="hover:text-blue-500">Register</Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-gray-700 focus:outline-none">
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-blue-500">Home</Link>
          <Link href="/books" className="block hover:text-blue-500">Browse</Link>
          {session && <Link href="/dashboard/addbook" className="block hover:text-blue-500">Add Book</Link>}

          {session ? (
            <div className="flex flex-col space-y-2">
              <span className="text-gray-700">{session.user.email}</span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="block hover:text-blue-500">Login</Link>
              <Link href="/registration" className="block hover:text-blue-500">Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

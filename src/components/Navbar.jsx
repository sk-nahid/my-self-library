"use client"; // required for Next.js 15 client component

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BookShare
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/books" className="hover:text-blue-500">Browse</Link>
            <Link href="/dashboard" className="hover:text-blue-500">Dashboard</Link>
            <Link href="/login" className="hover:text-blue-500">Login</Link>
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
          <Link href="/dashboard" className="block hover:text-blue-500">Dashboard</Link>
          <Link href="/login" className="block hover:text-blue-500">Login</Link>
        </div>
      )}
    </nav>
  );
}

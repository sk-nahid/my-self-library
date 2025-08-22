"use client";

import { motion } from "framer-motion";
import { BookOpenIcon, MagnifyingGlassIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800"
        >
          Features & Benefits
        </motion.h2>

        {/* Subheading */}
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our platform makes it easy to track, organize, and enjoy your reading journey.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg p-6 rounded-xl"
          >
            <BookOpenIcon className="h-12 w-12 text-blue-500 mx-auto" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Organize Your Books
            </h3>
            <p className="mt-2 text-gray-600">
              Sort by genre, author, or reading status with ease.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg p-6 rounded-xl"
          >
            <MagnifyingGlassIcon className="h-12 w-12 text-green-500 mx-auto" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Quick Search
            </h3>
            <p className="mt-2 text-gray-600">
              Find any book instantly with our fast search tool.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg p-6 rounded-xl"
          >
            <ChartBarIcon className="h-12 w-12 text-purple-500 mx-auto" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Track Progress
            </h3>
            <p className="mt-2 text-gray-600">
              See your reading stats and track progress over time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// components/About.jsx
import { BookOpenIcon, MagnifyingGlassIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import aboutImg from '../../public/about.jpg'

export default function About() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Your Library, Your Way
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Easily track, organize, and manage all your books in one place.
            Whether you're a casual reader or a book collector, we make
            managing your library effortless.
          </p>

          {/* Features */}
          <div className="mt-8 space-y-5">
            <Feature
              icon={<BookOpenIcon className="w-6 h-6 text-indigo-600" />}
              title="Organize Your Books"
              description="Sort by genre, author, or status for quick access."
            />
            <Feature
              icon={<MagnifyingGlassIcon className="w-6 h-6 text-indigo-600" />}
              title="Quick Search"
              description="Find any book instantly with powerful search."
            />
            <Feature
              icon={<ChartBarIcon className="w-6 h-6 text-indigo-600" />}
              title="Track Progress"
              description="See your reading stats and stay motivated."
            />
          </div>

          {/* CTA */}
          <div className="mt-8">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
              Start Your Library
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <Image
            src={aboutImg} 
            alt="Bookshelf Illustration"
            width={500}
            height={400}
            className="drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

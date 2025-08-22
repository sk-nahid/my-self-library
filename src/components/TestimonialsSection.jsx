"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "This platform has completely transformed how I work. It's intuitive, fast, and reliable.",
  },
  {
    name: "David Smith",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "A fantastic tool! I was able to increase my productivity by 50% in just one week.",
  },
  {
    name: "Emily Brown",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "The UI is so clean and easy to use. I highly recommend it to anyone looking for quality.",
  },
  {
    name: "Emily Brown",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "The UI is so clean and easy to use. I highly recommend it to anyone looking for quality.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-black"
        >
          What Our Users Say
        </motion.h2>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
                  slidesPerView={1}
                  loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white shadow-lg rounded-2xl  p-6 flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-500"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
                <p className="mt-4 text-gray-600 text-sm">{item.feedback}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

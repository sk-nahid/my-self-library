"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

// Import your images
import hero1 from "../../public/hero1.jpg";
import hero2 from "../../public/hero2.jpg";
import hero3 from "../../public/hero3.jpg";

export default function Hero() {
    const slides = [
        {
            title: "Share Books. Discover Knowledge.",
            text: "Join our community of readers. Add your books, request books to read, and connect with fellow book lovers.",
            btn1: { text: "Add Your Book", link: "/dashboard/add-book" },
            btn2: { text: "Browse Books", link: "/books" },
            image: hero1,
        },
        {
            title: "Request Books You Love",
            text: "Find books you want to read, send a request, and enjoy reading from fellow users.",
            btn1: { text: "Browse Books", link: "/books" },
            btn2: null,
            image: hero2,
        },
        {
            title: "Track Your Shared Books",
            text: "Manage your collection, see who requested your books, and stay organized.",
            btn1: { text: "Go to Dashboard", link: "/dashboard" },
            btn2: null,
            image: hero3,
        },
    ];

    return (

        <section className="flex justify-center items-center bg-white">
            <div className="max-w-7xl mx-auto  py-16 md:h-[80vh] ">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    pagination={{ clickable: true }}
                    // navigation
                    autoplay={{ delay: 5000 }}
                    loop
                    className="w-full h-full px-6 lg:px-8 "
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-20">

                                {/* Text + Buttons */}
                                <div className="md:w-1/2 text-center md:text-left space-y-6">
                                    <motion.h1
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="text-4xl md:text-6xl font-bold text-blue-700"
                                    >
                                        {slide.title}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        className="text-lg md:text-xl text-gray-700 max-w-lg"
                                    >
                                        {slide.text}
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.2 }}
                                        className="flex justify-center md:justify-start space-x-4"
                                    >
                                        <a
                                            href={slide.btn1.link}
                                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                        >
                                            {slide.btn1.text}
                                        </a>
                                        {slide.btn2 && (
                                            <a
                                                href={slide.btn2.link}
                                                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition"
                                            >
                                                {slide.btn2.text}
                                            </a>
                                        )}
                                    </motion.div>
                                </div>

                                {/* Image */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
                                >
                                    <Image
                                        src={slide.image}
                                        alt="Hero image"
                                        className="rounded-xl shadow-lg object-cover"
                                        width={500}
                                        height={400}
                                    />
                                </motion.div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

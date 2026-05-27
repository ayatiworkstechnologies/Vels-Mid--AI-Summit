"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GlimpseCarousel() {
  const slides = [
    {
      title: "Glimpse",
      image: "/images/glimpse-1.jpg",
    },
    {
      title: "Scientific Sessions",
      image: "/images/glimpse-2.jpg",
    },
    {
      title: "Workshops",
      image: "/images/glimpse-3.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIsPaused(true);
    nextSlide();
  };

  const handlePrev = () => {
    setIsPaused(true);
    prevSlide();
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Full Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="Conference Highlights Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-1 top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer text-[#2b2f91] transition hover:scale-110 sm:block lg:left-0"
          aria-label="Previous slide"
        >
          <span className="text-[34px] font-light leading-none">‹</span>
        </button>

        {/* Carousel Card */}
        <div className="relative mx-auto h-[260px] w-full max-w-[1080px] overflow-hidden rounded-[18px] shadow-[0_12px_28px_rgba(0,0,0,0.18)] sm:h-[360px] md:h-[430px] lg:h-[465px]">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === activeIndex
                  ? "translate-x-0 opacity-100"
                  : index < activeIndex
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />

              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-7 left-7 sm:bottom-9 sm:left-10">
                <h3 className="text-[20px] font-extrabold text-white sm:text-[24px]">
                  {slide.title}
                </h3>

                <div className="mt-3 h-[1.5px] w-[180px] bg-[#2b2f91] sm:w-[260px]" />
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-1 top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer text-[#2b2f91] transition hover:scale-110 sm:block lg:right-0"
          aria-label="Next slide"
        >
          <span className="text-[34px] font-light leading-none">›</span>
        </button>

        {/* Mobile Arrows */}
        <div className="mt-5 flex items-center justify-center gap-8 sm:hidden">
          <button
            type="button"
            onClick={handlePrev}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#2b2f91] text-[#2b2f91]"
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#2b2f91] text-[#2b2f91]"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </motion.div>
    </section>
  );
}
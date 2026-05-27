"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function KeyFocusAreas() {
  const focusAreas = [
    {
      title: "AI-driven diagnostics",
      icon: "/icons/focus-1.svg",
    },
    {
      title: "Digital health technologies",
      icon: "/icons/focus-2.svg",
    },
    {
      title: "Clinical decision support systems",
      icon: "/icons/focus-3.svg",
    },
    {
      title: "Data-driven healthcare innovation",
      icon: "/icons/focus-4.svg",
    },
    {
      title: "Future of intelligent healthcare systems",
      icon: "/icons/focus-5.svg",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Full Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="Key Focus Areas Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="max-w-[680px]">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[38px] lg:text-[40px]"
          >
            Key focus areas include
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{ transformOrigin: "left" }}
            className="mt-4 h-[1.5px] w-full max-w-[570px] bg-[#4d56c9]"
          />
        </div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-20 grid grid-cols-1 overflow-hidden rounded-[12px] border border-[#e1e1e1] bg-white/95 shadow-[0_12px_35px_rgba(43,47,145,0.08)] backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-5"
        >
          {focusAreas.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: index % 2 === 0 ? 38 : -22,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: 0.15 + index * 0.12,
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.25 },
              }}
              className={`group relative flex min-h-[165px] flex-col items-center justify-center border-b border-[#e1e1e1] px-5 py-8 text-center transition-colors duration-300 hover:bg-[#2b2f91] sm:border-r lg:border-b-0
                ${index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
                ${index === 1 || index === 3 ? "sm:border-r-0 lg:border-r" : ""}
                ${index === 4 ? "border-b-0 sm:border-r-0 lg:border-r-0" : ""}
              `}
            >
              <motion.div
                initial={{ opacity: 0, rotate: -12, scale: 0.75 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.28 + index * 0.12,
                }}
                whileHover={{
                  rotate: 8,
                  scale: 1.12,
                  transition: { duration: 0.25 },
                }}
                className="relative h-[32px] w-[32px] transition-transform duration-300 group-hover:scale-110"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  sizes="32px"
                  className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.36 + index * 0.12,
                }}
                className="mt-7 max-w-[180px] text-[18px] font-normal leading-[1.15] text-[#333333] transition-colors duration-300 group-hover:text-white sm:text-[18px] lg:text-[14px]"
              >
                {item.title}
              </motion.p>

              {/* Small hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
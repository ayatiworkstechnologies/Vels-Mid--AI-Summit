"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RunningText() {
  const highlights = [
    {
      title: "7 Pre-conference hands-on workshops",
      icon: "/icons/highlight-1.svg",
    },
    {
      title: "9 Scientific sessions",
      icon: "/icons/highlight-2.svg",
    },
    {
      title: "Velan Oration Lecture",
      icon: "/icons/highlight-3.svg",
    },
    {
      title: "Scientific paper presentations",
      icon: "/icons/highlight-4.svg",
    },
    {
      title: "Poster presentations",
      icon: "/icons/highlight-5.svg",
    },
    {
      title: "Panel discussions",
      icon: "/icons/highlight-6.svg",
    },
    {
      title: "Networking opportunities",
      icon: "/icons/highlight-7.svg",
    },
    {
      title: "Banquet dinner for delegates",
      icon: "/icons/highlight-8.svg",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-10 sm:py-12 md:py-14 lg:py-16">
      {/* Full Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="Conference Highlights Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-white/20" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="max-w-[920px]">
          <motion.span
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="block text-[12px] font-bold uppercase tracking-[0.32em] text-[#2b2f91]"
          >
            Conference Highlights
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-3 text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[40px]"
          >
            What to Expect at MED-AI Summit 2026
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.25 }}
            style={{ transformOrigin: "left" }}
            className="mt-4 h-[1.5px] w-full max-w-[950px] bg-[#4d56c9]"
          />
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 45,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{
                duration: 0.55,
                delay: index * 0.09,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative min-h-[150px] overflow-hidden rounded-[16px] border border-[#2b2f91] bg-white/95 p-5 shadow-[0_8px_24px_rgba(43,47,145,0.10)] backdrop-blur-sm transition-colors duration-500 hover:bg-[#2b2f91] hover:shadow-[0_18px_40px_rgba(43,47,145,0.22)]"
            >
              {/* Hover Flow Indicator */}
              <div className="absolute left-0 top-0 h-full w-0 bg-[#2b2f91] transition-all duration-500 ease-out group-hover:w-full" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f1f2ff] transition-all duration-500 group-hover:bg-white"
                  >
                    <div className="relative h-6 w-6">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        sizes="24px"
                        className="object-contain transition-all duration-500"
                      />
                    </div>
                  </motion.div>

                  {/* Dot */}
                  <motion.span
                    animate={{
                      scale: [1, 1.35, 1],
                      opacity: [0.45, 1, 0.45],
                    }}
                    transition={{
                      duration: 1.8 + index * 0.15,
                      repeat: Infinity,
                    }}
                    className="mt-2 h-2 w-2 rounded-full bg-[#2b2f91]/40 transition-all duration-500 group-hover:bg-white/80"
                  />
                </div>

                <motion.h3
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.12 + index * 0.08,
                  }}
                  className="mt-8 text-[16px] font-extrabold leading-[1.35] text-[#2b2f91] transition-colors duration-500 group-hover:text-white sm:text-[17px]"
                >
                  {item.title}
                </motion.h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
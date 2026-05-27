"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutConference() {
  const points = [
    {
      dot: "bg-[#2b2f91]",
      content: (
        <>
          <span className="font-bold text-[#2b2f91]">MED-AI Summit 2026</span>{" "}
          - Innovation to Impact is an international conference dedicated to
          exploring the transformative potential of Artificial Intelligence in
          healthcare.
        </>
      ),
    },
    {
      dot: "bg-[#111111]",
      content:
        "The summit will serve as a global platform for clinicians, researchers, academicians, technologists, and healthcare leaders to discuss the latest developments and practical applications of AI in medicine.",
    },
    {
      dot: "bg-[#111111]",
      content:
        "Through keynote lectures, scientific presentations, panel discussions, and interactive workshops, the conference aims to promote collaboration between healthcare professionals and technology innovators.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Section Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="Conference Background"
        fill
        priority={false}
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-center"
      />

      <div className="absolute inset-0 z-[1] bg-white/10" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-5 sm:px-8 md:grid-cols-[1.25fr_0.85fr] md:gap-14 lg:px-10">
        {/* Left Content */}
        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[38px] lg:text-[40px]"
          >
            About the Conference
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, delay: 0.25 }}
            style={{ transformOrigin: "left" }}
            className="mt-4 h-[1.5px] w-full max-w-[520px] bg-[#4d56c9]"
          />

          <div className="mt-7 max-w-[650px] space-y-8 text-[13px] leading-[1.25] text-[#666666] sm:text-[14px]">
            {points.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -35 : 35,
                  y: 18,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.62,
                  delay: 0.35 + index * 0.16,
                }}
                className="flex items-start gap-3"
              >
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: 0.48 + index * 0.16,
                  }}
                  className={`mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full ${item.dot}`}
                />

                <p>{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 55, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.78, delay: 0.25 }}
          className="w-full"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.025 }}
            transition={{ duration: 0.35 }}
            className="relative mx-auto h-[300px] w-full max-w-[390px] overflow-hidden rounded-[12px] bg-white shadow-[0_12px_35px_rgba(43,47,145,0.12)] sm:h-[360px] md:h-[395px]"
          >
            <Image
              src="/images/about-conference.jpg"
              alt="About the Conference"
              fill
              sizes="(max-width: 768px) 100vw, 390px"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="absolute inset-0 bg-gradient-to-t from-[#2b2f91]/20 via-transparent to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
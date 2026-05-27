"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutVels() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Full Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="About VELS Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[760px] px-5 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-[28px] font-extrabold leading-tight text-black sm:text-[34px] md:text-[38px]"
        >
          About VELS Group of Institutions
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, delay: 0.25 }}
          style={{ transformOrigin: "center" }}
          className="mx-auto mt-4 h-[1.5px] w-full max-w-[640px] bg-[#4d56c9]"
        />

        <div className="mx-auto mt-9 max-w-[680px] space-y-4 text-[13px] font-normal leading-[1.35] text-[#555555] sm:text-[14px] md:text-[15px]">
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            The VELS Group of Institutions has a distinguished legacy of over{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="inline-block font-bold text-[#2b2f91]"
            >
              33 years
            </motion.span>{" "}
            in education, committed to providing quality education and fostering
            innovation. Currently, the VELS Group comprises{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="inline-block font-bold text-[#2b2f91]"
            >
              54 Institutions
            </motion.span>
            ,{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.75 }}
              className="inline-block font-bold text-[#2b2f91]"
            >
              34 campuses
            </motion.span>
            ,{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.85 }}
              className="inline-block font-bold text-[#2b2f91]"
            >
              7,700 staff
            </motion.span>
            , and student population exceeding{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.95 }}
              className="inline-block font-bold text-[#2b2f91]"
            >
              51,000
            </motion.span>
            .
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.55 }}
          >
            The institution continues to contribute significantly to higher
            education through its commitment to academic excellence, research,
            and societal development.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
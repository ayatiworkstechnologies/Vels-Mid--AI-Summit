"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutVmch() {
  const features = [
    "1050-bedded teaching hospital",
    "NABH and ISO accredited hospital",
    "Advanced diagnostic laboratories",
    "Simulation and skill training centres",
    "Specialty and super-specialty healthcare services",
    "Affordable and accessible patient care",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="VMCH Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-[840px] text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="block text-[12px] font-extrabold uppercase tracking-[0.32em] text-[#2b2f91]"
          >
            About VMCH
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.58, delay: 0.16 }}
            className="mt-3 text-[28px] font-extrabold leading-tight text-black sm:text-[34px] md:text-[40px]"
          >
            VELS Medical College & Hospital
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.28 }}
            style={{ transformOrigin: "center" }}
            className="mx-auto mt-4 h-[1.5px] w-full max-w-[560px] bg-[#4d56c9]"
          />

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.58, delay: 0.38 }}
            className="mx-auto mt-5 max-w-[720px] text-[14px] leading-[1.7] text-[#5f5f5f] sm:text-[15px]"
          >
            A premier medical institution committed to excellence in medical
            education, research, patient care, and community-focused healthcare.
          </motion.p>
        </motion.div>

        {/* Main Layout */}
        <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Left Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="rounded-[22px] border border-[#e4e6f5] bg-white/95 p-6 shadow-[0_14px_38px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-8"
          >
            <motion.h3
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="text-[24px] font-extrabold leading-tight text-black sm:text-[30px]"
            >
              Excellence in Medical Education, Research & Patient Care
            </motion.h3>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.36 }}
              style={{ transformOrigin: "left" }}
              className="mt-4 h-[1.5px] w-full max-w-[420px] bg-[#4d56c9]"
            />

            <div className="mt-6 space-y-4 text-[13px] leading-[1.75] text-[#5f5f5f] sm:text-[14px]">
              {[
                <>
                  <span className="font-bold text-[#2b2f91]">
                    VELS Medical College & Hospital (VMCH)
                  </span>{" "}
                  is a premier medical institution committed to excellence in
                  medical education, research, and patient care.
                </>,
                <>
                  The institution comprises a{" "}
                  <span className="font-bold text-[#2b2f91]">
                    1050-bedded teaching hospital
                  </span>{" "}
                  with modern infrastructure and advanced healthcare facilities.
                  It is a{" "}
                  <span className="font-bold text-[#2b2f91]">
                    NABH and ISO accredited hospital
                  </span>
                  , reflecting its commitment to quality standards and patient
                  safety.
                </>,
                <>
                  VMCH features well-equipped lecture halls, robust academic
                  infrastructure, advanced diagnostic laboratories, simulation
                  and skill training centres, state-of-the-art diagnostic and
                  therapeutic services, and comprehensive specialty as well as
                  super-specialty healthcare services.
                </>,
                <>
                  VMCH remains dedicated to nurturing competent and ethical
                  medical professionals while providing affordable, accessible,
                  and high-quality healthcare to the community.
                </>,
              ].map((content, index) => (
                <motion.p
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -24 : 24,
                    y: 12,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.48 + index * 0.1,
                  }}
                >
                  {content}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 1.5, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.78, delay: 0.18 }}
            className="group relative overflow-hidden rounded-[24px] bg-[#2b2f91] shadow-[0_18px_45px_rgba(43,47,145,0.22)]"
          >
            {/* Background Image */}
            <Image
              src="/images/healthcare.jpg"
              alt="VELS Medical College and Hospital"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#111342]/40 via-[#2b2f91]/32 to-[#2b2f91]/25" />

            {/* Soft Glow */}
            <motion.div
              animate={{
                x: [0, 18, 0],
                y: [0, 14, 0],
                opacity: [0.18, 0.34, 0.18],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
              }}
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-[80px]"
            />

            <motion.div
              animate={{
                x: [0, -18, 0],
                y: [0, -10, 0],
                opacity: [0.2, 0.42, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#4d56c9]/40 blur-[70px]"
            />

            {/* Content */}
            <div className="relative z-10 flex min-h-[420px] flex-col justify-between p-6 text-white sm:p-7 md:min-h-[460px]">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.42 }}
                  className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-white backdrop-blur-md"
                >
                  Healthcare Excellence
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
                rotate: index % 2 === 0 ? -1 : 1,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.48,
                delay: 0.22 + index * 0.08,
              }}
              whileHover={{
                y: -6,
                scale: 1.015,
                transition: { duration: 0.22 },
              }}
              className="group flex min-h-[92px] items-center gap-4 rounded-[18px] border border-[#e4e6f5] bg-white/95 p-5 shadow-[0_8px_24px_rgba(43,47,145,0.08)] backdrop-blur-sm transition-colors duration-300 hover:border-[#2b2f91] hover:bg-[#2b2f91] hover:shadow-[0_16px_34px_rgba(43,47,145,0.16)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f1f2ff] text-[14px] font-extrabold text-[#2b2f91] transition-all duration-300 group-hover:bg-white group-hover:text-[#2b2f91]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-[14px] font-bold leading-[1.35] text-[#333333] transition-colors duration-300 group-hover:text-white">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
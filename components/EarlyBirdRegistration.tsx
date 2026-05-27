"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EarlyBirdRegistration() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-6">
      {/* Full Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="Conference Highlights Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative flex min-h-[180px] items-center overflow-hidden rounded-[22px] bg-[#2b2f91] px-5 py-5 shadow-[0_14px_35px_rgba(43,47,145,0.18)] sm:min-h-[210px] sm:px-7 md:min-h-[265px]"
        >
          {/* Animated Glow */}
          <motion.div
            animate={{
              x: ["-20%", "15%", "-20%"],
              y: ["-10%", "10%", "-10%"],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            className="pointer-events-none absolute -left-20 -top-20 h-[260px] w-[260px] rounded-full bg-white/20 blur-[70px]"
          />

          <motion.div
            animate={{
              x: ["10%", "-8%", "10%"],
              y: ["15%", "-5%", "15%"],
              opacity: [0.2, 0.36, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="pointer-events-none absolute bottom-[-90px] right-[18%] h-[240px] w-[240px] rounded-full bg-white/20 blur-[70px]"
          />

          {/* Text */}
          <div className="relative z-10 flex max-w-[620px] flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: 0.28 }}
              className="mb-2 text-[28px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[36px] md:text-[42px] lg:text-[46px]"
            >
              Early Bird Registration
              <br />
              Now Open
            </motion.h2>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-5 flex flex-wrap items-center gap-3"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.22 }}
              >
                <Link
                  href="https://forms.gle/xBKVaHc9b7UWS33C7"
                  target="_blank"
                  className="inline-flex w-fit items-center justify-center rounded-[12px] bg-white px-5 py-2 text-[12px] font-extrabold text-[#2b2f91] transition-all duration-300 hover:bg-[#f2f2ff] hover:shadow-[0_8px_18px_rgba(0,0,0,0.18)] sm:text-[13px]"
                >
                  Register Now
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.22 }}
              >
                <Link
                  href="/pdf/MED-AI-Summit-Conference-Brochure.pdf"
                  target="_blank"
                  className="inline-flex w-fit items-center justify-center rounded-[12px] border border-white/40 bg-white/10 px-5 py-2 text-[12px] font-extrabold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#2b2f91] hover:shadow-[0_8px_18px_rgba(0,0,0,0.18)] sm:text-[13px]"
                >
                  Download Brochure
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 45, scale: 0.92 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            animate={{
              y: [0, -8, 0],
            }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              opacity: { duration: 0.7, delay: 0.35 },
              x: { duration: 0.7, delay: 0.35 },
              scale: { duration: 0.7, delay: 0.35 },
              y: {
                duration: 3.2,
                repeat: Infinity,
              },
            }}
            className="pointer-events-none absolute bottom-0 right-0 h-full w-[44%]"
          >
            <Image
              src="/images/registration-robot.png"
              alt="Early Bird Registration"
              fill
              sizes="44vw"
              className="object-contain object-right-bottom"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
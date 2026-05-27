"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WelcomeMessage() {
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

      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-8 px-5 sm:px-8 md:grid-cols-[0.9fr_1.35fr] md:gap-12 lg:px-10">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -55, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="w-full"
        >
          <motion.div
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.35 }}
            className="relative h-[260px] w-full overflow-hidden rounded-[12px] shadow-[0_18px_45px_rgba(43,47,145,0.14)] sm:h-[340px] md:h-[455px]"
          >
            <Image
              src="/images/welcome-section.jpg"
              alt="MED-AI Summit 2026"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[38px] lg:text-[40px]"
          >
            Welcome Message
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            style={{ transformOrigin: "left" }}
            className="mt-4 h-[2px] w-[300px] bg-[#5b60d6] md:w-[450px]"
          />

          <div className="mt-6 max-w-[720px] space-y-4 text-[14px] leading-[1.25] text-[#5f5f5f] sm:text-[15px]">
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.58, delay: 0.32 }}
            >
              It is our great pleasure to welcome you to{" "}
              <span className="font-bold text-[#2b2f91]">
                MED-AI Summit 2026
              </span>{" "}
              – Innovation to Impact, an international conference dedicated to
              exploring the transformative role of Artificial Intelligence in
              modern healthcare.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.62, delay: 0.46 }}
            >
              Artificial Intelligence and digital technologies are rapidly
              reshaping clinical practice, medical research, and healthcare
              delivery worldwide.{" "}
              <span className="font-bold text-[#2b2f91]">
                MED-AI Summit 2026
              </span>{" "}
              aims to bring together clinicians, researchers, academicians,
              technologists, and industry leaders from across the globe to
              exchange knowledge, share research, and explore innovative
              applications of AI that can enhance patient care and healthcare
              systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.62, delay: 0.6 }}
            >
              The summit will feature keynote lectures by distinguished experts,
              scientific sessions, panel discussions, and hands-on
              pre-conference workshops designed to provide both theoretical
              insights and practical experience.
              <br />
              We look forward to your active participation and valuable
              contributions in shaping the future of intelligent healthcare.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.74 }}
            className="mt-8"
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="inline-flex"
            >
              <Link
                href="https://forms.gle/xBKVaHc9b7UWS33C7"
                target="_blank"
                className="inline-flex min-w-[185px] items-center justify-center rounded-[12px] bg-[#2b2f91] px-8 py-3 text-[18px] font-bold text-white transition-all duration-300 hover:bg-[#1f2376] hover:shadow-[0_12px_28px_rgba(43,47,145,0.25)]"
              >
                Register
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
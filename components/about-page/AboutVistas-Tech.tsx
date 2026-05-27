"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutVistas() {
  const [showMore, setShowMore] = useState(false);

  const stats = [
    { value: "A++", label: "NAAC Accredited" },
    { value: "Category-I", label: "UGC Institution" },
    { value: "5", label: "Campuses in Chennai" },
    { value: "UG, PG & Ph.D", label: "Academic Programs" },
  ];

  const programs = [
    "Medicine",
    "Dentistry",
    "Engineering",
    "Nursing",
    "Allied Health Sciences",
    "Law",
    "Management",
    "Commerce & Humanities",
    "Physiotherapy",
    "Pharmaceutical Sciences",
    "Occupational Therapy",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-6 sm:py-8 md:py-10">
      {/* Section Background */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="VISTAS Background"
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
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="overflow-hidden rounded-[20px] border border-[#e5e7f4] bg-white/95 shadow-[0_14px_40px_rgba(43,47,145,0.10)] backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr]">
            {/* Left Blue Panel */}
            <motion.div
              initial={{ opacity: 0, x: -55 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative hidden min-h-[360px] overflow-hidden bg-[#2b2f91] lg:block"
            >
              {/* VISTAS Image */}
              <Image
                src="/images/tech.png"
                alt="VELS Institute"
                fill
                priority={false}
                sizes="430px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              {/* Correct Overlay - transparent, so image shows */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2b2f91]/90 via-[#292d8d]/78 to-[#15184f]/88" />

              <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                <motion.span
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="mb-4 inline-flex w-fit rounded-full border border-white/35 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.28em]"
                >
                  About VISTAS
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.45 }}
                  className="max-w-[430px] text-[34px] font-extrabold leading-[1.08] text-white"
                >
                  VELS Institute of Science, Technology and Advanced Studies
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.58 }}
                  className="mt-4 max-w-[390px] text-[13px] font-medium leading-[1.6] text-white/85"
                >
                  A multidisciplinary university committed to excellence in
                  education, research, innovation, and future-focused learning.
                </motion.p>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="p-6 sm:p-7 md:p-8 lg:p-9"
            >
              <motion.h3
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="text-[26px] font-extrabold leading-tight text-black sm:text-[30px] md:text-[34px]"
              >
                Excellence in Education, Research & Innovation
              </motion.h3>

              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ transformOrigin: "left" }}
                className="mt-4 h-[1.5px] w-full max-w-[520px] bg-[#4d56c9]"
              />

              <div className="mt-6 space-y-4 text-[13px] leading-[1.65] text-[#5f5f5f] sm:text-[14px]">
                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.5 }}
                >
                  <span className="font-bold text-[#2b2f91]">
                    VELS Institute of Science, Technology and Advanced Studies
                    (VISTAS)
                  </span>{" "}
                  is a multidisciplinary university committed to excellence in
                  education, research, and innovation.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.58, delay: 0.62 }}
                >
                  The institution has been granted the status of{" "}
                  <span className="font-bold text-[#2b2f91]">
                    Deemed-to-be University
                  </span>{" "}
                  and accredited with{" "}
                  <span className="font-bold text-[#2b2f91]">
                    A++ grade by NAAC
                  </span>
                  . It is also recognized as a{" "}
                  <span className="font-bold text-[#2b2f91]">
                    Category-I Institution
                  </span>{" "}
                  by the University Grants Commission.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.58, delay: 0.74 }}
                >
                  VISTAS offers academic programs across medicine, healthcare,
                  technology, law, management, commerce, humanities, and other
                  professional disciplines.
                </motion.p>
              </div>

              {/* Smooth Expand Content */}
              <div
                className={`grid transition-all duration-700 ease-in-out ${
                  showMore
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <motion.div
                    initial={false}
                    animate={
                      showMore
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.45 }}
                    className="pt-5"
                  >
                    <p className="text-[13px] leading-[1.65] text-[#5f5f5f] sm:text-[14px]">
                      The university operates through five campuses in Chennai —
                      Pallavaram, Thalambur, Periyapalayam, Thiruvanmiyur, and
                      Adyar — serving thousands of students pursuing
                      undergraduate, postgraduate, and doctoral programs.
                    </p>

                    {/* Stats */}
                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {stats.map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={false}
                          animate={
                            showMore
                              ? { opacity: 1, y: 0, scale: 1 }
                              : { opacity: 0, y: 16, scale: 0.96 }
                          }
                          transition={{
                            duration: 0.4,
                            delay: showMore ? index * 0.08 : 0,
                          }}
                          className="rounded-[12px] border border-[#dfe2f4] bg-[#f8f9ff] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#2b2f91] hover:bg-white hover:shadow-[0_10px_24px_rgba(43,47,145,0.10)]"
                        >
                          <h4 className="text-[22px] font-extrabold leading-tight text-[#2b2f91]">
                            {item.value}
                          </h4>

                          <p className="mt-1.5 text-[12px] font-semibold leading-[1.2] text-[#666666]">
                            {item.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Programs */}
                    <div className="mt-6">
                      <h4 className="text-[16px] font-extrabold text-black">
                        Academic Programs Include
                      </h4>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {programs.map((program, index) => (
                          <motion.span
                            key={program}
                            initial={false}
                            animate={
                              showMore
                                ? { opacity: 1, scale: 1, y: 0 }
                                : { opacity: 0, scale: 0.9, y: 8 }
                            }
                            transition={{
                              duration: 0.28,
                              delay: showMore ? 0.18 + index * 0.035 : 0,
                            }}
                            className="rounded-full border border-[#2b2f91]/15 bg-white px-3 py-1.5 text-[11px] font-bold text-[#2b2f91] shadow-[0_4px_10px_rgba(43,47,145,0.06)] transition-all duration-300 hover:bg-[#2b2f91] hover:text-white"
                          >
                            {program}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.85 }}
                className="mt-7"
              >
                <motion.button
                  type="button"
                  onClick={() => setShowMore(!showMore)}
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center justify-center rounded-[12px] bg-[#2b2f91] px-6 py-2.5 text-[13px] font-extrabold text-white transition-all duration-300 hover:bg-[#1f2376] hover:shadow-[0_10px_24px_rgba(43,47,145,0.22)]"
                >
                  {showMore ? "Read Less" : "Read More"}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
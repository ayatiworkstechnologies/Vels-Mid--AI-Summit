"use client";

import { motion } from "framer-motion";

export default function ConferenceContact() {
  const contactDetails = [
    ["Conference Secretary", "Dr. Ramya M"],
    ["Mobile", "+91-9844963825"],
    ["Email", "medaisummit@velsmedicalcollege.com"],
    ["Website", "www.velsmedaicon.com"],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 45, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="rounded-[24px] border border-[#e2e5f5] bg-[#2b2f91] p-5 text-white shadow-[0_16px_42px_rgba(43,47,145,0.18)] sm:p-7"
    >
      <motion.span
        initial={{ opacity: 0, y: 18, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
        className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.26em] text-white"
      >
        Conference Secretary
      </motion.span>

      <motion.h3
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
        className="mt-5 text-[30px] font-extrabold leading-tight text-white sm:text-[36px]"
      >
        Dr. Ramya M
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
        className="mt-3 max-w-[520px] text-[14px] leading-[1.7] text-white/80"
      >
        For registration support, sponsorship queries, abstract submission
        support, and conference-related assistance, please contact the
        conference secretary.
      </motion.p>

      <div className="mt-7 grid gap-3">
        {contactDetails.map(([label, value], index) => (
          <motion.div
            key={label}
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.6,
              delay: 0.45 + index * 0.1,
              ease: "easeOut",
            }}
            className="rounded-[16px] border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
          >
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/60">
              {label}
            </p>

            <p className="mt-1 break-words text-[14px] font-bold leading-[1.5] text-white">
              {value}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.75, ease: "easeOut" }}
        className="mt-7 flex flex-wrap gap-3"
      >
        <motion.a
          href="tel:+919844963825"
          whileHover={{ y: -4, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="inline-flex rounded-[8px] bg-white px-5 py-3 text-[13px] font-extrabold text-[#2b2f91] transition-all duration-300 hover:bg-[#f2f3ff]"
        >
          Call Now
        </motion.a>

        <motion.a
          href="mailto:medaisummit@velsmedicalcollege.com"
          whileHover={{ y: -4, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="inline-flex rounded-[8px] border border-white/30 bg-white/10 px-5 py-3 text-[13px] font-extrabold text-white transition-all duration-300 hover:bg-white hover:text-[#2b2f91]"
        >
          Email Us
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";

export default function SponsorshipSection() {
  const sponsorships = [
    { title: "Platinum Sponsor", price: "₹ 2 Lakhs" },
    { title: "Gold Sponsor", price: "₹ 1 Lakh" },
    { title: "Silver Sponsor", price: "₹ 75,000" },
    { title: "Exhibitor Stalls", price: "₹ 25,000" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -45, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 shadow-[0_16px_42px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-7"
    >
      <motion.h3
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
        className="text-[24px] font-extrabold leading-tight text-black sm:text-[30px]"
      >
        Sponsorship Opportunities
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
        className="mt-3 text-[14px] leading-[1.7] text-[#666666]"
      >
        Detailed sponsorship packages are available upon request.
      </motion.p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sponsorships.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 28,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.65,
              delay: 0.35 + index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="rounded-[18px] border border-[#dfe2f4] bg-[#f8f9ff] p-5 transition-all duration-300 hover:border-[#2b2f91] hover:bg-white hover:shadow-[0_12px_28px_rgba(43,47,145,0.12)]"
          >
            <h4 className="text-[18px] font-extrabold text-[#2b2f91]">
              {item.title}
            </h4>

            <p className="mt-2 text-[22px] font-extrabold text-black">
              {item.price}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="mailto:medaisponsorship@velsmedicalcollege.com"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.72, ease: "easeOut" }}
        whileHover={{ y: -4, scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="mt-6 inline-flex rounded-[8px] bg-[#2b2f91] px-5 py-3 text-[13px] font-extrabold text-white transition-all duration-300 hover:bg-[#1f2376]"
      >
        Email Sponsorship Team
      </motion.a>
    </motion.div>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BankDetails() {
  const bankDetails = [
    ["Beneficiary Name", "VELS Medical College and Hospital"],
    ["Bank Name", "AXIS Bank Ltd"],
    ["Branch Address", "Madipakkam, Chennai"],
    ["Account Number", "921010041493572"],
    ["Account Type", "Savings"],
    ["IFSC Code", "UTIB0000083"],
    ["MICR Code", "600211007"],
    ["SWIFT Code", "AXISINBB234"],
  ];

  return (
    <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1.2fr_0.8fr]">
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
          Bank Account Details
        </motion.h3>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {bankDetails.map(([label, value], index) => (
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
                duration: 0.65,
                delay: 0.22 + index * 0.08,
                ease: "easeOut",
              }}
              className="rounded-[14px] border border-[#eef0fa] bg-[#fafbff] px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2b2f91]/30 hover:bg-white hover:shadow-[0_10px_24px_rgba(43,47,145,0.08)]"
            >
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#2b2f91]">
                {label}
              </p>
              <p className="mt-1 break-words text-[13px] font-bold leading-[1.5] text-[#444444] sm:text-[14px]">
                {value}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 45, scale: 0.97 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 text-center shadow-[0_16px_42px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-7"
      >
        <motion.h3
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          className="text-[22px] font-extrabold text-black"
        >
          Payment QR Code
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.32, ease: "easeOut" }}
          whileHover={{ y: -5, scale: 1.03 }}
          className="mx-auto mt-5 flex h-[230px] w-[230px] items-center justify-center rounded-[18px] border border-[#dfe2f4] bg-white p-4 shadow-[0_10px_30px_rgba(43,47,145,0.10)] transition-all duration-300 hover:shadow-[0_16px_36px_rgba(43,47,145,0.16)]"
        >
          <Image
            src="/images/qr/payment-qr.png"
            alt="Payment QR Code"
            width={200}
            height={200}
            className="h-full w-full object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.45, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-[260px] text-[13px] font-semibold leading-[1.6] text-[#666666]"
        >
          Scan this QR code to complete your payment securely.
        </motion.p>
      </motion.div>
    </div>
  );
}
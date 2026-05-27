"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function RegistrationPayment() {
  const paymentRows = [
    {
      category: "Faculty",
      workshopEarly: "₹ 1500",
      workshopRegular: "₹ 2000",
      conferenceEarly: "₹ 2250",
      conferenceRegular: "₹ 2750",
    },
    {
      category: "Students",
      workshopEarly: "₹ 1250",
      workshopRegular: "₹ 1750",
      conferenceEarly: "₹ 2000",
      conferenceRegular: "₹ 2500",
    },
    {
      category: "International & Industry Delegates",
      workshopEarly: "$ 25",
      workshopRegular: "$ 30",
      conferenceEarly: "$ 50",
      conferenceRegular: "$ 75",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 45, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 shadow-[0_16px_42px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-7"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
        >
          <h3 className="text-[24px] font-extrabold leading-tight text-black sm:text-[30px]">
            Registration & Payment Information
          </h3>

          <p className="mt-2 text-[13px] font-medium leading-[1.6] text-[#666666] sm:text-[14px]">
            Early bird and regular registration fee details for workshop and
            conference participation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
          whileHover={{ y: -4, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <Link
            href="https://forms.gle/xBKVaHc9b7UWS33C7"
            target="_blank"
            className="inline-flex w-fit rounded-[8px] bg-[#2b2f91] px-5 py-3 text-[13px] font-extrabold text-white transition-all duration-300 hover:bg-[#1f2376] hover:shadow-[0_10px_24px_rgba(43,47,145,0.20)]"
          >
            Register Online
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, delay: 0.28, ease: "easeOut" }}
        className="mt-7 overflow-x-auto rounded-[16px] border border-[#dde1f4]"
      >
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="bg-[#2b2f91] text-white">
              <th
                rowSpan={2}
                className="w-[250px] border-r border-white/25 px-4 py-4 align-bottom text-[14px] font-extrabold"
              >
                Category
              </th>

              <th
                colSpan={2}
                className="border-b border-r border-white/25 px-4 py-3 text-center text-[14px] font-extrabold"
              >
                Workshop
              </th>

              <th
                colSpan={2}
                className="border-b border-white/25 px-4 py-3 text-center text-[14px] font-extrabold"
              >
                Conference
              </th>
            </tr>

            <tr className="bg-[#2b2f91] text-white">
              <th className="border-r border-white/25 px-4 py-3 text-center text-[13px] font-bold">
                Early Bird
                <br />
                Till 31.05.2026
              </th>
              <th className="border-r border-white/25 px-4 py-3 text-center text-[13px] font-bold">
                Regular
                <br />
                From 01.06.2026
              </th>
              <th className="border-r border-white/25 px-4 py-3 text-center text-[13px] font-bold">
                Early Bird
                <br />
                Till 31.05.2026
              </th>
              <th className="px-4 py-3 text-center text-[13px] font-bold">
                Regular
                <br />
                From 01.06.2026
              </th>
            </tr>
          </thead>

          <tbody>
            {paymentRows.map((row, index) => (
              <tr
                key={row.category}
                className={`border-b border-[#dde1f4] ${
                  index % 2 === 0 ? "bg-white" : "bg-[#f8f9ff]"
                }`}
              >
                <td className="border-r border-[#dde1f4] px-4 py-4 text-[13px] font-extrabold text-[#333333]">
                  {row.category}
                </td>
                <td className="border-r border-[#dde1f4] px-4 py-4 text-center text-[13px] font-bold text-[#444444]">
                  {row.workshopEarly}
                </td>
                <td className="border-r border-[#dde1f4] px-4 py-4 text-center text-[13px] font-bold text-[#444444]">
                  {row.workshopRegular}
                </td>
                <td className="border-r border-[#dde1f4] px-4 py-4 text-center text-[13px] font-bold text-[#444444]">
                  {row.conferenceEarly}
                </td>
                <td className="px-4 py-4 text-center text-[13px] font-bold text-[#444444]">
                  {row.conferenceRegular}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}
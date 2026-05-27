"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function VenueLocation() {
  const locationLink = "https://maps.app.goo.gl/Bmh1TLEwCFC3Sdpq6";

  const registrationLink = "https://forms.gle/xBKVaHc9b7UWS33C7";

  return (
    <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
      {/* Venue + Map QR */}
      <motion.div
        initial={{ opacity: 0, x: -55, scale: 0.97 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.05, ease: "easeOut" }}
        className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 shadow-[0_16px_42px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-7"
      >
        <motion.h3
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.18, ease: "easeOut" }}
          className="text-[24px] font-extrabold leading-tight text-black sm:text-[30px]"
        >
          Conference Venue
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.32, ease: "easeOut" }}
          className="mt-3 max-w-[680px] text-[14px] font-semibold leading-[1.7] text-[#5f5f5f] sm:text-[15px]"
        >
          VELS Medical College & Hospital, 12/123, Velan Nagar, Periyapalayam
          Road, Manjankaranai, Tiruvallur – 601102, Tamil Nadu, India.
        </motion.p>

        {/* Map QR */}
        <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
            whileHover={{ y: -5, scale: 1.03 }}
            className="mx-auto flex h-[180px] w-[180px] items-center justify-center rounded-[18px] border border-[#dfe2f4] bg-white p-4 shadow-[0_10px_30px_rgba(43,47,145,0.10)] transition-all duration-500 hover:shadow-[0_16px_36px_rgba(43,47,145,0.16)] sm:mx-0"
          >
            <Image
              src="/images/qr/location-qr.png"
              alt="Google Maps Location QR Code"
              width={150}
              height={150}
              className="h-full w-full object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.58, ease: "easeOut" }}
          >
            <h4 className="text-[18px] font-extrabold text-[#2b2f91]">
              Scan for Location
            </h4>

            <p className="mt-2 max-w-[330px] text-[13px] font-medium leading-[1.6] text-[#666666]">
              Scan this QR code to open the conference venue location directly
              in Google Maps.
            </p>

            <motion.div
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="inline-flex"
            >
              <Link
                href={locationLink}
                target="_blank"
                className="mt-4 inline-flex rounded-[8px] bg-[#2b2f91] px-5 py-3 text-[13px] font-extrabold text-white transition-all duration-500 hover:bg-[#1f2376]"
              >
                Open Location
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Registration QR */}
      <motion.div
        initial={{ opacity: 0, x: 55, scale: 0.97 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.05, delay: 0.12, ease: "easeOut" }}
        className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 text-center shadow-[0_16px_42px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-7"
      >
        <motion.h3
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.25, ease: "easeOut" }}
          className="text-[24px] font-extrabold text-black sm:text-[30px]"
        >
          Registration QR
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.38, ease: "easeOut" }}
          className="mx-auto mt-3 max-w-[420px] text-[14px] font-medium leading-[1.7] text-[#666666]"
        >
          Scan this QR code to open the MED-AI Summit 2026 registration form.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.86, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, delay: 0.52, ease: "easeOut" }}
          whileHover={{ y: -5, scale: 1.03 }}
          className="mx-auto mt-5 flex h-[230px] w-[230px] items-center justify-center rounded-[18px] border border-[#dfe2f4] bg-white p-4 shadow-[0_10px_30px_rgba(43,47,145,0.10)] transition-all duration-500 hover:shadow-[0_16px_36px_rgba(43,47,145,0.16)]"
        >
          <Image
            src="/images/qr/registration-qr.png"
            alt="Registration QR Code"
            width={200}
            height={200}
            className="h-full w-full object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.68, ease: "easeOut" }}
          whileHover={{ y: -4, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex"
        >
          <Link
            href={registrationLink}
            target="_blank"
            className="mt-5 inline-flex rounded-[8px] bg-[#2b2f91] px-5 py-3 text-[13px] font-extrabold text-white transition-all duration-500 hover:bg-[#1f2376]"
          >
            Open Registration Form
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
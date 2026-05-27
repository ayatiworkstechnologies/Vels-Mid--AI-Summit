"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactSection() {
  const contactItems = [
    {
      type: "name",
      value: "Dr. Ramya M",
      icon: (
        <svg
          className="mt-[1px] h-6 w-6 shrink-0 text-[#2b2f91]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21a8 8 0 0 0-16 0" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      type: "phone",
      value: "+91-9844963825",
      icon: (
        <svg
          className="mt-[1px] h-6 w-6 shrink-0 text-[#2b2f91]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8 9.67a16 16 0 0 0 6.33 6.33l1.24-1.24a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      type: "email",
      value: "medaisummit@velsmedicalcollege.com",
      icon: (
        <svg
          className="mt-[1px] h-6 w-6 shrink-0 text-[#2b2f91]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16v16H4z" />
          <path d="m22 6-10 7L2 6" />
        </svg>
      ),
    },
    {
      type: "address",
      value: (
        <>
          VELS Medical College &amp; Hospital
          <br />
          12/123, Velan Nagar, Periyapalayam
          <br />
          Road, Manjankaranai, Tiruvallur – 601102,
          <br />
          Tamil Nadu, India.
        </>
      ),
      icon: (
        <svg
          className="mt-[1px] h-6 w-6 shrink-0 text-[#2b2f91]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-10">
      {/* Full Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="Contact Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="max-w-[520px]"
        >
          <h2 className="text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[38px] lg:text-[40px]">
            Contact us
          </h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.18 }}
            style={{ transformOrigin: "left" }}
            className="mt-4 h-[1.5px] w-full max-w-[250px] bg-[#4d56c9]"
          />
        </motion.div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-24">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -45, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="w-full max-w-[390px] rounded-[12px] bg-white/95 px-5 py-5 shadow-[0_12px_35px_rgba(43,47,145,0.12)] backdrop-blur-sm sm:px-6 sm:py-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="text-[16px] font-extrabold text-black"
            >
              Conference Secretary
            </motion.h3>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.34 }}
              style={{ transformOrigin: "left" }}
              className="mt-2 h-[1.5px] w-[205px] bg-[#2b2f91]"
            />

            <div className="mt-5 space-y-5">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.type}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -24 : 24,
                    y: 10,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.42 + index * 0.1,
                  }}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>

                  <p
                    className={`${
                      item.type === "address"
                        ? "text-[13px] font-bold leading-[1.25] text-[#565656] sm:text-[14px]"
                        : item.type === "email"
                        ? "pt-[3px] break-all text-[13px] font-bold leading-snug text-[#565656] sm:text-[14px]"
                        : "pt-[3px] text-[13px] font-bold leading-snug text-[#565656] sm:text-[14px]"
                    }`}
                  >
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 55, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.78, delay: 0.2 }}
            className="w-full"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="h-[260px] w-full overflow-hidden rounded-xl bg-white shadow-[0_12px_35px_rgba(43,47,145,0.12)] sm:h-[300px] md:h-[315px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15548.831473988832!2d80.2422784!3d13.0224308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a527f10f13d746f%3A0x3aeb473a9cfb1d55!2sVels%20Medical%20College%20and%20Hospital%2C%20Manjankaranai%2C%20Bandikavanoor%2C%20Manjankaranai%2C%20Tamil%20Nadu%20601102!3m2!1d13.2689063!2d80.1225027!5e0!3m2!1sen!2sin!4v1779451373099!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VELS Medical College and Hospital Map"
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
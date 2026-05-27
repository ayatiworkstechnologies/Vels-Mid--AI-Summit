"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import RegistrationPayment from "@/components/contact-page/RegistrationPayment";
import BankDetails from "@/components/contact-page/BankDetails";
import SponsorshipSection from "@/components/contact-page/SponsorshipSection";
import ConferenceContact from "@/components/contact-page/ConferenceContact";
import VenueLocation from "@/components/contact-page/VenueLocation";

function BackgroundSection({ children }: { children: ReactNode }) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="Section Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {children}
      </div>
    </section>
  );
}

export default function ContactPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative min-h-screen bg-white">
      {/* Contact Banner */}
      <motion.section
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.15, ease: "easeOut" }}
        className="relative h-[420px] w-full overflow-hidden sm:h-[520px] md:h-[540px]"
      >
        <Image
          src="/images/banner-contact-b.jpg"
          alt="VELS Contact Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.section>

      {/* Page Intro */}
      <BackgroundSection>
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto max-w-[850px] text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            className="inline-flex rounded-full border border-[#2b2f91]/15 bg-[#eef0ff] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#2b2f91]"
          >
            Contact & Registration
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.22, ease: "easeOut" }}
            className="mt-4 text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[40px]"
          >
            Registration, Payment & Contact Information
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
            style={{ transformOrigin: "center" }}
            className="mx-auto mt-4 h-[1.5px] w-full max-w-[620px] bg-[#4d56c9]"
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.48, ease: "easeOut" }}
            className="mx-auto mt-5 max-w-[760px] text-[14px] leading-[1.7] text-[#5f5f5f] sm:text-[15px]"
          >
            Find registration fees, bank details, sponsorship opportunities,
            conference contact information, QR codes, and venue location.
          </motion.p>
        </motion.div>
      </BackgroundSection>

      {/* Registration Section */}
      <BackgroundSection>
        <RegistrationPayment />
      </BackgroundSection>

      {/* Bank Details Section */}
      <BackgroundSection>
        <BankDetails />
      </BackgroundSection>

      {/* Sponsorship + Contact Section */}
      <BackgroundSection>
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.95fr_1.05fr]">
          <SponsorshipSection />
          <ConferenceContact />
        </div>
      </BackgroundSection>

      {/* Venue Section */}
      <BackgroundSection>
        <VenueLocation />
      </BackgroundSection>

      {/* Scroll To Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-5 z-[999] flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-[#2b2f91] text-white shadow-[0_12px_30px_rgba(43,47,145,0.35)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#1f2376] hover:shadow-[0_16px_36px_rgba(43,47,145,0.45)] sm:bottom-8 sm:right-7 ${showScrollTop
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
          }`}
      >
        <span className="text-[26px] font-light leading-none">↑</span>
      </button>
    </main>
  );
}
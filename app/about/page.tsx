"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

import AboutVistas from "@/components/about-page/AboutVistas-Tech";
import AboutVmch from "@/components/about-page/AboutVmch";
import OrganizingCommittee from "@/components/about-page/OrganizingCommittee";
import AboutConference from "@/components/AboutConference";

export default function AboutPage() {
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
    <main className="relative">
     {/* Banner Section */}
      <motion.section
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="relative h-[420px] w-full overflow-hidden sm:h-[520px] md:h-[540px]"
      >
        <Image
          src="/images/banner-about.jpg"
          alt="VELS About Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.section>

      {/* About The Conference */}
      <AboutConference />

      {/* About Vistas Tech */}
      <AboutVistas />

      {/* About Vels Medical College and Hospital */}
      <AboutVmch />

      {/* Organizing Committee */}
      <OrganizingCommittee />

      {/* Scroll To Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-5 z-[999] flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-[#2b2f91] text-white shadow-[0_12px_30px_rgba(43,47,145,0.35)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#1f2376] hover:shadow-[0_16px_36px_rgba(43,47,145,0.45)] sm:bottom-8 sm:right-7 ${
          showScrollTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }`}
      >
        <span className="text-[26px] font-light leading-none">↑</span>
      </button>
    </main>
  );
}
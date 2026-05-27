"use client";

import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";

import RegistrationDetails from "@/components/event-page/RegistrationDetails";
import PreConferenceWorkshops from "@/components/PreConferenceWorkshops";
import ScientificProgram from "@/components/event-page/ScientificProgram";
import CallForAbstracts from "@/components/event-page/CallForAbstracts";

export default function EventsPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [pageReady, setPageReady] = useState(false);

  // ✅ Page always starts from top before render
  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    setPageReady(true);
  }, []);

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

  if (!pageReady) {
    return null;
  }

  return (
    <main className="relative min-h-screen bg-white">
      {/* Events Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative h-[420px] w-full overflow-hidden sm:h-[520px] md:h-[540px]"
      >
        <Image
          src="/images/banner-event.jpg"
          alt="VELS EVENT Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.section>

      {/* Pre Conference Workshops */}
      <PreConferenceWorkshops />

      {/* Scientific Program */}
      <ScientificProgram />

      {/* Registration Details */}
      <RegistrationDetails />

      {/* Call For Abstracts */}
      <CallForAbstracts />

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
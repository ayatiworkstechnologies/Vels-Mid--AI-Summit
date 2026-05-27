import Image from "next/image";
import type { ReactNode } from "react";

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
  return (
    <main className="min-h-screen bg-white">
      {/* Contact Banner */}
      <section className="relative h-[420px] w-full overflow-hidden sm:h-[520px] md:h-[540px]">
        <Image
          src="/images/about-banner.jpg"
          alt="VELS Contact Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Banner Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-5 text-center">
          <div>
            <h1 className="text-[38px] font-extrabold leading-tight text-white sm:text-[52px] md:text-[64px]">
              Contact Us
            </h1>

            <p className="mx-auto mt-4 max-w-[680px] text-[15px] font-medium leading-[1.7] text-white/90 sm:text-[17px]">
              Registration, payment, sponsorship, venue, and conference support
              information for MED-AI Summit 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Page Intro */}
      <BackgroundSection>
        <div className="mx-auto max-w-[850px] text-center">
          <span className="inline-flex rounded-full border border-[#2b2f91]/15 bg-[#eef0ff] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#2b2f91]">
            Contact & Registration
          </span>

          <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[40px]">
            Registration, Payment & Contact Information
          </h2>

          <div className="mx-auto mt-4 h-[1.5px] w-full max-w-[620px] bg-[#4d56c9]" />

          <p className="mx-auto mt-5 max-w-[760px] text-[14px] leading-[1.7] text-[#5f5f5f] sm:text-[15px]">
            Find registration fees, bank details, sponsorship opportunities,
            conference contact information, QR codes, and venue location.
          </p>
        </div>
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
    </main>
  );
}
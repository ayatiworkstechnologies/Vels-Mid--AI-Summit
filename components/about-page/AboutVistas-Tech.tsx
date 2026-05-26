"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutVistas() {
  const [showMore, setShowMore] = useState(false);

  const stats = [
    { value: "A++", label: "NAAC Accredited" },
    { value: "Category-I", label: "UGC Institution" },
    { value: "5", label: "Campuses in Chennai" },
    { value: "UG, PG & Ph.D", label: "Academic Programs" },
  ];

  const programs = [
    "Medicine",
    "Dentistry",
    "Engineering",
    "Nursing",
    "Allied Health Sciences",
    "Law",
    "Management",
    "Commerce & Humanities",
    "Physiotherapy",
    "Pharmaceutical Sciences",
    "Occupational Therapy",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-6 sm:py-8 md:py-10">
      {/* Section Background */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="VISTAS Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[20px] border border-[#e5e7f4] bg-white/95 shadow-[0_14px_40px_rgba(43,47,145,0.10)] backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr]">
            {/* Left Blue Panel */}
            <div className="relative hidden min-h-[360px] overflow-hidden bg-[#2b2f91] lg:block">
              {/* VISTAS Image */}
              <Image
                src="/images/vistas-about.jpg"
                alt="VELS Institute"
                fill
                priority={false}
                sizes="430px"
                className="object-cover object-center"
              />

              {/* Correct Overlay - transparent, so image shows */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2b2f91]/90 via-[#292d8d]/78 to-[#15184f]/88" />

              <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                <span className="mb-4 inline-flex w-fit rounded-full border border-white/35 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.28em]">
                  About VISTAS
                </span>

                <h2 className="max-w-[430px] text-[34px] font-extrabold leading-[1.08] text-white">
                  VELS Institute of Science, Technology and Advanced Studies
                </h2>

                <p className="mt-4 max-w-[390px] text-[13px] font-medium leading-[1.6] text-white/85">
                  A multidisciplinary university committed to excellence in
                  education, research, innovation, and future-focused learning.
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="p-6 sm:p-7 md:p-8 lg:p-9">
              <h3 className="text-[26px] font-extrabold leading-tight text-black sm:text-[30px] md:text-[34px]">
                Excellence in Education, Research & Innovation
              </h3>

              <div className="mt-4 h-[1.5px] w-full max-w-[520px] bg-[#4d56c9]" />

              <div className="mt-6 space-y-4 text-[13px] leading-[1.65] text-[#5f5f5f] sm:text-[14px]">
                <p>
                  <span className="font-bold text-[#2b2f91]">
                    VELS Institute of Science, Technology and Advanced Studies
                    (VISTAS)
                  </span>{" "}
                  is a multidisciplinary university committed to excellence in
                  education, research, and innovation.
                </p>

                <p>
                  The institution has been granted the status of{" "}
                  <span className="font-bold text-[#2b2f91]">
                    Deemed-to-be University
                  </span>{" "}
                  and accredited with{" "}
                  <span className="font-bold text-[#2b2f91]">
                    A++ grade by NAAC
                  </span>
                  . It is also recognized as a{" "}
                  <span className="font-bold text-[#2b2f91]">
                    Category-I Institution
                  </span>{" "}
                  by the University Grants Commission.
                </p>

                <p>
                  VISTAS offers academic programs across medicine, healthcare,
                  technology, law, management, commerce, humanities, and other
                  professional disciplines.
                </p>
              </div>

              {/* Smooth Expand Content */}
              <div
                className={`grid transition-all duration-700 ease-in-out ${
                  showMore
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pt-5">
                    <p className="text-[13px] leading-[1.65] text-[#5f5f5f] sm:text-[14px]">
                      The university operates through five campuses in Chennai —
                      Pallavaram, Thalambur, Periyapalayam, Thiruvanmiyur, and
                      Adyar — serving thousands of students pursuing
                      undergraduate, postgraduate, and doctoral programs.
                    </p>

                    {/* Stats */}
                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {stats.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-[12px] border border-[#dfe2f4] bg-[#f8f9ff] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#2b2f91] hover:bg-white hover:shadow-[0_10px_24px_rgba(43,47,145,0.10)]"
                        >
                          <h4 className="text-[22px] font-extrabold leading-tight text-[#2b2f91]">
                            {item.value}
                          </h4>

                          <p className="mt-1.5 text-[12px] font-semibold leading-[1.2] text-[#666666]">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Programs */}
                    <div className="mt-6">
                      <h4 className="text-[16px] font-extrabold text-black">
                        Academic Programs Include
                      </h4>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {programs.map((program) => (
                          <span
                            key={program}
                            className="rounded-full border border-[#2b2f91]/15 bg-white px-3 py-1.5 text-[11px] font-bold text-[#2b2f91] shadow-[0_4px_10px_rgba(43,47,145,0.06)] transition-all duration-300 hover:bg-[#2b2f91] hover:text-white"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => setShowMore(!showMore)}
                  className="inline-flex items-center justify-center rounded-[5px] bg-[#2b2f91] px-6 py-2.5 text-[13px] font-extrabold text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#1f2376] hover:shadow-[0_10px_24px_rgba(43,47,145,0.22)]"
                >
                  {showMore ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
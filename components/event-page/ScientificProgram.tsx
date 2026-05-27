"use client";

import Image from "next/image";
import { useState } from "react";

export default function ScientificProgram() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");

  const day1Sessions = [
    {
      time: "08:00 AM – 09:00 AM",
      session: "Oral Paper Sessions",
    },
    {
      time: "09:00 AM – 10:00 AM",
      session:
        "Scientific Talk – I: Dr. T. V. Geetha – Smart Surgery: Leveraging AI for Better Outcomes",
    },
    {
      time: "10:00 AM – 11:00 AM",
      session: "Scientific Talk – II: Dr. Priyah Prathaban – Man vs. Machine",
    },
    {
      time: "11:00 AM – 12:00 NOON",
      session: "Inaugural Ceremony",
    },
    {
      time: "12:00 NOON – 01:00 PM",
      session:
        "Velan Oration Lecture by Dr. S. Kalavathy Moses – AI in Critical Care",
    },
    {
      time: "01:00 PM – 02:00 PM",
      session: "Lunch Break",
    },
    {
      time: "02:00 PM – 03:30 PM",
      session:
        "Panel Discussion — Moderator: Dr. Prince J. Samuel. Members: Dr. Waqar M. Naqvi; Dr. Kalavathy Moses S.; Dr. D. C. Mathangi; Mr. Venkata Phanidhar Nelluri; Dr. Vijayashree",
    },
    {
      time: "03:30 PM – 04:30 PM",
      session:
        "Scientific Talk – III: Dr. C. N. Srinivas – Laboratory Informatics and Coagulation: An Expert Perspective",
    },
  ];

  const day2Sessions = [
    {
      time: "08:00 AM – 09:00 AM",
      session: "Award-Winning Paper Session",
    },
    {
      time: "09:00 AM – 10:00 AM",
      session:
        "Scientific Talk – IV: Dr. Waqar M. Naqvi – From Competency to Critical Thinking in the Age of Augmented Intelligence and AI Agents",
    },
    {
      time: "10:00 AM – 11:00 AM",
      session: "Scientific Talk – V: Dr. Madhuvanthi Mohan – AI in Eye Care",
    },
    {
      time: "11:00 AM – 12:00 NOON",
      session:
        "Scientific Talk – VI: Dr. S. Asokan – Pros and Cons of AI in Healthcare",
    },
    {
      time: "12:00 NOON – 01:00 PM",
      session:
        "Scientific Talk – VII: Dr. Sudha Jasmine Rajan – Future Docs Powered by AI",
    },
    {
      time: "01:00 PM – 02:00 PM",
      session: "Lunch Break",
    },
    {
      time: "02:00 PM – 03:00 PM",
      session:
        "Scientific Talk – VIII: Dr. D. C. Mathangi – AI in Medical Research",
    },
    {
      time: "03:00 PM – 04:00 PM",
      session:
        "Scientific Talk – IX: Dr. S. Rajendiran – The Ghost in the Microscope: Demystifying AI for Pathologists",
    },
    {
      time: "04:00 PM – 05:00 PM",
      session: "Valedictory Ceremony & Awards",
    },
  ];

  const sessions = activeDay === "day1" ? day1Sessions : day2Sessions;

  const calendarDates = [
    ["1", "2", "3", "4", "5", "6", "7"],
    ["8", "9", "10", "11", "12", "13", "14"],
    ["15", "16", "17", "18", "19", "20", "21"],
    ["22", "23", "24", "25", "26", "27", "28"],
    ["29", "30", "1", "2", "3", "4", "5"],
  ];

  return (
    <section className="relative w-full overflow-visible bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Background Image - separated so sticky works */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/highlights-bg.jpg"
          alt="Scientific Program Background"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />
  
      </div>

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="max-w-[760px]">
          <h2 className="text-[28px] font-extrabold leading-tight text-black sm:text-[34px] md:text-[38px]">
            Scientific Program & Keynote Speakers
          </h2>

          <div className="mt-4 h-[1.5px] w-full max-w-[620px] bg-[#4d56c9]" />
        </div>

        {/* Mobile + Tablet Design */}
        <div className="mt-8 block lg:hidden">
          {/* Day Selector */}
          <div className="rounded-[22px] bg-white/95 p-4 shadow-[0_14px_40px_rgba(43,47,145,0.12)] backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setActiveDay("day1")}
                className={`rounded-[16px] px-4 py-4 text-left transition-all duration-300 ${
                  activeDay === "day1"
                    ? "bg-[#2b2f91] text-white shadow-[0_12px_26px_rgba(43,47,145,0.28)]"
                    : "bg-[#f2f3ff] text-[#2b2f91]"
                }`}
              >
                <span className="block text-[12px] font-extrabold uppercase tracking-[0.18em]">
                  Day 1
                </span>
                <span className="mt-1 block text-[18px] font-extrabold">
                  26 June
                </span>
                <span className="mt-1 block text-[12px] font-bold opacity-80">
                  Friday
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveDay("day2")}
                className={`rounded-[16px] px-4 py-4 text-left transition-all duration-300 ${
                  activeDay === "day2"
                    ? "bg-[#2b2f91] text-white shadow-[0_12px_26px_rgba(43,47,145,0.28)]"
                    : "bg-[#f2f3ff] text-[#2b2f91]"
                }`}
              >
                <span className="block text-[12px] font-extrabold uppercase tracking-[0.18em]">
                  Day 2
                </span>
                <span className="mt-1 block text-[18px] font-extrabold">
                  27 June
                </span>
                <span className="mt-1 block text-[12px] font-bold opacity-80">
                  Saturday
                </span>
              </button>
            </div>
          </div>

          {/* Mobile / Tablet Schedule */}
          <div className="mt-5 rounded-[22px] bg-white/95 p-4 shadow-[0_14px_40px_rgba(43,47,145,0.12)] backdrop-blur-sm sm:p-5">
            <div className="flex items-center justify-between gap-4 border-b border-[#4d56c9] pb-4">
              <h3 className="text-[22px] font-extrabold leading-tight text-black sm:text-[26px]">
                {activeDay === "day1"
                  ? "Day 1 – 26 June 2026"
                  : "Day 2 – 27 June 2026"}
              </h3>

              <span className="shrink-0 rounded-full bg-[#eef0ff] px-4 py-2 text-[12px] font-extrabold text-[#2b2f91]">
                {activeDay === "day1" ? "Friday" : "Saturday"}
              </span>
            </div>

            <div className="mt-5 grid gap-3">
              {sessions.map((item, index) => (
                <article
                  key={`${item.time}-${index}`}
                  className="rounded-[16px] border border-[#e3e5f5] bg-white p-4 shadow-[0_8px_22px_rgba(43,47,145,0.08)]"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2b2f91] text-[12px] font-extrabold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <p className="text-[13px] font-extrabold text-[#2b2f91]">
                        {item.time}
                      </p>

                      <p className="mt-2 text-[13px] font-bold leading-[1.5] text-[#4f4f4f] sm:text-[14px]">
                        {item.session}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Design */}
        <div className="mt-8 hidden grid-cols-[0.85fr_1.65fr] items-start gap-8 overflow-visible lg:grid">
          {/* Sticky Calendar Card */}
          <div className="sticky top-[110px] self-start rounded-[22px] bg-white/95 p-6 shadow-[0_14px_40px_rgba(43,47,145,0.12)] backdrop-blur-sm">
            {/* Calendar Header */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[34px] leading-none text-[#2b2f91] shadow-[0_8px_20px_rgba(43,47,145,0.10)]"
                aria-label="Previous month"
              >
                ‹
              </button>

              <div className="flex items-center gap-3">
                <span className="rounded-[8px] bg-white px-4 py-3 text-[22px] font-extrabold text-black shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
                  June
                </span>

                <span className="rounded-[8px] bg-white px-4 py-3 text-[22px] font-extrabold text-black shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
                  2026
                </span>
              </div>

              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[34px] leading-none text-[#2b2f91] shadow-[0_8px_20px_rgba(43,47,145,0.10)]"
                aria-label="Next month"
              >
                ›
              </button>
            </div>

            {/* Week Days */}
            <div className="mt-7 grid grid-cols-7 gap-2 text-center text-[14px] font-extrabold text-[#333333]">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            {/* Dates */}
            <div className="mt-5 grid gap-3">
              {calendarDates.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-cols-7 gap-2">
                  {week.map((date, index) => {
                    const isDay1 = date === "26";
                    const isDay2 = date === "27";
                    const isClickable = isDay1 || isDay2;
                    const isActive =
                      (activeDay === "day1" && isDay1) ||
                      (activeDay === "day2" && isDay2);

                    return (
                      <button
                        key={`${weekIndex}-${index}`}
                        type="button"
                        disabled={!isClickable}
                        onClick={() => {
                          if (isDay1) setActiveDay("day1");
                          if (isDay2) setActiveDay("day2");
                        }}
                        className={`flex h-11 items-center justify-center rounded-[8px] text-[16px] font-extrabold transition-all duration-300 ${
                          isActive
                            ? "bg-[#2b2f91] text-white shadow-[0_10px_22px_rgba(43,47,145,0.32)]"
                            : isClickable
                            ? "bg-[#eef0ff] text-[#2b2f91] hover:bg-[#2b2f91] hover:text-white"
                            : "text-[#b8bdcf]"
                        }`}
                      >
                        {date}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-[13px] font-semibold leading-relaxed text-[#666666]">
              Click <span className="font-extrabold text-[#2b2f91]">26</span>{" "}
              for Day 1 and{" "}
              <span className="font-extrabold text-[#2b2f91]">27</span> for Day
              2 schedule.
            </p>
          </div>

          {/* Schedule Card */}
          <div className="rounded-[22px] bg-white/95 p-6 shadow-[0_14px_40px_rgba(43,47,145,0.12)] backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4 border-b border-[#4d56c9] pb-4">
              <h3 className="text-[28px] font-extrabold leading-tight text-black">
                {activeDay === "day1"
                  ? "Day 1 – 26 June 2026"
                  : "Day 2 – 27 June 2026"}
              </h3>

              <span className="rounded-full bg-[#eef0ff] px-5 py-2 text-[13px] font-extrabold text-[#2b2f91]">
                {activeDay === "day1" ? "Friday" : "Saturday"}
              </span>
            </div>

            <div className="mt-6 overflow-hidden rounded-[16px] border border-[#d9ddf4]">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#2b2f91] text-white">
                    <th className="w-[260px] px-6 py-5 text-[16px] font-extrabold">
                      Time
                    </th>

                    <th className="px-6 py-5 text-[16px] font-extrabold">
                      Session
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {sessions.map((item, index) => (
                    <tr
                      key={`${item.time}-${index}`}
                      className={`border-b border-[#d9ddf4] last:border-b-0 ${
                        index % 2 === 0 ? "bg-white" : "bg-[#f2f2f5]"
                      }`}
                    >
                      <td className="px-6 py-5 align-top text-[14px] font-extrabold leading-[1.35] text-[#333333]">
                        {item.time}
                      </td>

                      <td className="px-6 py-5 align-top text-[14px] font-bold leading-[1.5] text-[#4f4f4f]">
                        {item.session}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
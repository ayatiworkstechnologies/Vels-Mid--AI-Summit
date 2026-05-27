"use client";

import { motion } from "framer-motion";

export default function CallForAbstracts() {
  const guidelines = [
    {
      label: "Maximum length",
      value: "300 words",
    },
    {
      label: "Submission Deadline",
      value: "02 June 2026",
    },
    {
      label: "Acceptance Notification",
      value: "09 June 2026",
    },
    {
      label: "Submission Email",
      value: "medaipresentation@velsmedicalcollege.com",
    },
    {
      label: "Author Requirement",
      value: "Presenting author must be registered for the conference",
    },
  ];

  const abstractFormat = [
    "Title",
    "Authors",
    "Affiliation",
    "Background / Introduction",
    "Objectives",
    "Methods",
    "Results",
    "Conclusion",
    "Keywords (3–5)",
  ];

  const oralPaper = [
    "5 minutes presentation + 2 minutes discussion",
    "Maximum 10 slides",
    "Suggested format: Title, Introduction, Objectives, Methods, Results, Discussion, Conclusion, References",
  ];

  const posterPresentation = [
    "PDF format, Portrait orientation",
    "Size: A0 (841 × 1189 mm)",
    "Maximum file size: 10 MB",
    "Include: Title, Authors, Introduction, Methods, Results, Conclusion",
    "2–3 minute presentation during poster viewing session",
  ];

  const awards = [
    "Best Paper Award",
    "Best Poster Award",
    "Young Researcher Award",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/highlights-bg.jpg')] bg-cover bg-center" />

      <motion.div
        animate={{
          x: [0, 24, 0],
          y: [0, -18, 0],
          opacity: [0.55, 1, 0.55],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-24 top-20 h-[260px] w-[260px] rounded-full bg-[#2b2f91]/10 blur-[90px]"
      />

      <motion.div
        animate={{
          x: [0, -22, 0],
          y: [0, 18, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-24 bottom-10 h-[280px] w-[280px] rounded-full bg-[#4d56c9]/10 blur-[90px]"
      />

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.05, ease: "easeOut" }}
          className="mx-auto max-w-[820px] text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
            className="inline-flex rounded-full border border-[#2b2f91]/15 bg-[#eef0ff] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#2b2f91]"
          >
            Research Submissions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.22, ease: "easeOut" }}
            className="mt-4 text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[40px]"
          >
            Call for Abstracts
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.15, delay: 0.38, ease: "easeOut" }}
            style={{ transformOrigin: "center" }}
            className="mx-auto mt-4 h-[1.5px] w-full max-w-[560px] bg-[#4d56c9]"
          />

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.55, ease: "easeOut" }}
            className="mx-auto mt-5 max-w-[780px] text-[14px] leading-[1.7] text-[#5f5f5f] sm:text-[15px]"
          >
            Researchers, clinicians, academicians, and students are invited to
            submit abstracts for Oral Paper and E-Poster presentations related
            to original research, clinical studies, innovations, or healthcare
            technology applications.
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Submission Overview */}
          <motion.div
            initial={{ opacity: 0, x: -55, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.15, delay: 0.18, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[24px] bg-[#2b2f91] p-5 text-white shadow-[0_22px_55px_rgba(43,47,145,0.22)] sm:p-7 md:p-8"
          >
            <motion.div
              animate={{
                x: [0, -18, 0],
                y: [0, 20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/15 blur-[70px]"
            />

            <motion.div
              animate={{
                x: [0, 24, 0],
                y: [0, -16, 0],
                opacity: [0.26, 0.52, 0.26],
              }}
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-white/10 blur-[80px]"
            />

            <div className="relative z-10">
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
                className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.26em] text-white backdrop-blur-sm"
              >
                Submission Overview
              </motion.span>

              <motion.h3
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="mt-5 text-[26px] font-extrabold leading-tight sm:text-[34px] md:text-[38px]"
              >
                Present Your Research at MED-AI Summit 2026
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.65, ease: "easeOut" }}
                className="mt-4 max-w-[620px] text-[14px] leading-[1.75] text-white/88 sm:text-[15px]"
              >
                Submit your work for oral paper or e-poster presentation and
                showcase innovation, clinical research, and practical AI
                applications in healthcare.
              </motion.p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {guidelines.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: 28,
                      scale: 0.96,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.75 + index * 0.14,
                      ease: "easeOut",
                    }}
                    className="min-w-0 rounded-[16px] border border-white/15 bg-white/10 p-4 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/15"
                  >
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/60">
                      {item.label}
                    </p>
                    <p className="mt-2 break-words text-[13px] font-extrabold leading-[1.5] text-white sm:text-[14px]">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <div className="grid gap-6">
            {/* Structured Abstract */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.1, delay: 0.25, ease: "easeOut" }}
              className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 shadow-[0_16px_42px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-7"
            >
              <h3 className="text-[24px] font-extrabold leading-tight text-black sm:text-[30px]">
                Structured Abstract Format
              </h3>

              <p className="mt-3 text-[14px] leading-[1.7] text-[#666666]">
                Follow this structure while preparing your abstract submission.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {abstractFormat.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.88, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      delay: 0.4 + index * 0.06,
                      ease: "easeOut",
                    }}
                    className="rounded-full border border-[#d8dcff] bg-[#f7f8ff] px-4 py-2 text-[12px] font-bold text-[#2b2f91] shadow-[0_6px_16px_rgba(43,47,145,0.06)]"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
              className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 shadow-[0_16px_42px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-7"
            >
              <h3 className="text-[24px] font-extrabold text-black sm:text-[30px]">
                Awards
              </h3>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {awards.map((award, index) => (
                  <motion.div
                    key={award}
                    initial={{
                      opacity: 0,
                      y: 32,
                      rotate: index % 2 === 0 ? -1.5 : 1.5,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      rotate: 0,
                    }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.85,
                      delay: 0.48 + index * 0.16,
                      ease: "easeOut",
                    }}
                    className="group rounded-[18px] border border-[#e8eafd] bg-gradient-to-b from-white to-[#f6f7ff] p-5 text-center shadow-[0_10px_26px_rgba(43,47,145,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#2b2f91]"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2b2f91] text-[24px] text-white shadow-[0_10px_20px_rgba(43,47,145,0.25)] transition-transform duration-500 group-hover:scale-110">
                      🏆
                    </div>

                    <p className="mx-auto mt-4 max-w-[130px] text-[14px] font-extrabold leading-[1.35] text-[#2b2f91] sm:text-[15px]">
                      {award}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Presentation Cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Oral Paper */}
          <motion.div
            initial={{ opacity: 0, y: 46, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.05, delay: 0.18, ease: "easeOut" }}
            className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 shadow-[0_16px_42px_rgba(43,47,145,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(43,47,145,0.14)] sm:p-7"
          >
            <div className="flex items-start gap-4">
              <motion.div
                initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-[#2b2f91] text-[24px] text-white shadow-[0_10px_24px_rgba(43,47,145,0.25)]"
              >
                🎤
              </motion.div>

              <div>
                <h3 className="text-[22px] font-extrabold leading-tight text-black sm:text-[26px]">
                  Oral Paper Presentation
                </h3>
                <p className="mt-1 text-[13px] font-medium leading-[1.6] text-[#666666]">
                  Present your research in a concise and impactful format.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {oralPaper.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -22 : 22,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.85,
                    delay: 0.45 + index * 0.14,
                    ease: "easeOut",
                  }}
                  className="rounded-[14px] border border-[#eef0fa] bg-[#fafbff] px-4 py-3 shadow-[0_6px_16px_rgba(43,47,145,0.05)]"
                >
                  <p className="text-[13px] font-semibold leading-[1.65] text-[#555555] sm:text-[14px]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* E Poster */}
          <motion.div
            initial={{ opacity: 0, y: 46, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.05, delay: 0.28, ease: "easeOut" }}
            className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 shadow-[0_16px_42px_rgba(43,47,145,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(43,47,145,0.14)] sm:p-7"
          >
            <div className="flex items-start gap-4">
              <motion.div
                initial={{ opacity: 0, rotate: 12, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.42, ease: "easeOut" }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-[#2b2f91] text-[24px] text-white shadow-[0_10px_24px_rgba(43,47,145,0.25)]"
              >
                📄
              </motion.div>

              <div>
                <h3 className="text-[22px] font-extrabold leading-tight text-black sm:text-[26px]">
                  E-Poster Presentation
                </h3>
                <p className="mt-1 text-[13px] font-medium leading-[1.6] text-[#666666]">
                  Submit visually clear, well-structured digital posters.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {posterPresentation.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? 22 : -22,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.85,
                    delay: 0.48 + index * 0.14,
                    ease: "easeOut",
                  }}
                  className="rounded-[14px] border border-[#eef0fa] bg-[#fafbff] px-4 py-3 shadow-[0_6px_16px_rgba(43,47,145,0.05)]"
                >
                  <p className="text-[13px] font-semibold leading-[1.65] text-[#555555] sm:text-[14px]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 42, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, delay: 0.18, ease: "easeOut" }}
          className="mt-7 rounded-[22px] bg-[#2b2f91] p-5 text-center shadow-[0_18px_45px_rgba(43,47,145,0.18)] sm:p-6 md:flex md:items-center md:justify-between md:text-left"
        >
          <div>
            <h3 className="text-[22px] font-extrabold text-white sm:text-[26px]">
              Need help with Research submission?
            </h3>

            <p className="mt-2 text-[13px] font-medium leading-[1.6] text-white/80 sm:text-[14px]">
              Visit our contact page for submission support, conference queries,
              and assistance from the MED-AI Summit team.
            </p>
          </div>

          <motion.a
            href="/contact"
            whileHover={{ y: -4, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-5 inline-flex rounded-[12px] bg-white px-6 py-3 text-[13px] font-extrabold text-[#2b2f91] transition-all duration-500 hover:-translate-y-1 hover:bg-[#f2f3ff] md:mt-0"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
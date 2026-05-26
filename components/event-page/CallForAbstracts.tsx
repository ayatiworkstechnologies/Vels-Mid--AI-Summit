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

            <div className="pointer-events-none absolute -left-24 top-20 h-[260px] w-[260px] rounded-full bg-[#2b2f91]/10 blur-[90px]" />
            <div className="pointer-events-none absolute -right-24 bottom-10 h-[280px] w-[280px] rounded-full bg-[#4d56c9]/10 blur-[90px]" />

            <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
                {/* Heading */}
                <div className="mx-auto max-w-[820px] text-center">
                    <span className="inline-flex rounded-full border border-[#2b2f91]/15 bg-[#eef0ff] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#2b2f91]">
                        Research Submissions
                    </span>

                    <h2 className="mt-4 text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[40px]">
                        Call for Abstracts
                    </h2>

                    <div className="mx-auto mt-4 h-[1.5px] w-full max-w-[560px] bg-[#4d56c9]" />

                    <p className="mx-auto mt-5 max-w-[780px] text-[14px] leading-[1.7] text-[#5f5f5f] sm:text-[15px]">
                        Researchers, clinicians, academicians, and students are invited to
                        submit abstracts for Oral Paper and E-Poster presentations related
                        to original research, clinical studies, innovations, or healthcare
                        technology applications.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                    {/* Submission Overview */}
                    <div className="relative overflow-hidden rounded-[24px] bg-[#2b2f91] p-5 text-white shadow-[0_22px_55px_rgba(43,47,145,0.22)] sm:p-7 md:p-8">
                        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/15 blur-[70px]" />
                        <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-white/10 blur-[80px]" />

                        <div className="relative z-10">
                            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.26em] text-white backdrop-blur-sm">
                                Submission Overview
                            </span>

                            <h3 className="mt-5 text-[26px] font-extrabold leading-tight sm:text-[34px] md:text-[38px]">
                                Present Your Research at MED-AI Summit 2026
                            </h3>

                            <p className="mt-4 max-w-[620px] text-[14px] leading-[1.75] text-white/88 sm:text-[15px]">
                                Submit your work for oral paper or e-poster presentation and
                                showcase innovation, clinical research, and practical AI
                                applications in healthcare.
                            </p>

                            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {guidelines.map((item) => (
                                    <div
                                        key={item.label}
                                        className="min-w-0 rounded-[16px] border border-white/15 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                                    >
                                        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/60">
                                            {item.label}
                                        </p>
                                        <p className="mt-2 break-words text-[13px] font-extrabold leading-[1.5] text-white sm:text-[14px]">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="grid gap-6">
                        {/* Structured Abstract */}
                        <div className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 shadow-[0_16px_42px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-7">
                            <h3 className="text-[24px] font-extrabold leading-tight text-black sm:text-[30px]">
                                Structured Abstract Format
                            </h3>

                            <p className="mt-3 text-[14px] leading-[1.7] text-[#666666]">
                                Follow this structure while preparing your abstract submission.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2.5">
                                {abstractFormat.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-[#d8dcff] bg-[#f7f8ff] px-4 py-2 text-[12px] font-bold text-[#2b2f91] shadow-[0_6px_16px_rgba(43,47,145,0.06)]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Awards */}
                        <div className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 shadow-[0_16px_42px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-7">
                            <h3 className="text-[24px] font-extrabold text-black sm:text-[30px]">
                                Awards
                            </h3>

                            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                                {awards.map((award) => (
                                    <div
                                        key={award}
                                        className="group rounded-[18px] border border-[#e8eafd] bg-gradient-to-b from-white to-[#f6f7ff] p-5 text-center shadow-[0_10px_26px_rgba(43,47,145,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2b2f91]"
                                    >
                                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2b2f91] text-[24px] text-white shadow-[0_10px_20px_rgba(43,47,145,0.25)] transition-transform duration-300 group-hover:scale-110">
                                            🏆
                                        </div>

                                        <p className="mx-auto mt-4 max-w-[130px] text-[14px] font-extrabold leading-[1.35] text-[#2b2f91] sm:text-[15px]">
                                            {award}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Presentation Cards */}
                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Oral Paper */}
                    <div className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 shadow-[0_16px_42px_rgba(43,47,145,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(43,47,145,0.14)] sm:p-7">
                        <div className="flex items-start gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-[#2b2f91] text-[24px] text-white shadow-[0_10px_24px_rgba(43,47,145,0.25)]">
                                🎤
                            </div>

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
                            {oralPaper.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-[14px] border border-[#eef0fa] bg-[#fafbff] px-4 py-3 shadow-[0_6px_16px_rgba(43,47,145,0.05)]"
                                >
                                    <p className="text-[13px] font-semibold leading-[1.65] text-[#555555] sm:text-[14px]">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* E Poster */}
                    <div className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 shadow-[0_16px_42px_rgba(43,47,145,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(43,47,145,0.14)] sm:p-7">
                        <div className="flex items-start gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-[#2b2f91] text-[24px] text-white shadow-[0_10px_24px_rgba(43,47,145,0.25)]">
                                📄
                            </div>

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
                            {posterPresentation.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-[14px] border border-[#eef0fa] bg-[#fafbff] px-4 py-3 shadow-[0_6px_16px_rgba(43,47,145,0.05)]"
                                >
                                    <p className="text-[13px] font-semibold leading-[1.65] text-[#555555] sm:text-[14px]">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-7 rounded-[22px] bg-[#2b2f91] p-5 text-center shadow-[0_18px_45px_rgba(43,47,145,0.18)] sm:p-6 md:flex md:items-center md:justify-between md:text-left">
                    <div>
                        <h3 className="text-[22px] font-extrabold text-white sm:text-[26px]">
                            Need help with Research  submission?
                        </h3>

                        <p className="mt-2 text-[13px] font-medium leading-[1.6] text-white/80 sm:text-[14px]">
                            Visit our contact page for submission support, conference queries, and
                            assistance from the MED-AI Summit team.
                        </p>
                    </div>

                    <a
                        href="/contact"
                        className="mt-5 inline-flex rounded-[12px] bg-white px-6 py-3 text-[13px] font-extrabold text-[#2b2f91] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f2f3ff] md:mt-0"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
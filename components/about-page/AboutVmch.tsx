import Image from "next/image";

export default function AboutVmch() {
  const features = [
    "1050-bedded teaching hospital",
    "NABH and ISO accredited hospital",
    "Advanced diagnostic laboratories",
    "Simulation and skill training centres",
    "Specialty and super-specialty healthcare services",
    "Affordable and accessible patient care",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="VMCH Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Top Heading */}
        <div className="mx-auto max-w-[840px] text-center">
          <span className="text-[12px] font-extrabold uppercase tracking-[0.32em] text-[#2b2f91]">
            About VMCH
          </span>

          <h2 className="mt-3 text-[28px] font-extrabold leading-tight text-black sm:text-[34px] md:text-[40px]">
            VELS Medical College & Hospital
          </h2>

          <div className="mx-auto mt-4 h-[1.5px] w-full max-w-[560px] bg-[#4d56c9]" />

          <p className="mx-auto mt-5 max-w-[720px] text-[14px] leading-[1.7] text-[#5f5f5f] sm:text-[15px]">
            A premier medical institution committed to excellence in medical
            education, research, patient care, and community-focused healthcare.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Left Content Card */}
          <div className="rounded-[22px] border border-[#e4e6f5] bg-white/95 p-6 shadow-[0_14px_38px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-8">
            <h3 className="text-[24px] font-extrabold leading-tight text-black sm:text-[30px]">
              Excellence in Medical Education, Research & Patient Care
            </h3>

            <div className="mt-4 h-[1.5px] w-full max-w-[420px] bg-[#4d56c9]" />

            <div className="mt-6 space-y-4 text-[13px] leading-[1.75] text-[#5f5f5f] sm:text-[14px]">
              <p>
                <span className="font-bold text-[#2b2f91]">
                  VELS Medical College & Hospital (VMCH)
                </span>{" "}
                is a premier medical institution committed to excellence in
                medical education, research, and patient care.
              </p>

              <p>
                The institution comprises a{" "}
                <span className="font-bold text-[#2b2f91]">
                  1050-bedded teaching hospital
                </span>{" "}
                with modern infrastructure and advanced healthcare facilities. It
                is a{" "}
                <span className="font-bold text-[#2b2f91]">
                  NABH and ISO accredited hospital
                </span>
                , reflecting its commitment to quality standards and patient
                safety.
              </p>

              <p>
                VMCH features well-equipped lecture halls, robust academic
                infrastructure, advanced diagnostic laboratories, simulation and
                skill training centres, state-of-the-art diagnostic and
                therapeutic services, and comprehensive specialty as well as
                super-specialty healthcare services.
              </p>

              <p>
                VMCH remains dedicated to nurturing competent and ethical medical
                professionals while providing affordable, accessible, and
                high-quality healthcare to the community.
              </p>
            </div>
          </div>

          {/* Right Visual Panel */}
          <div className="group relative overflow-hidden rounded-[24px] bg-[#2b2f91] shadow-[0_18px_45px_rgba(43,47,145,0.22)]">
            {/* Background Image */}
            <Image
              src="/images/healthcare.jpg"
              alt="VELS Medical College and Hospital"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#111342]/40 via-[#2b2f91]/32 to-[#2b2f91]/25" />

            {/* Soft Glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#4d56c9]/40 blur-[70px]" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[420px] flex-col justify-between p-6 text-white sm:p-7 md:min-h-[460px]">
              <div>
                <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.28em] text-white backdrop-blur-md">
                  Healthcare Excellence
                </span>
              </div>
            </div>

            {/* Bottom Accent Line */}
            {/* <div className="absolute bottom-0 left-0 h-[5px] w-full bg-gradient-to-r from-white/80 via-white/30 to-transparent" /> */}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={item}
              className="group flex min-h-[92px] items-center gap-4 rounded-[18px] border border-[#e4e6f5] bg-white/95 p-5 shadow-[0_8px_24px_rgba(43,47,145,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2b2f91] hover:bg-[#2b2f91] hover:shadow-[0_16px_34px_rgba(43,47,145,0.16)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f1f2ff] text-[14px] font-extrabold text-[#2b2f91] transition-all duration-300 group-hover:bg-white group-hover:text-[#2b2f91]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-[14px] font-bold leading-[1.35] text-[#333333] transition-colors duration-300 group-hover:text-white">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

export default function AboutConference() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-5 sm:px-8 md:grid-cols-[1.25fr_0.85fr] md:gap-14 lg:px-10">
        {/* Left Content */}
        <div className="w-full">
          <h2 className="text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[38px] lg:text-[40px]">
            About the Conference
          </h2>

          <div className="mt-4 h-[1.5px] w-full max-w-[520px] bg-[#4d56c9]" />

          <div className="mt-7 max-w-[650px] space-y-8 text-[13px] leading-[1.25] text-[#666666] sm:text-[14px]">
            <div className="flex items-start gap-3">
              <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#2b2f91]" />
              <p>
                <span className="font-bold text-[#2b2f91]">
                  MED-AI Summit 2026
                </span>{" "}
                - Innovation to Impact is an international conference dedicated
                to exploring the transformative potential of Artificial
                Intelligence in healthcare.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#111111]" />
              <p>
                The summit will serve as a global platform for clinicians,
                researchers, academicians, technologists, and healthcare leaders
                to discuss the latest developments and practical applications of
                AI in medicine.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#111111]" />
              <p>
                Through keynote lectures, scientific presentations, panel
                discussions, and interactive workshops, the conference aims to
                promote collaboration between healthcare professionals and
                technology innovators.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <div className="relative mx-auto h-[300px] w-full max-w-[390px] overflow-hidden sm:h-[360px] md:h-[395px]">
            <Image
              src="/images/conference.jpg"
              alt="About the Conference"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
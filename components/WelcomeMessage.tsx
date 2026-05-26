import Image from "next/image";
import Link from "next/link";

export default function WelcomeMessage() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Full Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="Conference Highlights Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-8 px-5 sm:px-8 md:grid-cols-[0.9fr_1.35fr] md:gap-12 lg:px-10">
        {/* Left Image */}
        <div className="w-full">
          <div className="relative h-[260px] w-full rounded-[12px] overflow-hidden sm:h-[340px] md:h-[455px]">
            <Image
              src="/images/welcome.jpg"
              alt="MED-AI Summit 2026"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full">
          <h2 className="text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[38px] lg:text-[40px]">
            Welcome Message
          </h2>

          <div className="mt-4 h-[2px] w-[300px] bg-[#5b60d6] md:w-[450px]" />

          <div className="mt-6 max-w-[720px] space-y-4 text-[14px] leading-[1.25] text-[#5f5f5f] sm:text-[15px]">
            <p>
              It is our great pleasure to welcome you to{" "}
              <span className="font-bold text-[#2b2f91]">
                MED-AI Summit 2026
              </span>{" "}
              – Innovation to Impact, an international conference dedicated to
              exploring the transformative role of Artificial Intelligence in
              modern healthcare.
            </p>

            <p>
              Artificial Intelligence and digital technologies are rapidly
              reshaping clinical practice, medical research, and healthcare
              delivery worldwide.{" "}
              <span className="font-bold text-[#2b2f91]">
                MED-AI Summit 2026
              </span>{" "}
              aims to bring together clinicians, researchers, academicians,
              technologists, and industry leaders from across the globe to
              exchange knowledge, share research, and explore innovative
              applications of AI that can enhance patient care and healthcare
              systems.
            </p>

            <p>
              The summit will feature keynote lectures by distinguished experts,
              scientific sessions, panel discussions, and hands-on
              pre-conference workshops designed to provide both theoretical
              insights and practical experience.
              <br />
              We look forward to your active participation and valuable
              contributions in shaping the future of intelligent healthcare.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/register"
              className="inline-flex min-w-[185px] items-center rounded-[12px] justify-center bg-[#2b2f91] px-8 py-3 text-[18px] font-bold text-white transition-all duration-300 hover:bg-[#1f2376]"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
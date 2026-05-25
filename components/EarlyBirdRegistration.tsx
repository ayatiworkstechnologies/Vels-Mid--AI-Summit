import Image from "next/image";
import Link from "next/link";

export default function EarlyBirdRegistration() {
  return (
    <section className="w-full relative bg-white py-6">
        {/* Full Background Image */}
              <Image
                src="/images/highlights-bg.jpg"
                alt="Conference Highlights Background"
                fill
                priority={false}
                sizes="100vw"
                className="object-cover object-center"
              />
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <div className="relative flex min-h-[180px] items-center overflow-hidden rounded-[22px] bg-[#2b2f91] px-5 py-5 shadow-[0_14px_35px_rgba(43,47,145,0.18)] sm:min-h-[210px] sm:px-7 md:min-h-[265px]">
          {/* Text */}
          <div className="relative z-10 flex max-w-[620px] flex-col justify-center ">
            <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-tight mb-2 text-white sm:text-[36px] md:text-[42px] lg:text-[46px]">
              Early Bird Registration
              <br />
              Now Open
            </h2>

            <Link
              href="#"
              className="mt-5 inline-flex w-fit items-center justify-center rounded-[4px] bg-white px-5 py-2 text-[12px] font-extrabold text-[#2b2f91] transition-all duration-300 hover:bg-[#f2f2ff] hover:shadow-[0_8px_18px_rgba(0,0,0,0.18)] sm:text-[13px]"
            >
              Register Now
            </Link>
          </div>

          {/* Right Image */}
          <div className="pointer-events-none absolute bottom-0 right-0 h-full w-[44%]">
            <Image
              src="/images/registration-robot.png"
              alt="Early Bird Registration"
              fill
              sizes="44vw"
              className="object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
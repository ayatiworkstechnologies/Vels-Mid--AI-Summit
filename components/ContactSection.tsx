export default function ContactSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-10">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="max-w-[520px]">
          <h2 className="text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[38px] lg:text-[40px]">
            Contact us
          </h2>

          <div className="mt-4 h-[1.5px] w-full max-w-[250px] bg-[#4d56c9]" />
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-24">
          {/* Contact Card */}
          <div className="w-full max-w-[390px] rounded-[8px] bg-white px-5 py-5 shadow-[0_8px_26px_rgba(0,0,0,0.10)] sm:px-6 sm:py-6">
            <h3 className="text-[16px] font-extrabold text-black">
              Conference Secretary
            </h3>

            <div className="mt-2 h-[1.5px] w-[205px] bg-[#2b2f91]" />

            <div className="mt-5 space-y-5">
              {/* Name */}
              <div className="flex items-start gap-4">
                <svg
                  className="mt-[1px] h-6 w-6 shrink-0 text-[#2b2f91]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21a8 8 0 0 0-16 0" />
                  <circle cx="12" cy="7" r="4" />
                </svg>

                <p className="pt-[3px] text-[13px] font-bold leading-snug text-[#565656] sm:text-[14px]">
                  Dr. Ramya M
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <svg
                  className="mt-[1px] h-6 w-6 shrink-0 text-[#2b2f91]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8 9.67a16 16 0 0 0 6.33 6.33l1.24-1.24a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92z" />
                </svg>

                <p className="pt-[3px] text-[13px] font-bold leading-snug text-[#565656] sm:text-[14px]">
                  +91-9844963825
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <svg
                  className="mt-[1px] h-6 w-6 shrink-0 text-[#2b2f91]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>

                <p className="pt-[3px] break-all text-[13px] font-bold leading-snug text-[#565656] sm:text-[14px]">
                  medaisummit@velsmedicalcollege.com
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <svg
                  className="mt-[1px] h-6 w-6 shrink-0 text-[#2b2f91]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <p className="text-[13px] font-bold leading-[1.25] text-[#565656] sm:text-[14px]">
                  VELS Medical College &amp; Hospital
                  <br />
                  12/123, Velan Nagar, Periyapalayam
                  <br />
                  Road, Manjankaranai, Tiruvallur – 601102,
                  <br />
                  Tamil Nadu, India.
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full">
            <div className="h-[260px] w-full overflow-hidden rounded-[2px] sm:h-[300px] md:h-[315px] rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15548.831473988832!2d80.2422784!3d13.0224308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a527f10f13d746f%3A0x3aeb473a9cfb1d55!2sVels%20Medical%20College%20and%20Hospital%2C%20Manjankaranai%2C%20Bandikavanoor%2C%20Manjankaranai%2C%20Tamil%20Nadu%20601102!3m2!1d13.2689063!2d80.1225027!5e0!3m2!1sen!2sin!4v1779451373099!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VELS Medical College and Hospital Map"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function RegistrationDetails() {
  const registrationRows = [
    {
      category: "Faculty",
      workshopEarly: "₹ 1500",
      workshopRegular: "₹ 2000",
      conferenceEarly: "₹ 2250",
      conferenceRegular: "₹ 2750",
    },
    {
      category: "Students",
      workshopEarly: "₹ 1500",
      workshopRegular: "₹ 2000",
      conferenceEarly: "₹ 2250",
      conferenceRegular: "₹ 2750",
    },
    {
      category: "International & Industry Delegates",
      workshopEarly: "₹ 1500",
      workshopRegular: "₹ 2000",
      conferenceEarly: "₹ 2250",
      conferenceRegular: "₹ 2750",
    },
  ];

  const importantDates = [
    {
      category: "Early Bird Registration",
      workshop: "15 May 2026",
    },
    {
      category: "Workshop Registration Deadline",
      workshop: "15 May 2026",
    },
    {
      category: "Abstract Submission Deadline",
      workshop: "02 June 2026",
    },
    {
      category: "Notification of Acceptance",
      workshop: "09 June 2026",
    },
    {
      category: "Pre-Conference Workshops",
      workshop: "25 June 2026",
    },
    {
      category: "Conference",
      workshop: "25-26 June 2026",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16">
      {/* Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="Registration Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Registration Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[40px]">
            Registration Details
          </h2>

          <div className="mx-auto mt-4 h-[1.5px] w-full max-w-[470px] bg-[#4d56c9]" />
        </div>

        {/* Registration Table */}
        <div className="mx-auto mt-8 max-w-[720px] overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="bg-[#2b2f91] text-white">
                <th
                  rowSpan={2}
                  className="w-[240px] px-4 py-3 align-bottom text-[15px] font-extrabold sm:text-[16px]"
                >
                  Category
                </th>

                <th
                  colSpan={2}
                  className="border-b border-white/50 px-4 py-2 text-center text-[15px] font-extrabold sm:text-[16px]"
                >
                  Workshop
                </th>

                <th
                  colSpan={2}
                  className="border-b border-white/50 px-4 py-2 text-center text-[15px] font-extrabold sm:text-[16px]"
                >
                  Conference
                </th>
              </tr>

              <tr className="bg-[#2b2f91] text-white">
                <th className="px-4 py-3 text-center text-[14px] font-extrabold sm:text-[15px]">
                  Early Bird
                </th>
                <th className="px-4 py-3 text-center text-[14px] font-extrabold sm:text-[15px]">
                  Regular
                </th>
                <th className="px-4 py-3 text-center text-[14px] font-extrabold sm:text-[15px]">
                  Early Bird
                </th>
                <th className="px-4 py-3 text-center text-[14px] font-extrabold sm:text-[15px]">
                  Regular
                </th>
              </tr>
            </thead>

            <tbody>
              {registrationRows.map((item) => (
                <tr
                  key={item.category}
                  className="border-b border-[#d6d6d6] bg-white/50"
                >
                  <td className="px-4 py-3 text-[13px] font-bold text-[#555555] sm:text-[14px]">
                    {item.category}
                  </td>
                  <td className="px-4 py-3 text-center text-[13px] font-semibold text-[#555555] sm:text-[14px]">
                    {item.workshopEarly}
                  </td>
                  <td className="px-4 py-3 text-center text-[13px] font-semibold text-[#555555] sm:text-[14px]">
                    {item.workshopRegular}
                  </td>
                  <td className="px-4 py-3 text-center text-[13px] font-semibold text-[#555555] sm:text-[14px]">
                    {item.conferenceEarly}
                  </td>
                  <td className="px-4 py-3 text-center text-[13px] font-semibold text-[#555555] sm:text-[14px]">
                    {item.conferenceRegular}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Register CTA */}
        <div className="mx-auto mt-12 max-w-[980px] bg-[#2b2f91] px-5 py-5 sm:px-8 md:px-10">
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <h3 className="text-[20px] font-extrabold leading-tight text-white sm:text-[24px]">
              Click here to Register for MED-AI Summit 2026
            </h3>

            <Link
              href="#"
              className="inline-flex min-w-[190px] items-center justify-center bg-white px-8 py-3 text-[18px] font-extrabold text-[#2b2f91] transition-all duration-300 hover:bg-[#f2f2ff] hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Important Dates Heading */}
        <div className="mx-auto mt-10 max-w-[760px] text-center">
          <h2 className="text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[40px]">
            Important Dates
          </h2>

          <div className="mx-auto mt-4 h-[1.5px] w-full max-w-[470px] bg-[#4d56c9]" />
        </div>

        {/* Important Dates Table */}
        <div className="mx-auto mt-7 max-w-[460px] overflow-hidden">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#2b2f91] text-white">
                <th className="px-4 py-3 text-[15px] font-extrabold sm:text-[16px]">
                  Category
                </th>
                <th className="px-4 py-3 text-[15px] font-extrabold sm:text-[16px]">
                  Workshop
                </th>
              </tr>
            </thead>

            <tbody>
              {importantDates.map((item) => (
                <tr
                  key={item.category}
                  className="border-b border-[#d6d6d6] bg-white/50"
                >
                  <td className="px-4 py-3 text-[13px] font-bold leading-tight text-[#555555] sm:text-[14px]">
                    {item.category}
                  </td>
                  <td className="px-4 py-3 text-[13px] font-semibold leading-tight text-[#555555] sm:text-[14px]">
                    {item.workshop}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
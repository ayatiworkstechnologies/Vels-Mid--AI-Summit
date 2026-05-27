import Image from "next/image";
import Link from "next/link";

export default function PreConferenceWorkshops() {
  const workshops = [
    {
      category: "Electrical Storm: Waves that Warm",
      workshop: "General Medicine",
    },
    {
      category: "Life at the Core: Exploring Bone Marrow",
      workshop: "Pathology",
    },
    {
      category: "Precision in Every Stitch",
      workshop: "General Surgery",
    },
    {
      category: "Nurture",
      workshop: "Obstetrics & Gynaecology",
    },
    {
      category: "POCUS / Basics of Ventilators",
      workshop: "Anaesthesiology",
    },
    {
      category: "ENT Emergencies Made Easy",
      workshop: "Otorhinolaryngology",
    },
    {
      category: "Murder Mystery",
      workshop: "Forensic Medicine",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Full Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="Pre Conference Workshops Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[980px] px-4 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[26px] font-extrabold leading-tight text-black sm:text-[32px] md:text-[36px]">
            Pre-Conference Workshops (25 June 2026)
          </h2>

          <div className="mx-auto mt-4 h-[1.5px] w-full max-w-[620px] bg-[#4d56c9]" />
        </div>

        {/* Table */}
        <div className="mx-auto mt-8 overflow-hidden rounded-[18px] border border-[#d9ddf4] bg-white/95 shadow-[0_16px_42px_rgba(43,47,145,0.10)] backdrop-blur-sm">
          <table className="w-full table-fixed border-collapse text-left">
            <thead>
              <tr className="bg-[#2b2f91] text-white">
                <th className="w-[55%] border-r border-white/20 px-4 py-4 text-[15px] font-extrabold sm:w-[58%] sm:px-6 sm:py-5 sm:text-[16px]">
                  Category
                </th>

                <th className="w-[45%] px-4 py-4 text-[15px] font-extrabold sm:w-[42%] sm:px-6 sm:py-5 sm:text-center sm:text-[16px]">
                  Workshop
                </th>
              </tr>
            </thead>

            <tbody>
              {workshops.map((item, index) => (
                <tr
                  key={item.category}
                  className={`border-b border-[#d9ddf4] transition-all duration-300 last:border-b-0 hover:bg-[#eef0ff] ${
                    index % 2 === 0 ? "bg-white" : "bg-[#f7f8ff]"
                  }`}
                >
                  <td className="border-r border-[#d9ddf4] px-4 py-4 text-[13px] font-extrabold leading-[1.25] text-[#555555] sm:px-6 sm:py-5 sm:text-[15px]">
                    {item.category}
                  </td>

                  <td className="px-4 py-4 text-[13px] font-bold leading-[1.25] text-[#555555] sm:px-6 sm:py-5 sm:text-center sm:text-[15px]">
                    {item.workshop}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Register Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="https://forms.gle/xBKVaHc9b7UWS33C7"
            target="_blank"
            className="inline-flex min-w-[190px] items-center justify-center rounded-[12px] bg-[#2b2f91] px-8 py-3 text-[18px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1f2376] hover:shadow-[0_10px_24px_rgba(43,47,145,0.24)]"
          >
            Register
          </Link>
        </div>

        {/* Note */}
        <p className="mt-6 text-center text-[13px] font-semibold text-[#6a6a6a] sm:text-[14px]">
          Limited seats available. Early registration recommended.
        </p>
      </div>
    </section>
  );
}
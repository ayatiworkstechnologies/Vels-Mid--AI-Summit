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
    <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-[820px]">
          <h2 className="text-[28px] font-extrabold leading-tight text-black sm:text-[28px] md:text-[35px]">
            Pre-Conference Workshops (25 June 2026)
          </h2>

          <div className="mt-4 h-[1.5px] w-full bg-[#4d56c9]" />
        </div>

        {/* Table */}
        <div className="mx-auto mt-8 max-w-[540px] overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#2b2f91] text-white">
                <th className="px-3 py-2 text-[15px] font-extrabold sm:text-[16px]">
                  Category
                </th>
                <th className="px-3 py-2 text-[15px] font-extrabold sm:text-[16px]">
                  Workshop
                </th>
              </tr>
            </thead>

            <tbody>
              {workshops.map((item) => (
                <tr
                  key={item.category}
                  className="border-b border-[#d8d8d8]"
                >
                  <td className="px-3 py-[9px] text-[13px] font-bold leading-tight text-[#555555] sm:text-[14px]">
                    {item.category}
                  </td>
                  <td className="px-3 py-[9px] text-[13px] font-semibold leading-tight text-[#555555] sm:text-[14px]">
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
            href="#"
            className="inline-flex min-w-[190px] items-center justify-center bg-[#2b2f91] px-8 py-3 text-[18px] font-bold text-white transition-all duration-300 hover:bg-[#1f2376]"
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
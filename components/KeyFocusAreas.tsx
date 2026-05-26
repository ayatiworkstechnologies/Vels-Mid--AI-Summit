import Image from "next/image";

export default function KeyFocusAreas() {
  const focusAreas = [
    {
      title: "AI-driven diagnostics",
      icon: "/icons/focus-1.svg",
    },
    {
      title: "Digital health technologies",
      icon: "/icons/focus-2.svg",
    },
    {
      title: "Clinical decision support systems",
      icon: "/icons/focus-3.svg",
    },
    {
      title: "Data-driven healthcare innovation",
      icon: "/icons/focus-4.svg",
    },
    {
      title: "Future of intelligent healthcare systems",
      icon: "/icons/focus-5.svg",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14 ">
      {/* Full Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="Key Focus Areas Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="max-w-[680px]">
          <h2 className="text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[38px] lg:text-[40px]">
            Key focus areas include
          </h2>

          <div className="mt-4 h-[1.5px] w-full max-w-[570px] bg-[#4d56c9]" />
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 rounded-[12px] overflow-hidden border border-[#e1e1e1] bg-white/95 shadow-[0_12px_35px_rgba(43,47,145,0.08)] backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-5">
          {focusAreas.map((item, index) => (
            <div
              key={item.title}
              className={`group relative flex min-h-[165px] flex-col items-center justify-center border-b border-[#e1e1e1] px-5 py-8 text-center transition-all duration-300 hover:bg-[#2b2f91] sm:border-r lg:border-b-0
                ${index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
                ${index === 1 || index === 3 ? "sm:border-r-0 lg:border-r" : ""}
                ${index === 4 ? "border-b-0 sm:border-r-0 lg:border-r-0" : ""}
              `}
            >
              <div className="relative h-[32px] w-[32px] transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  sizes="32px"
                  className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>

              <p className="mt-7 max-w-[180px] text-[18px] font-normal leading-[1.15] text-[#333333] transition-colors duration-300 group-hover:text-white sm:text-[18px] lg:text-[14px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
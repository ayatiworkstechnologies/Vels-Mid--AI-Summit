export default function RunningText() {
  const items = [
    "7 Pre-conference hands-on workshops",
    "9 Scientific sessions",
    "Velan Oration Lecture",
    "Scientific paper presentation",
  ];

  return (
    <section className="w-full overflow-hidden bg-white py-4">
      <div className="relative flex overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee items-center gap-14 pr-14">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-[15px] font-bold text-[#2b2f91] md:text-[16px]"
            >
              <span className="h-[5px] w-[5px] bg-[#2b2f91]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex animate-marquee items-center gap-14 pr-14">
          {[...items, ...items].map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center gap-3 text-[15px] font-bold text-[#2b2f91] md:text-[16px]"
            >
              <span className="h-[5px] w-[5px] bg-[#2b2f91]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
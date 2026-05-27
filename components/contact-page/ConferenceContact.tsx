export default function ConferenceContact() {
  const contactDetails = [
    ["Conference Secretary", "Dr. Ramya M"],
    ["Mobile", "+91-9844963825"],
    ["Email", "medaisummit@velsmedicalcollege.com"],
    ["Website", "www.velsmedaicon.com"],
  ];

  return (
    <div className="rounded-[24px] border border-[#e2e5f5] bg-[#2b2f91] p-5 text-white shadow-[0_16px_42px_rgba(43,47,145,0.18)] sm:p-7">
      <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.26em] text-white">
        Conference Secretary
      </span>

      <h3 className="mt-5 text-[30px] font-extrabold leading-tight text-white sm:text-[36px]">
        Dr. Ramya M
      </h3>

      <p className="mt-3 max-w-[520px] text-[14px] leading-[1.7] text-white/80">
        For registration support, sponsorship queries, abstract submission
        support, and conference-related assistance, please contact the
        conference secretary.
      </p>

      <div className="mt-7 grid gap-3">
        {contactDetails.map(([label, value]) => (
          <div
            key={label}
            className="rounded-[16px] border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm"
          >
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/60">
              {label}
            </p>

            <p className="mt-1 break-words text-[14px] font-bold leading-[1.5] text-white">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href="tel:+919844963825"
          className="inline-flex rounded-[8px] bg-white px-5 py-3 text-[13px] font-extrabold text-[#2b2f91] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f2f3ff]"
        >
          Call Now
        </a>

        <a
          href="mailto:medaisummit@velsmedicalcollege.com"
          className="inline-flex rounded-[8px] border border-white/30 bg-white/10 px-5 py-3 text-[13px] font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#2b2f91]"
        >
          Email Us
        </a>
      </div>
    </div>
  );
}
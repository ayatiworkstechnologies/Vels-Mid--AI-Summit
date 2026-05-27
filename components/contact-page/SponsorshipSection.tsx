export default function SponsorshipSection() {
  const sponsorships = [
    { title: "Platinum Sponsor", price: "₹ 2 Lakhs" },
    { title: "Gold Sponsor", price: "₹ 1 Lakh" },
    { title: "Silver Sponsor", price: "₹ 75,000" },
    { title: "Exhibitor Stalls", price: "₹ 25,000" },
  ];

  return (
    <div className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 shadow-[0_16px_42px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-7">
      <h3 className="text-[24px] font-extrabold leading-tight text-black sm:text-[30px]">
        Sponsorship Opportunities
      </h3>

      <p className="mt-3 text-[14px] leading-[1.7] text-[#666666]">
        Detailed sponsorship packages are available upon request.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sponsorships.map((item) => (
          <div
            key={item.title}
            className="rounded-[18px] border border-[#dfe2f4] bg-[#f8f9ff] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2b2f91] hover:bg-white hover:shadow-[0_12px_28px_rgba(43,47,145,0.12)]"
          >
            <h4 className="text-[18px] font-extrabold text-[#2b2f91]">
              {item.title}
            </h4>

            <p className="mt-2 text-[22px] font-extrabold text-black">
              {item.price}
            </p>
          </div>
        ))}
      </div>

      <a
        href="mailto:medaisponsorship@velsmedicalcollege.com"
        className="mt-6 inline-flex rounded-[8px] bg-[#2b2f91] px-5 py-3 text-[13px] font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1f2376]"
      >
        Email Sponsorship Team
      </a>
    </div>
  );
}
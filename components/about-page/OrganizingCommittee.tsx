"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function OrganizingCommittee() {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const committees = [
    {
      label: "Chief Patron",
      members: [
        {
          name: "Dr. Ishari K Ganesh",
          designation: "Founder & Chancellor, VISTAS",
          image: "/images/committee/ishari-k-ganesh.jpg",
        },
      ],
    },
    {
      label: "Patron",
      members: [
        {
          name: "Dr. Arthi Ganesh",
          designation: "Pro-Chancellor (Admin), VISTAS",
          image: "/images/committee/arthi-ganesh.jpg",
        },
        {
          name: "Dr. Preetha Ganesh",
          designation: "Vice President - VELS Group of Institutions",
          image: "/images/committee/preetha-ganesh.jpg",
        },
        {
          name: "Dr. Jothi Murugan",
          designation: "Pro-Chancellor (P&D), VISTAS",
          image: "/images/committee/jothi-murugan.jpg",
        },
      ],
    },
    {
      label: "Co-Patrons",
      members: [
        {
          name: "Dr. T. Sasipraba",
          designation: "Vice Chancellor, VISTAS",
          image: "/images/committee/t-sasipraba.jpg",
        },
        {
          name: "Dr. Kumudha Lingaraj",
          designation: "Dean, VMCH",
          image: "/images/committee/kumudha-lingaraj.jpg",
        },
        {
          name: "Dr. Vimala",
          designation: "Medical Director, VMCH",
          image: "/images/committee/vimala.jpg",
        },
      ],
    },
    {
      label: "Organizing Chairperson",
      members: [
        {
          name: "Dr. Vijayashree R",
          designation: "Professor & Head, Pathology, VMCH",
          image: "/images/committee/vijayashree-r.jpg",
        },
      ],
    },
    {
      label: "Organizing Co-Chairperson",
      members: [
        {
          name: "Dr. Prince J Samuel",
          designation: "Vice Principal (Academics), VMCH",
          image: "/images/committee/prince-j-samuel.jpg",
        },
      ],
    },
    {
      label: "Organising Secretaries",
      members: [
        {
          name: "Dr. D. Muthukumar",
          designation: "Professor, General Medicine, VMCH",
          image: "/images/committee/d-muthukumar.jpg",
        },
        {
          name: "Dr. Sudakshina",
          designation: "Prof. & Head, Anatomy, VMCH",
          image: "/images/committee/sudakshina.jpg",
        },
        {
          name: "Dr. Ramya M",
          designation: "Assoc Prof, Pathology, VMCH",
          image: "/images/committee/ramya-m.jpg",
        },
      ],
    },
    {
      label: "Scientific Secretary",
      members: [
        {
          name: "Dr. Anil Reddy",
          designation: "Assoc Prof, Pathology, VMCH",
          image: "/images/committee/anil-reddy.jpg",
        },
      ],
    },
    {
      label: "Treasurer",
      members: [
        {
          name: "Dr. Maignana Kumar",
          designation: "Vice Principal (Accreditations), VMCH",
          image: "/images/committee/maignana-kumar.jpg",
        },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);

  const activeCommittee = committees[activeIndex];

  const changeTab = (index: number) => {
    setActiveIndex(index);
    setActiveMemberIndex(0);

    setTimeout(() => {
      tabRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }, 50);
  };

  const nextTab = () => {
    const next = (activeIndex + 1) % committees.length;
    changeTab(next);
  };

  const prevTab = () => {
    const prev = (activeIndex - 1 + committees.length) % committees.length;
    changeTab(prev);
  };

  useEffect(() => {
    if (activeCommittee.members.length <= 1) return;

    const timer = setInterval(() => {
      setActiveMemberIndex((prev) => (prev + 1) % activeCommittee.members.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [activeCommittee.members.length, activeIndex]);

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16">
      {/* Full Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="Organizing Committee Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

    

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[40px]">
            Organizing Committee
          </h2>

          <div className="mx-auto mt-4 h-[1.5px] w-full max-w-[460px] bg-[#4d56c9]" />
        </div>

        {/* Tabs */}
        <div className="mt-9 flex items-center gap-3">
          <button
            type="button"
            onClick={prevTab}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2b2f91] bg-white text-[30px] leading-none text-[#2b2f91] transition-all duration-300 hover:bg-[#2b2f91] hover:text-white"
            aria-label="Previous committee"
          >
            ‹
          </button>

          <div className="scrollbar-hide flex w-full gap-4 overflow-x-auto px-1 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {committees.map((item, index) => {
              const active = activeIndex === index;

              return (
                <button
                  key={item.label}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  onClick={() => changeTab(index)}
                  className={`relative shrink-0 rounded-[12px] cursor-pointer px-5 py-2 text-[13px] font-bold transition-all duration-300 sm:text-[14px] ${
                    active
                      ? "bg-[#2b2f91] text-white "
                      : "bg-transparent text-[#2b2f91] hover:bg-[#eef0ff]"
                  }`}
                >
                  {item.label}

                  {/* <span
                    className={`absolute -bottom-[7px] left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[#2b2f91] transition-all duration-300 ${
                      active ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  /> */}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={nextTab}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2b2f91] bg-white text-[30px] leading-none text-[#2b2f91] transition-all duration-300 hover:bg-[#2b2f91] hover:text-white"
            aria-label="Next committee"
          >
            ›
          </button>
        </div>

        {/* Active Category Title */}
        <div className="mt-10 text-center">
          <h3 className="text-[22px] font-extrabold text-[#2b2f91] sm:text-[24px]">
            {activeCommittee.label}
          </h3>
        </div>

        {/* Mobile Auto Carousel */}
        <div className="mx-auto mt-8 block max-w-[320px] overflow-hidden sm:hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${activeMemberIndex * 100}%)`,
            }}
          >
            {activeCommittee.members.map((member) => (
              <div key={member.name} className="min-w-full px-1">
                <article className="overflow-hidden rounded-[8px] bg-white shadow-[0_14px_35px_rgba(43,47,145,0.14)]">
                  {/* Image */}
                  <div className="relative h-[205px] w-full overflow-hidden bg-[#f4f4f4]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="320px"
                      className="object-contain object-top"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-h-[120px] px-5 py-5">
                    <h4 className="text-[18px] font-extrabold leading-[1.15] text-[#2b2f91]">
                      {member.name}
                    </h4>

                    <p className="mt-4 text-[13px] font-semibold leading-[1.3] text-[#666666]">
                      {member.designation}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Bottom Indicators */}
          {activeCommittee.members.length > 1 && (
            <div className="mt-6 flex items-center justify-center gap-2">
              {activeCommittee.members.map((member, index) => (
                <button
                  key={member.name}
                  type="button"
                  onClick={() => setActiveMemberIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeMemberIndex === index
                      ? "w-8 bg-[#2b2f91]"
                      : "w-2.5 bg-[#2b2f91]/30"
                  }`}
                  aria-label={`Go to ${member.name}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Tablet/Desktop Grid */}
        <div
          className={`mx-auto mt-8 hidden max-w-[820px] grid-cols-1 gap-7 sm:grid ${
            activeCommittee.members.length === 1
              ? "md:grid-cols-1"
              : activeCommittee.members.length === 2
              ? "md:grid-cols-2"
              : "md:grid-cols-3"
          }`}
        >
          {activeCommittee.members.map((member) => (
            <article
              key={member.name}
              className="group mx-auto w-full max-w-[230px] overflow-hidden rounded-[8px] bg-white shadow-[0_10px_28px_rgba(43,47,145,0.10)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(43,47,145,0.18)]"
            >
              {/* Image */}
              <div className="relative h-[165px] w-full overflow-hidden bg-[#f4f4f4]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="230px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="min-h-[115px] px-4 py-4">
                <h4 className="text-[16px] font-extrabold leading-[1.15] text-[#2b2f91]">
                  {member.name}
                </h4>

                <p className="mt-4 text-[12px] font-semibold leading-[1.25] text-[#666666]">
                  {member.designation}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
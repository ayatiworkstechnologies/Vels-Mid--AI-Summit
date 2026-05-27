"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
      setActiveMemberIndex(
        (prev) => (prev + 1) % activeCommittee.members.length
      );
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
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-[760px] text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[40px]"
          >
            Organizing Committee
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2 }}
            style={{ transformOrigin: "center" }}
            className="mx-auto mt-4 h-[1.5px] w-full max-w-[460px] bg-[#4d56c9]"
          />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-9 flex items-center gap-3"
        >
          <motion.button
            type="button"
            onClick={prevTab}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.2 }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2b2f91] bg-white text-[30px] leading-none text-[#2b2f91] transition-all duration-300 hover:bg-[#2b2f91] hover:text-white"
            aria-label="Previous committee"
          >
            ‹
          </motion.button>

          <div className="scrollbar-hide flex w-full gap-4 overflow-x-auto px-1 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {committees.map((item, index) => {
              const active = activeIndex === index;

              return (
                <motion.button
                  key={item.label}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  onClick={() => changeTab(index)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative shrink-0 cursor-pointer rounded-[12px] px-5 py-2 text-[13px] font-bold transition-all duration-300 sm:text-[14px] ${
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
                </motion.button>
              );
            })}
          </div>

          <motion.button
            type="button"
            onClick={nextTab}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.2 }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2b2f91] bg-white text-[30px] leading-none text-[#2b2f91] transition-all duration-300 hover:bg-[#2b2f91] hover:text-white"
            aria-label="Next committee"
          >
            ›
          </motion.button>
        </motion.div>

        {/* Active Category Title */}
        <motion.div
          key={activeCommittee.label}
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.42 }}
          className="mt-10 text-center"
        >
          <h3 className="text-[22px] font-extrabold text-[#2b2f91] sm:text-[24px]">
            {activeCommittee.label}
          </h3>
        </motion.div>

        {/* Mobile Auto Carousel */}
        <motion.div
          key={`mobile-${activeIndex}`}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mt-8 block max-w-[320px] overflow-hidden sm:hidden"
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${activeMemberIndex * 100}%)`,
            }}
          >
            {activeCommittee.members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? 28 : -28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.42, delay: index * 0.08 }}
                className="min-w-full px-1"
              >
                <article className="overflow-hidden rounded-[8px] bg-white ">
                  {/* Image */}
                  {/* <div className="relative h-[205px] w-full overflow-hidden bg-[#f4f4f4]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="320px"
                      className="object-contain object-top"
                    />
                  </div> */}

                  {/* Content */}
                  <div className="min-h-[120px] px-5 py-5">
                    <motion.h4
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.38, delay: 0.12 }}
                      className="text-[18px] font-extrabold leading-[1.15] text-[#2b2f91]"
                    >
                      {member.name}
                    </motion.h4>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.38, delay: 0.2 }}
                      className="mt-4 text-[13px] font-semibold leading-[1.3] text-[#666666]"
                    >
                      {member.designation}
                    </motion.p>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>

          {/* Bottom Indicators */}
          {activeCommittee.members.length > 1 && (
            <div className="mt-6 flex items-center justify-center gap-2">
              {activeCommittee.members.map((member, index) => (
                <motion.button
                  key={member.name}
                  type="button"
                  onClick={() => setActiveMemberIndex(index)}
                  whileTap={{ scale: 0.82 }}
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
        </motion.div>

        {/* Tablet/Desktop Grid */}
        <motion.div
          key={`desktop-${activeIndex}`}
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className={`mx-auto mt-8 hidden max-w-[820px] grid-cols-1 gap-7 sm:grid ${
            activeCommittee.members.length === 1
              ? "md:grid-cols-1"
              : activeCommittee.members.length === 2
              ? "md:grid-cols-2"
              : "md:grid-cols-3"
          }`}
        >
          {activeCommittee.members.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{
                opacity: 0,
                y: 35,
                rotate: index % 2 === 0 ? -1.2 : 1.2,
              }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.48, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group mx-auto w-full max-w-[230px] overflow-hidden rounded-[8px] bg-white shadow-[0_10px_28px_rgba(43,47,145,0.10)] transition-all duration-300 hover:shadow-[0_18px_40px_rgba(43,47,145,0.18)]"
            >
              {/* Image */}
              {/* <div className="relative h-[165px] w-full overflow-hidden bg-[#f4f4f4]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="230px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div> */}

              {/* Content */}
              <div className="min-h-[115px] px-4 py-4">
                <motion.h4
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.12 + index * 0.08 }}
                  className="text-[16px] font-extrabold leading-[1.15] text-[#2b2f91]"
                >
                  {member.name}
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.2 + index * 0.08 }}
                  className="mt-4 text-[12px] font-semibold leading-[1.25] text-[#666666]"
                >
                  {member.designation}
                </motion.p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
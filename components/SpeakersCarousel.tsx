"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SpeakersCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const speakers = [
    {
      title: "Dr. Waqar M. Naqvi",
      subtitle: "Doha, Qatar, International Speakers",
      category: "International Speakers",
      image: "/images/speakers/speaker-1.jpg",
      content:
        "Founder & Research Lead, AD Vivum Education & Research, Doha; International FAIMER Fellow; Adjunct Professor at MAHE and SIMATS.",
    },
    {
      title: "Dr. Priyah Prathaban",
      subtitle: "Malaysia, International Speakers",
      category: "International Speakers",
      image: "/images/speakers/speaker-2.jpg",
      content:
        "Associate Professor, Faculty of Medicine, AIMST University; Visiting/Locum Physician, Klinik Dr. Silan & Pantai Hospital Amanjaya.",
    },
    {
      title: "Dr. C. N. Srinivas",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-3.jpg",
      content:
        "Chief Advisor (AI, ML & Digital Pathology), Sukraa Software Solutions; Founder, Prayoga Academy; Former Director, Laboratory Medicine.",
    },
    {
      title: "Dr. Kalavathy Moses S.",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-4.jpg",
      content:
        "Senior Consultant & Head, Critical Care, SIMS Hospital; Secretary, ISCCM Chennai; President, IAPEN India, Chennai.",
    },
    {
      title: "Dr. S. Rajendiran",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-5.jpg",
      content:
        "Professor of Practice & Adjunct Faculty, SDUAHER, Kolar, India; Visiting Professor of Pathology, SPMCH&RI, Hosur, India; Visiting Professor of Pathology, SRIHER (DU), Chennai, India.",
    },
    {
      title: "Dr. D. C. Mathangi",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-6.jpg",
      content:
        "CCA Certified Life Coach & Adolescent Coach, Qualified Yoga Instructor, Fellowship in Natural Lifestyle Medicine; Professor & Head, Department of Mind-Body Medicine & Lifestyle Sciences, SRIHER; Coordinator, IQAC.",
    },
    {
      title: "Dr. S. Asokan",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-7.jpg",
      content: "CEO, GEM Hospital, Chennai.",
    },
    {
      title: "Dr. Sudha Jasmine Rajan",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-8.jpg",
      content:
        "Professor, Department of General Medicine, Christian Medical College (CMC), Vellore.",
    },
    {
      title: "Dr. T.V. Geetha",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-9.jpg",
      content:
        "Senior Professor, Department of CSE, Anna University; Director, Academic Courses (overseeing 540 colleges); Former Dean, College of Engineering, Guindy.",
    },
    {
      title: "Dr. Madhuvanthi Mohan",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-10.jpg",
      content:
        "Consultant, Rajan Eye Care; Cornea Fellow, Sankara Nethralaya.",
    },
    {
      title: "Mr. Venkata Phanidhar Nelluri",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-11.jpg",
      content: "",
    },
  ];

  const toggleCard = (index: number) => {
    setIsPaused(true);
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const getScrollAmount = () => {
    const slider = scrollRef.current;
    if (!slider) return 300;

    const card = slider.querySelector("article");
    if (!card) return 300;

    return card.getBoundingClientRect().width + 24;
  };

  const scrollNext = () => {
    const slider = scrollRef.current;
    if (!slider) return;

    const scrollAmount = getScrollAmount();
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    setOpenIndex(null);

    if (slider.scrollLeft >= maxScrollLeft - 20) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    const slider = scrollRef.current;
    if (!slider) return;

    const scrollAmount = getScrollAmount();
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    setOpenIndex(null);

    if (slider.scrollLeft <= 20) {
      slider.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    setIsPaused(true);
    scrollNext();
  };

  const handlePrev = () => {
    setIsPaused(true);
    scrollPrev();
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      scrollNext();
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="Speakers Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative z-10 mx-auto max-w-[1180px] overflow-hidden px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="max-w-[680px]"
        >
          <h2 className="text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[38px] lg:text-[40px]">
            Speakers
          </h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
            style={{ transformOrigin: "left" }}
            className="mt-4 h-[1.5px] w-full max-w-[250px] bg-[#4d56c9]"
          />
        </motion.div>

        {/* Carousel */}
        <div
          className="mt-12 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            ref={scrollRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="flex gap-6 overflow-x-auto scroll-smooth px-1 py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {speakers.map((speaker, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={speaker.title}
                  className="group shrink-0 basis-[86%] overflow-hidden rounded-[14px] bg-white/95 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_34px_rgba(43,47,145,0.18)] sm:basis-[45%] md:basis-[30%] lg:basis-[calc((100%-72px)/4)]"
                >
                  {/* Image */}
                  <div className="relative h-[260px] w-full overflow-hidden bg-[#f5f5f5] sm:h-[230px] md:h-[210px] lg:h-[210px]">
                    <Image
                      src={speaker.image}
                      alt={speaker.title}
                      fill
                      sizes="(max-width: 640px) 86vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="px-5 py-5 transition-colors duration-300 group-hover:bg-[#f7f8ff]">
                    <h3 className="text-[18px] font-extrabold leading-[1.15] text-[#2b2f91]">
                      {speaker.title}
                    </h3>

                    <p className="mt-3 text-[13px] font-bold leading-[1.35] text-[#666666]">
                      {speaker.subtitle}
                    </p>

                    <div className="my-4 h-[1px] w-full bg-[#e2e5f5]" />

                    {/* Preview / Full Content */}
                    <p
                      className={`text-[13px] font-medium leading-[1.6] text-[#555555] transition-all duration-300 ${
                        isOpen
                          ? ""
                          : "overflow-hidden text-ellipsis whitespace-nowrap"
                      }`}
                    >
                      {speaker.content}
                    </p>

                    {/* Read More Button */}
                    <button
                      type="button"
                      onClick={() => toggleCard(index)}
                      className="mt-4 inline-flex items-center rounded-full border border-[#2b2f91]/20 px-4 py-2 text-[12px] font-extrabold text-[#2b2f91] transition-all duration-300 hover:bg-[#2b2f91] hover:text-white"
                    >
                      {isOpen ? "Read Less" : "Read More"}
                      <span className="ml-2">{isOpen ? "−" : "+"}</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </motion.div>

          {/* Bottom Buttons */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2b2f91] bg-white text-[#2b2f91] transition-all duration-300 hover:bg-[#2b2f91] hover:text-white"
              aria-label="Previous speakers"
            >
              <span className="-mt-[3px] text-[34px] font-light leading-none">
                ‹
              </span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2b2f91] bg-white text-[#2b2f91] transition-all duration-300 hover:bg-[#2b2f91] hover:text-white"
              aria-label="Next speakers"
            >
              <span className="-mt-[3px] text-[34px] font-light leading-none">
                ›
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function SpeakersCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

const speakers = [
  {
    title: "Dr. Waqar M. Naqvi",
    subtitle: "International Speakers",
    image: "/images/speakers/speaker-1.jpg",
  },
  {
    title: "Dr. Priyah Prathaban",
    subtitle: "International Speakers",
    image: "/images/speakers/speaker-2.jpg",
  },
  {
    title: "Dr. C. N. Srinivas",
    subtitle: "International Speakers",
    image: "/images/speakers/speaker-3.jpg",
  },
  {
    title: "Dr. Kalavathy Moses ",
    subtitle: "International Speakers",
    image: "/images/speakers/speaker-4.jpg",
  },
  {
    title: "Dr. S. Rajendiran",
    subtitle: "International Speakers",
    image: "/images/speakers/speaker-5.jpg",
  },
  {
    title: "Dr. D. C. Mathangi",
    subtitle: "International Speakers",
    image: "/images/speakers/speaker-6.jpg",
  },
  {
    title: "Dr. S. Asokan",
    subtitle: "International Speakers",
    image: "/images/speakers/speaker-7.jpg",
  },
  {
    title: "Dr. Sudha Jasmine Rajan",
    subtitle: "International Speakers",
    image: "/images/speakers/speaker-8.jpg",
  },
  {
    title: "Dr. T.V. Geetha",
    subtitle: "International Speakers",
    image: "/images/speakers/speaker-9.jpg",
  },
  {
    title: "Dr. Madhuvanthi Mohan",
    subtitle: "International Speakers",
    image: "/images/speakers/speaker-10.jpg",
  },
  {
    title: "Mr. Venkata Phanidhar Nelluri",
    subtitle: "International Speakers",
    image: "/images/speakers/speaker-11.jpg",
  },
];
  const getCardWidth = () => {
    const slider = scrollRef.current;
    if (!slider) return 260;

    const card = slider.querySelector("article");
    if (!card) return 260;

    return card.clientWidth + 24;
  };

  const scrollNext = () => {
    const slider = scrollRef.current;
    if (!slider) return;

    const cardWidth = getCardWidth();
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft >= maxScroll - 10) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    const slider = scrollRef.current;
    if (!slider) return;

    const cardWidth = getCardWidth();

    if (slider.scrollLeft <= 10) {
      slider.scrollTo({
        left: slider.scrollWidth - slider.clientWidth,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
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
    }, 2800);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-[1180px] overflow-hidden px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="max-w-[680px]">
          <h2 className="text-[30px] font-extrabold leading-tight text-black sm:text-[36px] md:text-[38px] lg:text-[40px]">
            Speakers
          </h2>

          <div className="mt-4 h-[1.5px] w-full max-w-[250px] bg-[#4d56c9]" />
        </div>

        {/* Carousel */}
        <div
          className="mt-12 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-1 py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {speakers.map((speaker, index) => (
              <article
                key={index}
                className="group shrink-0 basis-[82%] overflow-hidden rounded-[5px] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(0,0,0,0.16)] sm:basis-[45%] md:basis-[30%] lg:basis-[calc((100%-96px)/5)]"
              >
                {/* Image */}
                <div className="relative h-[150px] w-full overflow-hidden bg-black sm:h-[165px] md:h-[180px] lg:h-[195px]">
                  <Image
                    src={speaker.image}
                    alt={speaker.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="min-h-[115px] px-4 py-4 transition-colors duration-300 group-hover:bg-[#f7f8ff]">
                  <h3 className="text-[17px] font-extrabold leading-[1.05] text-[#2b2f91]">
                    {speaker.title}
                  </h3>

                  <p className="mt-4 text-[13px] font-medium leading-[1.1] text-[#555555]">
                    {speaker.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Center Buttons */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2b2f91] bg-white text-[#2b2f91] shadow-[0_8px_22px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-[#2b2f91] hover:text-white"
              aria-label="Previous speakers"
            >
              <span className="-mt-[3px] text-[34px] font-light leading-none">
                ‹
              </span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2b2f91] bg-white text-[#2b2f91] shadow-[0_8px_22px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-[#2b2f91] hover:text-white"
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
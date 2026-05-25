"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function SpeakersCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const speakers = [
    {
      title: "Dr. Waqar M. Naqvi",
      subtitle: "Doha, Qatar , International Speakers",
      category: "International Speakers",
      image: "/images/speakers/speaker-1.jpg",
    },
    {
      title: "Dr. Priyah Prathaban",
      subtitle: "Malaysia , International Speakers",
      category: "International Speakers",
      image: "/images/speakers/speaker-2.jpg",
    },
    {
      title: "Dr. C. N. Srinivas",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-3.jpg",
    },
    {
      title: "Dr. Kalavathy Moses S.",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-4.jpg",
    },
    {
      title: "Dr. S. Rajendiran",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-5.jpg",
    },
    {
      title: "Dr. D. C. Mathangi",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-6.jpg",
    },
    {
      title: "Dr. S. Asokan",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-7.jpg",
    },
    {
      title: "Dr. Sudha Jasmine Rajan",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-8.jpg",
    },
    {
      title: "Dr. T.V. Geetha",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-9.jpg",
    },
    {
      title: "Dr. Madhuvanthi Mohan",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-10.jpg",
    },
    {
      title: "Mr. Venkata Phanidhar Nelluri",
      subtitle: "National Speakers",
      category: "National Speakers",
      image: "/images/speakers/speaker-11.jpg",
    },
  ];

  const getCardWidth = () => {
    const slider = scrollRef.current;
    if (!slider) return 280;

    const card = slider.querySelector("article");
    if (!card) return 280;

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
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      {/* Full Background Image */}
      <Image
        src="/images/highlights-bg.jpg"
        alt="Speakers Background"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />


      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1180px] overflow-hidden px-5 sm:px-8 lg:px-10">
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
                className="group shrink-0 basis-[86%] overflow-hidden rounded-[10px] bg-white/95  backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_34px_rgba(43,47,145,0.18)] sm:basis-[45%] md:basis-[30%] lg:basis-[calc((100%-96px)/5)]"
              >
                {/* Image */}
                <div className="relative h-[260px] w-full overflow-hidden bg-[#f5f5f5] sm:h-[230px] md:h-[210px] lg:h-[195px]">
                  <Image
                    src={speaker.image}
                    alt={speaker.title}
                    fill
                    sizes="(max-width: 640px) 86vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 220px"
                    className="object-contain object-center transition-transform duration-700 group-hover:scale-105 sm:object-cover sm:object-top"
                  />
                </div>

                {/* Content */}
                <div className="min-h-[125px] px-4 py-4 transition-colors duration-300 group-hover:bg-[#f7f8ff]">
                  <h3 className="text-[17px] font-extrabold leading-[1.15] text-[#2b2f91]">
                    {speaker.title}
                  </h3>

                  <p className="mt-3 text-[13px] font-medium leading-[1.2] text-[#555555]">
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
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2b2f91] bg-white text-[#2b2f91]  transition-all duration-300 hover:bg-[#2b2f91] hover:text-white "
              aria-label="Previous speakers"
            >
              <span className="-mt-[3px] text-[34px] font-light leading-none">
                ‹
              </span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2b2f91] bg-white text-[#2b2f91]  transition-all duration-300 hover:bg-[#2b2f91] hover:text-white "
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
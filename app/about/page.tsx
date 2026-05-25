import AboutConference from "@/components/AboutConference";
import SpeakersCarousel from "@/components/SpeakersCarousel";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* About Banner */}
      <section className="relative h-[420px] w-full overflow-hidden sm:h-[520px] md:h-[540px]">
              <Image
                src="/images/about-banner.jpg"
                alt="VELS Banner"
                fill
                priority
                className="object-cover object-center"
              />
     </section>
     {/* {About The Conference} */}
       <AboutConference />

    {/* {Speakers carousel} */}
       <SpeakersCarousel />

    </main>
  );
}
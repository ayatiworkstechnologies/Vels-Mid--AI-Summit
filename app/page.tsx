import AboutConference from "@/components/AboutConference";
import AboutVels from "@/components/AboutVels";
import ContactSection from "@/components/ContactSection";
import GlimpseCarousel from "@/components/GlimpseCarousel";
import KeyFocusAreas from "@/components/KeyFocusAreas";
import PreConferenceWorkshops from "@/components/PreConferenceWorkshops";
import RunningText from "@/components/RunningText";
import SpeakersCarousel from "@/components/SpeakersCarousel";
import WelcomeMessage from "@/components/WelcomeMessage";
import Image from "next/image";

export default function Home() {
  

  return (
    <main>
      {/* Banner Section */}
      <section className="relative h-[420px] w-full overflow-hidden sm:h-[520px] md:h-[540px]">
        <Image
          src="/images/banner.jpg"
          alt="VELS Banner"
          fill
          priority
          className="object-cover object-center"
        />
      </section>
        {/* {Running Test Section} */}
          <RunningText />
       {/* {welcome Message Section} */}
       <WelcomeMessage />
       {/* {About Section} */}
       <AboutVels />
       {/* {glimpse carousel section} */}
       <GlimpseCarousel />
       {/* {About The Conference section} */}
       <AboutConference />
       {/* {Key focus areas include} */}
       <KeyFocusAreas />
       {/* {Pre-Conference Workshops} */}
       <PreConferenceWorkshops />
       {/* {speaker Carousel section} */}
       <SpeakersCarousel />
       {/* {contact section} */}
       <ContactSection />
    </main>
  );
}
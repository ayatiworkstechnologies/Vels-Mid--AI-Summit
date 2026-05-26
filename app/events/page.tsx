import RegistrationDetails from "@/components/event-page/RegistrationDetails";
import PreConferenceWorkshops from "@/components/PreConferenceWorkshops";
import ScientificProgram from "@/components/event-page/ScientificProgram";
import Image from "next/image";
import CallForAbstracts from "@/components/event-page/CallForAbstracts";

export default function EventsPage() {
  return (
    <main>
      {/* Events Banner */}
      <section className="relative h-[420px] w-full overflow-hidden sm:h-[520px] md:h-[540px]">
        <Image
          src="/images/about-banner.jpg"
          alt="VELS Events Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>
      {/* {Pre Conference Workshops} */}
      <PreConferenceWorkshops />
      {/* {Scientific Program} */} 
      <ScientificProgram />
      {/* {Registration Details} */}
      <RegistrationDetails />
      {/* {Call For Abstracts} */}
      <CallForAbstracts />
      
    </main>
  );
}
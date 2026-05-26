import AboutVistas from "@/components/about-page/AboutVistas-Tech";
import AboutVmch from "@/components/about-page/AboutVmch";
import OrganizingCommittee from "@/components/about-page/OrganizingCommittee";
import AboutConference from "@/components/AboutConference";
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
       {/* {About Vistas Tech} */}
       <AboutVistas />
       {/* {About Vels Medical College and Hospital} */}
       <AboutVmch />
       {/* {Organizing Committee} */}
       <OrganizingCommittee />


    </main>
  );
}
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative h-[360px] w-full overflow-hidden sm:h-[460px] md:h-[560px] lg:h-[620px]">
      <Image
        src="/images/banner.jpg"
        alt="VELS Banner"
        fill
        priority
        className="object-cover object-center"
      />
    </section>
  );
}
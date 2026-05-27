import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Locations", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-[860px] px-5 pb-5 pt-10 sm:px-6 md:pt-12">
        {/* Footer Menu */}
        <nav className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 sm:gap-x-20 md:gap-x-28">
          {footerLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[14px] font-medium text-[#2b2f91] transition-colors duration-300 hover:text-[#1d216f]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="mt-6 h-px w-full bg-[#e5e5e5]" />

        {/* Copyright */}
        <p className="mt-3 text-center text-[12px] font-normal text-[#3d46a0] sm:text-[13px]">
          Copyright ©2026 Vels - All right reserved | Designed &amp; Developed by{" "}
          <a
            href="https://www.ayatiworks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#2b2f91] transition-colors duration-300 hover:text-[#ff7a00]"
          >
            Ayatiworks
          </a>
        </p>
      </div>
    </footer>
  );
}
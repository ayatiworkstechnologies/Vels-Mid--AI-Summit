"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-[64px] max-w-[1180px] items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/vels-logo.svg"
            alt="VELS Medical College & Hospital"
            width={255}
            height={58}
            priority
            className="h-auto w-[190px] sm:w-[230px] lg:w-[275px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-[72px] lg:flex">
          {navLinks.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-[15px] font-medium leading-none transition-colors duration-300 ${
                  active
                    ? "font-bold text-[#2b2f91]"
                    : "text-[#111111] hover:text-[#2b2f91]"
                }`}
              >
                {item.name}

                {/* Active Indicator */}
                <span
                  className={`absolute -bottom-[10px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#2b2f91] transition-all duration-300 ${
                    active ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile + Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 bg-white text-black transition-all duration-300 hover:border-[#2b2f91] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-6 w-6">
            <span
              className={`absolute left-1/2 top-[6px] h-[2.5px] w-6 -translate-x-1/2 rounded-full bg-black transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-1/2 top-1/2 h-[2.5px] w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute left-1/2 bottom-[6px] h-[2.5px] w-6 -translate-x-1/2 rounded-full bg-black transition-all duration-300 ${
                open ? "bottom-auto top-1/2 -translate-y-1/2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile + Tablet Navigation */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          open ? "max-h-[320px] border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-3">
          {navLinks.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`relative border-b border-gray-100 py-4 text-[15px] font-medium transition-colors duration-300 ${
                  active
                    ? "font-bold text-[#2b2f91]"
                    : "text-black hover:text-[#2b2f91]"
                }`}
              >
                <span className="flex items-center justify-between">
                  {item.name}

                  {active && (
                    <span className="h-[7px] w-[7px] rounded-full bg-[#2b2f91]" />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
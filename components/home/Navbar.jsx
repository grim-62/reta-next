"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "Practice", href: "#practice" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 12) {
        setIsVisible(true);
      } else {
        setIsVisible(currentScrollY < previousScrollY);
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-navbar ${isVisible ? "is-visible" : "is-hidden"}`}>
      <a className="site-navbar-logo" href="/" aria-label="Revenue Edge home">
        <Image
          src="/logoSvg.svg"
          alt="Revenue Edge"
          width={123}
          height={36}
          priority
        />
      </a>

      <nav className="site-navbar-links" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="site-navbar-action" href="mailto:hello@revenueedge.com.au">
        Start a conversation
      </a>
    </header>
  );
}
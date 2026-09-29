"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Individual tax", ref: "tax-01" },
  { label: "Business tax & BAS", ref: "tax-02" },
  { label: "Accounting & bookkeeping", ref: "acc-01" },
  { label: "Business advisory", ref: "adv-01" },
  { label: "Property & investment", ref: "inv-01" },
  { label: "SMSF & superannuation", ref: "sup-01" },
  { label: "Business structures & startup", ref: "str-01" },
  { label: "Corporate compliance & ASIC", ref: "com-01" },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimerRef = useRef(null);

  const openServices = () => {
    window.clearTimeout(closeTimerRef.current);
    setServicesOpen(true);
  };

  const scheduleServicesClose = () => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setServicesOpen(false);
    }, 700);
  };

  useEffect(
    () => () => window.clearTimeout(closeTimerRef.current),
    [],
  );

  return (
    <>
      <Link
        href="/"
        className="site-logo-link"
        aria-label="Revenue Edge home"
      >
        <Image
          className="text-white"
          src="/logoSvg.svg"
          alt="Revenue Edge"
          width={150}
          height={36}
          priority
        />
      </Link>
      <div className="navbar-shell">
        <header className="site-navbar">
          <div />

          <nav className="site-navbar-links" aria-label="Primary navigation">
            <div
              className="site-nav-services"
              onPointerEnter={openServices}
              onPointerLeave={scheduleServicesClose}
              onFocus={openServices}
            >
              <Link href="/services" className="site-navbar-link text-3xl">
                Services
              </Link>
            </div>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="site-navbar-link text-3xl"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="mailto:hello@revenueedge.com.au"
            className="site-navbar-action border"
          >
            Start a conversation
          </Link>
        </header>

        <div
          className={`services-dropdown shadow-5xl shadow-black ${servicesOpen ? "is-open" : ""}`}
          role="group"
          aria-label="Services"
          onPointerEnter={openServices}
          onPointerLeave={scheduleServicesClose}
          onFocus={openServices}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              scheduleServicesClose();
            }
          }}
        >
          <p className="services-dropdown-heading">Our services</p>
          <div className="services-dropdown-grid">
            {serviceLinks.map((service) => (
              <Link key={service.ref} href={`/#service-${service.ref}`}>
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

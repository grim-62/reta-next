"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    index: "01",
    title: "Individual tax",
    ref: "tax-01",
    summary:
      "Personal returns, multi-year catch-ups and planning that makes sure every deduction you're entitled to actually gets claimed.",
    items: [
      "Foreign Tax",
      "Business Tax",
      "Individual Tax",
      "Tax Returns",
      "Tax Management",
      "Tax Planning",
      "Tax Minimisation",
      "Tax Compliance",
      "IT Tax Management",
    ],
  },
  {
    index: "02",
    title: "Business tax & BAS",
    ref: "tax-02",
    summary:
      "BAS, payroll and year-round tax planning so your business stays compliant and cash flow stays predictable.",
    items: [
      "Business Tax",
      "Tax Returns",
      "Tax Planning",
      "Tax Compliance",
      "BAS Accounting",
    ],
  },
  {
    index: "03",
    title: "Accounting & bookkeeping",
    ref: "acc-01",
    summary:
      "Xero, QuickBooks and MYOB set up and maintained properly, so your books are always ready for the next decision.",
    items: [
      "Migration Agent bookkeeping",
      "Not for Profit Accounting",
      "Business Start-up Accounting",
      "Property Accounting",
      "BAS Accounting",
      "Xero Accounting",
      "QuickBooks Accounting",
      "MYOB Accounting",
      "Foreign-owned Business Accounting",
      "Cryptocurrency Accounting",
    ],
  },
  {
    index: "04",
    title: "Business advisory",
    ref: "adv-01",
    summary:
      "Structuring, funding and succession planning so the big decisions get easier, not just cheaper to file.",
    items: [
      "Business Structures",
      "Business Planning",
      "Business Coaching",
      "Business Funding",
      "Succession & Exit Planning",
      "Business Continuity Planning",
      "Selling A Business",
    ],
  },
  {
    index: "05",
    title: "Property & investment",
    ref: "inv-01",
    summary:
      "Negative gearing, capital gains and depreciation schedules handled properly from the first purchase to the eventual sale.",
    items: ["Property Accounting", "Tax Planning", "Tax Minimisation"],
  },
  {
    index: "06",
    title: "SMSF & superannuation",
    ref: "sup-01",
    summary:
      "Self-managed super fund setup, annual compliance, reporting, and audit coordination for confident wealth management.",
    items: ["Tax Management", "Tax Compliance"],
  },
  {
    index: "07",
    title: "Business structures & startup",
    ref: "str-01",
    summary:
      "Sole trader, partnership, company, or trust: we help you pick the right structure for asset protection and tax efficiency.",
    items: [
      "Business Structures",
      "Business Start-up Accounting",
      "Business Planning",
      "Business Coaching",
    ],
  },
  {
    index: "08",
    title: "Corporate compliance & ASIC",
    ref: "com-01",
    summary:
      "Company registrations, annual reviews, share transfers, and ASIC filings managed smoothly so you never miss a deadline.",
    items: [
      "Business Name Change",
      "Business Address Update",
      "Entity Closure",
      "Client Authority",
      "Client Onboarding",
    ],
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const panelRefs = useRef([]);

  const addPanelRef = (el) => {
    if (el && !panelRefs.current.includes(el)) panelRefs.current.push(el);
  };

  // One orchestrated reveal, triggered the first time the section enters
  // view — not a scroll listener firing on every panel individually.
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set([".services-kicker", ".services-heading", ".service-panel"], {
          autoAlpha: 1,
          y: 0,
        });
        return;
      }

      gsap.set([".services-kicker", ".services-heading"], {
        autoAlpha: 0,
        y: 16,
      });
      gsap.set(panelRefs.current, { autoAlpha: 0, y: 28 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to([".services-kicker", ".services-heading"], {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
      }).to(
        panelRefs.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.07,
        },
        "-=0.35",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="border-b border-border px-6 py-24 sm:px-10 lg:px-14"
    >
      <div className="mx-auto grid max-w-full items-start gap-10 sm:grid-cols-[1.1fr_1fr] sm:gap-8 lg:gap-14">
        <div>
          <p className="services-kicker text-xl font-semibold mb-5 text-muted">
            Services
          </p>
          <h2 className="services-heading display-md md:w-2/3 text-ink">
            Tax planning, accounting systems, business advisory, compliance
            reporting, and forecasting.
          </h2>
        </div>

        <div className="service-list">
          {services.map((service) => {
            const panelId = `service-details-${service.ref}`;

            return (
              <article
                key={service.ref}
                id={`service-${service.ref}`}
                className="service-panel"
                ref={addPanelRef}
              >
                <button
                  type="button"
                  className="service-row"
                  aria-controls={panelId}
                >
                  <span className="service-index">{service.index}</span>
                  <span className="font-h text-3xl font-bold">{service.title}</span>
                  {/* <span className="service-ref text-muted">{service.ref}</span> */}
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-label={service.title}
                  className="service-details"
                >
                  <div className="service-details-inner text-2xl">
                    <p>{service.summary}</p>
                    <ul>
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroBIGHEADLINE = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        headingRef.current.querySelectorAll(".headline-reveal-line"),
        { yPercent: 110, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.16,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="px-6 pb-16 pt-10 text-center sm:px-10 lg:px-14 lg:pt-28"
      >
        <h1
          ref={headingRef}
          className="big-headline font-semibold font-n text-ink"
        >
          <span className="block overflow-hidden">
            <span className="headline-reveal-line block">Precision,</span>
          </span>
          <span className="block overflow-hidden">
            <span className="headline-reveal-line block">
              Clarity &amp; Confidence
            </span>
          </span>
        </h1>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 text-center sm:grid-cols-2 sm:gap-10 sm:text-left">
          <p className="text-sm text-muted">
            Tax &amp; Accounting Practice
            <br />
            Melbourne, Australia
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-body">
            We build financial clarity through direct advice, transparent fees,
            and modern systems — precision without the noise.
          </p>
        </div>
      </section>

      {/* <!-- =========================================================
       FULL-WIDTH PANEL (placeholder for office / team photography)
       ========================================================= --> */}
      <section className="">
        <div className="relative flex h-[46vh] min-h-80 w-full items-end justify-center overflow-hidden rounded-sm">
          <img
            className="absolute inset-0 h-full w-full object-cover object-bottom"
            src="https://plus.unsplash.com/premium_photo-1683120733115-b9f354c73f65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </section>
    </>
  )
}

export default HeroBIGHEADLINE
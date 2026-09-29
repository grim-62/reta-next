"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const contentRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      if (prefersReducedMotion) return;

      gsap.fromTo(
        contentRef.current,
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" },
      );

      gsap.to(gridRef.current, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: "#top",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <section
      id="top"
      className="relative flex h-screen min-h-svh w-full flex-col justify-end overflow-hidden bg-white px-6 pb-10 pt-24 sm:px-10 lg:px-14"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(10, 12, 14, 0.486) 0%, rgba(10,12,14,0.486) 38%, rgba(10,12,14,0.486) 62%, rgba(10,12,14,0) 80%), linear-gradient(180deg, rgba(10,12,14,.55) 0%, transparent 38%), url(https://plus.unsplash.com/premium_photo-1683141467643-dc67ba96b856?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-35 
        bg-[repeating-linear-gradient(115deg,rgba(255,255,255,.08)_0,rgba(255,255,255,.08)_1px,transparent_1px,transparent_64px),repeating-linear-gradient(25deg,rgba(255,255,255,.05)_0,rgba(255,255,255,.05)_1px,transparent_1px,transparent_90px)]"
        aria-hidden="true"
      />
      <div
        ref={contentRef}
        className="relative z-10 text-white "
        // className="relative z-10 text-white mix-blend-difference"
      >
        <p className="mb-3 text-xs">Est. 2026</p>
        <p className="max-w-full font-h text-[clamp(2.25rem,7vw,10rem)] leading-[.88]">
          Revenue Edge
          <br />
          <span>finance &amp; accounting.</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;

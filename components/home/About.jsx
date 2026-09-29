"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const practiceParagraph =
  "A tax and accounting practice built on precision and clarity. We create transparent, thoughtful financial systems tailored to your business—from compliance to strategy. We work alongside business owners at every stage of growth, turning complex obligations into clear, practical decisions. Our advice is responsive, considered, and focused on what matters most.";

const About = () => {
  const practiceRef = useRef(null);
  const statementRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        practiceRef.current.querySelectorAll(".about-reveal"),
        { y: 48, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: practiceRef.current,
            start: "top 90%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        practiceRef.current.querySelectorAll(".about-word"),
        { yPercent: 110, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.025,
          scrollTrigger: {
            trigger: practiceRef.current.querySelector(".about-paragraph"),
            start: "top 90%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        statementRef.current.querySelector(".about-reveal"),
        { y: 48, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statementRef.current,
            start: "top 90%",
            once: true,
          },
        },
      );
    });

    return () => context.revert();
  }, []);

  return (
    <>
    <section ref={practiceRef} id="practice" className="px-6 py-24 sm:px-10 lg:px-14 ">
            <div className="mx-auto flex max-w-full flex-col gap-10 lg:flex-row lg:gap-14">
              <div className="flex w-full flex-col gap-3 lg:w-1/2 font-n font-semibold text-xl">
                <p className="about-reveal">About Revenue Edge —</p>
                <div className="flex flex-wrap gap-x-10 gap-y-2">
                  <p className="about-reveal">Founder</p>
                  <p className="about-reveal">Aish.au</p>
                </div>
                <div className="flex gap-x-10 gap-y-2">
                  <p className="about-reveal">services</p>
                  <p className="md:w-1/2 about-reveal">
                    Tax planning, accounting systems, business advisory, compliance
                    reporting, and forecasting.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <p
                  className="about-paragraph max-w-5xl text-[clamp(1.7rem,4.5vw,35.5px)] font-normal leading-[1.15] text-body font-h"
                  aria-label={practiceParagraph}
                >
                  {practiceParagraph.split(" ").map((word, index) => (
                    <span
                      key={`${word}-${index}`}
                      className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-baseline"
                      aria-hidden="true"
                    >
                      <span className="about-word inline-block">{word}</span>
                      {index < practiceParagraph.split(" ").length - 1 && " "}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </section>
    
          <section ref={statementRef} className="px-6 sm:px-10 lg:px-14">
            <div className="mx-auto max-w-full">
              <p className="about-reveal responsive-copy max-w-full font-h indent-20">
                Your finances deserve more than numbers. they deserve clarity,
                integrity, add commitment. We Build trust in every decision.
                {/* <!-- We work alongside business owners at every stage of growth, turning
              complex obligations into clear, practical decisions. Our advice is
              responsive, considered, and focused on what matters most. --> */}
              </p>
            </div>
          </section>
    </>
  )
}

export default About
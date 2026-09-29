"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxSection({
  image,
  children,
  className = "",
  imageClassName = "",
  contentClassName = "",
  imageVerticalTravel = 12,
}) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageLayer = imageRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const context = gsap.context(() => {
      // Vertical-only parallax: the image sits inside a wrapper that's
      // taller than the section (see the -20%/+20% inset below), and we
      // translate it up/down as the section crosses the viewport. Because
      // this only covers a fraction of the section's own scroll distance,
      // the image visibly lags behind — i.e. moves slower than the page.
      gsap.fromTo(
        imageLayer,
        { yPercent: -imageVerticalTravel },
        {
          yPercent: imageVerticalTravel,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, section);

    return () => context.revert();
  }, [imageVerticalTravel]);

  return (
    <section
      ref={sectionRef}
      className={`relative h-full w-full overflow-hidden ${className}`}
    >
      <div
        ref={imageRef}
        className={`absolute -top-[20%] -bottom-[20%] inset-x-0 w-full bg-cover bg-center ${imageClassName}`}
        style={{ backgroundImage: `url(${JSON.stringify(image)})` }}
        aria-hidden="true"
      />
      <div className={`relative z-10 h-full w-full ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
}
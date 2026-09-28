'use client'

import React from 'react'
import "@/style/contact.css";

export default function page  () {
  return (
    <>
        {/* <!-- =========================================================
         STATEMENT
         ========================================================= --> */}
    <section class="px-5 pt-16 sm:px-8 sm:pt-24">
      <h1 class="statement reveal">
        <span class="statement-name">Revenue Edge Tax Accountants</span>
        is a tax and accounting practice driven by clarity, precision, and
        judgment — shaping sound financial decisions at every scale.
      </h1>
    </section>

    {/* <!-- =========================================================
         CONTACT BLOCKS
         ========================================================= --> */}
    <section class="space-y-14 px-5 py-24 sm:px-8 md:space-y-16 md:py-32">

      <div class="contact-row">
        <p class="contact-label">General</p>
        <div class="contact-block">
          <a href="mailto:hello@revenueedge.com.au">hello@revenueedge.com.au</a>
          <a href="tel:1300000000">1300 000 000</a>
        </div>
      </div>

      <div class="contact-row">
        <p class="contact-label">Tax &amp; accounting</p>
        <div class="contact-block">
          <a href="mailto:tax@revenueedge.com.au">tax@revenueedge.com.au</a>
          <a href="tel:0390000001">03 9000 0001</a>
        </div>
      </div>

      <div class="contact-row">
        <p class="contact-label">Business advisory</p>
        <div class="contact-block">
          <a href="mailto:advisory@revenueedge.com.au">advisory@revenueedge.com.au</a>
          <a href="tel:0390000002">03 9000 0002</a>
        </div>
      </div>

    </section>

    {/* <!-- =========================================================
         FULL-BLEED PHOTO (placeholder — swap in office photography)
         ========================================================= --> */}
    <section aria-label="Our office">
      <div className="photo-panel relative flex h-[46vw] max-h-180 min-h-65 w-full items-end justify-center overflow-hidden">
        {/* <img class="object-cover object-end w-full " src="https://images.unsplash.com/photo-1761957362490-26318e4bc173?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/office-video.mp4"
          aria-label="Revenue Edge office"
        />
      </div>
    </section>

    {/* <!-- =========================================================
         ADDRESS
         ========================================================= --> */}
    <section class="px-5 py-28 sm:px-8 md:py-40">
      <div class="contact-row">
        <p class="contact-label">Address</p>
        <div>
          <p class="address-line">Melbourne, Victoria Australia</p>
          <p class="address-line">Phone and video appointments Australia-wide</p>
        </div>
      </div>
    </section>

    {/* <!-- =========================================================
         FOOTER
         ========================================================= --> */}
         <footer class="px-5 pb-6 pt-16 sm:px-8">

    <div class="grid grid-cols-2 gap-x-6 gap-y-10 text-[12px] leading-snug lg:grid-cols-5">
      <a href="index.html" class="block font-medium">
        Revenue Edge<br />Tax<br />Accountants
      </a>

      <div class="flex gap-6">
        <p class="footer-label w-20 shrink-0">Navigation</p>
        <ul class="footer-list space-y-0.5">
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html#services">Services</a></li>
          <li><a href="index.html#practice">Practice</a></li>
          <li><a href="contact.html" class="underline underline-offset-2">Contact</a></li>
        </ul>
      </div>

      <div class="flex gap-6">
        <p class="footer-label w-20 shrink-0">Contact</p>
        <ul class="footer-list space-y-0.5">
          <li><a href="tel:1300000000">1300 000 000</a></li>
          <li><a href="mailto:hello@revenueedge.com.au">hello@revenueedge.com.au</a></li>
        </ul>
      </div>

      <div class="flex gap-6">
        <p class="footer-label w-20 shrink-0">Address</p>
        <p>Melbourne, Victoria<br />Australia<br /><span class="footer-label">By appointment</span></p>
      </div>

      <div class="flex gap-6">
        <p class="footer-label w-20 shrink-0">Hours</p>
        <div class="space-y-3">
          <p>Mon to Fri<br /><span class="footer-label">9:00 AM<br />5:30 PM</span></p>
          <p>Sat<br /><span class="footer-label">By appointment</span></p>
        </div>
      </div>
    </div>

    {/* <!-- Full-width wordmark. SVG textLength stretches the letter-spacing so */}
         {/* the name always fills the row exactly, at any screen width. --> */}
    <svg class="wordmark mt-24" viewBox="0 0 1000 108" role="img" aria-label="Revenue Edge" preserveAspectRatio="xMidYMid meet">
      <text x="0" y="104" font-size="140" textLength="1000" lengthAdjust="spacing">REVENUE EDGE</text>
    </svg>

    <div class="mt-4 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 text-[11px] text-muted">
      <p>All rights reserved</p>
      <p>Registration <span class="text-ink">Registered Tax Agent, Australia</span></p>
      <a href="#" class="transition-colors hover:text-accent">Privacy &amp; terms</a>
      <p>&copy; 2026</p>
    </div>

  </footer>
    </>
  )
}

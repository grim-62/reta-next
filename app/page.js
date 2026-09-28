import Image from "next/image";
import "../style/home.css";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* <!-- =========================================================
       BIG HEADLINE
       ========================================================= --> */}
      <section className="px-6 pb-16 pt-10 text-center sm:px-10 lg:px-14 lg:pt-10">
        <h1 className="big-headline font-semibold font-n text-ink">
          Precision, <br />
          Clarity &amp; Confidence
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
      <section className="px-6 sm:px-10 lg:px-14">
        <div className="relative flex h-[46vh] min-h-80 w-full items-end justify-center overflow-hidden rounded-sm">
          <img
            className="absolute inset-0 h-full w-full object-cover object-bottom"
            src="https://plus.unsplash.com/premium_photo-1683120733115-b9f354c73f65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </section>

      {/* <!-- =========================================================
       PRACTICE META ROW
       ========================================================= --> */}
      <section id="practice" className="px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-full flex-col gap-10 lg:flex-row lg:gap-14">
          <div className="flex w-full flex-col gap-3 lg:w-1/2 font-n font-semibold text-xl">
            About Revenue Edge —
            <div className="flex flex-wrap gap-x-10 gap-y-2">
              <p>Founder</p>
              <p>Founder name</p>
            </div>
            <div className="flex gap-x-10 gap-y-2">
              <p>services</p>
              <p className="md:w-1/2">
                Tax planning, accounting systems, business advisory, compliance
                reporting, and forecasting.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="max-w-5xl text-[clamp(1.7rem,4.5vw,35.5px)] font-normal leading-[1.15] text-body font-h">
              A tax and accounting practice built on precision and clarity. We
              create transparent, thoughtful financial systems tailored to your
              business—from compliance to strategy. We work alongside business
              owners at every stage of growth, turning complex obligations into
              clear, practical decisions. Our advice is responsive, considered,
              and focused on what matters most.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-full">
          <p className="responsive-copy max-w-full font-h indent-20">
            Your finances deserve more than numbers. they deserve clarity,
            integrity, add commitment. We Build trust in every decision.
            {/* <!-- We work alongside business owners at every stage of growth, turning
          complex obligations into clear, practical decisions. Our advice is
          responsive, considered, and focused on what matters most. --> */}
          </p>
        </div>
      </section>
      
      <Services />

      {/* <!-- =========================================================
       SERVICES HEADLINE + INDEX TABLE
       ========================================================= --> */}
     

     

      {/* <!-- =========================================================
       QUOTE HEADLINE + ENGAGEMENT FACTS
       ========================================================= --> */}
      <section className="border-b border-border px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <h2 className="display-md text-ink">
            Early numbers are distilled into precise frameworks — balancing
            compliance, cash flow, and clarity.
          </h2>

          <div>
            <p className="max-w-md text-sm leading-relaxed text-body sm:text-base">
              We begin with the essentials — ledgers, obligations, and the
              rhythm of your business. Every figure on paper is a question and
              an answer, a tool for clarity. Through dialogue between
              practitioner and client, we turn a set of numbers into a grounded,
              strategic plan.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs text-muted">Engagement</dt>
                <dd className="mt-1 text-sm font-medium text-ink">
                  Fixed-fee, agreed upfront
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Oversight</dt>
                <dd className="mt-1 text-sm font-medium text-ink">
                  Reviewed by a partner
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Registration</dt>
                <dd className="mt-1 text-sm font-medium text-ink">
                  Registered Tax Agents
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* <!-- Divider --> */}
      <div className="kicker-divider">
        <p className="display-sm text-ink">
          Precision
          <br />
          in Practice
        </p>
      </div>

      {/* <!-- =========================================================
       SUPPORTING PARAGRAPH
       ========================================================= --> */}
      <section className="border-b border-border px-6 py-20 sm:px-10 lg:px-14">
        <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-body sm:text-lg">
          At this stage, the plan becomes action. We handle lodgements,
          reporting, and reviews — turning a strategy into a compliant,
          transparent process your business can rely on.
        </p>
      </section>
      {/* 
     {/*
       SERVICES SHOWCASE GRID
       FOOTER / CTA
     */}
      <footer id="contact" className="site-footer">
        <div className="footer-columns">
          <div className="footer-block footer-brand">
            <p>Revenue Edge</p>
            <p>Tax Accountants</p>
          </div>

          <div className="footer-block">
            <p className="footer-label">Navigation</p>
            <a href="#top">Home</a>
            <a href="#practice">Practice</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-block">
            <p className="footer-label">Contact</p>
            <a href="mailto:hello@revenueedge.com.au">Email</a>
            <a href="tel:1300000000">Phone</a>
            <a href="#contact">Enquire</a>
          </div>

          <div className="footer-block footer-address">
            <p className="footer-label">Address</p>
            <p>
              Melbourne, VIC
              <br />
              Australia
            </p>
          </div>

          <div className="footer-block footer-hours">
            <p className="footer-label">Hours</p>
            <p>
              Mon to Fri
              <br />
              <span>
                10:00 AM
                <br />
                7:00 PM
              </span>
            </p>
            <p>
              Sat to Sun
              <br />
              <span>
                12:00 PM
                <br />
                5:00 PM
              </span>
            </p>
          </div>
        </div>

        <div className="footer-wordmark" aria-label="RETA">
          RETA
        </div>

        <div className="footer-meta">
          <p>All rights reserved</p>
          <p>License Number&nbsp;&nbsp; RE-AU-2026</p>
          <p>Visual Design&nbsp;&nbsp; Revenue Edge</p>
          <p>Development&nbsp;&nbsp; Revenue Edge</p>
          <p>Legal documents</p>
          <p>&copy; 2026</p>
        </div>
      </footer>
    </>
  );
}

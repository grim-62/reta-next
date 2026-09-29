import Image from "next/image";
import "../style/home.css";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import HeroBIGHEADLINE from "@/components/home/HeroBIGHEADLINE";
import About from "@/components/home/About";

export default function Home() {
  return (
    <>
      <Hero />

      {/* <!-- =========================================================
       BIG HEADLINE
       ========================================================= --> */}
      <HeroBIGHEADLINE/>

      {/* <!-- =========================================================
       PRACTICE META ROW
       ========================================================= --> */}
      <About/>
      
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
          Contact Section 
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

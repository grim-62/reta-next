import React from 'react'
import "../../style/services.css";
import ParallaxSection from "@/components/ui/ParallaxSection";

export default function page() {
  return (
    <>
    {/* <!-- =========================================================
         STATEMENT
         ========================================================= --> */}
      <ParallaxSection
        image="https://plus.unsplash.com/premium_photo-1683141467643-dc67ba96b856?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="min-h-[82svh]"
        contentClassName="flex items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" aria-hidden="true" />
        <h1 className="statement reveal relative max-w-6xl text-white">
          <span className="statement-name">Revenue Edge Tax Accountants</span>
          is a practice driven by precision, clarity, and judgment — covering
          tax, accounting, and business advisory at every scale.
        </h1>
      </ParallaxSection>

      {/* <!-- =========================================================
         CATEGORY OVERVIEW — three disciplines, each jumping to its
         full list further down the page.
         ========================================================= --> */}
      <section class="space-y-14 px-5 py-24 sm:px-8 md:space-y-16 md:py-32">
        <div class="contact-row">
          <p class="contact-label">Tax</p>
          <div class="contact-block">
            <a href="#tax">Tax strategy, made clear</a>
            <a href="#tax">9 practice areas</a>
          </div>
        </div>

        <div class="contact-row">
          <p class="contact-label">Accounting</p>
          <div class="contact-block">
            <a href="#accounting">Books that move business forward</a>
            <a href="#accounting">10 practice areas</a>
          </div>
        </div>

        <div class="contact-row">
          <p class="contact-label">Business Advisory</p>
          <div class="contact-block">
            <a href="#business-advisory">A sharper view of what is next</a>
            <a href="#business-advisory">12 practice areas</a>
          </div>
        </div>
      </section>

      {/* <!-- =========================================================
         FULL-BLEED PHOTO (placeholder — swap in office photography)
         ========================================================= --> */}
      <section aria-label="Our practice">
        <div
          class="photo-panel relative flex h-[46vw] max-h-[720px] min-h-[260px] w-full items-end justify-center overflow-hidden"
        >
          <span class="mb-6 text-xs text-white/50"
            >Add your office or practice photography here</span
          >
        </div>
      </section>

      {/* <!-- =========================================================
         PRACTICE (address-style statement block)
         ========================================================= --> */}
      <section class="px-5 py-28 sm:px-8 md:py-40">
        <div class="contact-row">
          <p class="contact-label">Practice</p>
          <div>
            <p class="address-line">
              31 practice areas across three disciplines
            </p>
            <p class="address-line">Every engagement led by a senior partner</p>
          </div>
        </div>
      </section>

      {/* <!-- =========================================================
         TAX
         ========================================================= --> */}
      <section id="tax" class="scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
        <p class="contact-label">Tax strategy, made clear</p>
        <h2 class="svc-cat-title mt-3 text-ink">Tax</h2>
        <p class="svc-cat-copy">
          Practical tax advice for individuals and businesses, from accurate
          returns to long-range planning that keeps more of your money working
          for you.
        </p>

        <div class="svc-list mt-14">
          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">01</span>
              <span class="svc-title">Foreign Tax</span>
              <span class="svc-ref">foreign-tax</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your tax position legally optimized and fully defended.
                </p>
                <ul>
                  <li>
                    <a href="service/tax/foreign-tax.html">View service</a>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">02</span>
              <span class="svc-title">Business Tax</span>
              <span class="svc-ref">business-tax</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We handle business tax with senior partner scrutiny. Rather
                  than reactive end-of-financial-year processing, our partners
                  review your corporate structure, payroll liabilities,
                  depreciation schedules, and allowable deductions throughout
                  the fiscal year.
                </p>
                <ul>
                  <li>
                    <a href="service/tax/business-tax.html">View service</a>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">03</span>
              <span class="svc-title">Individual Tax</span>
              <span class="svc-ref">individual-tax</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your tax position legally optimized and fully defended.
                </p>
                <ul>
                  <li>
                    <a href="service/tax/individual-tax.html">View service</a>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">04</span>
              <span class="svc-title">Tax Returns</span>
              <span class="svc-ref">tax-returns</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your tax position legally optimized and fully defended.
                </p>
                <ul>
                  <li>
                    <a href="service/tax/tax-returns.html">View service</a>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">05</span>
              <span class="svc-title">Tax Management</span>
              <span class="svc-ref">tax-management</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your tax position legally optimized and fully defended.
                </p>
                <ul>
                  <li>
                    <a href="service/tax/tax-management.html">View service</a>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">06</span>
              <span class="svc-title">Tax Planning</span>
              <span class="svc-ref">tax-planning</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your tax position legally optimized and fully defended.
                </p>
                <ul>
                  <li>
                    <a href="service/tax/tax-planning.html">View service</a>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">07</span>
              <span class="svc-title">Tax Minimisation</span>
              <span class="svc-ref">tax-minimisation</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your tax position legally optimized and fully defended.
                </p>
                <ul>
                  <li>
                    <a href="service/tax/tax-minimisation.html">View service</a>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">08</span>
              <span class="svc-title">Tax Compliance</span>
              <span class="svc-ref">tax-compliance</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your tax position legally optimized and fully defended.
                </p>
                <ul>
                  <li>
                    <a href="service/tax/tax-compliance.html">View service</a>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">09</span>
              <span class="svc-title">IT Tax Management</span>
              <span class="svc-ref">it-tax-management</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your tax position legally optimized and fully defended.
                </p>
                <ul>
                  <li>
                    <a href="service/tax/it-tax-management.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* <!-- =========================================================
         ACCOUNTING
         ========================================================= --> */}
      <section id="accounting" class="scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
        <p class="contact-label">Books that move business forward</p>
        <h2 class="svc-cat-title mt-3 text-ink">Accounting</h2>
        <p class="svc-cat-copy">
          Reliable accounting and bookkeeping systems that give you cleaner
          reporting, stronger controls, and confidence in every decision.
        </p>

        <div class="svc-list mt-14">
          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">01</span>
              <span class="svc-title">Migration Agent bookkeeping</span>
              <span class="svc-ref">migration-agent-bookkeeping</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  Migration agents operate under strict regulatory scrutiny
                  where commingling client monies or failing trust
                  reconciliation can jeopardize professional licensing. We
                  establish automated, tamper-proof trust accounting workflows
                  that satisfy all OMARA auditing requirements.
                </p>
                <ul>
                  <li>
                    <a
                      href="service/accounting/migration-agent-bookkeeping.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">02</span>
              <span class="svc-title">Not for Profit Accounting</span>
              <span class="svc-ref">not-for-profit-accounting</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your financial systems legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a href="service/accounting/not-for-profit-accounting.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">03</span>
              <span class="svc-title">Business Start-up Accounting</span>
              <span class="svc-ref">business-start-up-accounting</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your financial systems legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a
                      href="service/accounting/business-start-up-accounting.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">04</span>
              <span class="svc-title">Property Accounting</span>
              <span class="svc-ref">property-accounting</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your financial systems legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a href="service/accounting/property-accounting.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">05</span>
              <span class="svc-title">BAS Accounting</span>
              <span class="svc-ref">bas-accounting</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your financial systems legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a href="service/accounting/bas-accounting.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">06</span>
              <span class="svc-title">Xero Accounting</span>
              <span class="svc-ref">xero-accounting</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your financial systems legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a href="service/accounting/xero-accounting.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">07</span>
              <span class="svc-title">QuickBooks Accounting</span>
              <span class="svc-ref">quickbooks-accounting</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your financial systems legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a href="service/accounting/quickbooks-accounting.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">08</span>
              <span class="svc-title">MYOB Accounting</span>
              <span class="svc-ref">myob-accounting</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your financial systems legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a href="service/accounting/myob-accounting.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">09</span>
              <span class="svc-title">Foreign-owned Business Accounting</span>
              <span class="svc-ref">foreign-owned-business-accounting</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your financial systems legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a
                      href="service/accounting/foreign-owned-business-accounting.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">10</span>
              <span class="svc-title">Cryptocurrency Accounting</span>
              <span class="svc-ref">cryptocurrency-accounting</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  The ATO utilizes sophisticated data-matching protocols with
                  digital currency exchanges. We extract on-chain telemetry,
                  reconcile complex multi-wallet histories, and apply compliant
                  cost-basis methodologies (HIFO/FIFO) to optimize your legal
                  tax position.
                </p>
                <ul>
                  <li>
                    <a href="service/accounting/cryptocurrency-accounting.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* <!-- =========================================================
         BUSINESS ADVISORY
         ========================================================= --> */}
      <section
        id="business-advisory"
        class="scroll-mt-20 px-5 py-24 sm:px-8 md:py-32"
      >
        <p class="contact-label">A sharper view of what is next</p>
        <h2 class="svc-cat-title mt-3 text-ink">Business Advisory</h2>
        <p class="svc-cat-copy">
          Senior guidance for the structures, plans, funding, and transitions
          that shape the future of your business.
        </p>

        <div class="svc-list mt-14">
          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">01</span>
              <span class="svc-title">Business Structures</span>
              <span class="svc-ref">business-structures</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your business direction legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a href="service/business-advisory/business-structures.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">02</span>
              <span class="svc-title">Business Planning</span>
              <span class="svc-ref">business-planning</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your business direction legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a href="service/business-advisory/business-planning.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">03</span>
              <span class="svc-title">Business Coaching</span>
              <span class="svc-ref">business-coaching</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your business direction legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a href="service/business-advisory/business-coaching.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">04</span>
              <span class="svc-title">Business Funding</span>
              <span class="svc-ref">business-funding</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your business direction legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a href="service/business-advisory/business-funding.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">05</span>
              <span class="svc-title">Succession &amp; Exit Planning</span>
              <span class="svc-ref">succession-exit-planning</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  A successful exit takes 24 to 36 months of deliberate
                  financial preparation. We clean your balance sheet, identify
                  surplus assets, optimize EBITDA multiples, and structure
                  transactions to legally eliminate or drastically reduce
                  capital gains tax under Division 152.
                </p>
                <ul>
                  <li>
                    <a
                      href="service/business-advisory/succession-exit-planning.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">06</span>
              <span class="svc-title">Business Continuity Planning</span>
              <span class="svc-ref">business-continuity-planning</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your business direction legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a
                      href="service/business-advisory/business-continuity-planning.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">07</span>
              <span class="svc-title">Selling A Business</span>
              <span class="svc-ref">selling-a-business</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your business direction legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a href="service/business-advisory/selling-a-business.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">08</span>
              <span class="svc-title">Business Name Change</span>
              <span class="svc-ref">business-name-change</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your business direction legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a
                      href="service/business-advisory/business-name-change.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">09</span>
              <span class="svc-title">Business Address Update</span>
              <span class="svc-ref">business-address-update</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your business direction legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a
                      href="service/business-advisory/business-address-update.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">10</span>
              <span class="svc-title">Entity Closure</span>
              <span class="svc-ref">entity-closure</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your business direction legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a href="service/business-advisory/entity-closure.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">11</span>
              <span class="svc-title">Client Authority</span>
              <span class="svc-ref">client-authority</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your business direction legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a href="service/business-advisory/client-authority.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article class="svc-panel">
            <div class="svc-row" tabindex="0">
              <span class="svc-index">12</span>
              <span class="svc-title">Client Onboarding</span>
              <span class="svc-ref">client-onboarding</span>
              <span class="svc-plus" aria-hidden="true"></span>
            </div>
            <div class="svc-details">
              <div class="svc-details-inner">
                <p>
                  We start by understanding the complete commercial context of
                  your operations. Our partners review historical lodgements,
                  reconcile ledgers, and establish an ongoing framework that
                  keeps your business direction legally optimized and fully
                  defended.
                </p>
                <ul>
                  <li>
                    <a href="service/business-advisory/client-onboarding.html"
                      >View service</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
{/* 
      <!-- =========================================================
         CLOSING CTA
         ========================================================= --> */}
      <section class="px-5 py-28 sm:px-8 md:py-40">
        <p class="contact-label">Not sure where to start</p>
        <a href="contact.html" class="svc-cta-link mt-3 text-ink"
          >Talk to a practitioner &rarr;</a
        >
      </section>

    {/* <!-- =========================================================
       FOOTER — identical shell to index.html / contact.html
       ========================================================= --> */}
    <footer class="px-5 pb-6 pt-16 sm:px-8">
      <div
        class="grid grid-cols-2 gap-x-6 gap-y-10 text-[12px] leading-snug lg:grid-cols-5"
      >
        <a href="index.html" class="block font-medium">
          Revenue Edge<br />Tax<br />Accountants
        </a>

        <div class="flex gap-6">
          <p class="footer-label w-20 shrink-0">Navigation</p>
          <ul class="footer-list space-y-0.5">
            <li><a href="index.html">Home</a></li>
            <li>
              <a href="service.html" class="underline underline-offset-2"
                >Services</a
              >
            </li>
            <li><a href="index.html#practice">Practice</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

        <div class="flex gap-6">
          <p class="footer-label w-20 shrink-0">Contact</p>
          <ul class="footer-list space-y-0.5">
            <li><a href="tel:1300000000">1300 000 000</a></li>
            <li>
              <a href="mailto:hello@revenueedge.com.au"
                >hello@revenueedge.com.au</a
              >
            </li>
          </ul>
        </div>

        <div class="flex gap-6">
          <p class="footer-label w-20 shrink-0">Address</p>
          <p>
            Melbourne, Victoria<br />Australia<br /><span class="footer-label"
              >By appointment</span
            >
          </p>
        </div>

        <div class="flex gap-6">
          <p class="footer-label w-20 shrink-0">Hours</p>
          <div class="space-y-3">
            <p>
              Mon to Fri<br /><span class="footer-label"
                >9:00 AM<br />5:30 PM</span
              >
            </p>
            <p>Sat<br /><span class="footer-label">By appointment</span></p>
          </div>
        </div>
      </div>

      <svg
        class="wordmark mt-24"
        viewBox="0 0 1000 108"
        role="img"
        aria-label="Revenue Edge"
        preserveAspectRatio="xMidYMid meet"
      >
        <text
          x="0"
          y="104"
          font-size="140"
          textLength="1000"
          lengthAdjust="spacing"
        >
          REVENUE EDGE
        </text>
      </svg>

      <div
        class="mt-4 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 text-[11px] text-muted"
      >
        <p>All rights reserved</p>
        <p>
          Registration
          <span class="text-ink">Registered Tax Agent, Australia</span>
        </p>
        <a href="#" class="transition-colors hover:text-accent"
          >Privacy &amp; terms</a
        >
        <p>&copy; 2026</p>
      </div>
    </footer>
    </>
  )
}

// src/pages/About.tsx
import React from 'react';
import { TrustStrip } from '../components';

function About() {
  return (
    <>
      {/* ================= HERO SECTION (Version 1 & 2 combo) ================= */}
      <section className="pt-[240px] px-margin max-w-[1728px] mx-auto bg-page-bg pb-[120px]">
        <div className="max-w-5xl mx-auto text-center">
          {/* Version 1 — Short hero */}
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-text mb-8 animate-fade-in-up">
            Web accessibility for
            <br />
            <span className="bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] bg-clip-text text-transparent">
              modern Europe
            </span>
          </h1>
          <p className="font-body-lg text-xl text-muted max-w-3xl mx-auto mb-16 animate-fade-in-up leading-relaxed">
            [Agency Name] is a web accessibility consultancy helping digital
            businesses across Europe meet WCAG 2.1 standards, stay legally
            compliant under the EU Accessibility Act, and build products that
            work for every user.
          </p>

          {/* Version 2 — Medium (About section on homepage) */}
          <div className="max-w-4xl mx-auto text-left mt-20 pt-12 border-t border-line/30">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] flex items-center justify-center mb-6 shadow-lg">
                  <span className="material-symbols-outlined text-white text-2xl">
                    accessibility_new
                  </span>
                </div>
                <h3 className="font-h3 text-2xl font-bold text-text mb-4">
                  Accessibility is no longer optional
                </h3>
                <p className="font-body-md text-muted leading-relaxed">
                  and we make sure it isn't complicated either. [Agency Name]
                  specialises in web accessibility auditing and remediation for
                  SaaS companies, digital platforms, and organisations across
                  Europe.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] flex items-center justify-center mb-6 shadow-lg">
                  <span className="material-symbols-outlined text-white text-2xl">
                    code
                  </span>
                </div>
                <h3 className="font-h3 text-2xl font-bold text-text mb-4">
                  Practical, direct, and thorough
                </h3>
                <p className="font-body-md text-muted leading-relaxed">
                  We combine AI-powered scanning with deep technical expertise
                  to identify WCAG failures, fix them at the code level, and
                  help teams maintain compliance over time. We don't hand back a
                  lengthy PDF and disappear.
                </p>
              </div>
            </div>
            <p className="font-body-md text-muted leading-relaxed mt-8 p-6 bg-soft-card/30 rounded-2xl border border-line/20">
              We identify exactly what is broken, explain why it matters, fix it
              properly, and make sure your team understands how to keep it that
              way. With the EU Accessibility Act now in force, the cost of
              inaction — legally and reputationally — is higher than ever. We
              work with companies who want to get ahead of that, not scramble
              to catch up.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MANIFESTO-STYLE SECTION (Our Philosophy) ================= */}
      <section className="py-[120px] px-margin max-w-[1728px] mx-auto relative bg-page-bg">
        <div className="absolute top-0 left-[10%] w-[400px] h-[400px] opacity-10 pointer-events-none">
          <svg className="w-full h-full" fill="none" stroke="url(#about-grad)" strokeWidth="0.5" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="about-grad" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#FF416C" />
                <stop offset="100%" stopColor="#FF4B2B" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" />
            <ellipse cx="50" cy="50" rx="24" ry="48" />
            <ellipse cx="50" cy="50" rx="48" ry="24" />
            <line x1="2" x2="98" y1="50" y2="50" />
            <line x1="50" x2="50" y1="2" y2="98" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-display text-[49px] leading-[1.2] text-balance tracking-tight text-text font-light">
            We audit websites against WCAG 2.1 AA standards,
            <span className="font-bold bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] bg-clip-text text-transparent">
              {" "}
              identify failures, and remediate them
            </span>{" "}
            directly in your codebase.
          </h2>
        </div>
      </section>

      {/* ================= WHAT WE DO + WHY US (Grid Layout inspired by BrandOS) ================= */}
      <section className="py-[120px] px-margin max-w-[1728px] mx-auto bg-page-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-start">
          {/* Left Column: What we do */}
          <div>
            <div className="mb-8">
              <span className="font-label text-xs font-bold text-[#FF416C] uppercase tracking-wider border-l-3 border-[#FF416C] pl-4">
                What we do
              </span>
            </div>
            <h3 className="font-display text-4xl mb-8 font-bold tracking-tight text-text">
              From screen readers to
              <br />
              colour contrast — we handle it all.
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white text-[10px]">✓</span>
                </div>
                <p className="font-body-md text-muted">
                  Screen reader compatibility and keyboard navigation
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white text-[10px]">✓</span>
                </div>
                <p className="font-body-md text-muted">
                  Colour contrast and ARIA implementation
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white text-[10px]">✓</span>
                </div>
                <p className="font-body-md text-muted">
                  The full spectrum — not just surface-level issues most
                  automated tools catch
                </p>
              </div>
            </div>
            <div className="mt-10 bg-soft-card/20 rounded-2xl p-6 border border-line/20">
              <p className="font-body-md text-text italic">
                "Our proprietary AI-powered audit engine scans your entire
                platform at depth and speed that manual-only approaches cannot
                match. Every finding is reviewed and verified by our technical
                specialists before anything reaches you."
              </p>
            </div>
          </div>

          {/* Right Column: Why us */}
          <div>
            <div className="mb-8">
              <span className="font-label text-xs font-bold text-[#FF416C] uppercase tracking-wider border-l-3 border-[#FF416C] pl-4">
                Why companies work with us
              </span>
            </div>
            <div className="relative pl-8 border-l-[3px] border-line space-y-10">
              <div className="absolute left-[-3px] top-0 w-[3px] h-1/3 bg-gradient-to-b from-[#FF416C] to-[#FF4B2B]"></div>
              <div>
                <h4 className="font-h3 text-xl font-bold mb-3 text-text">
                  Legal compliance is now mandatory
                </h4>
                <p className="font-body-md text-muted leading-relaxed">
                  The EU Accessibility Act came into force in June 2025. WCAG
                  compliance is now a legal requirement for most digital
                  products serving European users — and penalties are
                  substantial.
                </p>
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity">
                <h4 className="font-h3 text-xl font-bold mb-3 text-text">
                  Beyond compliance: better products
                </h4>
                <p className="font-body-md text-muted leading-relaxed">
                  Accessible products rank higher in search, convert more
                  users, and reduce legal exposure. Our clients come to us not
                  because they have to, but because they want to build something
                  that genuinely works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= METHODOLOGY SECTION (Inspired by TeamUseCases) ================= */}
      <section className="py-[120px] px-margin max-w-[1728px] mx-auto bg-page-bg">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold tracking-tight text-text mb-6">
            Our methodology
          </h2>
          <p className="font-body-lg text-xl text-muted max-w-3xl mx-auto">
            No jargon. No unnecessary complexity. Just a clear picture and a
            precise path.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-gradient-to-br from-soft-card to-soft-card/50 rounded-[32px] p-8 border border-line/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] flex items-center justify-center mb-6 shadow-md">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="font-h3 text-xl font-bold text-text mb-3">
              Comprehensive audit
            </h3>
            <p className="font-body-md text-muted leading-relaxed">
              A clear, prioritised report of every WCAG failure on your
              platform, ranked by severity and legal risk.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-gradient-to-br from-soft-card to-soft-card/50 rounded-[32px] p-8 border border-line/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] flex items-center justify-center mb-6 shadow-md">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="font-h3 text-xl font-bold text-text mb-3">
              Remediation
            </h3>
            <p className="font-body-md text-muted leading-relaxed">
              We work directly with your development team or handle fixes
              ourselves — straight into your codebase.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-gradient-to-br from-soft-card to-soft-card/50 rounded-[32px] p-8 border border-line/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] flex items-center justify-center mb-6 shadow-md">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="font-h3 text-xl font-bold text-text mb-3">
              Continuous monitoring
            </h3>
            <p className="font-body-md text-muted leading-relaxed">
              Ongoing assurance with monthly compliance reporting for clients
              who want to stay ahead.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP (Reused) ================= */}
      <TrustStrip />

      {/* ================= CTA SECTION (Free Audit) ================= */}
      <section className="py-[120px] px-margin max-w-[1728px] mx-auto bg-page-bg">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-soft-card to-soft-card-2 rounded-[48px] p-12 md:p-20 border border-line/30 shadow-lg">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] flex items-center justify-center mx-auto mb-8 shadow-xl">
            <span className="material-symbols-outlined text-white text-3xl">
              verified
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text mb-6">
            Get a free accessibility audit of your website →
          </h2>
          <p className="font-body-lg text-lg text-muted max-w-2xl mx-auto mb-10">
            No obligation. No jargon. Just a clear picture of where you stand
            and what comes next.
          </p>
          <button className="bg-black text-white font-label rounded-full hover:bg-text/80 transition-all duration-300 shrink-0 flex items-center px-8 text-xs h-[48px] font-bold uppercase tracking-wider mx-auto shadow-md">
            Start your free audit
          </button>
        </div>
      </section>
    </>
  );
}

export default About;
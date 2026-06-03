// src/components/BrandOS.tsx

const BrandOS = () => {
  return (
    <>
      <section className="py-[120px] px-margin max-w-[1728px] mx-auto bg-page-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-center">
          <div className="bg-gradient-to-br from-soft-card-2 to-soft-card rounded-[40px] p-8 h-[700px] flex items-center justify-center relative overflow-hidden border border-line/30 shadow-sm">
            <div className="w-4/5 bg-white-card rounded-2xl shadow-xl border border-line/20 p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="font-label text-label font-bold text-text">
                  Files
                </span>
                <span className="material-symbols-outlined text-muted">
                  more_horiz
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 hover:bg-soft-card rounded-xl transition-colors">
                  <span className="material-symbols-outlined text-[#FF4B2B]">
                    folder
                  </span>
                  <span className="font-body-md text-body-md font-medium text-text">
                    WCAG_2.2_Reports
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3 hover:bg-soft-card rounded-xl transition-colors">
                  <span className="material-symbols-outlined text-[#8A2387]">
                    description
                  </span>
                  <span className="font-body-md text-body-md font-medium text-text">
                    VPAT_Documentation
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3 hover:bg-soft-card rounded-xl transition-colors">
                  <span className="material-symbols-outlined text-[#E94057]">
                    image
                  </span>
                  <span className="font-body-md text-body-md font-medium text-text">
                    Audit_History_Q4
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3 hover:bg-soft-card rounded-xl transition-colors">
                  <span className="material-symbols-outlined text-[#F27121]">
                    analytics
                  </span>
                  <span className="font-body-md text-body-md font-medium text-text">
                    Remediation_Tracker
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/4 flex flex-col justify-center h-full ">
            <h3 className="font-display text-4xl mb-12 font-bold tracking-tight text-text">
              The intelligent foundation
              <br />
              for accessibility 
            </h3>
            <div className="relative pl-8 border-l-[3px] border-line space-y-12">
              <div className="absolute left-[-3px] top-0 w-[3px] h-1/3 bg-gradient-to-b from-[#FF416C] to-[#FF4B2B]"></div>
              <div>
                <h4 className="font-h3 text-h3 text-xl font-bold mb-3 text-text">
                  Centralized Compliance
                </h4>
                <p className="font-body-md text-body-md text-muted leading-relaxed">
                  Bring all your accessibility audits, VPATs, and remediation tickets into one searchable, auditable environment.
                </p>
              </div>
              <div className="opacity-50 hover:opacity-100 transition-opacity">
                <h4 className="font-h3 text-h3 text-xl font-bold mb-3 text-text">
                  AI-Powered Detection
                </h4>
                <p className="font-body-md text-body-md text-muted leading-relaxed">
                  Our engine finds up to 80% of issues automatically, with zero false positives, so you can fix what matters.
                </p>
              </div>
              <div className="opacity-50 hover:opacity-100 transition-opacity">
                <h4 className="font-h3 text-h3 text-xl font-bold mb-3 text-text">
                  Role-Based Reporting
                </h4>
                <p className="font-body-md text-body-md text-muted leading-relaxed">
                  Ensure every team—from devs to legal—has access to the exact compliance data they need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[120px] px-margin max-w-[1728px] mx-auto bg-page-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-center">
          <div className="flex flex-col justify-center h-full order-2 lg:order-1">
            <h3 className="font-display text-4xl mb-12 font-bold tracking-tight text-text">
              Generate accessible
              <br />
              code in seconds.
            </h3>
            <div className="relative pl-8 border-l-[3px] border-line space-y-10">
              <div className="absolute left-[-3px] top-0 w-[3px] h-1/4 bg-gradient-to-b from-[#FF416C] to-[#FF4B2B]"></div>
              <div>
                <h4 className="font-h3 text-xl font-bold mb-2 text-text">
                  	Automated Code Fixes
                </h4>
                <p className="font-body-md text-muted leading-relaxed">
                  Every snippet generated is instantly vetted against WCAG 2.2 AA standards.
                </p>
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity">
                <h4 className="font-h3 text-xl font-bold mb-2 text-text">
                  Framework-Aware
                </h4>
                <p className="font-body-md text-muted leading-relaxed">
                  Intelligence that understands React, Vue, Angular, and native mobile components.
                </p>
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity">
                <h4 className="font-h3 text-xl font-bold mb-2 text-text">
                  Cross-Platform Sync
                </h4>
                <p className="font-body-md text-muted leading-relaxed">
                  Deploy accessible patterns across web, mobile, and PDFs simultaneously.
                </p>
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity">
                <h4 className="font-h3 text-xl font-bold mb-2 text-text">
                  Risk Prediction
                </h4>
                <p className="font-body-md text-muted leading-relaxed">
                  Gain insights into which pages have the highest likelihood of failure before you audit.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-tr from-[#E0EAFC] to-[#CFDEF3] rounded-[40px] p-8 h-[700px] flex items-center justify-center relative overflow-hidden border border-line/30 shadow-inner order-1 lg:order-2">
            <div className="w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-[24px] h-[24px] rounded-full border border-black flex items-center justify-center shrink-0">
                  <span className="text-black font-bold text-[10px] leading-none">
                    A
                  </span>
                </div>
                <span className="font-label text-xs font-bold text-muted">
                  ACCESSIBILITY STUDIO
                </span>
              </div>
              <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 mb-6 border border-white/50 shadow-sm">
                <p className="font-body-md text-text">
                  Generate an accessible HTML button with aria-label, keyboard focus state, and proper contrast ratio for a 'Submit' action on a dark background.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] flex items-center justify-center shadow-md animate-pulse">
                  <span className="material-symbols-outlined text-white text-sm">
                    auto_awesome
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandOS;

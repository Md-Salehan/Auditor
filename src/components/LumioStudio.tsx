// src/components/LumioStudio.tsx

const LumioStudio = () => {
  return (
    <section className="py-[120px] px-margin max-w-[1728px] mx-auto bg-page-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-center">
        <div className="flex flex-col justify-center h-full max-w-lg order-2 lg:order-1">
          <h3 className="font-display text-h2 mb-12 font-bold tracking-tight text-text">
            Generate on-brand<br />assets in seconds.
          </h3>
          <div className="relative pl-8 border-l-[3px] border-line space-y-10">
            <div className="absolute left-[-3px] top-0 w-[3px] h-1/4 bg-gradient-to-b from-[#FF416C] to-[#FF4B2B]"></div>
            <div>
              <h4 className="font-h3 text-xl font-bold mb-2 text-text">Automated Brand Alignment</h4>
              <p className="font-body-md text-muted leading-relaxed">Every asset generated is instantly vetted against your core brand identity.</p>
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity">
              <h4 className="font-h3 text-xl font-bold mb-2 text-text">Contextual Layouts</h4>
              <p className="font-body-md text-muted leading-relaxed">Intelligence that understands the medium, whether it's social, print, or digital.</p>
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity">
              <h4 className="font-h3 text-xl font-bold mb-2 text-text">Multi-Channel Distribution</h4>
              <p className="font-body-md text-muted leading-relaxed">Sync and deploy approved creative across all platforms simultaneously.</p>
            </div>
            <div className="opacity-60 hover:opacity-100 transition-opacity">
              <h4 className="font-h3 text-xl font-bold mb-2 text-text">Predictive Analytics</h4>
              <p className="font-body-md text-muted leading-relaxed">Gain insights into how your visual assets will perform before they go live.</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-[#E0EAFC] to-[#CFDEF3] rounded-[40px] p-8 h-[700px] flex items-center justify-center relative overflow-hidden border border-line/30 shadow-inner order-1 lg:order-2">
          <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[24px] h-[24px] rounded-full border border-black flex items-center justify-center shrink-0">
                <span className="text-black font-bold text-[10px] leading-none">L</span>
              </div>
              <span className="font-label text-xs font-bold text-muted">LUMIO STUDIO</span>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 mb-6 border border-white/50 shadow-sm">
              <p className="font-body-md text-text">Draft a product announcement email for the new 'Pro' tier, adopting our confident but approachable tone.</p>
            </div>
            <div className="flex justify-end">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] flex items-center justify-center shadow-md animate-pulse">
                <span className="material-symbols-outlined text-white text-sm">auto_awesome</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LumioStudio;
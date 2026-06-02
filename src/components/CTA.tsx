// src/components/CTA.tsx

const CTA = () => {
  return (
    <section className="py-section px-margin">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-text flex items-center justify-center mb-12">
            <span className="text-text font-bold text-xl leading-none">L</span>
          </div>
          <h2 className="font-display text-[56px] md:text-[80px] font-bold text-text tracking-tighter leading-[1.05] mb-12 max-w-4xl text-balance">
            Experience the future of brand intelligence
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-black text-white font-label rounded-full hover:bg-text/80 transition-all duration-300 shrink-0 flex items-center px-6 text-[10px] h-[40px] font-bold uppercase tracking-wider">
              Schedule a call
            </button>
            <button className="bg-transparent border border-text/30 text-text font-label rounded-full hover:bg-text hover:text-white transition-all duration-300 shrink-0 flex items-center px-6 text-[10px] h-[40px] font-bold uppercase tracking-wider">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
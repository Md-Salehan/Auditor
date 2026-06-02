// src/components/FloatingCollage.tsx

const FloatingCollage = () => {
  return (
    <section className="min-h-[1400px] w-full max-w-[1728px] mx-auto relative overflow-hidden bg-page-bg py-xl">
      {/* Central Anchor */}
      <div className="absolute inset-0 flex justify-center items-center opacity-100 text-muted pointer-events-none mt-20">
        <h2 className="font-display text-[120px] font-bold text-text tracking-tighter leading-[0.9] text-center">
          Accessibility<br />Intelligence
        </h2>
      </div>

      {/* 1. Top-left: Image with Glass UI Overlay */}
      <div className="absolute rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 shadow-2xl" style={{ left: '10%', top: '12%', width: '340px', height: '260px', zIndex: 5 }}>
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1751467928435-22c8826b5310?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Abstract gradient" />
        <div className="absolute bottom-4 left-4 right-4 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="font-label text-[10px] text-text font-bold uppercase tracking-wider">Processing</span>
            <span className="font-label text-[10px] text-text font-bold">78%</span>
          </div>
          <div className="w-full bg-black/10 rounded-full h-1.5">
            <div className="bg-black w-[78%] h-1.5 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* 2. Top-right: Tall Card with Image */}
      <div className="absolute rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 shadow-2xl" style={{ right: '12%', top: '15%', width: '280px', height: '320px', zIndex: 5 }}>
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1762532264999-7dde57d37f22?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Abstract" />
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-sm">
          <span className="material-symbols-outlined text-text text-sm">auto_awesome</span>
        </div>
      </div>

      {/* 3. Mid-left: Floating Glass UI */}
      <div className="absolute rounded-[28px] overflow-hidden bg-white/20 backdrop-blur-3xl backdrop-saturate-[1.8] border border-white/50 shadow-[0_12px_40px_rgba(0,0,0,0.08)] flex flex-col p-5" style={{ left: '6%', top: '45%', width: '260px', zIndex: 15 }}>
        <div className="flex items-center justify-between mb-4">
          <span className="font-label text-xs font-semibold text-text">Auto-Sync</span>
          <div className="w-10 h-6 bg-black rounded-full relative shadow-inner cursor-pointer">
            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF416C] to-[#FF4B2B] flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-white text-sm">sync</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label text-[11px] font-bold text-text">Creative Cloud</span>
            <span className="font-body-md text-[12px] text-muted leading-tight">Connected</span>
          </div>
        </div>
      </div>

      {/* 4. Mid-right: Image with Content Guidelines Label */}
      <div className="absolute rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 shadow-2xl" style={{ right: '8%', top: '52%', width: '320px', height: '220px', zIndex: 5 }}>
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1607874089816-bf5af74fe2c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Audio equipment" />
        <div className="absolute top-4 left-4 bg-white/40 backdrop-blur-xl px-4 py-2 rounded-full border border-white/50 shadow-sm flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
          <span className="font-label text-[10px] font-bold text-text uppercase tracking-wider">Audio &amp; MUSIC</span>
        </div>
      </div>

      {/* 5. Bottom-left: Large Image with Brand Voice */}
      <div className="absolute rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 shadow-2xl" style={{ left: '15%', top: '72%', width: '380px', height: '260px', zIndex: 5 }}>
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1758369636841-241369c12f3b?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Brand voice" />
        <div className="absolute bottom-5 left-5 bg-white/40 backdrop-blur-xl px-4 py-2 rounded-full border border-white/50 shadow-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-text text-sm">record_voice_over</span>
          <span className="font-label text-[10px] font-bold text-text uppercase tracking-wider">Brand Voice</span>
        </div>
      </div>

      {/* 6. Bottom-right: Wide Image */}
      <div className="absolute rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 shadow-2xl" style={{ right: '15%', top: '78%', width: '360px', height: '240px', zIndex: 5 }}>
        <img className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1661962399580-80301d32d791?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Abstract" />
      </div>

      {/* 7. Floating Comment / Profile */}
      <div className="absolute bg-white/30 backdrop-blur-3xl backdrop-saturate-[2] rounded-[24px] flex items-center gap-4 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-white/50 z-20" style={{ left: '45%', top: '88%', width: 'max-content', zIndex: 20 }}>
        <div className="w-10 h-10 rounded-full bg-soft-card overflow-hidden shadow-sm border border-white/60">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxUZpAK7kBAK1H5Anlz-i_nh19XyaGUt1hLDC6ZASnuBK2vRcwFDP46vx7HodMWCGvWJVA3aKLfp00pDRGNPsH0LVYvOGBSQ1KJIx2wTCxFcEJMNlnv9DHJKT0wyVelxRunXJN3d41Z2MPDK4poxQF_iybQaYL4ebVjC52RWnq9U6Y-VA7k5seZ7Z4c1n3nq7ply6CwSNm8-OH_B6wae1-h-Zmn2y3jh9urDyal2zhahuy408MHHCcPTmA9TNKUOA7WEsjuEy1iMvC" alt="Profile" />
        </div>
        <div className="flex flex-col pr-4">
          <span className="font-label text-[11px] text-text font-bold">Alex Morgan</span>
          <span className="font-body-md text-[13px] text-text/80 leading-tight">This is so good!!!!</span>
        </div>
      </div>
    </section>
  );
};

export default FloatingCollage;
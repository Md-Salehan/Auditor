// src/components/Navbar.tsx
import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-[24px] left-0 right-0 z-50 flex items-center justify-center px-sm w-full pointer-events-none">
      <div className="pointer-events-auto w-full max-w-[700px] flex items-center justify-between bg-[#000000] backdrop-blur-xl rounded-full px-xs py-xs shadow-xl border border-white/10 h-[56px]">
        <div className="flex items-center gap-md pl-xs">
          <div className="w-fit h-[34px] px-4 rounded-full border border-page-bg/80 flex items-center justify-center shrink-0">
            <span className="text-page-bg font-bold text-sm leading-none">Auditor</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {/* <a className="font-label text-label text-page-bg/80 hover:text-page-bg transition-colors duration-300" href="#">Product</a> */}
            <a className="font-label text-label text-page-bg/80 hover:text-page-bg transition-colors duration-300" href="#">Solutions</a>
            <a className="font-label text-label text-page-bg/80 hover:text-page-bg transition-colors duration-300" href="#">About</a>
            <a className="font-label text-label text-page-bg/80 hover:text-page-bg transition-colors duration-300" href="#">Blog</a>
          </nav>
        </div>
        <button className="border border-page-bg/30 text-page-bg font-label rounded-full hover:bg-page-bg hover:text-black transition-all duration-300 shrink-0 flex items-center px-4 text-[10px] h-[32px] font-semibold uppercase tracking-wider">
          Let's connect
        </button>
      </div>
    </header>
  );
};

export default Navbar;
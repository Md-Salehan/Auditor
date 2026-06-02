// src/components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section className="pt-[240px] px-margin max-w-[1728px] mx-auto flex flex-col items-center text-center relative overflow-visible bg-page-bg pb-[200px]">
      <h1 className="font-display text-display font-bold text-8xl max-w-3/5 mb-lg text-text tracking-tighter">
        Accessibility done right. At scale.
      </h1>
      <div className="w-full max-w-[1492px] bg-panel-bg overflow-hidden shadow-2xl relative z-10 rounded-[40px] h-[800px]">
        <img 
          alt="Vibrant abstract gradient" 
          className="w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1776009009253-759b31cd3908?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <h3 className="font-display text-display font-bold text-3xl max-w-3/5 mt-md text-text tracking-tighter">
        Advance digital accessibility with our AI-powered platform and unmatched expertise. From automated testing to expert audits, we help you achieve and maintain compliance.
      </h3>
    </section>
  );
};

export default Hero;
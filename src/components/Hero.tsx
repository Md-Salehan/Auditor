// src/components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section className="pt-[240px] px-margin max-w-[1728px] mx-auto flex flex-col items-center text-center relative overflow-visible bg-page-bg pb-[200px]">
      {/* Animated Title */}
      <h1 
        className="font-display text-display font-bold text-8xl max-w-3/5 mb-lg text-text tracking-tighter animate-fade-in-up"
        style={{ animationDelay: '0s' }}
      >
        Accessibility done right. At scale.
      </h1>
      
      
      
      {/* Animated Image Container */}
      <div 
        className="w-full max-w-[1492px] bg-panel-bg overflow-hidden shadow-2xl relative z-10 rounded-[40px] h-[800px] animate-scale-in"
        style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
      >
        <img 
          alt="Vibrant abstract gradient" 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
          src="https://media.licdn.com/dms/image/v2/D5622AQHycHm6rVqHfA/feedshare-shrink_800/B56Zp074e3HQAg-/0/1762898447596?e=2147483647&v=beta&t=v0MvMp6EoZuV2k_oRCxVS6Adouw_UUPATZDoveK3kU4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Animated overlay shine effect */}
        <div className="absolute inset-0 opacity-0 animate-shine pointer-events-none"></div>

        
      </div>
      {/* Animated Subtitle */}
      <h3 
        className="font-display text-display font-bold text-3xl max-w-3/5 mt-md text-muted tracking-tighter animate-fade-in-up"
        style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
      >
        Advance digital accessibility with our AI-powered platform and unmatched expertise. From automated testing to expert audits, we help you achieve and maintain compliance.
      </h3>
    </section>
  );
};

export default Hero;
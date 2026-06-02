// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-xl pb-lg px-margin rounded-t-[64px] relative z-20">
      <div className="max-w-[1728px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl mb-xl">
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-lg leading-none">L</span>
            </div>
            <p className="font-body-md text-white/50 w-full">
              The operating system for modern creative teams. Empowering focus through intelligent brand management.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
              <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">hub</span>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="font-label text-white mb-6 uppercase tracking-widest text-[10px]">Product</h4>
            <ul className="flex flex-col gap-4">
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Platform</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Intelligence</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Studio</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-label text-white mb-6 uppercase tracking-widest text-[10px]">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">About Us</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Careers</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Newsroom</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-label text-white mb-6 uppercase tracking-widest text-[10px]">Resources</h4>
            <ul className="flex flex-col gap-4">
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Blog</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Documentation</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Community</a></li>
              <li><a className="font-body-md text-white/60 hover:text-white transition-colors" href="#">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-md border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label text-[11px] text-white/40">© 2024 Lumio Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="font-label text-[11px] text-white/40 hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="font-label text-[11px] text-white/40 hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="font-label text-[11px] text-white/40 hover:text-white transition-colors" href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
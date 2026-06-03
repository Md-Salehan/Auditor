// src/components/Testimonial.tsx

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Auditor Accessibility helped us go from scattered manual audits to continuous automated monitoring. We cut remediation time by 60% and passed our VPAT audit on the first try.",
      author: "Sarah Jenkins",
      title: "Director of Digital Compliance, Global Bank",
    },
    {
      quote:
        "With Auditor Accessibility, we can finally ensure our digital products meet accessibility standards without slowing down our development process. It's like having an accessibility expert on our team 24/7.",
      author: "Michael Chen",
      title: "Lead Developer, Tech Innovations Inc.",
    },
    {
      quote:
        "Auditor Accessibility's AI-powered detection has been a game-changer for us. It finds issues that our manual audits missed, and the role-based reporting ensures everyone from devs to legal has the data they need.",
      author: "David Rodriguez",
      title: "Accessibility Specialist, Inclusive Design Co.",
    },
    
  ];

  return (
    <section className="py-[160px] px-margin max-w-[1200px] mx-auto flex flex-col items-center text-center bg-page-bg">
      {/* <h2 className="font-display text-[40px] md:text-[56px] leading-[1.1] tracking-tight text-text mb-16 text-balance max-w-[1000px] font-normal">
        {testimonials[0].quote}
      </h2>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-line overflow-hidden shadow-md">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_dQOYUXm-9ocUk-1cRA5ZyP6tu7OdWwNIU7SRhouWt3u89anzj3A5_pr7FGCCICOiz6a2FoSpC-bN53AYbiVQ-spgKPawBtGZtLq-9c6QyNclym7oEuOsCnQllJenEGuMkAeM3mwnTOLdgJakEE63ozCYcDA2l-C2EQnZiozAakUbDrwJG_jxTwrvV9I5p2oiVPXIDBv-rltdG9P0TX6X2OUHQcwckpskXXJEawplcI8ff_rzn1YnIDgrniF27Vjc0Lz4LKcazue9"
            alt="Sarah Jenkins"
          />
        </div>
        <div className="text-left">
          <p className="font-label text-sm font-bold text-text">
            Sarah Jenkins
          </p>
          <p className="font-label text-xs text-muted">
            Director of Digital Compliance, Global Bank
          </p>
        </div>
      </div> */}

      <div className="flex justify-center items-center opacity-100 text-muted w-full">
        <div className="marquee-container">
          <div className="animate-marquee flex gap-[100px] items-center text-muted">
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-6 text-center">
                <h2 className="font-display text-[40px] md:text-[56px] leading-[1.1] tracking-tight text-text mb-16 text-balance max-w-[1000px] font-normal">
                  {item.quote}
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-line overflow-hidden shadow-md">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_dQOYUXm-9ocUk-1cRA5ZyP6tu7OdWwNIU7SRhouWt3u89anzj3A5_pr7FGCCICOiz6a2FoSpC-bN53AYbiVQ-spgKPawBtGZtLq-9c6QyNclym7oEuOsCnQllJenEGuMkAeM3mwnTOLdgJakEE63ozCYcDA2l-C2EQnZiozAakUbDrwJG_jxTwrvV9I5p2oiVPXIDBv-rltdG9P0TX6X2OUHQcwckpskXXJEawplcI8ff_rzn1YnIDgrniF27Vjc0Lz4LKcazue9"
                      alt={item.author}
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-label text-sm font-bold text-text">
                      {item.author}
                    </p>
                    <p className="font-label text-xs text-muted">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

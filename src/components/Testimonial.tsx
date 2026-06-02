// src/components/Testimonial.tsx

const Testimonial = () => {
  return (
    <section className="py-[160px] px-margin max-w-[1200px] mx-auto flex flex-col items-center text-center bg-page-bg">
      <h2 className="font-display text-[40px] md:text-[56px] leading-[1.1] tracking-tight text-text mb-16 text-balance max-w-[1000px] font-normal">
        "Lumio was built with the desire to liberate creative teams from menial tasks, allowing them to focus on true strategic innovation."
      </h2>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-line overflow-hidden shadow-md">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_dQOYUXm-9ocUk-1cRA5ZyP6tu7OdWwNIU7SRhouWt3u89anzj3A5_pr7FGCCICOiz6a2FoSpC-bN53AYbiVQ-spgKPawBtGZtLq-9c6QyNclym7oEuOsCnQllJenEGuMkAeM3mwnTOLdgJakEE63ozCYcDA2l-C2EQnZiozAakUbDrwJG_jxTwrvV9I5p2oiVPXIDBv-rltdG9P0TX6X2OUHQcwckpskXXJEawplcI8ff_rzn1YnIDgrniF27Vjc0Lz4LKcazue9"
            alt="Alex Morgan"
          />
        </div>
        <div className="text-left">
          <p className="font-label text-sm font-bold text-text">Alex Morgan</p>
          <p className="font-label text-xs text-muted">VP of Brand, Northline</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
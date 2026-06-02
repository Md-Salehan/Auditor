// src/components/Updates.tsx

const Updates = () => {
  const updates = [
    {
      title: 'Introducing Lumio Studio Analytics',
      date: 'Oct 12',
      category: 'Product Update',
      image: 'https://images.unsplash.com/photo-1615714259003-5db15f3cf5f5?q=80&w=987&auto=format&fit=crop'
    },
    {
      title: 'The Modern Brand Architecture',
      date: 'Oct 08',
      category: 'Insights',
      image: 'https://images.unsplash.com/photo-1646388286080-62887d1b34ab?q=80&w=987&auto=format&fit=crop'
    },
    {
      title: 'Lumio raises Series B to expand AI',
      date: 'Sep 24',
      category: 'News',
      image: 'https://images.unsplash.com/photo-1615714259121-c9870fd23fcd?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-[120px] px-margin max-w-[1728px] mx-auto bg-page-bg">
      <div className="flex justify-between items-end mb-12">
        <h2 className="font-display text-h2 font-bold tracking-tight text-text">Latest Updates</h2>
        <button className="font-label text-sm font-bold border-b border-black text-text pb-1 hover:text-[#FF416C] hover:border-[#FF416C] transition-colors">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {updates.map((update, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="group cursor-pointer">
              <img
                alt={update.title}
                className="w-full h-[450px] rounded-[40px] mb-6 overflow-hidden shadow-xl border border-white/20 object-cover"
                src={update.image}
              />
              <p className="font-label text-xs text-muted mb-3">{update.category} • {update.date}</p>
              <h4 className="font-h3 text-xl font-bold text-text group-hover:text-black transition-colors">
                {update.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Updates;

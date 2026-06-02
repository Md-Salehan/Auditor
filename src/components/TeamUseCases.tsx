// src/components/TeamUseCases.tsx
import { useState } from 'react';

const TeamUseCases = () => {
  const [activeTab, setActiveTab] = useState('Strategy');
  const tabs = ['Strategy', 'Marketing', 'Design', 'Sales'];
  
  const allUseCases = [
    { title: 'Campaign Briefs', description: 'Generate comprehensive briefs aligned with brand strategy.', image: 'https://images.unsplash.com/photo-1614852207233-e8d771f8e9fc?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Social Assets', description: 'Ensure visual consistency across all channels.', image: 'https://images.unsplash.com/photo-1645811791249-93a1e10d0169?q=80&w=869&auto=format&fit=crop' },
    { title: 'Sales Decks', description: 'Empower reps with up-to-date, on-brand messaging.', image: 'https://images.unsplash.com/photo-1774420073915-96cc5e3abdb7?q=80&w=2021&auto=format&fit=crop' },
    { title: 'Voice Guidelines', description: 'Codify your brand\'s unique tone and terminology.', image: 'https://images.unsplash.com/photo-1770791779732-7d1ef12524f2?q=80&w=2021&auto=format&fit=crop' }
  ];

  return (
    <section className="py-[160px] px-margin max-w-[1728px] mx-auto flex flex-col items-center bg-page-bg">
      <h2 className="font-display text-h2 mb-12 font-bold tracking-tight text-center text-text">
        Built for every team.
      </h2>
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-label text-sm transition-all ${
              activeTab === tab
                ? 'bg-black text-page-bg shadow-md'
                : 'bg-white text-text hover:bg-gray-50 shadow-sm'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {allUseCases.map((useCase, idx) => (
          <div key={idx} className="relative h-[400px] rounded-[32px] p-8 flex flex-col justify-end group overflow-hidden shadow-sm border border-line/20">
            <img
              alt={useCase.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={useCase.image}
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10">
              <h4 className="font-h3 text-xl font-bold mb-2 text-white">{useCase.title}</h4>
              <p className="font-body-md text-white/80">{useCase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamUseCases;

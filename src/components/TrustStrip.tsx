// src/components/TrustStrip.tsx

const TrustStrip = () => {
  const brands = ['Salesforce', 'Adobe', 'PayPal', 'Intuit', 'SAP', 'Shopify', 'Etsy', 'Square', 'Stripe', 'HubSpot'];
  
  return (
    <section className="py-xl px-margin border-t border-line/30 max-w-[1728px] mx-auto flex flex-col items-center bg-page-bg relative z-0 pt-[40px]">
      <h1 className="font-display text-display font-bold text-4xl max-w-3/5 mb-lg text-text tracking-tighter">
        Trusted by industry leaders
      </h1>
      <div className="flex justify-center items-center opacity-100 text-muted w-full">
        <div className="marquee-container">
          <div className="animate-marquee flex gap-[100px] items-center text-muted">
            {[...brands, ...brands].map((brand, idx) => (
              <span 
                key={idx}
                className="font-h3 text-6xl font-semibold tracking-tight hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default opacity-100"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
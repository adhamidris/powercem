import Link from 'next/link';

interface GlobalProps {
  dict?: {
    title: string;
    p1: string;
    p2: string;
    cta: string;
    contactCard: { title: string; subtitle: string; button: string };
  };
}

export default function GlobalCollaboration({ dict }: GlobalProps) {
  const t = dict || {
    title: "Global collaboration, local impact",
    p1: "PowerCem Technologies collaborates globally with a network of trusted partners. These local representatives play a crucial role in supporting our innovative solutions in their markets.",
    p2: "We welcome new partnerships with organizations that share our commitment to innovation and sustainability, helping us expand the impact of our products worldwide.",
    cta: "READ MORE",
    contactCard: {
      title: "Get in touch",
      subtitle: "Countries",
      button: "Contact Us"
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-[3.5rem] font-normal text-power-black leading-[1.15]">
              {t.title}
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>

            <div className="pt-2">
              <Link 
                href="/about" 
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border-2 border-power-blue text-power-blue font-bold tracking-wide hover:bg-power-blue hover:text-white transition-all duration-300"
              >
                {t.cta}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Blue Card */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="w-80 bg-gradient-to-br from-[#2E8BC0] to-power-blue rounded-2xl p-8 text-center text-white shadow-2xl shadow-blue-900/20">
              <h3 className="text-2xl font-normal mb-2">{t.contactCard.title}</h3>
              <p className="text-blue-100 text-sm mb-8">{t.contactCard.subtitle}</p>
              
              <Link 
                href="/contact"
                className="inline-block w-full py-3.5 bg-white text-power-blue font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
              >
                {t.contactCard.button}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
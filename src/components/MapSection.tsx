import React from 'react';

interface MapProps {
  dict?: {
    continents: { [key: string]: string };
  };
}

const MapSection = ({ dict }: MapProps) => {
  const continents = dict?.continents || {
    na: "North America",
    sa: "South America",
    eu: "Europe - CemX HQ",
    af: "Africa",
    as: "Asia",
    au: "Australia"
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="relative w-full aspect-[2.2/1] bg-[#F4F7FA] rounded-[2.5rem] p-12 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          
          {/* World Map Background */}
          <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/images/Continents.svg" 
                alt="World Map" 
                className="w-full h-full object-contain opacity-90" 
              />
            </div>

            <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full map-overlay overflow-visible pointer-events-none">
              {/* Continent Dots */}
              <g className="dots-group pointer-events-auto">
                <circle cx="220" cy="120" r="8" className="continent-dot fill-[#1D4E89] stroke-white stroke-[3px] shadow-sm cursor-pointer transition-all duration-300 hover:scale-125" data-continent="North America">
                  <title>{continents.na}</title>
                </circle>
                <circle cx="320" cy="280" r="8" className="continent-dot fill-[#1D4E89] stroke-white stroke-[3px] shadow-sm cursor-pointer transition-all duration-300 hover:scale-125" data-continent="South America">
                  <title>{continents.sa}</title>
                </circle>
                {/* Europe - CemX HQ */}
                <g className="headquarters group cursor-pointer">
                  <circle cx="520" cy="100" r="15" className="fill-[#60A5FA] opacity-30 animate-pulse" />
                  <circle cx="520" cy="100" r="10" className="continent-dot fill-[#60A5FA] stroke-white stroke-[3px] shadow-md transition-all duration-300 group-hover:scale-125" data-continent="Europe">
                    <title>{continents.eu}</title>
                  </circle>
                </g>
                <circle cx="530" cy="190" r="8" className="continent-dot fill-[#1D4E89] stroke-white stroke-[3px] shadow-sm cursor-pointer transition-all duration-300 hover:scale-125" data-continent="Africa">
                  <title>{continents.af}</title>
                </circle>
                <circle cx="680" cy="100" r="8" className="continent-dot fill-[#1D4E89] stroke-white stroke-[3px] shadow-sm cursor-pointer transition-all duration-300 hover:scale-125" data-continent="Asia">
                  <title>{continents.as}</title>
                </circle>
                <circle cx="830" cy="320" r="8" className="continent-dot fill-[#1D4E89] stroke-white stroke-[3px] shadow-sm cursor-pointer transition-all duration-300 hover:scale-125" data-continent="Australia">
                  <title>{continents.au}</title>
                </circle>
              </g>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapSection;

import React from 'react';

interface AboutProps {
  dict?: {
    title: string[];
    p1: string;
    p2: string;
  };
}

const About = ({ dict }: AboutProps) => {
  const t = dict || {
    title: ["We are CemX", "Technologies"],
    p1: "CemX Technologies BV, established in 1996, develops and produces proven additives for cement-bound applications that provide sustainable, ecological, and economical solutions for infrastructure development. Our specialized additives are trusted to improve soil stabilization, enhance concrete performance, and immobilize harmful substances in contaminated materials.",
    p2: "With nearly 30 years of expertise, CemX is committed to reducing environmental impact, increasing the durability of infrastructure, and supporting the global shift towards more sustainable civil engineering practices. By delivering reliable products and solutions, we enable efficient, long-lasting infrastructure projects that meet both environmental and economic demands worldwide."
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Title */}
          <div className="flex flex-col justify-start">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight font-medium text-cemx-dark">
              {t.title[0]}
              <br />
              {t.title[1]}
            </h2>
            <div className="w-24 h-1 bg-cemx-blue mt-6"></div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-6 text-cemx-dark/80 text-lg leading-relaxed font-light">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

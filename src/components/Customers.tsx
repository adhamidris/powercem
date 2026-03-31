import React from "react";

interface CustomersProps {
  dict?: {
    title: string[];
    stats: { value: string; unit: string; description: string }[];
  };
}

export default function Customers({ dict }: CustomersProps) {
  const defaultStats = [
    {
      value: "4.500.000",
      unit: "M²",
      description: (
        <>
          Equivalent to the CO<sub>2</sub> absorption
          <br />
          of 4.5 million m² of forest
        </>
      ),
    },
    {
      value: "24.000.000",
      unit: "M²",
      description: (
        <>
          Stabilized and strengthened for a
          <br />
          sustainable future
        </>
      ),
    },
    {
      value: "1.350.000.000",
      unit: "KG",
      description: (
        <>
          CO<sub>2</sub> reduction: Enhancing our
          <br />
          planet&apos;s resilience
        </>
      ),
    },
  ];

  const stats = dict?.stats || defaultStats;
  const title = dict?.title || [
    "We are committed to providing the most",
    "sustainable soil stabilization solutions to all our",
    "customers"
  ];

  return (
    <section className="w-full bg-white -mt-16 pt-20 pb-32 relative z-10 rounded-t-[50px]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-[var(--color-cemx-dark)] leading-tight">
            {title[0]}
            <br className="hidden md:block" />
            {title[1]}
            <br className="hidden md:block" />
            {title[2]}
          </h2>
          <div className="w-24 h-1 bg-[var(--color-cemx-blue)] mx-auto mt-6"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#EEEEEE] rounded-[20px] p-8 text-center flex flex-col items-center justify-center min-h-[250px]"
            >
              <div className="mb-2">
                <span className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[var(--color-cemx-blue)]">
                  {stat.value}
                </span>
              </div>
              <div className="mb-6">
                <span className="text-sm font-bold text-[#5BA4E6] uppercase tracking-wider">
                  {stat.unit}
                </span>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

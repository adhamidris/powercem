import Image from 'next/image';

interface TrustedProps {
  dict?: {
    title: string;
  };
}

const logos = [
  { name: 'Orascom Construction', src: '/logos/orascom-construction.svg' },
  { name: 'Drake & Scull', src: '/logos/drake-scull.svg' },
  { name: 'El-Orouba', src: '/logos/el-orouba.svg' },
  { name: 'Siemens', src: '/logos/siemens.svg' },
  { name: 'HNS Group', src: '/logos/hns-group.svg' },
  { name: 'Petrojet', src: '/logos/petrojet.svg' },
  { name: 'Alemam', src: '/logos/alemam.svg' },
];

export default function TrustedMarquee({ dict }: TrustedProps) {
  const title = dict?.title || "Trusted partnerships driving global infrastructure innovation";

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-center text-xl md:text-2xl text-gray-500 font-medium">
          {title}
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients for smooth fade in/out on sides */}
        <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent"></div>

        <div className="flex w-max animate-marquee">
          {/* We duplicate the logos 4 times to ensure seamless looping even on wide screens */}
          {[...Array(4)].map((_, setIndex) => (
            <div key={`set-${setIndex}`} className="flex items-center gap-16 px-8">
              {logos.map((logo, index) => (
                <div key={`logo-${setIndex}-${index}`} className="relative h-12 w-48 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductsProps {
  dict?: {
    items: { name: string; image: string; link: string }[];
    cta: string;
  };
}

const DEFAULT_PRODUCTS = [
  {
    name: "RoadCem",
    image: "/images/ok4.png", 
    link: "#",
  },
  {
    name: "ImmoCem",
    image: "/images/ok2.png", 
    link: "#",
  },
  {
    name: "ConcreCem",
    image: "/images/ok3.png", 
    link: "#",
  },
];

export default function Products({ dict }: ProductsProps) {
  const products = dict?.items || DEFAULT_PRODUCTS;
  const ctaText = dict?.cta || "LEARN MORE";

  return (
    <section className="w-full py-16 bg-white rounded-b-[50px] relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col items-center group"
            >
              <div className="relative w-full aspect-[3/5] mb-8 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={product.image}
                  alt={`${product.name} Product Bag`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <Link
                href={product.link}
                className="flex items-center gap-3 px-8 py-3 rounded-full bg-white text-[var(--color-cemx-blue)] font-semibold text-sm tracking-wide shadow-sm hover:shadow-md transition-all border border-gray-100 group-hover:bg-[var(--color-cemx-blue)] group-hover:text-white"
              >
                {ctaText}
                <span className="p-1 rounded-full border border-current">
                    <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

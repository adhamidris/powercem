import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SoilProps {
  dict?: {
    title: string[];
    cta: string;
  };
}

export default function SoilStabilization({ dict }: SoilProps) {
  const t = dict || {
    title: ["Soil Stabilization for", "a sustainable future"],
    cta: "LEARN MORE"
  };

  return (
    <section className="w-full bg-[var(--color-power-black)] -mt-16 pt-32 pb-32 relative z-0">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-8 text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            {t.title[0]}
            <br />
            <span className="text-white">{t.title[1]}</span>
          </h2>
          
          <div className="shrink-0">
            <Link
              href="#"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white text-[var(--color-power-black)] font-semibold text-sm tracking-wide shadow-sm hover:shadow-md hover:bg-gray-100 transition-all"
            >
              {t.cta}
              <span className="p-1 rounded-full border border-current">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
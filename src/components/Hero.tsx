"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const DEFAULT_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", 
    title: "82% CO2 REDUCTION",
    subtitle: "Sustainable soil stabilization technology for a greener future."
  },
  {
    id: 2,
    image: "/images/hero2.png",
    title: "COST EFFICIENT",
    subtitle: "Reduce construction costs while improving durability and longevity."
  },
  {
    id: 3,
    image: "/images/hero3.png",
    title: "GLOBAL IMPACT",
    subtitle: "Proven technology applied in infrastructure projects worldwide."
  }
];

interface HeroProps {
  dict?: {
    slides: { id: number; image: string; title: string; subtitle: string }[];
    cta: string;
  };
}

export default function Hero({ dict }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = dict?.slides || DEFAULT_SLIDES;
  const ctaText = dict?.cta || "What We Do";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Slider */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-3xl text-white">
          <motion.h1 
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            {slides[currentSlide].title}
          </motion.h1>
          
          <motion.p 
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl md:max-w-xl text-gray-200 mb-10 leading-relaxed"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cemx-blue text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-blue-700 transition-colors"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-10 bg-cemx-blue" : "w-3 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

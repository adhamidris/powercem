import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import SoilStabilization from "@/components/SoilStabilization";
import Customers from "@/components/Customers";
import TrustedMarquee from "@/components/TrustedMarquee";
import GlobalCollaboration from "@/components/GlobalCollaboration";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import { ar } from "@/dictionaries/ar";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "سيم إكس إيطاليا",
  description: "تثبيت التربة لمستقبل مستدام",
};

export default function HomeAr() {
  return (
    <main className={cairo.className} dir="rtl">
      <Navbar dict={ar.navbar} />
      <Hero dict={ar.hero} />
      <About dict={ar.about} />
      <Products dict={ar.products} />
      <SoilStabilization dict={ar.soil} />
      <Customers dict={ar.customers} />
      <TrustedMarquee dict={ar.trusted} />
      <GlobalCollaboration dict={ar.collaboration} />
      <MapSection dict={ar.map} />
      <Footer dict={ar.footer} />
    </main>
  );
}

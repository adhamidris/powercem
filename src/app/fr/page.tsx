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
import { fr } from "@/dictionaries/fr";

export const metadata: Metadata = {
  title: "PowerCem Italie",
  description: "Stabilisation des sols pour un avenir durable",
};

export default function HomeFr() {
  return (
    <main>
      <Navbar dict={fr.navbar} />
      <Hero dict={fr.hero} />
      <About dict={fr.about} />
      <Products dict={fr.products} />
      <SoilStabilization dict={fr.soil} />
      <Customers dict={fr.customers} />
      <TrustedMarquee dict={fr.trusted} />
      <GlobalCollaboration dict={fr.collaboration} />
      <MapSection dict={fr.map} />
      <Footer dict={fr.footer} />
    </main>
  );
}

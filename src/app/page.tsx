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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <SoilStabilization />
      <Customers />
      <TrustedMarquee />
      <GlobalCollaboration />
      <MapSection />
      <Footer />
    </main>
  );
}

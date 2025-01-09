"use client"
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroMobile from "@/components/HeroMobile";
import HeroNew from "@/components/HeroNew";
import Bewertungen from "@/components/Bewertungen";
import BenefitsMobile from "@/components/BenefitsMobile";
import Benefits from "@/components/Benefits";
import Facts from "@/components/Facts";
import About from "@/components/About";
import GeneralContact from "@/components/GeneralContact";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Überprüfe die Bildschirmbreite im Browser
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initiale Ermittlung der Breite
    handleResize();

    // Listener für Fensteränderungen hinzufügen
    window.addEventListener("resize", handleResize);

    // Cleanup: Listener entfernen
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="bg-ecs-white flex justify-center items-center flex-col mx-auto bg-main-900 relative scroll-smooth">
      <div className="w-full min-h-screen items-center relative z-10">
        <header className="flex justify-center">
          <Navbar />
        </header>
        {isMobile ? <HeroMobile /> : <HeroNew />}
        <Bewertungen />
        {isMobile ? <BenefitsMobile /> : <Benefits />}
        <Facts />
        <About />
        <GeneralContact />
        <Footer />
      </div>
      <Background />
    </main>
  );
}

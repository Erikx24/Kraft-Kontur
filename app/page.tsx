"use client"
import Bewertungen from "@/components/Bewertungen";
import HeroMobile from "@/components/HeroMobile";
import HeroNew from "@/components/HeroNew";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Facts from "@/components/Facts";
import Background from "@/components/Background";
import About from "@/components/About";
import Footer from "@/components/Footer";
import GeneralContact from "@/components/GeneralContact";
import Benefits from "@/components/Benefits";
import BenefitsMobile from "@/components/BenefitsMobile";

export default function Home() {
  const isMobile = window.innerWidth < 768;

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

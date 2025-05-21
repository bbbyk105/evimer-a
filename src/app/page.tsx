"use client";

import { useEffect } from "react";
import { useAOS } from "@/hooks/useAOS";
import HeroSection from "./(lp)/HeroSection";
import Header from "./(lp)/Header";
import ServiceSection from "./(lp)/ServiceSection";
import Footer from "./(lp)/Footer";
import PortfolioSection from "./(lp)/PortfolioSection";
import CTASection from "./(lp)/CTASection";
import Contact from "./(lp)/Contact";

export default function Home() {
  const { initAOS } = useAOS();

  useEffect(() => {
    initAOS();
  }, [initAOS]);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <HeroSection />
      <ServiceSection />
      <PortfolioSection />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}

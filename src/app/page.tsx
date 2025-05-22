"use client";

import { useEffect } from "react";
import { useAOS } from "@/hooks/useAOS";
import HeroSection from "./(lp)/HeroSection";
import ServiceSection from "./(lp)/ServiceSection";
import PortfolioSection from "./(lp)/PortfolioSection";
import CTASection from "./(lp)/CTASection";

export default function Home() {
  const { initAOS } = useAOS();

  useEffect(() => {
    initAOS();
  }, [initAOS]);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <HeroSection />
      <ServiceSection />
      <PortfolioSection />
      <CTASection />
    </main>
  );
}

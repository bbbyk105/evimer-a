import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const CTASection = () => {
  return (
    <div className="bg-white py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <h2 className="mb-6 font-montserrat text-4xl font-bold text-[#111931]">
            <span className="text-[#DDEF3F]">ビジネス成長</span>
            のためのパートナーに
          </h2>
          <p className="mb-8 text-lg text-[#111931]">
            Web制作、ECサイト構築、動画・写真制作を通じて、お客様のビジネスの成長をサポートします。
            まずはお気軽にご相談ください。
          </p>
          <Link href="/contact">
            <Button className="bg-[#DDEF3F] text-[#111931] hover:bg-[#c4d531] px-8 py-6 text-lg">
              無料相談をする
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;

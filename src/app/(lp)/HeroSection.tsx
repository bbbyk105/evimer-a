import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row min-h-screen w-full">
        {/* 左側: ロゴエリア (よりモダンなデザイン) */}
        <div className="w-full md:w-1/2 bg-[#111931] flex items-center justify-center p-8 relative overflow-hidden">
          <div
            className="relative z-10 max-w-md text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Image
              src="/images/only_letter.webp"
              alt="EVIMERÍA"
              width={300}
              height={100}
              className="mx-auto mb-6"
              priority
            />
          </div>
        </div>

        {/* 右側: コンテンツエリア (よりスタイリッシュに) */}
        <div className="min-h-max md:w-1/2 bg-[#DDEF3F] p-8 md:p-12 flex flex-col">
          {/* メインコンテンツ */}
          <div className="flex-grow flex flex-col justify-center max-w-lg">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 text-[#111931]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Welcome to <span className="italic">excellence</span>
            </h2>

            <p
              className="text-base md:text-lg mb-8 text-[#111931]/90 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Since our opening, we have become masters of our craft. Our
              commitment to quality products, exceptional services and
              incomparable customer care keep our community coming back again
              and again.
            </p>

            {/* CTAボタン - スタイリッシュに */}
            <div
              className="flex flex-col sm:flex-row gap-4 mt-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Button className="bg-[#111931] text-white hover:bg-[#1e2b4d] text-base px-8 py-6 rounded-none transition-all duration-300 font-medium">
                サービスを見る
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#111931] text-[#111931] hover:bg-[#111931] hover:text-[#DDEF3F] text-base px-8 py-6 rounded-none transition-all duration-300 font-medium"
              >
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

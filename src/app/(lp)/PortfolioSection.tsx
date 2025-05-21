import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const PortfolioSection = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center" data-aos="fade-up">
          <Badge className="mb-4 bg-[#DDEF3F] text-[#111931] hover:bg-[#DDEF3F]">
            PORTFOLIO
          </Badge>
          <h2 className="mb-4 font-montserrat text-4xl font-bold text-[#111931]">
            制作事例
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            多様な業界のお客様に提供してきた実績の一部をご紹介します。
            それぞれのプロジェクトには、お客様のニーズに合わせたカスタマイズされたソリューションが含まれています。
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card
              key={item}
              className="overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={item * 100}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={`/api/placeholder/400/${300 + item * 10}`}
                  alt={`制作事例 ${item}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat text-[#111931]">
                  プロジェクト名 {item}
                </CardTitle>
                <CardDescription>
                  {item % 3 === 1
                    ? "Webサイト制作"
                    : item % 3 === 2
                    ? "ECサイト構築"
                    : "動画・写真制作"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  お客様のビジネスの課題を解決するためのカスタマイズされたソリューションを提供しました。
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-[#111931] text-[#111931] hover:bg-[#111931] hover:text-white"
                >
                  詳細を見る
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <Button className="bg-[#111931] hover:bg-[#1a2649]">
            すべての事例を見る
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;

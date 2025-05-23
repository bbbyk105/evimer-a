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
import Link from "next/link";
import React from "react";
import { PortfolioItem } from "../types/portfolio";
import { getCategoryColor } from "@/lib/portfolio";
import { portfolioData } from "../data/portfolio";

// ポートフォリオカードコンポーネント
const PortfolioCard: React.FC<{ item: PortfolioItem; index: number }> = ({
  item,
  index,
}) => {
  return (
    <Card
      className="group overflow-hidden transition-all duration-300 hover:shadow-xl"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge className={`text-xs ${getCategoryColor(item.category)}`}>
            {item.category}
          </Badge>
        </div>
        {item.url && (
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 hover:bg-white text-[#111931] px-2 py-1 rounded text-xs font-medium transition-colors duration-200"
            >
              サイトを見る
            </Link>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="font-montserrat text-[#111931] line-clamp-2">
          {item.title}
        </CardTitle>
        <CardDescription className="flex items-center gap-2 text-sm">
          <span>{item.client}</span>
          <span>•</span>
          <span>{item.duration}</span>
          <span>•</span>
          <span>{item.completedAt}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link href={`/portfolio/${item.slug}`} className="flex-1">
          <Button
            variant="outline"
            className="w-full border-[#111931] text-[#111931] hover:bg-[#111931] hover:text-white transition-colors duration-300"
          >
            詳細を見る
          </Button>
        </Link>
        {item.url && (
          <Link href={item.url} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-[#111931] hover:bg-[#1a2649] text-white px-3"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

// メインコンポーネント
const PortfolioSection: React.FC = () => {
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
          {portfolioData.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* <div className="mt-12 text-center" data-aos="fade-up">
          <Link href="/portfolio">
            <Button className="bg-[#111931] hover:bg-[#1a2649] px-8 py-3">
              すべての事例を見る
            </Button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default PortfolioSection;

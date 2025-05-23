// utils/portfolio.ts

import { CategoryColor, PortfolioCategory } from "@/app/types/portfolio";

export const getCategoryColor = (category: PortfolioCategory): string => {
  const colors: CategoryColor = {
    Webサイト制作: "bg-blue-100 text-blue-800",
    ECサイト構築: "bg-green-100 text-green-800",
    "動画・写真制作": "bg-purple-100 text-purple-800",
    写真制作: "bg-pink-100 text-pink-800",
    Webアプリケーション: "bg-orange-100 text-orange-800",
  };
  return colors[category] || "bg-gray-100 text-gray-800";
};

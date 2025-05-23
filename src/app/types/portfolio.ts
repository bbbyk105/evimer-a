// types/portfolio.ts
export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  client: string;
  duration: string;
  slug: string; // 詳細ページのURL用
  url?: string; // 実際のサイトURL（公開されている場合）
  completedAt: string; // 完了日
  details?: {
    challenge: string; // 課題
    solution: string; // 解決方法
    result: string; // 結果・成果
    testimonial?: string; // お客様の声
  };
}

export type PortfolioCategory =
  | "Webサイト制作"
  | "ECサイト構築"
  | "動画・写真制作"
  | "写真制作"
  | "Webアプリケーション";

export interface CategoryColor {
  [key: string]: string;
}

// data/portfolio.ts
import { PortfolioItem } from "../types/portfolio";

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "橘香堂様",
    category: "Webサイト制作",
    description:
      "企業ブランディングを重視したモダンなコーポレートサイト。レスポンシブデザインとInstagram連携を実装し、更新性を重視した設計。",
    image: "/images/portfolio/kikkou.webp",
    client: "コワーキングスペース",
    duration: "2週間",
    slug: "kikkoudo-website",
    url: "https://mtfuji-kikkou.com",
    completedAt: "2024-03",
    details: {
      challenge:
        "既存のサイトが古く、モバイル対応が不十分でした。また、Instagram投稿の更新が手動で時間がかかっていました。",
      solution:
        "レスポンシブデザインの採用とInstagram APIを活用した自動投稿表示機能を実装しました。",
      result:
        "モバイルからのアクセスが40%増加し、更新作業時間を70%削減できました。",
      testimonial:
        "デザインが素晴らしく、管理も簡単になりました。お客様からの反応も非常に良いです。",
    },
  },
  {
    id: 2,
    title: "天地星空様 ECサイト",
    category: "ECサイト構築",
    description:
      "対面決済に特化したECサイト。キャッシャーレスな決済を容易に実現し、フランスで行われたSirha Lyonにてわずか2日で20万円の売上を記録しました",
    image: "/images/portfolio/amachi.webp",
    client: "小売業",
    duration: "1週間",
    slug: "tenchiseiku-ec-site",
    completedAt: "2025-01",
    details: {
      challenge:
        "海外での展示会で、現金決済が困難で機会損失が発生していました。",
      solution:
        "QRコード決済とPWA技術を活用した、オフラインでも動作するECサイトを構築しました。",
      result:
        "Sirha Lyon展示会でわずか2日で20万円の売上を達成。決済成功率99%を実現しました。",
      testimonial: "海外での販売が格段に楽になり、売上も大幅にアップしました。",
    },
  },
  {
    id: 3,
    title: "Checkey",
    category: "Webアプリケーション",
    description:
      "休眠スペースの可能性を最大限活かすために開発されたwebアプリケーション。効率的なスペース管理と予約システムを提供します。",
    image: "/images/portfolio/checkey.webp",
    client: "スペース管理",
    duration: "3ヶ月",
    slug: "checkey-web-app",
    url: "https://checkey-226.com",
    completedAt: "2025-06",
    details: {
      challenge:
        "空きスペースの把握と予約管理が非効率で、利用率が低下していました。",
      solution:
        "リアルタイムでのスペース状況確認と簡単予約システムを開発しました。",
      result: "スペース利用率が60%向上し、管理工数を50%削減できました。",
      testimonial: "直感的で使いやすく、スタッフの負担も大幅に軽減されました。",
    },
  },
];

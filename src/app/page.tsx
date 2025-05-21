// app/page.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FaDesktop,
  FaShoppingCart,
  FaVideo,
  FaInstagram,
  FaYoutube,
  FaGlobe,
  FaLock,
  FaNewspaper,
} from "react-icons/fa";
import { MdEmail, MdOutlineSearch } from "react-icons/md";
import { useAOS } from "@/hooks/useAOS";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const { initAOS } = useAOS();

  useEffect(() => {
    initAOS();
  }, [initAOS]);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 w-full bg-[#111931] text-white shadow-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-montserrat">
              <span className="text-[#DDEF3F]">Evi</span>mería
            </h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8 font-montserrat">
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#DDEF3F] transition-colors"
                >
                  サービス
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-[#DDEF3F] transition-colors"
                >
                  会社概要
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-[#DDEF3F] transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
          <Button
            variant="outline"
            className="hidden md:flex bg-transparent border-[#DDEF3F] text-[#DDEF3F] hover:bg-[#DDEF3F] hover:text-[#111931]"
          >
            お問い合わせ
          </Button>
        </div>
      </header>

      <section className="flex flex-col md:flex-row min-h-screen w-full">
        {/* 左側: ロゴエリア (よりモダンなデザイン) */}
        <div className="w-full md:w-1/2 bg-[#111931] flex items-center justify-center p-8 relative overflow-hidden">
          <div className="relative z-10 max-w-md text-center">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#111931]">
              Welcome to <span className="italic">excellence</span>
            </h2>

            <p className="text-base md:text-lg mb-8 text-[#111931]/90 leading-relaxed">
              Since our opening, we have become masters of our craft. Our
              commitment to quality products, exceptional services and
              incomparable customer care keep our community coming back again
              and again.
            </p>

            {/* CTAボタン - スタイリッシュに */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
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

          {/* 区切り線 */}
          <div className="h-px w-full bg-[#111931]/20 my-12"></div>

          {/* 連絡先情報 - よりスタイリッシュに */}
          <div className="mt-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[#111931] font-medium text-lg mb-1">
                  info@mysite.com
                </p>
                <p className="text-[#111931] font-medium text-lg mb-6 md:mb-0">
                  123-456-7890
                </p>
              </div>

              {/* ソーシャルメディアアイコン - Lucide icons使用 */}
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-[#111931] hover:text-[#1e2b4d] transition-colors"
                >
                  <FaXTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-[#111931] hover:text-[#1e2b4d] transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center" data-aos="fade-up">
            <Badge className="mb-4 bg-[#DDEF3F] text-[#111931] hover:bg-[#DDEF3F]">
              OUR SERVICES
            </Badge>
            <h2 className="mb-4 font-montserrat text-4xl font-bold text-[#111931]">
              私たちのサービス
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              お客様のビジネスを成功に導くための包括的なソリューションを提供します。
              Webサイト制作からECサイト構築、動画・写真制作まで、あらゆるニーズにお応えします。
            </p>
          </div>

          <Tabs defaultValue="web" className="w-full">
            <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-3">
              <TabsTrigger
                value="web"
                className="data-[state=active]:bg-[#111931] data-[state=active]:text-white"
              >
                <FaDesktop className="mr-2" /> Webサイト制作
              </TabsTrigger>
              <TabsTrigger
                value="ec"
                className="data-[state=active]:bg-[#111931] data-[state=active]:text-white"
              >
                <FaShoppingCart className="mr-2" /> ECサイト制作
              </TabsTrigger>
              <TabsTrigger
                value="media"
                className="data-[state=active]:bg-[#111931] data-[state=active]:text-white"
              >
                <FaVideo className="mr-2" /> 動画・写真制作
              </TabsTrigger>
            </TabsList>

            {/* Webサイト制作 */}
            <TabsContent value="web">
              <div className="grid gap-8 md:grid-cols-2">
                <div
                  data-aos="fade-right"
                  className="flex flex-col justify-center"
                >
                  <h3 className="mb-4 font-montserrat text-3xl font-bold text-[#111931]">
                    <span className="text-[#DDEF3F]">Web</span>サイト制作
                  </h3>
                  <p className="mb-6 text-gray-600">
                    お客様のビジネスを最大限に引き立てる、モダンで使いやすいWebサイトを制作します。
                    スマートフォン対応はもちろん、SEO対策も徹底し、お客様のビジネスを成功に導きます。
                    5万円からのリーズナブルな価格で、高品質なWebサイトを提供しています。
                  </p>
                  <div className="mb-6">
                    <h4 className="mb-2 font-semibold text-[#111931]">
                      基本料金
                    </h4>
                    <p className="text-2xl font-bold text-[#111931]">
                      ¥50,000〜
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="mb-2 font-semibold text-[#111931]">
                      オプション
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center">
                        <MdOutlineSearch className="mr-2 text-[#DDEF3F]" />
                        <span>SEO改善</span>
                      </div>
                      <div className="flex items-center">
                        <MdEmail className="mr-2 text-[#DDEF3F]" />
                        <span>お問い合わせフォーム</span>
                      </div>
                      <div className="flex items-center">
                        <FaNewspaper className="mr-2 text-[#DDEF3F]" />
                        <span>ブログ追加</span>
                      </div>
                      <div className="flex items-center">
                        <FaInstagram className="mr-2 text-[#DDEF3F]" />
                        <span>SNS連携</span>
                      </div>
                      <div className="flex items-center">
                        <FaGlobe className="mr-2 text-[#DDEF3F]" />
                        <span>多言語対応</span>
                      </div>
                      <div className="flex items-center">
                        <FaLock className="mr-2 text-[#DDEF3F]" />
                        <span>ログイン機能</span>
                      </div>
                      <div className="flex items-center">
                        <FaNewspaper className="mr-2 text-[#DDEF3F]" />
                        <span>news機能</span>
                      </div>
                      <div className="flex items-center">
                        <FaYoutube className="mr-2 text-[#DDEF3F]" />
                        <span>YouTube埋め込み</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-fit bg-[#111931] hover:bg-[#1a2649]">
                    詳細を見る
                  </Button>
                </div>
                <div
                  data-aos="fade-left"
                  className="relative h-80 overflow-hidden rounded-lg shadow-xl md:h-auto"
                >
                  <Image
                    src="/api/placeholder/800/600"
                    alt="Webサイト制作サービス"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </TabsContent>

            {/* ECサイト制作 */}
            <TabsContent value="ec">
              <div className="grid gap-8 md:grid-cols-2">
                <div
                  data-aos="fade-right"
                  className="flex flex-col justify-center"
                >
                  <h3 className="mb-4 font-montserrat text-3xl font-bold text-[#111931]">
                    <span className="text-[#DDEF3F]">EC</span>サイト制作
                  </h3>
                  <p className="mb-6 text-gray-600">
                    「byPay」サービスを活用した、高機能なECサイトを構築します。
                    商品管理から決済システム、顧客管理まで一貫したソリューションを提供。
                    Webサイト制作と動画制作をセットにしたパッケージもご用意しており、
                    商品の魅力を最大限に引き出す総合的なECソリューションを実現します。
                  </p>
                  <div className="mb-6">
                    <h4 className="mb-2 font-semibold text-[#111931]">特徴</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#DDEF3F] text-[#111931]">
                          ✓
                        </span>
                        簡単な商品管理システム
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#DDEF3F] text-[#111931]">
                          ✓
                        </span>
                        多様な決済方法に対応
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#DDEF3F] text-[#111931]">
                          ✓
                        </span>
                        モバイルフレンドリーなデザイン
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#DDEF3F] text-[#111931]">
                          ✓
                        </span>
                        Webサイト + 動画制作セット割引
                      </li>
                    </ul>
                  </div>
                  <Button className="w-fit bg-[#111931] hover:bg-[#1a2649]">
                    詳細を見る
                  </Button>
                </div>
                <div
                  data-aos="fade-left"
                  className="relative h-80 overflow-hidden rounded-lg shadow-xl md:h-auto"
                >
                  <Image
                    src="/api/placeholder/800/600"
                    alt="ECサイト制作サービス"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </TabsContent>

            {/* 動画・写真制作 */}
            <TabsContent value="media">
              <div className="grid gap-8 md:grid-cols-2">
                <div
                  data-aos="fade-right"
                  className="flex flex-col justify-center"
                >
                  <h3 className="mb-4 font-montserrat text-3xl font-bold text-[#111931]">
                    <span className="text-[#DDEF3F]">動画・写真</span>制作
                  </h3>
                  <p className="mb-6 text-gray-600">
                    Blenderを活用した3Dモデリングと映像技術で、商品の魅力を最大限に引き出す
                    高品質な動画・写真コンテンツを制作します。Webサイトやソーシャルメディアでの
                    使用に最適化し、お客様の商品やサービスの価値を視覚的に伝えます。
                  </p>
                  <div className="mb-6">
                    <h4 className="mb-2 font-semibold text-[#111931]">特徴</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#DDEF3F] text-[#111931]">
                          ✓
                        </span>
                        Blenderによる高品質3D制作
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#DDEF3F] text-[#111931]">
                          ✓
                        </span>
                        商品の魅力を引き出す映像技術
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#DDEF3F] text-[#111931]">
                          ✓
                        </span>
                        Web・SNS最適化コンテンツ
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#DDEF3F] text-[#111931]">
                          ✓
                        </span>
                        Webサイトとの連携サポート
                      </li>
                    </ul>
                  </div>
                  <Button className="w-fit bg-[#111931] hover:bg-[#1a2649]">
                    詳細を見る
                  </Button>
                </div>
                <div data-aos="fade-left">
                  <div className="rounded-lg bg-gray-100 p-4 shadow-lg">
                    <div className="relative mb-4 h-52 overflow-hidden rounded">
                      <video
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source
                          src="/api/placeholder/800/600"
                          type="video/mp4"
                        />
                        お使いのブラウザはビデオタグをサポートしていません。
                      </video>
                    </div>
                    <h4 className="mb-2 font-montserrat text-lg font-bold text-[#111931]">
                      商品紹介動画サンプル
                    </h4>
                    <p className="text-sm text-gray-600">
                      Blenderで制作した3Dモデルを活用し、商品の特徴を視覚的に伝える動画コンテンツです。
                      360度の視点から商品を確認できるため、オンラインショップでの購買意欲向上に効果的です。
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 制作事例セクション */}
      <section className="bg-gray-50 py-24">
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
      </section>

      {/* CTAセクション */}
      <section className="bg-[#111931] py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
            <h2 className="mb-6 font-montserrat text-4xl font-bold">
              <span className="text-[#DDEF3F]">ビジネス成長</span>
              のためのパートナーに
            </h2>
            <p className="mb-8 text-lg">
              Web制作、ECサイト構築、動画・写真制作を通じて、お客様のビジネスの成長をサポートします。
              まずはお気軽にご相談ください。
            </p>
            <Button className="bg-[#DDEF3F] text-[#111931] hover:bg-[#c4d531] px-8 py-6 text-lg">
              無料相談をする
            </Button>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center" data-aos="fade-up">
            <Badge className="mb-4 bg-[#DDEF3F] text-[#111931] hover:bg-[#DDEF3F]">
              CONTACT
            </Badge>
            <h2 className="mb-4 font-montserrat text-4xl font-bold text-[#111931]">
              お問い合わせ
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              プロジェクトについてのご相談やお見積りのご依頼は、以下のフォームからお気軽にお問い合わせください。
              24時間以内に担当者からご連絡いたします。
            </p>
          </div>

          <div className="mx-auto max-w-3xl" data-aos="fade-up">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-medium text-[#111931]"
                  >
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-[#DDEF3F] focus:outline-none focus:ring-1 focus:ring-[#DDEF3F]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block font-medium text-[#111931]"
                  >
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-[#DDEF3F] focus:outline-none focus:ring-1 focus:ring-[#DDEF3F]"
                  />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-medium text-[#111931]"
                  >
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-[#DDEF3F] focus:outline-none focus:ring-1 focus:ring-[#DDEF3F]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block font-medium text-[#111931]"
                  >
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-[#DDEF3F] focus:outline-none focus:ring-1 focus:ring-[#DDEF3F]"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block font-medium text-[#111931]"
                >
                  ご興味のあるサービス <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-[#DDEF3F] focus:outline-none focus:ring-1 focus:ring-[#DDEF3F]"
                  required
                >
                  <option value="">選択してください</option>
                  <option value="web">Webサイト制作</option>
                  <option value="ec">ECサイト制作</option>
                  <option value="media">動画・写真制作</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-medium text-[#111931]"
                >
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-[#DDEF3F] focus:outline-none focus:ring-1 focus:ring-[#DDEF3F]"
                  required
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  className="h-5 w-5 rounded border-gray-300 text-[#DDEF3F] focus:ring-[#DDEF3F]"
                  required
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                  プライバシーポリシーに同意します{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="bg-[#111931] hover:bg-[#1a2649] px-8 py-6 text-lg">
                  送信する
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-[#111931] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-bold font-montserrat">
                <span className="text-[#DDEF3F]">COMPANY</span>NAME
              </h3>
              <p className="mb-4 text-gray-300">
                Webサイト制作、ECサイト構築、動画・写真制作を通じて、ビジネスの成長をサポートします。
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#DDEF3F]">
                  <FaInstagram className="h-5 w-5" />
                </a>

                <a href="#" className="text-white hover:text-[#DDEF3F]">
                  <FaXTwitter className="h-5 w-5" />
                </a>

                <a href="#" className="text-white hover:text-[#DDEF3F]">
                  <FaYoutube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Evimería. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

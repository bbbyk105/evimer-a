import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaShoppingCart } from "react-icons/fa";
import {
  FaDesktop,
  FaGlobe,
  FaLock,
  FaNewspaper,
  FaVideo,
} from "react-icons/fa6";
import { MdEmail, MdOutlineSearch } from "react-icons/md";

const ServiceSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
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

          {/* Webサイト制作 - 左テキスト右画像 */}
          <div className="mb-24 overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="grid gap-0 md:grid-cols-2">
              <div
                data-aos="fade-right"
                className="flex flex-col justify-center p-8 md:p-12"
              >
                <div className="mb-4 flex items-center">
                  <div className="mr-3 inline-block rounded-md bg-[#111931] p-3 text-[#DDEF3F]">
                    <FaDesktop size={24} />
                  </div>
                  <h3 className="font-montserrat text-3xl font-bold text-[#111931]">
                    <span className="text-[#DDEF3F]">Web</span>サイト制作
                  </h3>
                </div>
                <p className="mb-6 text-gray-600">
                  お客様のビジネスを最大限に引き立てる、モダンで使いやすいWebサイトを制作します。
                  スマートフォン対応はもちろん、SEO対策も徹底し、お客様のビジネスを成功に導きます。
                  5万円からのリーズナブルな価格で、高品質なWebサイトを提供しています。
                </p>
                <div className="mb-6">
                  <h4 className="mb-2 font-semibold text-[#111931]">
                    基本料金
                  </h4>
                  <p className="text-2xl font-bold text-[#111931]">¥50,000〜</p>
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
                  </div>
                </div>
                <Button className="w-fit bg-[#111931] hover:bg-[#1a2649]">
                  詳細を見る
                </Button>
              </div>
              <div className="bg-gray-100">
                <div
                  data-aos="fade-left"
                  className="relative h-64 w-full md:h-full"
                >
                  <Image
                    src="/images/portfolio.png"
                    alt="Webサイト制作サービス"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ECサイト制作 - 右テキスト左画像 */}
          <div className="mb-24 overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="order-2 md:order-1 bg-gray-100">
                <div
                  data-aos="fade-right"
                  className="relative h-64 w-full md:h-full"
                >
                  <Image
                    src="/images/ec2.png"
                    alt="ECサイト制作サービス"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="order-1 md:order-2 flex flex-col justify-center p-8 md:p-12"
              >
                <div className="mb-4 flex items-center">
                  <div className="mr-3 inline-block rounded-md bg-[#111931] p-3 text-[#DDEF3F]">
                    <FaShoppingCart size={24} />
                  </div>
                  <h3 className="font-montserrat text-3xl font-bold text-[#111931]">
                    <span className="text-[#DDEF3F]">EC</span>サイト制作
                  </h3>
                </div>
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
            </div>
          </div>

          {/* 動画・写真制作 - 左テキスト右コンテンツ */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="grid gap-0 md:grid-cols-2">
              <div
                data-aos="fade-right"
                className="flex flex-col justify-center p-8 md:p-12"
              >
                <div className="mb-4 flex items-center">
                  <div className="mr-3 inline-block rounded-md bg-[#111931] p-3 text-[#DDEF3F]">
                    <FaVideo size={24} />
                  </div>
                  <h3 className="font-montserrat text-3xl font-bold text-[#111931]">
                    <span className="text-[#DDEF3F]">動画・写真</span>制作
                  </h3>
                </div>
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
              <div
                data-aos="fade-left"
                className="bg-gray-50 p-6 flex items-center justify-center"
              >
                <div className="rounded-lg bg-white p-4 shadow-md w-full max-w-md">
                  <div className="relative mb-4 h-52 overflow-hidden rounded">
                    <video
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/api/placeholder/800/600" type="video/mp4" />
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
          </div>

          {/* サービス選択ガイド */}
          <div className="mt-24 text-center" data-aos="fade-up">
            <h3 className="mb-6 font-montserrat text-2xl font-bold text-[#111931]">
              お客様に最適なサービスをご提案します
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-gray-600">
              まずはお気軽にご相談ください。お客様のビジネスやニーズに合わせて、
              最適なソリューションをご提案いたします。
            </p>
            <Button className="bg-[#DDEF3F] text-[#111931] hover:bg-[#c9da2e]">
              お問い合わせ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;

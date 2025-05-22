import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaEnvelope,
  FaUsers,
  //   FaCalendarAlt,
} from "react-icons/fa";

const CompanyPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <section id="company" className="py-24">
        <div className="container mx-auto px-4">
          {/* ヘッダーセクション */}
          <div className="mb-16 text-center" data-aos="fade-up">
            <Badge className="mb-4 bg-[#DDEF3F] text-[#111931] hover:bg-[#DDEF3F]">
              COMPANY
            </Badge>
            <h2 className="mb-4 font-montserrat text-4xl font-bold text-[#111931]">
              会社情報
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              お客様のビジネスを成功に導くデジタルパートナーとして、
              最新の技術とクリエイティブな視点で、あらゆる課題に取り組みます。
            </p>
          </div>
          {/* 会社概要セクション */}
          <div className="mb-24 overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="grid gap-0 md:grid-cols-2">
              <div
                data-aos="fade-right"
                className="flex flex-col justify-center p-8 md:p-12"
              >
                <div className="mb-4 flex items-center">
                  <div className="mr-3 inline-block rounded-md bg-[#111931] p-3 text-[#DDEF3F]">
                    <FaBuilding size={24} />
                  </div>
                  <h3 className="font-montserrat text-3xl font-bold text-[#111931]">
                    <span className="text-[#DDEF3F]">会社</span>概要
                  </h3>
                </div>
                <div className="mb-6 space-y-4">
                  <div className="grid grid-cols-1 gap-y-3 md:grid-cols-3">
                    <div className="font-semibold text-gray-700">会社名</div>
                    <div className="md:col-span-2 text-gray-600">
                      Evimería合同会社
                    </div>

                    <div className="font-semibold text-gray-700">設立</div>
                    <div className="md:col-span-2 text-gray-600">2025年5月</div>

                    <div className="font-semibold text-gray-700">
                      代表取締役
                    </div>
                    <div className="md:col-span-2 text-gray-600">近藤 白虎</div>

                    <div className="font-semibold text-gray-700">資本金</div>
                    <div className="md:col-span-2 text-gray-600">1,000万円</div>

                    <div className="font-semibold text-gray-700">従業員数</div>
                    <div className="md:col-span-2 text-gray-600">1名</div>

                    <div className="font-semibold text-gray-700">事業内容</div>
                    <div className="md:col-span-2 text-gray-600">
                      Webサイト制作・ECサイト構築・動画制作・システム開発
                    </div>
                  </div>
                </div>
                <Button className="w-fit bg-[#111931] hover:bg-[#1a2649]">
                  会社案内ダウンロード
                </Button>
              </div>
              <div className="bg-gray-100">
                <div
                  data-aos="fade-left"
                  className="relative h-64 w-full md:h-full"
                >
                  <Image
                    src="/api/placeholder/800/600"
                    alt="会社外観"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 企業理念セクション */}
          <div className="mb-24">
            <div className="text-center mb-12" data-aos="fade-up">
              <div className="mb-4 flex items-center justify-center">
                <div className="mr-3 inline-block rounded-md bg-[#111931] p-3 text-[#DDEF3F]">
                  <FaUsers size={24} />
                </div>
                <h3 className="font-montserrat text-3xl font-bold text-[#111931]">
                  <span className="text-[#DDEF3F]">企業</span>理念
                </h3>
              </div>
              <p className="mx-auto max-w-3xl text-gray-600">
                私たちは、デジタル技術の力で人々の生活をより豊かにすることを目指しています。
                常に最新の技術と創造性を追求し、お客様と共に成長していくことを大切にしています。
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DDEF3F]">
                  <span className="text-xl font-bold text-[#111931]">01</span>
                </div>
                <h4 className="mb-3 text-xl font-bold text-[#111931]">
                  創造性の追求
                </h4>
                <p className="text-gray-600">
                  常に新しいアイデアを追求し、独創的なソリューションを生み出すことで、
                  お客様のビジネスに新たな価値を提供します。
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DDEF3F]">
                  <span className="text-xl font-bold text-[#111931]">02</span>
                </div>
                <h4 className="mb-3 text-xl font-bold text-[#111931]">
                  技術の探求
                </h4>
                <p className="text-gray-600">
                  最新のデジタル技術を常に学び、取り入れることで、
                  時代の先を行くサービスを提供し続けます。
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="rounded-xl bg-white p-6 shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DDEF3F]">
                  <span className="text-xl font-bold text-[#111931]">03</span>
                </div>
                <h4 className="mb-3 text-xl font-bold text-[#111931]">
                  信頼関係の構築
                </h4>
                <p className="text-gray-600">
                  お客様との長期的な信頼関係を大切にし、
                  ビジネスの成長と成功を共に実現していくパートナーとなります。
                </p>
              </div>
            </div>
          </div>
          {/* 沿革セクション */}
          {/* <div className="mb-24 overflow-hidden rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <div className="mb-6 flex items-center">
              <div className="mr-3 inline-block rounded-md bg-[#111931] p-3 text-[#DDEF3F]">
                <FaCalendarAlt size={24} />
              </div>
              <h3 className="font-montserrat text-3xl font-bold text-[#111931]">
                <span className="text-[#DDEF3F]">沿</span>革
              </h3>
            </div>

            <div className="ml-4 border-l-2 border-[#DDEF3F] pl-8">
              <div className="mb-8 relative" data-aos="fade-up">
                <div className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full bg-[#DDEF3F]">
                  <FaCalendarAlt className="text-[#111931]" />
                </div>
                <div className="mb-2 flex items-center">
                  <span className="mr-3 text-lg font-bold text-[#111931]">
                    2018年6月
                  </span>
                  <Badge className="bg-[#111931] text-[#DDEF3F]">設立</Badge>
                </div>
                <p className="text-gray-600">
                  株式会社デジタルクリエイトを東京都渋谷区に設立。Webサイト制作事業を開始。
                </p>
              </div>

              <div
                className="mb-8 relative"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full bg-[#DDEF3F]">
                  <FaCalendarAlt className="text-[#111931]" />
                </div>
                <div className="mb-2 flex items-center">
                  <span className="mr-3 text-lg font-bold text-[#111931]">
                    2019年4月
                  </span>
                  <Badge className="bg-[#111931] text-[#DDEF3F]">
                    事業拡大
                  </Badge>
                </div>
                <p className="text-gray-600">
                  ECサイト構築サービスを開始。「byPay」サービスとのパートナーシップを締結。
                </p>
              </div>

              <div
                className="mb-8 relative"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full bg-[#DDEF3F]">
                  <FaCalendarAlt className="text-[#111931]" />
                </div>
                <div className="mb-2 flex items-center">
                  <span className="mr-3 text-lg font-bold text-[#111931]">
                    2020年7月
                  </span>
                  <Badge className="bg-[#111931] text-[#DDEF3F]">
                    新サービス
                  </Badge>
                </div>
                <p className="text-gray-600">
                  Blenderを活用した3D動画制作サービスを開始。従業員数10名に拡大。
                </p>
              </div>

              <div
                className="mb-8 relative"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full bg-[#DDEF3F]">
                  <FaCalendarAlt className="text-[#111931]" />
                </div>
                <div className="mb-2 flex items-center">
                  <span className="mr-3 text-lg font-bold text-[#111931]">
                    2022年3月
                  </span>
                  <Badge className="bg-[#111931] text-[#DDEF3F]">
                    拠点拡大
                  </Badge>
                </div>
                <p className="text-gray-600">
                  大阪オフィスを開設。関西地域でのサービス提供を強化。
                </p>
              </div>

              <div className="relative" data-aos="fade-up" data-aos-delay="400">
                <div className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full bg-[#DDEF3F]">
                  <FaCalendarAlt className="text-[#111931]" />
                </div>
                <div className="mb-2 flex items-center">
                  <span className="mr-3 text-lg font-bold text-[#111931]">
                    2024年1月
                  </span>
                  <Badge className="bg-[#111931] text-[#DDEF3F]">現在</Badge>
                </div>
                <p className="text-gray-600">
                  創業以来300社以上のプロジェクトを成功に導く。従業員数15名体制に。
                </p>
              </div>
            </div>
          </div> */}

          {/* アクセスセクション */}
          <div className="mb-24 overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="grid gap-0 md:grid-cols-2">
              <div
                data-aos="fade-right"
                className="flex flex-col justify-center p-8 md:p-12"
              >
                <div className="mb-4 flex items-center">
                  <div className="mr-3 inline-block rounded-md bg-[#111931] p-3 text-[#DDEF3F]">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <h3 className="font-montserrat text-3xl font-bold text-[#111931]">
                    <span className="text-[#DDEF3F]">アク</span>セス
                  </h3>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#DDEF3F]">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111931]">東京本社</h4>
                      <p className="text-gray-600">
                        〒161-0033
                        <br />
                        東京都新宿区下落合4-27-11
                        <br />
                        JR「目白駅」徒歩10分
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-[#DDEF3F]">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111931]">メール</h4>
                      <p className="text-gray-600">byakkokondo@gmail.com</p>
                    </div>
                  </div>
                </div>

                <Button className="w-fit bg-[#111931] hover:bg-[#1a2649]">
                  お問い合わせ
                </Button>
              </div>
              <div className="bg-gray-100">
                <div
                  data-aos="fade-left"
                  className="relative h-64 w-full md:h-full"
                >
                  <Image
                    src="/api/placeholder/800/600"
                    alt="オフィス地図"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* お問い合わせセクション */}
          <div className="mt-24 text-center" data-aos="fade-up">
            <h3 className="mb-6 font-montserrat text-2xl font-bold text-[#111931]">
              お気軽にお問い合わせください
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-gray-600">
              サービスに関するご質問や見積もりのご依頼など、
              お客様のニーズに合わせた最適なソリューションをご提案いたします。
            </p>
            <Button className="bg-[#DDEF3F] text-[#111931] hover:bg-[#c9da2e]">
              お問い合わせフォーム
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;

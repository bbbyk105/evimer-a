import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="py-24">
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
    </div>
  );
};

export default Contact;

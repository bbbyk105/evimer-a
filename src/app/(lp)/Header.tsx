import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full bg-[#111931] text-white shadow-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <Link href="/" className="hover:text-[#DDEF3F] transition-colors">
              <h1 className="text-2xl font-bold font-montserrat">
                <span className="text-[#DDEF3F]">Evi</span>mería
              </h1>
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8 font-montserrat">
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#DDEF3F] transition-colors"
                >
                  サービス
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="hover:text-[#DDEF3F] transition-colors"
                >
                  会社概要
                </Link>
              </li>
            </ul>
          </nav>
          <Link href="/contact">
            <Button
              variant="outline"
              className="hidden md:flex bg-transparent border-[#DDEF3F] text-[#DDEF3F] hover:bg-[#DDEF3F] hover:text-[#111931]"
            >
              お問い合わせ
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;

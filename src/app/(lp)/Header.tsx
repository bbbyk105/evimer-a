"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { HiMenu, HiX, HiChevronRight } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#111931]/95 backdrop-blur-md border-b border-white/10 text-white shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="group flex items-center space-x-2 hover:text-[#DDEF3F] transition-all duration-300"
          >
            <div className="flex items-center">
              <h1 className="text-2xl font-bold font-montserrat tracking-tight">
                <span className="text-[#DDEF3F] group-hover:text-white transition-colors duration-300">
                  Evi
                </span>
                <span className="group-hover:text-[#DDEF3F] transition-colors duration-300">
                  mería
                </span>
              </h1>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8 font-montserrat">
            <li>
              <Link
                href="/"
                className="relative text-sm font-medium hover:text-[#DDEF3F] transition-all duration-300 group"
              >
                ホーム
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#DDEF3F] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="relative text-sm font-medium hover:text-[#DDEF3F] transition-all duration-300 group"
              >
                サービス
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#DDEF3F] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/company"
                className="relative text-sm font-medium hover:text-[#DDEF3F] transition-all duration-300 group"
              >
                会社概要
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#DDEF3F] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <Link href="/contact">
            <Button
              variant="outline"
              className="bg-transparent border-[#DDEF3F] text-[#DDEF3F] hover:bg-[#DDEF3F] hover:text-[#111931] transition-all duration-300 font-montserrat font-medium px-6 py-2 text-sm shadow-lg hover:shadow-[#DDEF3F]/25"
            >
              お問い合わせ
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-[#DDEF3F] hover:bg-white/10 relative z-[60]"
            >
              <HiMenu className="h-6 w-6" />
              <span className="sr-only">メニューを開く</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full h-full bg-gradient-to-br from-[#111931] via-[#1a2147] to-[#0f1629] border-none text-white p-0 overflow-hidden [&>button]:hidden"
          >
            <SheetTitle className="sr-only">メニュー</SheetTitle>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-10 w-32 h-32 border border-[#DDEF3F] rounded-full animate-pulse"></div>
              <div className="absolute top-60 right-16 w-24 h-24 border border-[#DDEF3F]/50 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-40 left-20 w-16 h-16 border border-[#DDEF3F]/30 rounded-full animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 pt-8">
                <Link
                  href="/"
                  className="flex items-center hover:text-[#DDEF3F] transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  <h1 className="text-2xl font-bold font-montserrat">
                    <span className="text-[#DDEF3F]">Evi</span>mería
                  </h1>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[#DDEF3F] hover:bg-white/10 relative z-[70]"
                  onClick={() => setIsOpen(false)}
                >
                  <HiX className="h-6 w-6" />
                  <span className="sr-only">メニューを閉じる</span>
                </Button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 flex flex-col justify-center px-6 space-y-2">
                {[
                  { href: "/", label: "ホーム", delay: "100ms" },
                  { href: "/#services", label: "サービス", delay: "200ms" },
                  { href: "/company", label: "会社概要", delay: "300ms" },
                  {
                    href: "/contact",
                    label: "お問い合わせ",
                    delay: "400ms",
                    special: true,
                  },
                ].map((item) => (
                  <div
                    key={item.href}
                    className={`transform transition-all duration-500 ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: item.delay }}
                  >
                    <Link
                      href={item.href}
                      className={`group flex items-center justify-between py-4 px-4 text-lg font-medium transition-all duration-300 hover:bg-white/5 rounded-2xl border border-transparent hover:border-white/10 ${
                        item.special
                          ? "bg-gradient-to-r from-[#DDEF3F]/10 to-transparent border-[#DDEF3F]/30 text-[#DDEF3F]"
                          : "hover:text-[#DDEF3F]"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-montserrat">{item.label}</span>
                      <HiChevronRight
                        className={`h-6 w-6 transition-all duration-300 group-hover:translate-x-1 ${
                          item.special
                            ? "text-[#DDEF3F]"
                            : "text-white/40 group-hover:text-[#DDEF3F]"
                        }`}
                      />
                    </Link>
                  </div>
                ))}
              </nav>

              {/* Footer Section */}
              <div className="p-6 space-y-4">
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="text-center">
                  <p className="text-sm text-white/60 font-montserrat">
                    Transform your business with
                  </p>
                  <p className="text-lg font-bold text-[#DDEF3F] font-montserrat">
                    Evimería
                  </p>
                </div>
              </div>
            </div>

            {/* Ambient Light Effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#DDEF3F]/10 rounded-full blur-3xl -translate-y-48 translate-x-48 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DDEF3F]/5 rounded-full blur-3xl translate-y-40 -translate-x-40"></div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

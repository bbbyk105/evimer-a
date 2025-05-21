import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#111931] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-bold font-montserrat">
                <span className="text-[#DDEF3F]">Evi</span>mería
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
    </div>
  );
};

export default Footer;

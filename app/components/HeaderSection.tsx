import Link from "next/link";
import React from "react";
import { ShoppingCart, User } from "lucide-react";
const HeaderSection = () => {
  return (
    <nav className="flex items-center justify-between ">
      <div className="flex items-center">
        <Link href="/" className="text-[#FF5733] font-bold text-xl">
          <img src="/landingPage/Logo.png" alt="" />
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <Link
          href="/"
          className="hover:text-[#FF5733] font-semibold transition-colors"
        >
          Home
        </Link>

        <div className="relative group">
          <Link
            href="/services"
            className="hover:text-[#FF5733] font-semibold  transition-colors"
          >
            About
          </Link>
          <div className="absolute left-0 mt-2 w-36 bg-[#1A1A1A] rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
            <Link
              href="/services/lenka"
              className="block px-4 py-2  hover:bg-[#252525]"
            >
              Lenka
            </Link>
            <Link
              href="/services/classes"
              className="block px-4 py-2 hover:bg-[#252525]"
            >
              Classes
            </Link>
            <Link
              href="/services/sessions"
              className="block px-4 py-2 hover:bg-[#252525]"
            >
              Sessions
            </Link>
          </div>
        </div>
        <Link
          href="/about"
          className="hover:text-[#FF5733] font-semibold  transition-colors"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="hover:text-[#FF5733] font-semibold  transition-colors"
        >
          Contact
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button aria-label="Shopping cart">
          <ShoppingCart className="h-5 w-5" />
        </button>
        <button aria-label="User account">
          <User className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
};

export default HeaderSection;

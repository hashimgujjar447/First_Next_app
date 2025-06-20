import Image from "next/image";
import { Facebook, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Social Media Section */}
          <div className="space-y-6  ">
            <div>
              <Image
                src="/landingPage/Logo.png"
                alt="Coach Lenkai Logo"
                width={200}
                height={60}
                className="mb-6"
              />
            </div>

            <div className="flex space-x-4 mb-12 pb-10">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-900" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-900" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5 text-gray-900"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Subscribe to our newsletter!
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="flex-1 bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
                <button
                  type="submit"
                  className="ml-4 text-orange-500 hover:text-orange-400 transition-colors"
                  aria-label="Subscribe"
                >
                  <img
                    src="/landingPage/topRightCornerArrow.png"
                    alt="top right arrow"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick links
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* News */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-6 text-white">News</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Fitness Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Fitness Services */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Fitness Services
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Book a Free Consultation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Refer a Friend & Earn Rewards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Membership & Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 SMB DigitalZone. All right reserved
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Legal Notice
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#06060e]">
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 no-underline mb-4">
              <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-extrabold text-[13px] tracking-tight">
                D2P
              </div>
              <span className="text-white font-bold text-[17px] tracking-tight">
                Drop2Print
              </span>
            </Link>
            <p className="text-gray-500 text-[13px] leading-relaxed max-w-[240px]">
              Upload, print, and pick up — all from your phone. The easiest way
              to print documents nearby.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/80 text-[13px] font-semibold uppercase tracking-wider mb-4">
              Product
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/how-it-works" className="text-gray-500 hover:text-white text-[13.5px] no-underline transition-colors">
                How It Works
              </Link>
              <Link to="/shops" className="text-gray-500 hover:text-white text-[13.5px] no-underline transition-colors">
                Find Shops
              </Link>
              <a href="https://play.google.com/store/apps/details?id=com.drop2print.app" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-[13.5px] no-underline transition-colors">
                Download App
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white/80 text-[13px] font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/contact" className="text-gray-500 hover:text-white text-[13.5px] no-underline transition-colors">
                Contact
              </Link>
              <Link to="/privacy" className="text-gray-500 hover:text-white text-[13.5px] no-underline transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white/80 text-[13px] font-semibold uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:support@drop2print.com" className="text-gray-500 hover:text-white text-[13.5px] no-underline transition-colors">
                support@drop2print.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-gray-600 text-[12.5px]">
            © 2026 Drop2Print. All rights reserved.
          </span>
          <span className="text-gray-600 text-[12.5px]">
            Governed by the laws of India.
          </span>
        </div>
      </div>
    </footer>
  );
}

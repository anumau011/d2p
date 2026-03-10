import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Upload,
  Printer,
  MapPin,
  Zap,
  Shield,
  Clock,
  ChevronRight,
  Star,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  {
    icon: <Upload size={22} />,
    title: "Upload Documents",
    desc: "Upload PDFs, images, or docs directly from your phone or computer.",
  },
  {
    icon: <Printer size={22} />,
    title: "Instant Printing",
    desc: "Your files are sent to the nearest print shop — ready in minutes.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Nearby Pickup",
    desc: "Find the closest print shop and pick up your documents on the go.",
  },
  {
    icon: <Zap size={22} />,
    title: "Lightning Fast",
    desc: "No waiting in line. Place your order remotely and walk in to collect.",
  },
  {
    icon: <Shield size={22} />,
    title: "Secure & Private",
    desc: "Files are encrypted and auto-deleted after order completion.",
  },
  {
    icon: <Clock size={22} />,
    title: "24/7 Access",
    desc: "Place orders anytime. Print shops handle them during business hours.",
  },
];

const steps = [
  { num: "01", title: "Upload", desc: "Choose your documents and print settings" },
  { num: "02", title: "Select Shop", desc: "Pick a nearby print shop from the map" },
  { num: "03", title: "Pay & Print", desc: "Pay securely and your order starts printing" },
  { num: "04", title: "Pick Up", desc: "Walk in and collect your printed documents" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-200 font-[Inter,-apple-system,BlinkMacSystemFont,sans-serif]">
      <Helmet>
        <title>Drop2Print — Upload, Print & Pick Up Near You</title>
        <meta
          name="description"
          content="Drop2Print lets you upload documents from your phone and print them at nearby shops. Fast, secure, and hassle-free printing."
        />
        <link rel="canonical" href="https://www.drop2print.com/" />
      </Helmet>

      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-40 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 md:px-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
            Now Available on Android
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
            <span className="text-white">Print Documents</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              From Anywhere
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Upload your files, choose a nearby print shop, and pick up your
            documents — all from your phone. No more waiting in lines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.drop2print.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-[15px] no-underline shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302-2.302 2.302-2.697-2.302 2.697-2.302zM5.864 3.469L16.8 9.802 14.5 12.104 5.864 3.469z" />
              </svg>
              Get it on Google Play
            </a>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 font-semibold text-[15px] no-underline transition-all duration-200 hover:-translate-y-0.5"
            >
              How It Works
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS (mini) ===== */}
      <section className="py-20 md:py-28 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-indigo-400 text-[13px] font-semibold uppercase tracking-wider mb-3">
              Simple Process
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
              Four easy steps to print
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-indigo-500/30 hover:bg-indigo-500/[0.04] transition-all duration-300"
              >
                <div className="text-[40px] font-extrabold text-white/[0.06] absolute top-4 right-5 group-hover:text-indigo-500/20 transition-colors">
                  {step.num}
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-[13px] mb-4 shadow-lg shadow-indigo-500/20">
                  {step.num}
                </div>
                <h3 className="text-white font-semibold text-[16px] mb-1.5">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-[13.5px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-20 md:py-28 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-indigo-400 text-[13px] font-semibold uppercase tracking-wider mb-3">
              Why Drop2Print
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
              Everything you need to print smarter
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-indigo-500/30 hover:bg-indigo-500/[0.04] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-white font-semibold text-[15.5px] mb-1.5">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-[13.5px] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 md:py-28 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-indigo-400 text-[13px] font-semibold uppercase tracking-wider mb-3">
              Testimonials
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
              Loved by students & professionals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "Priya S.",
                role: "College Student",
                text: "Drop2Print saved me during exam week. I uploaded my notes from the hostel and picked up prints on the way to class!",
              },
              {
                name: "Rahul M.",
                role: "Freelancer",
                text: "As someone who needs frequent printouts for clients, this app is a game-changer. Fast, reliable, and no line waiting.",
              },
              {
                name: "Ananya K.",
                role: "Small Business Owner",
                text: "I print invoices and flyers weekly. Drop2Print makes it effortless — just upload and pick up. Love it!",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07]"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-400 text-[14px] leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-[14px]">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-[12.5px]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to print smarter?
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto mb-8">
            Download Drop2Print and start printing documents at nearby shops in
            minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.drop2print.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-[15px] no-underline shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              Download Now
              <ArrowRight size={18} />
            </a>
            <Link
              to="/shops"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 font-semibold text-[15px] no-underline transition-all duration-200"
            >
              Find Shops Near You
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

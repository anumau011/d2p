import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Upload,
  Search,
  CreditCard,
  Package,
  FileText,
  Settings,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Store,
  Printer,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const steps = [
  {
    num: "01",
    icon: <Upload size={28} />,
    title: "Upload Your Documents",
    desc: "Open the Drop2Print app and upload your files — PDFs, images, Word documents, and more. You can upload directly from your phone's gallery, file manager, or cloud storage.",
    details: [
      "Supports PDF, JPG, PNG, DOCX formats",
      "Upload up to 50 pages at once",
      "Preview your documents before ordering",
    ],
  },
  {
    num: "02",
    icon: <Settings size={28} />,
    title: "Choose Print Settings",
    desc: "Customize exactly how you want your documents printed. Select page range, number of copies, color or black & white, single or double-sided, and paper size.",
    details: [
      "Color or Black & White printing",
      "A4, A3, and Letter paper sizes",
      "Single-sided or Double-sided",
    ],
  },
  {
    num: "03",
    icon: <Search size={28} />,
    title: "Find a Nearby Shop",
    desc: "Browse print shops near your location on an interactive map. Compare prices, check ratings, and see estimated wait times before selecting your preferred shop.",
    details: [
      "Live map with nearby print shops",
      "See pricing and customer ratings",
      "Check shop hours and availability",
    ],
  },
  {
    num: "04",
    icon: <CreditCard size={28} />,
    title: "Pay Securely",
    desc: "Complete your order with secure payment through Razorpay. We support UPI, debit/credit cards, net banking, and popular digital wallets.",
    details: [
      "Powered by Razorpay for secure payments",
      "UPI, cards, net banking supported",
      "Instant payment confirmation",
    ],
  },
  {
    num: "05",
    icon: <Printer size={28} />,
    title: "Shop Prints Your Order",
    desc: "The selected print shop receives your order instantly and begins printing your documents. Track the status of your order in real-time from the app.",
    details: [
      "Real-time order status tracking",
      "Notifications when order is ready",
      "Direct chat with shop if needed",
    ],
  },
  {
    num: "06",
    icon: <Package size={28} />,
    title: "Pick Up & Go",
    desc: "Walk into the shop and pick up your printed documents. Show your order ID or QR code for quick handover. It's that simple!",
    details: [
      "Quick pickup with Order ID or QR",
      "Documents ready within minutes",
      "No standing in queues",
    ],
  },
];

const faqs = [
  {
    q: "What file formats are supported?",
    a: "We support PDF, JPG, PNG, and DOCX files. More formats coming soon.",
  },
  {
    q: "How long does printing take?",
    a: "Most orders are ready within 5–15 minutes after payment, depending on the shop and queue.",
  },
  {
    q: "Is my document data secure?",
    a: "Yes. All files are encrypted during transfer and automatically deleted from our servers after order completion.",
  },
  {
    q: "Can I cancel an order?",
    a: "You can cancel before the shop starts printing. Once printing begins, cancellation may not be possible.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept UPI, debit/credit cards, net banking, and digital wallets through Razorpay.",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-200 font-[Inter,-apple-system,BlinkMacSystemFont,sans-serif]">
      <Helmet>
        <title>How It Works — Drop2Print</title>
        <meta
          name="description"
          content="Learn how Drop2Print works. Upload documents, choose a nearby print shop, pay securely, and pick up your prints in minutes."
        />
        <link rel="canonical" href="https://www.drop2print.com/how-it-works" />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-5 md:px-10 text-center">
          <p className="text-indigo-400 text-[13px] font-semibold uppercase tracking-wider mb-4">
            How It Works
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            From upload to pickup
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              in minutes
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Drop2Print makes printing as easy as ordering food. Here&apos;s a
            step-by-step look at how it works.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent hidden md:block" />

            <div className="flex flex-col gap-8 md:gap-12">
              {steps.map((step, i) => (
                <div key={i} className="relative flex gap-5 md:gap-8">
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-indigo-400/60 text-[12px] font-bold tracking-wider">
                        STEP {step.num}
                      </span>
                    </div>
                    <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-[14.5px] leading-relaxed mb-4 max-w-lg">
                      {step.desc}
                    </p>
                    <div className="flex flex-col gap-2">
                      {step.details.map((d, di) => (
                        <div
                          key={di}
                          className="flex items-center gap-2.5 text-[13px] text-gray-500"
                        >
                          <CheckCircle
                            size={15}
                            className="text-green-400/70 flex-shrink-0"
                          />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Users & Shops */}
      <section className="py-16 md:py-24 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {/* For Users */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-5">
                <Smartphone size={24} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">For Users</h3>
              <p className="text-gray-400 text-[14px] leading-relaxed mb-5">
                Download the Drop2Print app, create an account, and start
                printing remotely. No more running to print shops with USB
                drives.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.drop2print.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 text-[14px] font-semibold no-underline hover:text-indigo-300 transition-colors"
              >
                Download the App <ArrowRight size={16} />
              </a>
            </div>

            {/* For Shop Owners */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5">
                <Store size={24} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">
                For Print Shops
              </h3>
              <p className="text-gray-400 text-[14px] leading-relaxed mb-5">
                Partner with Drop2Print to receive remote print orders, grow
                your customer base, and streamline your printing workflow.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-purple-400 text-[14px] font-semibold no-underline hover:text-purple-300 transition-colors"
              >
                Become a Partner <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <div className="text-center mb-12">
            <p className="text-indigo-400 text-[13px] font-semibold uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.07]"
              >
                <h4 className="text-white font-semibold text-[15px] mb-2 flex items-start gap-3">
                  <FileText
                    size={16}
                    className="text-indigo-400 mt-0.5 flex-shrink-0"
                  />
                  {faq.q}
                </h4>
                <p className="text-gray-400 text-[14px] leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
            Ready to try it?
          </h2>
          <p className="text-gray-400 text-[15px] max-w-md mx-auto mb-8">
            Download Drop2Print and experience the easiest way to print
            documents near you.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.drop2print.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-[15px] no-underline shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Started Free
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

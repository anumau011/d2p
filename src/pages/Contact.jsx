import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contactInfo = [
  {
    icon: <Mail size={22} />,
    title: "Email Us",
    value: "support@drop2print.com",
    desc: "We respond within 24 hours",
    href: "mailto:support@drop2print.com",
  },
  {
    icon: <Phone size={22} />,
    title: "Call Us",
    value: "+91-XXXXX-XXXXX",
    desc: "Mon – Sat, 9 AM – 6 PM IST",
    href: null,
  },
  {
    icon: <MapPin size={22} />,
    title: "Location",
    value: "India",
    desc: "Serving print shops across India",
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-200 font-[Inter,-apple-system,BlinkMacSystemFont,sans-serif]">
      <Helmet>
        <title>Contact Us — Drop2Print</title>
        <meta
          name="description"
          content="Get in touch with Drop2Print. Have questions, feedback, or want to partner with us? Reach out and we'll get back to you."
        />
        <link rel="canonical" href="https://www.drop2print.com/contact" />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[400px] bg-indigo-500/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-5 md:px-10 text-center">
          <p className="text-indigo-400 text-[13px] font-semibold uppercase tracking-wider mb-4">
            Contact Us
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Get in{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              touch
            </span>
          </h1>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Have a question, feedback, or want to partner with us? We&apos;d
            love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] text-center hover:border-indigo-500/25 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-white font-semibold text-[15px] mb-1">
                  {info.title}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-indigo-400 text-[14px] font-medium no-underline hover:text-indigo-300 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-300 text-[14px] font-medium">
                    {info.value}
                  </p>
                )}
                <p className="text-gray-500 text-[12.5px] mt-1">{info.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Left info */}
            <div className="md:col-span-2">
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4">
                Send us a message
              </h2>
              <p className="text-gray-400 text-[14px] leading-relaxed mb-8">
                Fill out the form and our team will get back to you within 24
                hours. We&apos;re here to help with anything.
              </p>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <p className="text-white text-[13.5px] font-semibold">
                      Quick Support
                    </p>
                    <p className="text-gray-500 text-[12.5px]">
                      Typical response within 2 hours during business hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="text-white text-[13.5px] font-semibold">
                      Business Hours
                    </p>
                    <p className="text-gray-500 text-[12.5px]">
                      Monday – Saturday, 9 AM – 6 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="p-10 rounded-2xl bg-white/[0.02] border border-green-500/20 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center mx-auto mb-5">
                    <Send size={28} />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 text-[14px] max-w-sm mx-auto">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-6 px-5 py-2.5 rounded-lg bg-white/[0.06] border border-white/[0.1] text-gray-300 text-[13px] font-semibold cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07]"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-400 text-[12.5px] font-semibold mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-[14px] placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-[12.5px] font-semibold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-[14px] placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/40 transition-all"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-400 text-[12.5px] font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-[14px] placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/40 transition-all"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-400 text-[12.5px] font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us more about your query..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-[14px] placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/40 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-[14px] cursor-pointer shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 border-none"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-16 md:py-20 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-indigo-500/[0.06] to-purple-500/[0.06] border border-indigo-500/15">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-white text-xl font-bold mb-2">
                  Own a print shop?
                </h3>
                <p className="text-gray-400 text-[14px] max-w-md leading-relaxed">
                  Partner with Drop2Print to receive remote print orders and
                  grow your customer base. Join our network of printing
                  partners.
                </p>
              </div>
              <a
                href="mailto:partners@drop2print.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-[14px] no-underline shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
              >
                Become a Partner
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

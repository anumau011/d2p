import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Phone,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-200 font-[Inter,-apple-system,BlinkMacSystemFont,sans-serif]">
      <Helmet>
        <title>{mode === "login" ? "Sign In" : "Sign Up"} — Drop2Print</title>
        <meta
          name="description"
          content="Sign in or create your Drop2Print account to start printing documents at nearby shops."
        />
        <link rel="canonical" href="https://www.drop2print.com/login" />
      </Helmet>

      <Navbar />

      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-32 px-5 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-4 shadow-lg shadow-indigo-500/30">
              D2P
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
              {mode === "login" ? "Welcome back" : "Create your account"}
            </h1>
            <p className="text-gray-400 text-[14px]">
              {mode === "login"
                ? "Sign in to your Drop2Print account"
                : "Get started with Drop2Print for free"}
            </p>
          </div>

          {/* Toggle */}
          <div className="flex bg-white/[0.04] border border-white/[0.08] rounded-xl p-1 mb-7">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2.5 rounded-lg text-[13.5px] font-semibold cursor-pointer transition-all border-none ${
                mode === "login"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-2.5 rounded-lg text-[13.5px] font-semibold cursor-pointer transition-all border-none ${
                mode === "signup"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {mode === "signup" && (
              <div>
                <label className="block text-gray-400 text-[12.5px] font-semibold mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-[14px] placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.06] transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-gray-400 text-[12.5px] font-semibold mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-[14px] placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.06] transition-all"
                />
              </div>
            </div>

            {mode === "signup" && (
              <div>
                <label className="block text-gray-400 text-[12.5px] font-semibold mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-[14px] placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.06] transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-gray-400 text-[12.5px] font-semibold">
                  Password
                </label>
                {mode === "login" && (
                  <button
                    type="button"
                    className="text-indigo-400 text-[12px] font-medium bg-transparent border-none cursor-pointer hover:text-indigo-300 transition-colors"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-[14px] placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.06] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 bg-transparent border-none cursor-pointer transition-colors"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-[15px] cursor-pointer shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 border-none"
            >
              {mode === "login" ? "Sign In" : "Create Account"}
              <ArrowRight size={17} />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/[0.07]" />
            <span className="text-gray-500 text-[12px] font-medium">
              OR
            </span>
            <div className="flex-1 h-px bg-white/[0.07]" />
          </div>

          {/* Social Login */}
          <button
            type="button"
            className="w-full py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-gray-300 font-semibold text-[14px] cursor-pointer hover:bg-white/[0.08] hover:border-white/20 transition-all flex items-center justify-center gap-3"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Footer text */}
          <p className="text-center text-gray-500 text-[12.5px] mt-6 leading-relaxed">
            By continuing, you agree to our{" "}
            <Link
              to="/privacy"
              className="text-indigo-400 no-underline hover:text-indigo-300"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="text-indigo-400 no-underline hover:text-indigo-300"
            >
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  MapPin,
  Search,
  Star,
  Clock,
  Phone,
  Navigation,
  Printer,
  Filter,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sampleShops = [
  {
    name: "PrintHub Express",
    area: "Koramangala, Bangalore",
    rating: 4.8,
    reviews: 124,
    distance: "0.5 km",
    hours: "8 AM – 10 PM",
    services: ["Color Print", "B&W", "Binding", "Lamination"],
    status: "Open",
  },
  {
    name: "QuickPrint Station",
    area: "HSR Layout, Bangalore",
    rating: 4.6,
    reviews: 89,
    distance: "1.2 km",
    hours: "9 AM – 9 PM",
    services: ["Color Print", "B&W", "Scanning"],
    status: "Open",
  },
  {
    name: "Campus Copy Center",
    area: "Indiranagar, Bangalore",
    rating: 4.9,
    reviews: 203,
    distance: "2.1 km",
    hours: "7 AM – 11 PM",
    services: ["Color Print", "B&W", "Binding", "A3 Print"],
    status: "Open",
  },
  {
    name: "Digital Print Works",
    area: "BTM Layout, Bangalore",
    rating: 4.4,
    reviews: 56,
    distance: "3.0 km",
    hours: "10 AM – 8 PM",
    services: ["Color Print", "B&W", "Photo Print"],
    status: "Closed",
  },
  {
    name: "SuperPrint Solutions",
    area: "Jayanagar, Bangalore",
    rating: 4.7,
    reviews: 145,
    distance: "3.5 km",
    hours: "8 AM – 9 PM",
    services: ["Color Print", "B&W", "Binding", "Lamination", "Scanning"],
    status: "Open",
  },
  {
    name: "EcoPrint Hub",
    area: "Whitefield, Bangalore",
    rating: 4.5,
    reviews: 78,
    distance: "5.2 km",
    hours: "9 AM – 8 PM",
    services: ["B&W", "Scanning", "Binding"],
    status: "Open",
  },
];

export default function FindShops() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = sampleShops.filter((shop) => {
    const matchesSearch =
      shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.area.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "open" && shop.status === "Open") ||
      (filter === "top" && shop.rating >= 4.7);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-200 font-[Inter,-apple-system,BlinkMacSystemFont,sans-serif]">
      <Helmet>
        <title>Find Print Shops — Drop2Print</title>
        <meta
          name="description"
          content="Find nearby print shops on Drop2Print. Browse shops by location, rating, and services. Print your documents at the closest shop."
        />
        <link rel="canonical" href="https://www.drop2print.com/shops" />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[400px] bg-indigo-500/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10">
            <p className="text-indigo-400 text-[13px] font-semibold uppercase tracking-wider mb-4">
              Find Shops
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Print shops{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                near you
              </span>
            </h1>
            <p className="text-gray-400 text-base max-w-lg mx-auto">
              Browse nearby print shops, compare prices and ratings, and place
              your order — all within the Drop2Print app.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 mb-8">
            <div className="flex-1 relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                placeholder="Search by shop name or area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white text-[14px] placeholder:text-gray-500 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.06] transition-all"
              />
            </div>
            <div className="flex gap-2">
              {[
                { value: "all", label: "All" },
                { value: "open", label: "Open Now" },
                { value: "top", label: "Top Rated" },
              ].map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 py-3 rounded-xl text-[13px] font-semibold border transition-all cursor-pointer ${
                    filter === f.value
                      ? "bg-indigo-500/15 border-indigo-500/30 text-indigo-300"
                      : "bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder + Shop List */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          {/* Map Placeholder */}
          <div className="mb-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] overflow-hidden">
            <div className="h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-indigo-500/5 to-purple-500/5 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Grid pattern */}
                <div
                  className="w-full h-full opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>
              <div className="relative text-center">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-4">
                  <MapPin size={28} />
                </div>
                <p className="text-white font-semibold text-[16px] mb-1">
                  Interactive Map
                </p>
                <p className="text-gray-500 text-[13px]">
                  Available in the Drop2Print app — download to explore shops on
                  a live map
                </p>
              </div>
            </div>
          </div>

          {/* Shop Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((shop, i) => (
              <div
                key={i}
                className="group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-indigo-500/25 hover:bg-indigo-500/[0.03] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-[15px] mb-1">
                      {shop.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-500 text-[12.5px]">
                      <MapPin size={12} />
                      {shop.area}
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                      shop.status === "Open"
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                  >
                    {shop.status}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4 text-[12.5px]">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={13} className="fill-yellow-400" />
                    <span className="font-semibold">{shop.rating}</span>
                    <span className="text-gray-500">({shop.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Navigation size={12} />
                    {shop.distance}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock size={12} />
                    {shop.hours}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {shop.services.map((s, si) => (
                    <span
                      key={si}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] font-medium text-gray-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Printer
                size={40}
                className="text-gray-600 mx-auto mb-4"
              />
              <p className="text-gray-400 text-[15px] font-medium">
                No shops found matching your search.
              </p>
              <p className="text-gray-500 text-[13px] mt-1">
                Try a different search term or filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-16 md:py-20 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
            Explore all shops in the app
          </h2>
          <p className="text-gray-400 text-[15px] max-w-md mx-auto mb-8">
            Get the full experience with live maps, real-time availability, and
            instant ordering on your phone.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.drop2print.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-[15px] no-underline shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200"
          >
            Download Drop2Print
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

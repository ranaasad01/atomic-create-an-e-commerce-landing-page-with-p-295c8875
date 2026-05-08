import Link from "next/link";
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section aria-label="Promotional hero" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full">
              <Star size={13} fill="currentColor" />
              Summer Sale — Up to 40% Off
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Discover Products
              <br />
              <span className="text-indigo-400">You Will Love</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-md leading-relaxed">
              Curated collections across electronics, fashion, home, sports, and beauty — delivered fast with free returns.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shadow-lg shadow-indigo-600/30"
              >
                Shop Now
                <ArrowRight size={16} />
              </a>
              <Link
                href="/cart"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition-colors duration-200"
              >
                View Cart
              </Link>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { label: "Free Shipping", sub: "Orders over $75" },
                { label: "Easy Returns", sub: "30-day policy" },
                { label: "Secure Pay", sub: "256-bit SSL" },
              ].map((b) => (
                <div key={b.label} className="flex flex-col">
                  <span className="text-white font-semibold text-sm">{b.label}</span>
                  <span className="text-slate-400 text-xs">{b.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://media.essence.com/vxcjywbwpa/uploads/2025/12/lifestyle-products-on-WeLoveUs-Shop-1200x900.jpg"
                alt="Curated lifestyle products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center shrink-0">
                <Star size={18} className="text-slate-900" fill="currentColor" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Customer Rating</p>
                <p className="text-sm font-bold text-slate-900">4.8 / 5.0 · 50k+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offer strip */}
      <div className="relative bg-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm font-medium text-slate-900">
          <span>🚚 Free shipping on orders over $75</span>
          <span className="hidden sm:inline">·</span>
          <span>🎁 Gift wrapping available</span>
          <span className="hidden sm:inline">·</span>
          <span>🔄 30-day hassle-free returns</span>
        </div>
      </div>
    </section>
  );
}

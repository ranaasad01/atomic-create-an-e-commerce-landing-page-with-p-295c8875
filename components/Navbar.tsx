"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Search, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from "@/context/CartContext";
import { CATEGORIES } from "@/lib/products";

type Props = {
  searchQuery: string;
  onSearchChange: (q: string) => void;
};

export default function Navbar({ searchQuery, onSearchChange }: Props) {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Datics AI</span>
          </Link>

          {/* Search bar — desktop */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search products…"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              aria-label="Search products"
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              aria-label={"Shopping cart, " + String(totalItems) + " items"}
              className="relative p-2 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <ShoppingCart size={22} className="text-slate-700" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 animate-bounce-once">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
            {/* Mobile menu toggle */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Category nav — desktop */}
        <nav aria-label="Product categories" className="hidden md:flex items-center gap-1 pb-2 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <a
              key={cat}
              href={"#" + cat.toLowerCase()}
              className="px-3 py-1 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors whitespace-nowrap"
            >
              {cat}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pb-4 pt-3 space-y-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search products…"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              aria-label="Search products"
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <nav className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <a
                key={cat}
                href={"#" + cat.toLowerCase()}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-1.5 text-sm text-slate-600 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
              >
                {cat}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingCart, ArrowLeft, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function CartPage() {
  const { items, subtotal, totalItems, clear } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const shipping = subtotal >= 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
              <ArrowLeft size={14} />
              Continue Shopping
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Shopping Cart</span>
          </nav>

          <h1 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
            <ShoppingCart size={28} className="text-indigo-600" />
            Your Cart
            {totalItems > 0 && (
              <span className="text-base font-normal text-slate-500">
                ({totalItems} {totalItems === 1 ? "item" : "items"})
              </span>
            )}
          </h1>

          {items.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-24 text-center bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mb-6">
                <ShoppingBag size={36} className="text-indigo-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
              <p className="text-slate-500 text-sm max-w-xs mb-8">
                Looks like you haven&apos;t added anything yet. Explore our products and find something you love!
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Browse Products
                <ArrowRight size={15} />
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm px-6">
                  <div className="flex items-center justify-between py-4 border-b border-slate-100">
                    <h2 className="font-semibold text-slate-900">
                      {totalItems} {totalItems === 1 ? "Item" : "Items"}
                    </h2>
                    <button
                      onClick={clear}
                      className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-rose-500 transition-colors"
                    >
                      <Trash2 size={13} />
                      Clear all
                    </button>
                  </div>
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sticky top-24">
                  <h2 className="font-bold text-slate-900 text-lg mb-6">Order Summary</h2>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-slate-600">
                      <span>Subtotal ({totalItems} items)</span>
                      <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Shipping</span>
                      {shipping === 0 ? (
                        <span className="text-emerald-600 font-medium">Free</span>
                      ) : (
                        <span className="font-medium text-slate-900">${shipping.toFixed(2)}</span>
                      )}
                    </div>
                    {shipping > 0 && (
                      <p className="text-xs text-indigo-600 bg-indigo-50 rounded-lg px-3 py-2">
                        Add ${(75 - subtotal).toFixed(2)} more for free shipping!
                      </p>
                    )}
                    <div className="flex justify-between text-slate-600">
                      <span>Estimated Tax (8%)</span>
                      <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-slate-100 pt-3 flex justify-between font-bold text-slate-900 text-base">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-200"
                    aria-label="Proceed to checkout"
                  >
                    Checkout
                    <ArrowRight size={16} />
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                    <span>🔒</span>
                    <span>Secure 256-bit SSL checkout</span>
                  </div>

                  {/* Payment icons */}
                  <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
                    {["Visa", "MC", "PayPal", "Apple Pay"].map((p) => (
                      <span
                        key={p}
                        className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-500 font-medium"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

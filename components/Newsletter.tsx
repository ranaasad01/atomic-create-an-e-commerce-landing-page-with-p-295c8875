"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section aria-label="Newsletter signup" className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-2xl">
            <Mail size={22} className="text-white" />
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Get Exclusive Deals First
          </h2>
          <p className="text-indigo-200 text-base">
            Join 120,000+ shoppers and receive early access to sales, new arrivals, and members-only discounts.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 bg-white/20 rounded-2xl py-4 px-6">
              <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                <Check size={16} className="text-white" />
              </div>
              <p className="text-white font-semibold">
                You&apos;re in! Check your inbox for a welcome discount.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={15} />
              </button>
            </form>
          )}

          <p className="text-indigo-300 text-xs">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

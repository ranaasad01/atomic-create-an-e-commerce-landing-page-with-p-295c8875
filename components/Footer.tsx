import Link from "next/link";
import { Sparkles, MessageCircle as Twitter, Code2 as Github, Globe as Facebook, Briefcase as Linkedin, Mail } from 'lucide-react';

const LINKS = {
  Shop: ["Electronics", "Clothing", "Home & Living", "Sports", "Beauty"],
  Company: ["About Us", "Careers", "Press", "Blog", "Sustainability"],
  Support: ["Help Center", "Track Order", "Returns", "Shipping Info", "Contact Us"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">Datics AI</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Curated products for modern living. Quality you can trust, delivered to your door.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
                { icon: Mail, label: "Email" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={14} className="text-slate-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="text-white font-semibold text-sm mb-4">{heading}</h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors duration-150"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Datics AI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>🔒 Secure Checkout</span>
            <span>💳 Visa · Mastercard · PayPal · Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
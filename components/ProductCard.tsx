"use client";

import { ShoppingCart, Heart } from 'lucide-react';
import { useState } from "react";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";

type Props = {
  product: Product;
};

const BADGE_STYLES: Record<string, string> = {
  Featured: "bg-indigo-600 text-white",
  Sale: "bg-amber-400 text-slate-900",
  New: "bg-emerald-500 text-white",
};

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  function handleAddToCart() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  const discount =
    product.originalPrice
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-slate-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge */}
        {product.badge && (
          <span
            className={"absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full " + BADGE_STYLES[product.badge]}
          >
            {product.badge === "Sale" && discount ? "-" + String(discount) + "%" : product.badge}
          </span>
        )}
        {/* Wishlist */}
        <button
          aria-label="Add to wishlist"
          onClick={() => setWishlisted((w) => !w)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110"
        >
          <Heart
            size={15}
            className={wishlisted ? "text-rose-500 fill-rose-500" : "text-slate-400"}
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <span className="text-xs font-medium text-indigo-600 uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2">
          {product.name}
        </h3>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />

        <div className="flex items-baseline gap-2 mt-auto pt-2">
          <span className="text-lg font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          aria-label={"Add " + product.name + " to cart"}
          className={
            "mt-1 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 " +
            (added
              ? "bg-emerald-500 text-white"
              : "bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95")
          }
        >
          <ShoppingCart size={15} />
          {added ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}

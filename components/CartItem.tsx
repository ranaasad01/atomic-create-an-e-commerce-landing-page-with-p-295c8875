"use client";

import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";

type Props = {
  item: CartItemType;
};

export default function CartItem({ item }: Props) {
  const { increment, decrement, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-5 border-b border-slate-100 last:border-0">
      {/* Image */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-50 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-xs font-medium text-indigo-600 uppercase tracking-wide">
              {item.category}
            </span>
            <h3 className="text-sm font-semibold text-slate-900 mt-0.5 line-clamp-2">
              {item.name}
            </h3>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            aria-label={"Remove " + item.name + " from cart"}
            className="p-1.5 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-500 transition-colors shrink-0"
          >
            <Trash2 size={15} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity controls */}
          <div className="flex items-center gap-1 bg-slate-100 rounded-xl p-1">
            <button
              onClick={() => decrement(item.id)}
              aria-label="Decrease quantity"
              className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <Minus size={12} />
            </button>
            <span className="w-8 text-center text-sm font-semibold text-slate-900">
              {item.quantity}
            </span>
            <button
              onClick={() => increment(item.id)}
              aria-label="Increase quantity"
              className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <Plus size={12} />
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-base font-bold text-slate-900">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
            {item.quantity > 1 && (
              <p className="text-xs text-slate-400">${item.price.toFixed(2)} each</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

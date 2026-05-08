import { Star } from 'lucide-react';

type Props = {
  rating: number;
  reviewCount?: number;
  size?: number;
};

export default function StarRating({ rating, reviewCount, size = 14 }: Props) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = rating >= star;
          const partial = !filled && rating > star - 1;
          const pct = partial ? String((rating - (star - 1)) * 100) + "%" : "100%";
          return (
            <span key={star} className="relative inline-block" style={{ width: size, height: size }}>
              <Star size={size} className="text-slate-200" fill="currentColor" />
              {(filled || partial) && (
                <span className="absolute inset-0 overflow-hidden" style={{ width: pct }}>
                  <Star size={size} className="text-amber-400" fill="currentColor" />
                </span>
              )}
            </span>
          );
        })}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-slate-500 ml-1">
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
}

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: "Featured" | "Sale" | "New";
  description: string;
};

export const CATEGORIES = ["All", "Electronics", "Clothing", "Home", "Sports", "Beauty"];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 249.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviewCount: 2341,
    image: "https://m.media-amazon.com/images/I/71YM2N5whtL.jpg",
    badge: "Sale",
    description: "Premium over-ear headphones with 30-hour battery life and adaptive noise cancellation.",
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    category: "Clothing",
    price: 189.00,
    rating: 4.6,
    reviewCount: 876,
    image: "https://www.peugeotwatches.com/cdn/shop/products/2059G-FV.jpg?v=1633106380&width=1500",
    badge: "Featured",
    description: "Slim profile watch with genuine leather strap and sapphire crystal glass.",
  },
  {
    id: 3,
    name: "Smart Home Speaker",
    category: "Electronics",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.5,
    reviewCount: 1543,
    image: "https://m.media-amazon.com/images/I/71t3ThqZSEL._AC_UF894,1000_QL80_.jpg",
    badge: "Sale",
    description: "360° room-filling sound with built-in voice assistant and multi-room audio.",
  },
  {
    id: 4,
    name: "Premium Yoga Mat",
    category: "Sports",
    price: 79.99,
    rating: 4.7,
    reviewCount: 654,
    image: "https://cdn.thewirecutter.com/wp-content/media/2024/07/yoga-mat-2048px-1629-3x2-1.jpg?auto=webp&quality=75&crop=4:3,smart&width=1024",
    badge: "New",
    description: "Non-slip eco-friendly mat with alignment lines and carrying strap.",
  },
  {
    id: 5,
    name: "Ceramic Pour-Over Coffee Set",
    category: "Home",
    price: 64.00,
    rating: 4.9,
    reviewCount: 432,
    image: "https://m.media-amazon.com/images/I/7159+ELcEOL._AC_UF894,1000_QL80_.jpg",
    badge: "Featured",
    description: "Handcrafted ceramic dripper with matching carafe and two mugs.",
  },
  {
    id: 6,
    name: "Retinol Night Cream",
    category: "Beauty",
    price: 54.99,
    originalPrice: 74.99,
    rating: 4.4,
    reviewCount: 1209,
    image: "https://i5.walmartimages.com/seo/Equate-Beauty-Retinol-Night-Cream-1-7-oz_8785c3d1-c322-4562-a57b-1bd5ae468831.e1baa221f7c55d345a5c6cb858f93532.jpeg",
    badge: "Sale",
    description: "Advanced anti-aging formula with 0.5% retinol and hyaluronic acid.",
  },
  {
    id: 7,
    name: "Ultralight Running Shoes",
    category: "Sports",
    price: 139.99,
    rating: 4.6,
    reviewCount: 987,
    image: "https://cdn.runrepeat.com/storage/gallery/buying_guide_primary/64/best-lightweight-running-shoes-001-22300149-main.jpg",
    badge: "New",
    description: "Carbon-fiber plate technology for maximum energy return on every stride.",
  },
  {
    id: 8,
    name: "Linen Button-Down Shirt",
    category: "Clothing",
    price: 89.00,
    rating: 4.3,
    reviewCount: 345,
    image: "https://cdn2.propercloth.com/pic_cs/6afa9a81efa66c6bd991f37290900baf_size6.jpg",
    description: "Breathable 100% linen in a relaxed fit, perfect for warm weather.",
  },
  {
    id: 9,
    name: "4K Portable Projector",
    category: "Electronics",
    price: 399.99,
    originalPrice: 499.99,
    rating: 4.7,
    reviewCount: 678,
    image: "https://m.media-amazon.com/images/I/51CnRBSVnrL.jpg",
    badge: "Sale",
    description: "Pocket-sized 4K projector with 3-hour battery and built-in streaming apps.",
  },
  {
    id: 10,
    name: "Scented Soy Candle Set",
    category: "Home",
    price: 42.00,
    rating: 4.8,
    reviewCount: 521,
    image: "https://m.media-amazon.com/images/I/71fT-Nd871L.jpg",
    badge: "Featured",
    description: "Set of 3 hand-poured soy candles in amber, cedar, and vanilla scents.",
  },
  {
    id: 11,
    name: "Vitamin C Serum",
    category: "Beauty",
    price: 38.99,
    rating: 4.5,
    reviewCount: 1876,
    image: "https://static.beautytocare.com/media/catalog/product/g/a/garnier-skin-active-vitamin-c-2-in-1-brightening-serum-cream-spf25-50ml.jpg",
    badge: "New",
    description: "20% vitamin C with ferulic acid for brightening and antioxidant protection.",
  },
  {
    id: 12,
    name: "Merino Wool Sweater",
    category: "Clothing",
    price: 119.00,
    originalPrice: 149.00,
    rating: 4.7,
    reviewCount: 432,
    image: "https://www.sweatershop.com/media/catalog/product/cache/2a3a8a0f8ca5c43cbada7421bb722618/7/2/721a9967.jpg",
    badge: "Sale",
    description: "Ultra-soft 100% merino wool in a classic crewneck silhouette.",
  },
];

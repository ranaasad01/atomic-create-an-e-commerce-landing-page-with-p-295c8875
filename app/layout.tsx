import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Datics AI",
  description:
    "Discover curated products across electronics, fashion, home, sports, and beauty. Free shipping on orders over $75.",
  openGraph: {
    title: "Datics AI",
    description: "Discover curated products across electronics, fashion, home, sports, and beauty.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white text-slate-900 antialiased"}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
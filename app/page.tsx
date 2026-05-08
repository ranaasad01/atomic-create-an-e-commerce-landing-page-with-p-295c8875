"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="bg-pink-50 min-h-screen">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Hero />
      <ProductGrid searchQuery={searchQuery} />
      <Newsletter />
      <Footer />
    </main>
  );
}
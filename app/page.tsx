"use client";

import { useState } from "react";

// Kategorilerin ID ve Türkçe/İngilizce isim tanımlamaları
const CATEGORIES = [
  { id: "corporate", label: "Plaza / İş", color: "border-purple-500 text-purple-400 bg-purple-500/10" },
  { id: "family", label: "Aile / Akraba", color: "border-blue-500 text-blue-400 bg-blue-500/10" },
  { id: "social", label: "Sosyal / Arkadaş", color: "border-emerald-500 text-emerald-400 bg-emerald-500/10" },
  { id: "love", label: "Aşk / Flört", color: "border-pink-500 text-pink-400 bg-pink-500/10" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("corporate");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-8 bg-zinc-950 antialiased text-zinc-100">
      
      {/* Üst Başlık Alanı */}
      <div className="w-full max-w-2xl text-center py-12">
        <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-purple-400 via-zinc-200 to-emerald-400 bg-clip-text text-transparent">
          Lie & Excuse Machine
        </h1>
        <p className="text-zinc-500 text-xs mt-3 uppercase tracking-widest">
          Kusursuz Sosyal Tampon Algoritması
        </p>
      </div>

      {/* Kontrol Paneli Kartı */}
      <div className="w-full max-w-xl bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
        
        {/* Kategori Seçim Alanı */}
        <div className="mb-6">
          <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-3">
            1. Kategoriyi Belirleyin
          </label>
          <div className="grid grid-cols-2 gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all duration-200 cursor-pointer text-center ${
                    isActive
                      ? `${cat.color} shadow-lg shadow-black/50 scale-[1.02]`
                      : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}

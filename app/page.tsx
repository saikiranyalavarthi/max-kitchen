"use client";

import { useEffect, useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import { menuCategories } from "@/data/menu";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const filteredCategories = menuCategories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  // Splash Screen
  if (showSplash) {
    return (
      <main className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-[#651719]">
        <div className="flex animate-[fadeIn_0.8s_ease-out] flex-col items-center px-6 text-center">
          {/* Logo */}
          <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-[#d6ad63] bg-white shadow-2xl">
            <div className="text-center">
              <p className="text-2xl font-black leading-none tracking-tight text-[#651719]">
                MAX
              </p>

              <p className="mt-1 text-sm font-black tracking-[0.15em] text-[#651719]">
                KITCHEN
              </p>
            </div>
          </div>

          {/* Restaurant Name */}
          <h1 className="mt-7 text-3xl font-extrabold tracking-[0.12em] text-white">
            MAX KITCHEN
          </h1>

          <p className="mt-2 text-sm tracking-[0.2em] text-[#e8c987]">
            MULTI-CUISINE RESTAURANT
          </p>

          {/* Loading line */}
          <div className="mt-8 h-1 w-20 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-full origin-left animate-[loading_1.5s_ease-in-out] bg-[#d6ad63]" />
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.94);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes loading {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
        `}</style>
      </main>
    );
  }

  // Digital Menu
  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#24150f]">
      {/* Header */}
      <header className="bg-[#651719] px-5 pb-8 pt-8 text-center text-white">
        <div className="mx-auto max-w-md">
          <div className="mb-3 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#d6ad63] bg-white shadow-lg">
              <div className="text-center">
                <p className="text-lg font-black leading-none text-[#651719]">
                  MAX
                </p>

                <p className="mt-1 text-[9px] font-black tracking-[0.12em] text-[#651719]">
                  KITCHEN
                </p>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold tracking-wide">
            MAX KITCHEN
          </h1>

          <p className="mt-1 text-sm text-[#e8c987]">
            Multi-Cuisine Restaurant
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-md px-4 py-5">
        {/* Search */}
        <div className="relative mb-6">
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none shadow-sm transition focus:border-[#a77a32]"
          />
        </div>

        {/* Heading */}
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a77a32]">
            Explore
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            Menu Categories
          </h2>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          {filteredCategories.map((category) => (
            <Link
              key={category.id}
              href={`/menu/${category.id}`}
              className="group flex w-full items-center justify-between rounded-2xl border border-[#eadfd2] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99]"
            >
              <div>
                <h3 className="font-semibold text-[#24150f]">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {category.items.length} menu items
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#651719] text-white transition group-hover:bg-[#8a2427]">
                <ChevronRight size={18} />
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="rounded-2xl bg-white px-5 py-10 text-center shadow-sm">
            <p className="font-semibold">No category found</p>

            <p className="mt-1 text-sm text-gray-500">
              Try searching another category.
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-8 border-t border-[#eadfd2] px-5 py-6 text-center">
        <p className="text-sm font-semibold text-[#651719]">
          MAX KITCHEN
        </p>

        <p className="mt-1 text-xs text-gray-500">
          Digital Menu • Prices in SAR
        </p>
      </footer>
    </main>
  );
}
"use client";

import { useEffect, useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import Link from "next/link";

import Header from "./components/Header";
import RestaurantInfo from "./components/RestaurantInfo";

import { menuCategories } from "@/data/menu";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const isArabic = language === "ar";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const filteredCategories = menuCategories.filter(
    (category) => {
      const name =
        language === "ar"
          ? category.nameAr || category.name
          : category.name;

      return name
        .toLowerCase()
        .includes(search.toLowerCase());
    }
  );

  /* ================= SPLASH ================= */

  if (showSplash) {
    return (
      <main className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-[#53061A]">
        <div className="flex flex-col items-center px-6 text-center">
          <div className="flex h-36 w-36 items-center justify-center">
            <img
              src="/images/max-kitchen-logo.jpeg"
              alt="Max Kitchen"
              className="h-32 w-32 object-contain"
            />
          </div>

          <h1 className="mt-7 text-3xl font-extrabold tracking-[0.12em] text-white">
            MAX KITCHEN
          </h1>

          <p className="mt-2 text-sm tracking-[0.2em] text-[#e8c987]">
            MULTI-CUISINE RESTAURANT
          </p>

          <div className="mt-8 h-1 w-20 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-full animate-pulse bg-[#d6ad63]" />
          </div>
        </div>
      </main>
    );
  }

  /* ================= HOME ================= */

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f8f5f0] text-[#24150f]"
    >
      <Header
        language={language}
        setLanguage={setLanguage}
      />

      <section className="mx-auto max-w-md px-4 py-5">
        {/* Search */}
        <div className="relative mb-6">
          <Search
            size={19}
            className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${
              isArabic ? "right-4" : "left-4"
            }`}
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={
              isArabic
                ? "ابحث عن فئة..."
                : "Search categories..."
            }
            className={`w-full rounded-2xl border border-gray-200 bg-white py-3.5 text-sm shadow-sm outline-none focus:border-[#a77a32] ${
              isArabic
                ? "pr-11 pl-4 text-right"
                : "pl-11 pr-4 text-left"
            }`}
          />
        </div>

        {/* Heading */}
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a77a32]">
            {isArabic ? "استكشف" : "Explore"}
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            {isArabic
              ? "فئات القائمة"
              : "Menu Categories"}
          </h2>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          {filteredCategories.map((category) => {
            const name =
              language === "ar"
                ? category.nameAr || category.name
                : category.name;

            return (
              <Link
                key={category.id}
                href={`/menu/${category.id}`}
                className="group flex items-center justify-between rounded-2xl border border-[#eadfd2] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div>
                  <h3 className="font-semibold text-[#24150f]">
                    {name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {category.items.length}{" "}
                    {isArabic
                      ? "عنصر"
                      : "menu items"}
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#53061A] text-white">
                  {isArabic ? (
                    <ChevronRight
                      size={18}
                      className="rotate-180"
                    />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="rounded-2xl bg-white px-5 py-10 text-center shadow-sm">
            <p className="font-semibold">
              {isArabic
                ? "لم يتم العثور على فئة"
                : "No category found"}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              {isArabic
                ? "جرب البحث عن فئة أخرى."
                : "Try another category."}
            </p>
          </div>
        )}
      </section>

      <RestaurantInfo language={language} />
    </main>
  );
}
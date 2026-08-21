"use client";

import { use, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Search, X } from "lucide-react";

import Header from "@/app/components/Header";
import CategoryNav from "@/app/components/CategoryNav";
import MenuSection from "@/app/components/MenuSection";
import RestaurantInfo from "@/app/components/RestaurantInfo";

import { menuCategories } from "@/data/menu";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category: categoryId } = use(params);

  const [language, setLanguage] =
    useState<"en" | "ar">("en");

  const [search, setSearch] = useState("");

  const isArabic = language === "ar";
const category = menuCategories.find(
  (item) => item.id === categoryId
);

/* =========================================
   SEARCH ITEMS
========================================= */

const filteredCategories = useMemo(() => {
  const searchText = search.trim().toLowerCase();

  // Category not found
  if (!category) {
    return [];
  }

  // No search → show selected category only
  if (!searchText) {
    return [category];
  }

  // Search ALL categories and ALL items
  return menuCategories
    .map((cat) => {
      const items = cat.items.filter((item) => {
        const name = (item.name || "").toLowerCase();

        const nameAr = (
          item.nameAr || ""
        ).toLowerCase();

        const description = (
          item.description || ""
        ).toLowerCase();

        const descriptionAr = (
          item.descriptionAr || ""
        ).toLowerCase();

        return (
          name.includes(searchText) ||
          nameAr.includes(searchText) ||
          description.includes(searchText) ||
          descriptionAr.includes(searchText)
        );
      });

      return {
        ...cat,
        items,
      };
    })
    .filter((cat) => cat.items.length > 0);
}, [category, search]);

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f8f5f0]"
    >
      {/* HEADER */}

      <Header
        language={language}
        setLanguage={setLanguage}
      />

      {/* SEARCH */}

      <div className="sticky top-0 z-20 border-b border-[#eadfd2] bg-white px-3 py-2">
        <div className="mx-auto flex max-w-md items-center gap-2">
          <div className="relative flex-1">
            <Search
              size={15}
              className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${
                isArabic
                  ? "right-3"
                  : "left-3"
              }`}
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder={
                isArabic
                  ? "ابحث عن طبق..."
                  : "Search menu..."
              }
              className={`h-9 w-full rounded-md border border-[#ded7cf] bg-white text-[11px] outline-none transition focus:border-[#a77a32] ${
                isArabic
                  ? "pr-9 pl-8 text-right"
                  : "pl-9 pr-8 text-left"
              }`}
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${
                  isArabic
                    ? "left-2"
                    : "right-2"
                }`}
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* CATEGORY NAV */}

   <CategoryNav
  language={language}
  currentCategory={category?.id}
/>

      {/* BACK */}

      <div className="mx-auto max-w-md px-3 pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-[9px] font-semibold text-[#53061A]"
        >
          {isArabic ? (
            <>
              <ArrowRight size={12} />
              العودة
            </>
          ) : (
            <>
              <ArrowLeft size={12} />
              Back
            </>
          )}
        </Link>
      </div>

      {/* MENU */}

   {filteredCategories.length > 0 ? (
  filteredCategories.map((cat) => (
    <MenuSection
      key={cat.id}
      category={cat}
      language={language}
    />
  ))
) : (
  <div className="mx-auto max-w-md px-5 py-12 text-center">
    <p className="text-sm font-semibold text-[#53061A]">
      {isArabic
        ? "لم يتم العثور على أطباق"
        : "No dishes found"}
    </p>

    <p className="mt-1 text-[10px] text-gray-500">
      {isArabic
        ? "حاول البحث عن طبق آخر."
        : "Try searching for another dish."}
    </p>
  </div>
)}

      {/* FOOTER */}

      <RestaurantInfo
        language={language}
      />
    </main>
  );
}
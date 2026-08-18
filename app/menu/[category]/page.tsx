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
     CATEGORY NOT FOUND
  ========================================= */

  if (!category) {
    return (
      <main
        dir={isArabic ? "rtl" : "ltr"}
        className="flex min-h-screen items-center justify-center bg-[#f8f5f0] px-5"
      >
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-lg">
          <h1 className="text-xl font-bold text-[#53061A]">
            {isArabic
              ? "الفئة غير موجودة"
              : "Category Not Found"}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {isArabic
              ? "الفئة المطلوبة غير موجودة."
              : "The requested menu category was not found."}
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#53061A] px-6 py-3 text-sm font-semibold text-white"
          >
            {isArabic ? (
              <>
                <ArrowRight size={16} />
                العودة إلى القائمة
              </>
            ) : (
              <>
                <ArrowLeft size={16} />
                Back to Menu
              </>
            )}
          </Link>
        </div>
      </main>
    );
  }

  /* =========================================
     SEARCH ITEMS
  ========================================= */

  const filteredCategory = useMemo(() => {
    const searchText = search
      .trim()
      .toLowerCase();

    if (!searchText) {
      return category;
    }

    const items = category.items.filter(
      (item) => {
        const name = item.name.toLowerCase();

        const nameAr = (
          item.nameAr || ""
        ).toLowerCase();

        const description = (
          item.description || ""
        ).toLowerCase();

        return (
          name.includes(searchText) ||
          nameAr.includes(searchText) ||
          description.includes(searchText)
        );
      }
    );

    return {
      ...category,
      items,
    };
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
        currentCategory={category.id}
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

      <MenuSection
        category={filteredCategory}
        language={language}
      />

      {/* FOOTER */}

      <RestaurantInfo
        language={language}
      />
    </main>
  );
}
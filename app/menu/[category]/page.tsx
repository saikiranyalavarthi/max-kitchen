"use client";

import { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

          {/* Debug ID */}
          <p className="mt-3 break-all text-xs text-gray-400">
            Category ID: {categoryId}
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
     CATEGORY PAGE
  ========================================= */

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f8f5f0]"
    >
      {/* Header */}
      <Header
        language={language}
        setLanguage={setLanguage}
      />

      {/* Category Navigation */}
      <CategoryNav
        language={language}
        currentCategory={category.id}
      />

      {/* Back Button */}
      <div className="mx-auto max-w-md px-4 pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[#eadfd2] bg-white px-4 py-2 text-xs font-semibold text-[#53061A] shadow-sm"
        >
          {isArabic ? (
            <>
              <ArrowRight size={15} />
              العودة
            </>
          ) : (
            <>
              <ArrowLeft size={15} />
              Back
            </>
          )}
        </Link>
      </div>

      {/* Menu */}
      <MenuSection
        category={category}
        language={language}
      />

      {/* Footer */}
      <RestaurantInfo
        language={language}
      />
    </main>
  );
}
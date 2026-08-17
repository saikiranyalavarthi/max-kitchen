"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { menuCategories } from "@/data/menu";

interface CategoryNavProps {
  language: "en" | "ar";
  currentCategory?: string;
}

export default function CategoryNav({
  language,
  currentCategory,
}: CategoryNavProps) {
  const isArabic = language === "ar";

  return (
    <nav className="sticky top-0 z-30 border-b border-[#EADFD2] bg-white shadow-sm">
      <div className="relative mx-auto max-w-md">
        {/* Left Scroll Indicator */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 flex h-full items-center bg-gradient-to-r from-white via-white to-transparent pr-5">
          <ChevronLeft
            size={18}
            className="text-[#53061A]"
          />
        </div>

        {/* Categories */}
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="scrollbar-hide flex gap-2 overflow-x-auto px-8 py-3"
        >
          {menuCategories.map((category) => {
            const categoryName =
              language === "ar"
                ? category.nameAr || category.name
                : category.name;

            const isActive =
              currentCategory === category.id;

            return (
              <Link
                key={category.id}
                href={`/menu/${category.id}`}
                className={`
                  shrink-0 whitespace-nowrap
                  rounded-full
                  border
                  px-4 py-2.5
                  text-xs font-semibold
                  transition-all duration-200
                  ${
                    isActive
                      ? "border-[#53061A] bg-[#53061A] text-white shadow-md"
                      : "border-[#EADFD2] bg-[#F8F5F0] text-[#53061A] hover:border-[#D6AD63] hover:bg-[#FFF9ED]"
                  }
                `}
              >
                {categoryName}
              </Link>
            );
          })}
        </div>

        {/* Right Scroll Indicator */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 flex h-full items-center bg-gradient-to-l from-white via-white to-transparent pl-5">
          <ChevronRight
            size={18}
            className="text-[#53061A]"
          />
        </div>
      </div>
    </nav>
  );
}
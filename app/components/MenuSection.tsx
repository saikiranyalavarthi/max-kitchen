"use client";

import MenuItem from "./MenuItem";
import type { MenuCategory } from "@/data/menu";

interface MenuSectionProps {
  category: MenuCategory;
  language: "en" | "ar";
}

export default function MenuSection({
  category,
  language,
}: MenuSectionProps) {
  const isArabic = language === "ar";

  const categoryName = isArabic
    ? category.nameAr || category.name
    : category.name;

  return (
    <section className="mx-auto max-w-md px-4 py-5">
      {/* Section Header */}
      <div
        className={`mb-5 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a77a32]">
          {isArabic ? "قائمة الطعام" : "Menu"}
        </p>

        <h2 className="mt-1 text-2xl font-bold text-[#24150f]">
          {categoryName}
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          {category.items.length}{" "}
          {isArabic ? "عنصر" : "menu items"}
        </p>
      </div>

      {/* Items */}
      {category.items.length === 0 ? (
        <div className="rounded-3xl bg-white px-5 py-12 text-center shadow-sm">
          <p className="font-semibold text-[#651719]">
            {isArabic
              ? "العناصر غير متوفرة حالياً"
              : "Items Coming Soon"}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            {isArabic
              ? "سيتم تحديث هذه الفئة قريباً."
              : "This category will be updated soon."}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {category.items.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              language={language}
            />
          ))}
        </div>
      )}
    </section>
  );
}
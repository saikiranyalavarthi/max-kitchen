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

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="mx-auto w-full max-w-md bg-white"
    >
      {/* Category title */}
      <div className="border-b border-[#eadfd2] px-3 py-3">
        <h2 className="text-sm font-bold text-[#24150f]">
          {isArabic
            ? category.nameAr || category.name
            : category.name}
        </h2>

        <p className="mt-0.5 text-[9px] text-gray-400">
          {category.items.length}{" "}
          {isArabic ? "عنصر" : "menu items"}
        </p>
      </div>

      {/* Items */}
      {category.items.length === 0 ? (
        <div className="px-5 py-12 text-center">
          <p className="font-semibold text-[#651719]">
            {isArabic
              ? "العناصر غير متوفرة حالياً"
              : "Items Coming Soon"}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            {isArabic
              ? "سيتم تحديث هذه الفئة قريباً."
              : "This category will be updated soon."}
          </p>
        </div>
      ) : (
        <div>
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
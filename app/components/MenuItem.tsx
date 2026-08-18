"use client";

import Link from "next/link";
import { Flame, ChevronRight } from "lucide-react";
import type { MenuItem as MenuItemType } from "@/data/menu";

interface MenuItemProps {
  item: MenuItemType;
  language: "en" | "ar";
}

export default function MenuItem({
  item,
  language,
}: MenuItemProps) {
  const isArabic = language === "ar";

  const name = isArabic
    ? item.nameAr || item.name
    : item.name;

  const secondaryName = isArabic
    ? item.name
    : item.nameAr;

  const description = isArabic
    ? item.descriptionAr || item.description
    : item.description;

  const image =
    item.image || "/images/menu/idli.jpg";

  return (
    <Link
      href={`/menu/item/${item.id}`}
      dir={isArabic ? "rtl" : "ltr"}
      className="
        group
        flex
        min-h-[78px]
        w-full
        items-center
        gap-3
        border-b
        border-[#eadfd2]
        bg-white
        px-2
        py-3
        transition
        active:bg-[#faf7f2]
      "
    >
      {/* TEXT */}
      <div className="min-w-0 flex-1">
        <div
          className={
            isArabic
              ? "text-right"
              : "text-left"
          }
        >
          {/* Name */}
          <h3 className="text-[11px] font-bold leading-4 text-[#24150f]">
            {name}

            {item.calories && (
              <span className="ml-1 font-normal text-gray-400">
                (Cal {item.calories})
              </span>
            )}
          </h3>

          {/* Secondary language */}
          {secondaryName && (
            <p className="mt-1 text-[9px] leading-3 text-gray-400">
              {secondaryName}
            </p>
          )}

          {/* Description */}
          {description && (
            <p className="mt-1 text-[9px] leading-3 text-gray-500">
              {description}
            </p>
          )}

          {/* Price */}
          {item.price && (
            <p className="mt-2 text-[10px] font-bold text-[#53061A]">
              SAR {item.price}
            </p>
          )}

          {/* Variants */}
          {item.variants &&
            item.variants.length > 0 && (
              <p className="mt-1 text-[8px] text-[#a77a32]">
                {isArabic
                  ? "خيارات متعددة"
                  : "Multiple options"}
              </p>
            )}
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative h-[58px] w-[64px] shrink-0 overflow-hidden rounded-md bg-[#eee6dc]">
        <img
          src={image}
          alt={name}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* ARROW */}
      <ChevronRight
        size={14}
        className={`shrink-0 text-gray-300 ${
          isArabic ? "rotate-180" : ""
        }`}
      />
    </Link>
  );
}
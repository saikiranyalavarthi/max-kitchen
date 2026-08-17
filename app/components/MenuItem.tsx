"use client";

import { Flame } from "lucide-react";
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

  return (
    <article className="overflow-hidden rounded-3xl border border-[#eadfd2] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {/* Food Image */}
      {item.image ? (
        <div className="relative h-52 overflow-hidden bg-[#eee6dc]">
          <img
            src={item.image}
            alt={name}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex h-36 items-center justify-center bg-[#53061A]">
          <div className="text-center">
            <p className="text-3xl font-black text-[#d6ad63]">
              MAX
            </p>

            <p className="mt-1 text-[10px] font-bold tracking-[0.3em] text-white">
              KITCHEN
            </p>

            <p className="mt-2 text-[10px] text-[#e8c987]">
              Food Image Coming Soon
            </p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3
              className={`text-base font-bold leading-snug text-[#24150f] ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {name}
            </h3>

            {secondaryName && (
              <p
                className={`mt-1 text-xs text-gray-400 ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                {secondaryName}
              </p>
            )}
          </div>

          {item.price && (
            <div className="shrink-0 rounded-full bg-[#53061A] px-3 py-1.5">
              <span className="text-sm font-bold text-[#e8c987]">
                SAR {item.price}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        {description && (
          <p
            className={`mt-3 text-sm leading-6 text-gray-500 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {description}
          </p>
        )}

        {/* Calories */}
        {item.calories && (
          <div
            className={`mt-3 flex items-center gap-1.5 text-xs text-gray-400 ${
              isArabic ? "justify-end" : "justify-start"
            }`}
          >
            <Flame size={14} />

            <span>
              {item.calories}{" "}
              {isArabic ? "سعرة حرارية" : "KCAL"}
            </span>
          </div>
        )}

        {/* Variants */}
        {item.variants && item.variants.length > 0 && (
          <div className="mt-4 border-t border-[#eee5db] pt-4">
            <p
              className={`mb-2 text-xs font-bold uppercase tracking-wider text-[#a77a32] ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              {isArabic ? "الخيارات" : "Available Options"}
            </p>

            <div className="space-y-2">
              {item.variants.map((variant) => {
                const variantName = isArabic
                  ? variant.nameAr || variant.name
                  : variant.name;

                return (
                  <div
                    key={variant.name}
                    className="flex items-center justify-between rounded-xl bg-[#f8f5f0] px-3 py-2.5"
                  >
                    <div
                      className={
                        isArabic
                          ? "text-right"
                          : "text-left"
                      }
                    >
                      <p className="text-sm font-semibold text-[#24150f]">
                        {variantName}
                      </p>

                      {variant.nameAr && (
                        <p className="text-[10px] text-gray-400">
                          {isArabic
                            ? variant.name
                            : variant.nameAr}
                        </p>
                      )}
                    </div>

                    <span className="text-sm font-bold text-[#651719]">
                      SAR {variant.price}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
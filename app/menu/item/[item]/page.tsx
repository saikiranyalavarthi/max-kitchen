"use client";

import { use, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Share2,
  Flame,
} from "lucide-react";

import Header from "@/app/components/Header";
import RestaurantInfo from "@/app/components/RestaurantInfo";

import { menuCategories } from "@/data/menu";

interface ItemPageProps {
  params: Promise<{
    item: string;
  }>;
}

export default function ItemPage({
  params,
}: ItemPageProps) {
  const { item: itemId } = use(params);

  const [language, setLanguage] =
    useState<"en" | "ar">("en");

  const isArabic = language === "ar";

  /*
   * Find item from all categories
   */
  let selectedItem = null;

  let selectedCategory = null;

  for (const category of menuCategories) {
    const found = category.items.find(
      (item) => item.id === itemId
    );

    if (found) {
      selectedItem = found;
      selectedCategory = category;
      break;
    }
  }

  /*
   * Item not found
   */
  if (!selectedItem) {
    return (
      <main
        dir={isArabic ? "rtl" : "ltr"}
        className="flex min-h-screen items-center justify-center bg-[#f8f5f0] px-5"
      >
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-lg">
          <h1 className="text-xl font-bold text-[#53061A]">
            {isArabic
              ? "العنصر غير موجود"
              : "Item Not Found"}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {isArabic
              ? "العنصر المطلوب غير موجود."
              : "The requested menu item was not found."}
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

  const name = isArabic
    ? selectedItem.nameAr || selectedItem.name
    : selectedItem.name;

  const secondaryName = isArabic
    ? selectedItem.name
    : selectedItem.nameAr;

  const description = isArabic
    ? selectedItem.descriptionAr ||
      selectedItem.description
    : selectedItem.description;

  const image =
    selectedItem.image ||
    "/images/menu/idli.jpg";

  /*
   * Share item
   */
  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: selectedItem.name,
          text: `${selectedItem.name} - SAR ${
            selectedItem.price || ""
          }`,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);

        alert(
          isArabic
            ? "تم نسخ الرابط"
            : "Link copied"
        );
      }
    } catch {
      // User cancelled sharing
    }
  };

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

      {/* Item Detail */}

      <section className="mx-auto max-w-md bg-white">
        {/* Top Actions */}

        <div className="flex items-center justify-between px-4 py-3">
          <Link
            href={`/menu/${
              selectedCategory?.id || ""
            }`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#eadfd2] bg-white text-[#53061A] shadow-sm"
          >
            {isArabic ? (
              <ArrowRight size={17} />
            ) : (
              <ArrowLeft size={17} />
            )}
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#eadfd2] bg-white text-[#53061A] shadow-sm"
            aria-label="Share"
          >
            <Share2 size={16} />
          </button>
        </div>

        {/* Food Image */}

        <div className="relative mx-3 h-[300px] overflow-hidden rounded-2xl bg-[#eee6dc]">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}

        <div className="px-5 pb-8 pt-5">
          {/* Category */}

          {selectedCategory && (
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a77a32]">
              {isArabic
                ? selectedCategory.nameAr ||
                  selectedCategory.name
                : selectedCategory.name}
            </p>
          )}

          {/* Name */}

          <h1 className="mt-2 text-xl font-bold text-[#24150f]">
            {name}

            {selectedItem.calories && (
              <span className="ml-2 text-xs font-normal text-gray-400">
                (Cal {selectedItem.calories})
              </span>
            )}
          </h1>

          {/* Secondary name */}

          {secondaryName && (
            <p className="mt-2 text-sm text-gray-400">
              {secondaryName}
            </p>
          )}

          {/* Description */}

          {description && (
            <p className="mt-4 text-sm leading-6 text-gray-500">
              {description}
            </p>
          )}

          {/* Price */}

          {selectedItem.price && (
            <div className="mt-5">
              <p className="text-xs text-gray-400">
                {isArabic ? "السعر" : "Price"}
              </p>

              <p className="mt-1 text-lg font-bold text-[#53061A]">
                SAR {selectedItem.price}
              </p>
            </div>
          )}

          {/* Calories */}

          {selectedItem.calories && (
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
              <Flame size={14} />

              <span>
                {selectedItem.calories}{" "}
                {isArabic
                  ? "سعرة حرارية"
                  : "KCAL"}
              </span>
            </div>
          )}

          {/* Variants */}

          {selectedItem.variants &&
            selectedItem.variants.length > 0 && (
              <div className="mt-6 border-t border-[#eee5db] pt-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#a77a32]">
                  {isArabic
                    ? "الخيارات"
                    : "Available Options"}
                </h2>

                <div className="mt-3 space-y-2">
                  {selectedItem.variants.map(
                    (variant) => {
                      const variantName =
                        isArabic
                          ? variant.nameAr ||
                            variant.name
                          : variant.name;

                      return (
                        <div
                          key={variant.name}
                          className="flex items-center justify-between rounded-xl bg-[#f8f5f0] px-4 py-3"
                        >
                          <div>
                            <p className="text-sm font-semibold text-[#24150f]">
                              {variantName}
                            </p>

                            {variant.nameAr && (
                              <p className="mt-0.5 text-[10px] text-gray-400">
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
                    }
                  )}
                </div>
              </div>
            )}

          {/* Back To Menu */}

          <Link
            href={`/menu/${
              selectedCategory?.id || ""
            }`}
            className="mt-7 flex w-full items-center justify-center rounded-full bg-[#53061A] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#651719]"
          >
            {isArabic
              ? "العودة إلى القائمة"
              : "BACK TO MENU"}
          </Link>
        </div>
      </section>

      <RestaurantInfo
        language={language}
      />
    </main>
  );
}
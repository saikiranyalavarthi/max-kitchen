"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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

  const categoryRefs =
    useRef<Record<string, HTMLAnchorElement | null>>(
      {}
    );

  /*
   * Automatically move active category
   * into the visible area.
   */
  useEffect(() => {
    if (!currentCategory) return;

    const activeElement =
      categoryRefs.current[currentCategory];

    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentCategory]);

  return (
    <nav className="sticky top-[58px] z-30 border-b border-[#eadfd2] bg-white">
      <div className="relative mx-auto max-w-md">

        {/* LEFT ARROW */}

        <div className="pointer-events-none absolute left-0 top-0 z-10 flex h-full w-8 items-center justify-start bg-gradient-to-r from-white via-white/90 to-transparent">
          <ChevronLeft
            size={16}
            className="ml-1 text-[#53061A]"
          />
        </div>

        {/* CATEGORY SCROLL */}

        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="
            scrollbar-hide
            flex
            gap-4
            overflow-x-auto
            px-8
            py-2.5
          "
        >
          {menuCategories.map((category) => {
            const categoryName =
              language === "ar"
                ? category.nameAr ||
                  category.name
                : category.name;

            const isActive =
              currentCategory === category.id;

            /*
             * Find first available image
             * inside category.
             */
           const categoryImage =
  category.image ||
  category.items.find(
    (item) => item.image
  )?.image ||
  "/images/menu/idli.jpg";

            return (
              <Link
                key={category.id}
                href={`/menu/${category.id}`}
                ref={(element) => {
                  categoryRefs.current[
                    category.id
                  ] = element;
                }}
                className="group flex w-[65px] shrink-0 flex-col items-center"
              >
                {/* IMAGE */}

                <div
                  className={`
                    relative
                    h-11
                    w-11
                    overflow-hidden
                    rounded-full
                    border-2
                    bg-[#f8f5f0]
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "border-[#53061A] ring-2 ring-[#53061A]/10"
                        : "border-[#eadfd2]"
                    }
                  `}
                >
                  <img
                    src={categoryImage}
                    alt={categoryName}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* NAME */}

              {/* NAME */}

<span
  className={`
    mt-1
    w-[65px]
    min-h-[24px]
    whitespace-normal
    break-words
    text-center
    text-[8px]
    font-semibold
    leading-[10px]
    ${isActive
      ? "text-[#53061A]"
      : "text-[#4a403b]"
    }
  `}
>
  {categoryName}
</span>
                {/* ACTIVE LINE */}

                <span
                  className={`
                    mt-1
                    h-[2px]
                    rounded-full
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "w-5 bg-[#53061A]"
                        : "w-0 bg-transparent"
                    }
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* RIGHT ARROW */}

        <div className="pointer-events-none absolute right-0 top-0 z-10 flex h-full w-8 items-center justify-end bg-gradient-to-l from-white via-white/90 to-transparent">
          <ChevronRight
            size={16}
            className="mr-1 text-[#53061A]"
          />
        </div>

      </div>
    </nav>
  );
}
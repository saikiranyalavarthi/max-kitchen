"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "./components/Header";
import CategoryNav from "./components/CategoryNav";
import MenuSection from "./components/MenuSection";
import RestaurantInfo from "./components/RestaurantInfo";

import { menuCategories } from "@/data/menu";

export default function Home() {
  const router = useRouter();

  const [showSplash, setShowSplash] = useState(true);
  const [language, setLanguage] =
    useState<"en" | "ar">("en");

  /*
   * First category shown after splash
   */
  const firstCategory = menuCategories[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);

      /*
       * Open first menu category
       */
      if (firstCategory) {
        router.replace(
          `/menu/${firstCategory.id}`
        );
      }
    }, 1800);

    return () => clearTimeout(timer);
  }, [router, firstCategory]);

  const isArabic = language === "ar";

  /*
   * SPLASH SCREEN
   */

  if (showSplash) {
    return (
      <main className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-[#53061A]">
        <div className="flex flex-col items-center px-6 text-center">
          {/* Logo */}

          <div className="flex h-36 w-36 items-center justify-center">
            <img
              src="/images/max-kitchen-logo.jpeg"
              alt="Max Kitchen"
              className="h-32 w-32 object-contain"
            />
          </div>

          {/* Restaurant */}

          <h1 className="mt-7 text-3xl font-extrabold tracking-[0.12em] text-white">
            MAX KITCHEN
          </h1>

          <p className="mt-2 text-sm tracking-[0.2em] text-[#e8c987]">
            MULTI-CUISINE RESTAURANT
          </p>

          {/* Loading */}

          <div className="mt-8 h-1 w-20 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-full animate-pulse bg-[#d6ad63]" />
          </div>
        </div>
      </main>
    );
  }

  /*
   * Temporary fallback while redirecting
   */

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f8f5f0]"
    >
      <Header
        language={language}
        setLanguage={setLanguage}
      />

      <CategoryNav />

      {firstCategory && (
        <MenuSection
          category={firstCategory}
          language={language}
        />
      )}

      <RestaurantInfo
        language={language}
      />
    </main>
  );
}
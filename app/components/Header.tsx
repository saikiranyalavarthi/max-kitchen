"use client";

import { Languages } from "lucide-react";

type Language = "en" | "ar";

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export default function Header({
  language,
  setLanguage,
}: HeaderProps) {
  const isArabic = language === "ar";

  return (
    <header className="bg-[#53061A] px-4 pb-6 pt-5 text-white shadow-lg">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center    shadow-lg">
            <img
              src="/images/max-kitchen-logo.jpeg"
              alt="Max Kitchen"
              className="h-12 w-16 object-contain"
            />
          </div>

          {/* Language */}
          <div className="flex items-center gap-1 rounded-full border border-[#d6ad63]/50 bg-white/10 p-1">
            <Languages
              size={16}
              className="mx-1 text-[#e8c987]"
            />

            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                language === "en"
                  ? "bg-[#d6ad63] text-[#651719]"
                  : "text-white"
              }`}
            >
              English
            </button>

            <button
              type="button"
              onClick={() => setLanguage("ar")}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                language === "ar"
                  ? "bg-[#d6ad63] text-[#651719]"
                  : "text-white"
              }`}
            >
              العربية
            </button>
          </div>
        </div>

        {/* Restaurant Name */}
        <div className="mt-5 text-center">
          <h1 className="text-3xl font-extrabold tracking-wide">
            MAX KITCHEN
          </h1>

          <p className="mt-1 text-sm text-[#e8c987]">
            {isArabic
              ? "مطعم متعدد المأكولات"
              : "Multi-Cuisine Restaurant"}
          </p>
        </div>
      </div>
    </header>
  );
}
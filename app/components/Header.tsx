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
    <header className="bg-[#53061A] text-white shadow-md">
      <div className="mx-auto max-w-md px-3 py-3">
        {/* Top Row */}
        <div className="flex items-center justify-between gap-3">
          {/* Logo + Restaurant */}
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
              <img
                src="/images/max-kitchen-logo.jpeg"
                alt="Max Kitchen"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0">
              <h1 className="truncate text-sm font-extrabold tracking-wide">
                MAX KITCHEN
              </h1>

              <p className="mt-0.5 text-[9px] text-[#e8c987]">
                {isArabic
                  ? "مطعم متعدد المأكولات"
                  : "Multi-Cuisine Restaurant"}
              </p>
            </div>
          </div>

          {/* Language */}
          <div className="flex shrink-0 items-center rounded-full border border-[#d6ad63]/40 bg-white/10 p-0.5">
            <Languages
              size={13}
              className="mx-1 text-[#e8c987]"
            />

            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2.5 py-1 text-[9px] font-semibold transition ${
                language === "en"
                  ? "bg-[#d6ad63] text-[#651719]"
                  : "text-white"
              }`}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => setLanguage("ar")}
              className={`rounded-full px-2.5 py-1 text-[9px] font-semibold transition ${
                language === "ar"
                  ? "bg-[#d6ad63] text-[#651719]"
                  : "text-white"
              }`}
            >
              AR
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
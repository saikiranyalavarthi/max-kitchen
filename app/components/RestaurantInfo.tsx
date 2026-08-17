"use client";

interface RestaurantInfoProps {
  language: "en" | "ar";
}

export default function RestaurantInfo({
  language,
}: RestaurantInfoProps) {
  const isArabic = language === "ar";

  return (
   <footer className="border-t border-[#EADFD2] bg-[#F8F5F0] px-5 py-8 text-center">
  {/* Logo */}
  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#D6AD63] bg-white shadow-sm">
    <img
      src="/images/max-kitchen-logo.jpeg"
      alt="Max Kitchen"
      className="h-14 w-14 rounded-full object-cover"
    />
  </div>

  {/* Restaurant Name */}
  <h3 className="mt-3 text-base font-bold tracking-wide text-[#53061A]">
    MAX KITCHEN
  </h3>

  {/* Restaurant Type */}
  <p className="mt-1 text-xs text-gray-500">
    {isArabic
      ? "مطعم متعدد المأكولات"
      : "Multi-Cuisine Restaurant"}
  </p>

  {/* Digital Menu */}
  <p className="mt-2 text-[11px] text-gray-400">
    {isArabic
      ? "القائمة الرقمية • الأسعار بالريال السعودي"
      : "Digital Menu • Prices in SAR"}
  </p>

  {/* Gold Divider */}
  <div className="mx-auto mt-4 h-px w-12 bg-[#D6AD63]" />

  {/* Copyright */}
  <p className="mt-3 text-[10px] text-[#53061A]/60">
    © {new Date().getFullYear()} MAX KITCHEN
  </p>
</footer>
  );
}